const express = require("express");
const octokit = require("@octokit/rest")();
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const PORT = 3000 || process.env.PORT;
const topContirbutorsRoutes = require("./routes/topcontributors");
const weights = require("weights");
// Top contributors
// Trending in 99xt
// Trending in 99xt-incubator

bodyParser.json();

// app.use(router);

app.get("/v1/topcontributors", async (req, res) => {
  const repoData = await octokit.repos.getForOrg({
    org: "99xt-incubator",
    type: "public"
  });

  repoData.data.forEach(async repo => {
    const repoName = repo.name;

    const result = await octokit.repos.getContributors({
      owner: "99xt-incubator",
      repo: repoName
    });
    console.log(result);
  });
});

// topContirbutorsRoutes(router);

app.get("/v1/trending/99xt", async (req, res) => {
  const orgRepos = await octokit.repos.getForOrg({
    org: "99xt",
    type: "public"
  });

  console.log(repoData);
  res.send("Done");
});

app.get("/v1/trending/99xt-incubator", async (req, res) => {
  const incubatorRepoData = await octokit.repos.getForOrg({
    org: "99xt-incubator",
    type: "public"
  });

  console.log(repoData);
  res.send("Done");
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
