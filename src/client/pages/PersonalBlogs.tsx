import * as React from "react";
import { useState, useEffect } from "react";
import PersonalBlogCard from "../components/PersonalBlogCard";
import { apiService, TOKEN_KEY } from "../helperTools/api-service";
import { IBlogsWithAuthors } from "../types";

const PersonalBlogs = () => {

  let [personalBlogs, setPersonalBlogs] = useState<Array<IBlogsWithAuthors>>();

  useEffect(() => {
    apiService(`/auth/access`).then((res) => {
      console.log(res)
      if (res.message) {
        alert(res.message);
      } else {
        apiService(`/api/blogs/authors/tags/${res.userid}`).then((res) =>{
          setPersonalBlogs(res)}
          
        );
      }
    });
  }, []);
console.log(personalBlogs)
  if (!personalBlogs) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {personalBlogs.map((blog) => {
        return (
            <PersonalBlogCard key={blog.blogID} {...blog} />
        );
      })}
    </div>
  );
};

export default PersonalBlogs;
