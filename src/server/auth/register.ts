import { Router } from "express";
import db from "../db";
import { generateHash } from "./passwordHandler";

const router = Router();

router.post("/", async (req, res) => {
  let userid = req.body.userid;
  let email = req.body.email;
  let password = req.body.password;
  try {
    password = generateHash(password);
    let newCredentials = await db.Blog.postCredentials(userid, email, password);
    res.status(200).json({ message: "your added!" })
    return
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
  //   console.log({userid, email,password})
});

export default router;
