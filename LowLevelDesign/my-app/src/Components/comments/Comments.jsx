import React from "react";
import Comment from "./Comment";

const data = [
  {
    username: "joti",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    reply: [
      {
        username: "jakass",
        comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        reply: [
          {
            username: "jatinder",
            comment:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            username: "jatinder2",
            comment:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            reply: [
              {
                username: "joti",
                comment:
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "Akshay",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    username: "Navi",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    username: "Atharv",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Comments = () => {
  return <div><Comment data={data}/></div>
};

export default Comments;
