import React, { useEffect, useState } from "react";

const SearchUI = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});

  const fetchSuggestions = async () => {
    if (searchQuery.length === 0) {
      setResults([]);
      return;
    }
    if(cache[searchQuery]){
        console.log("cache", cache);
        setResults(cache[searchQuery]);
        return;
    }
    const data = await fetch(
      `https://dummyjson.com/products/search?q=${searchQuery}`
    );
    const json = await data.json();
    setResults(json.products);
    cache[searchQuery] = json.products;
    setCache(cache);
  };

  useEffect(() => {
    //debounce
   const timerId = setTimeout(() => {
      fetchSuggestions();
    }, 200);
    return ()=>clearTimeout(timerId)
  }, [searchQuery]);
  return (
    <div className="m-10">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        onFocus={() => {
          setIsResultVisible(true);
        }}
        onBlur={() => {
          setIsResultVisible(false);
        }}
        className="border border-black p-2 w-96 shadow-lg"
      />
      {results.length > 0 && isResultVisible && (
        <ul className="p-2 border border-black w-96 shadow-lg">
          {results.map((result) => (
            <li key={result.id} className="hover:bg-gray-200 cursor-pointer">
              {result.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchUI;
