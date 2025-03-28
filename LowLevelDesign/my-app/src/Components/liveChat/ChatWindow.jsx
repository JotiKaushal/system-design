import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import generateName from '../../utils/generateRandomNames'
const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
 const CHAT_MESSAGES_LIMIT = 20;
  const fetchData = () => {
    const data = [
      {
        id: 0,
        name: generateName(),
        message: "this is a live chat messages",
        thumbnil:
          "https://yt4.ggpht.com/ytc/AIdro_nqswjJbZnpPTaw6g7tuMVSAWJx697ijdZ4VQOB7HXRpg=s32-c-k-c0x00ffffff-no-rj",
      }
    ];
    setMessages((messages) => {
      const newMessageList = [...data, ...messages];
      return newMessageList.splice(0,CHAT_MESSAGES_LIMIT);
    });
  };

  useEffect(() => {
    const interval = setInterval(fetchData, 5000);
    return ()=>{
        clearInterval(interval)
    }
  },[]);

  return (
    <div className="w-[500px] h-[600px] border border-black m-5 overflow-y-scroll flex flex-col-reverse">
      {messages.map((msg, i) => (
        <ChatMessage key={i} {...msg} />
      ))}
    </div>
  );
};

export default ChatWindow;
