import React from "react";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 mt-32">
        <h1 className="text-4xl font-bold text-center text-white">
          GitHub User Search
        </h1>
        <Search />
      </div>
    </div>
  );
};

export default Home;
