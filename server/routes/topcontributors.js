//loading express module
const express= require('express');
//initializing express Router to handdle the routes
const router= express.Router();
const octokit = require("@octokit/rest")();
const config = require('../config/default');

//authenticating to use github api without a limit
octokit.authenticate({
    type: 'basic',
    username: config.username,
    password: config.password
});
  
/**
 * 
 * /topcontributors route
 * 
 */
router.get("/", async (req, res) => {
  // res.json({ state:true,message:"Getting top contributors successful"});
  const repoData = await octokit.repos.getForOrg({
    org: "99xt-incubator",
    type: "public"
  });
  let fetchedContributors = [""];
  repoData.data.forEach(async repo => {
    const repoName = repo.name;
    const result = await octokit.repos.getContributors({
      owner: "99xt-incubator",
      repo: repoName
    });
    result.data.map(contributor => {
        if(fetchedContributors.length != 0)
        {
            fetchedContributors.map(ftCon => {
              if(ftCon != contributor.login) {
                  fetchedContributors.push(contributor.login);
              }
            });
        }
    });
  });

  res.json({ state:true,message:"Getting top contributors successful" , fetchedContributors:fetchedContributors});
});
  


module.exports=router;