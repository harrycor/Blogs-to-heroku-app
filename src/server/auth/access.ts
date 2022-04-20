import { json, Router } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config";

let router = Router();

router.get("/", (req, res) => {
  //get ahold of token if any
  try {
    let bearerToken = req.headers.authorization?.split(" ");
    let token =
      bearerToken && bearerToken[0] === "Bearer" ? bearerToken[1] : null;
    if (!bearerToken || !token) {
      res.status(401).json({ message: "no token no go" });
      return;
    } else {
      // validate token
      let payload = jwt.verify(token, config.jwt.secret);
      res.json(payload);
    }
  } catch (error) {
    //   console.log(error)
    res.json({ message: "no way dude token stuffs looks fake" });
  }
});

export default router;
