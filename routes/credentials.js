//SEE THIS https://github.com/octokit/octokit.js#oauth-for-browser-apps AND A POINT BEFORE:

//THIS (CREATE SERVER): 

/*
import express from "express";
import { App, createNodeMiddleware } from "octokit";

const expressApp = express();
const octokitApp = new OAuthApp({
  appId,
  privateKey,
  webhooks: { secret },
  oauth: { clientId, clientSecret },
});

expressApp.use(createNodeMiddleware(app));

expressApp.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
*/
//AFTER THIS ,SEE THAT LINK