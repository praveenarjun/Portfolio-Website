fs = require("fs");
const https = require("https");
process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

// Create default profile.json if GitHub data is not enabled or username is missing
if (USE_GITHUB_DATA !== "true" || GITHUB_USERNAME === undefined) {
  if (USE_GITHUB_DATA === "true" && GITHUB_USERNAME === undefined) {
    console.warn(ERR.noUserName);
    console.warn("Continuing without GitHub data. Using default profile.json");
  }
  const defaultProfileData = JSON.stringify({
    data: {
      user: {
        name: "",
        bio: "",
        avatarUrl: "",
        location: "",
        pinnedItems: {
          totalCount: 0,
          edges: []
        }
      }
    }
  });
  fs.writeFileSync("./public/profile.json", defaultProfileData);
  console.log("created default profile.json file");
}

if (USE_GITHUB_DATA === "true" && GITHUB_USERNAME !== undefined) {

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  var data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });
  const default_options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(default_options, res => {
    let data = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.error(ERR.requestFailed);
      console.warn("Continuing without GitHub data. Using default profile.json");
      const defaultProfileData = JSON.stringify({
        data: {
          user: {
            name: "",
            bio: "",
            avatarUrl: "",
            location: "",
            pinnedItems: {
              totalCount: 0,
              edges: []
            }
          }
        }
      });
      fs.writeFileSync("./public/profile.json", defaultProfileData);
      return;
    }

    res.on("data", d => {
      data += d;
    });
    res.on("end", () => {
      try {
        const parsedData = JSON.parse(data);
        fs.writeFile("./public/profile.json", JSON.stringify(parsedData), function (err) {
          if (err) {
            console.error("Error writing profile.json:", err);
            return;
          }
          console.log("saved file to public/profile.json");
        });
      } catch (parseError) {
        console.error("Error parsing GitHub response:", parseError);
        console.warn("Continuing without GitHub data. Using default profile.json");
      }
    });
  });

  req.on("error", error => {
    console.error("GitHub request error:", error.message);
    console.warn("Continuing without GitHub data. Using default profile.json");
    const defaultProfileData = JSON.stringify({
      data: {
        user: {
          name: "",
          bio: "",
          avatarUrl: "",
          location: "",
          pinnedItems: {
            totalCount: 0,
            edges: []
          }
        }
      }
    });
    fs.writeFileSync("./public/profile.json", defaultProfileData);
  });

  req.write(data);
  req.end();
}

if (MEDIUM_USERNAME !== undefined && MEDIUM_USERNAME !== "") {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.error(ERR.requestFailedMedium);
      console.warn("Continuing without Medium data. Using empty blogs.json");
      const emptyBlogsData = JSON.stringify({"status":"ok","feed":{"url":"","title":"","link":"","author":"","description":"","image":""},"items":[]});
      fs.writeFileSync("./public/blogs.json", emptyBlogsData);
      return;
    }

    res.on("data", d => {
      mediumData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, function (err) {
        if (err) {
          console.error("Error writing blogs.json:", err);
          return;
        }
        console.log("saved file to public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    console.error("Medium request error:", error.message);
    console.warn("Continuing without Medium data. Using empty blogs.json");
    const emptyBlogsData = JSON.stringify({"status":"ok","feed":{"url":"","title":"","link":"","author":"","description":"","image":""},"items":[]});
    fs.writeFileSync("./public/blogs.json", emptyBlogsData);
  });

  req.end();
} else {
  // Create empty blogs.json when no Medium username is provided
  const emptyBlogsData = JSON.stringify({"status":"ok","feed":{"url":"","title":"","link":"","author":"","description":"","image":""},"items":[]});
  fs.writeFile("./public/blogs.json", emptyBlogsData, function (err) {
    if (err) return console.log(err);
    console.log("created empty blogs.json file");
  });
}
