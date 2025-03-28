import React from "react";

const Comment = ({ data }) => {
  return data.map((comment, i) => (
    <div key={i} className="pl-10 border-l-2 border-black">
      <div className="flex">
        <div>
          <img
            className="w-16 p-2 rounded-full"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
            alt="user image"
          />
        </div>
        <div>
          <p className="font-bold px-1 py-4">{comment.username}</p>
          <p className="px-2">{comment.comment}</p>
        </div>
      </div>
      <div>{comment.reply && <Comment data={comment.reply} />}</div>
    </div>
  ));
};

export default Comment;
