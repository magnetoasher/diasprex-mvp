const CLIENT_ID = "0oa1e0epvs5NzUwJa5d7";
const ISSUER = "https://dev-33696703.okta.com/oauth2/default";
export const API_BASE_URL = "https://1maqqq048f.execute-api.us-east-1.amazonaws.com/stg/";
export const TALK_JS_APP_ID = "tdWxw7B1";

export const createTalkJSUser = (userId, name) => {
  // IDEALY get a random element from arrays based on the userId. Element would be consistent no matter how many times it's pulled
  // const shapes = ["squares", "isogrids", "spaceinvaders", "labs/isogrids/hexa", "labs/isogrids/hexa16"];
  // const themes = [
  //   "frogideas",
  //   "sugarsweets",
  //   "heatwave",
  //   "daisygarden",
  //   "seascape",
  //   "summerwarmth",
  //   "bythepool",
  //   "duskfalling",
  //   "berrypie",
  //   "base",
  // ];
  // const randomShape = sample(shapes);
  // const randomTheme = sample(themes);
  return {
    id: userId,
    name,
    photoUrl: `https://www.tinygraphs.com/spaceinvaders/${userId}?theme=seascape&numcolors=4&size=220&fmt=png`,
    role: "Member",
  };
};

export default {
  clientId: CLIENT_ID,
  issuer: ISSUER,
  redirectUri: "http://localhost:3011/authorization-code/callback",
  scopes: ["openid", "profile", "email", "groups"],
  pkce: true,
  disableHttpsCheck: false,
};
