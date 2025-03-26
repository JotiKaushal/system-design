import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    //window.scrollY>> how i have scrolled
    //window.innerheight >> visible hight f window
    //documetn.body.innerHeight >> total height of the web page (body)
    //check  if we reach the bottom of page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };
  const fetchMemes = async () => {
    try{
      setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setShowShimmer(false);
    setMemes((memes)=> [...memes, ...json.memes]);
    }
    catch(err){
      setShowShimmer(false);
      console.log("some error occured ", err.message);
      
    }
  };

  return (
    <div className="flex flex-wrap">
      {
        memes.map((meme, i) => <MemeCard key={i} data={meme} />)
      }
      {showShimmer && <Shimmer/>}
    </div>
  );
};

export default Body;
