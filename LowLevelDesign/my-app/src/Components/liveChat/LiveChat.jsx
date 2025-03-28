import React from "react";
import VideoStream from "./VideoStream";
import ChatWindow from "./ChatWIndow";

const LiveChat = () => {
  return (
    <div className="flex m-10">
      <VideoStream />
      <ChatWindow />
    </div>
  );
};

export default LiveChat;
