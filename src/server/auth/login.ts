import * as jwt from "jsonwebtoken";
import { Router } from "express";
import db from "../db";
import config from "../config";
import { compareHash } from "./passwordHandler";

const router = Router();

router.post("/", async (req, res) => {
  let email: string = req.body.email;
  let password: string = req.body.password;
  try {
    let [credsFound] = await db.Blog.findCredentials(email);
    if (credsFound) {
      let passwordCompare = compareHash(password, credsFound.password);
      if (passwordCompare) {
        let token = jwt.sign(
          {
            userid: credsFound.userid,
            email: credsFound.email,
          },
          config.jwt.secret,
          { expiresIn: config.jwt.expires }
        );
        return res.json(token);
      } else {
        return res.json({ message: "sumthin aint right bruh" });
      }
    }else{res.json({ message: "email not in the system" })}
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "nahhhh" });
  }
});

export default router;
