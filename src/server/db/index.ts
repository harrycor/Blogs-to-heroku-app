import * as mysql from "mysql";
import config from "../config";

import Blog from "./blog";

const pool = mysql.createPool(config.mysql);

// Connection.connect((err) => {
//   if (err) console.log(err);
// });

export const Query = async (query: string, values?: Array<string | number>) => {
  return new Promise((resolve, reject) => {
    pool.query(query, values, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

export default {
  Blog,
};
