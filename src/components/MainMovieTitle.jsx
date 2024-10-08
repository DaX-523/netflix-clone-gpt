import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const MainMovieTitle = ({ title, description }) => {
  return (
    <div className=" w-full aspect-video pt-[20%] px-8 md:px-12 absolute bg-gradient-to-r from-black text-white">
      <h1 className="font-normal text-xl md:font-bold md:text-3xl">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4 overflow-auto">
        {description}
      </p>
      <div className="flex flex-row gap-2 my-2">
        <button className=" bg-white text-black py-0.5 md:py-4 px-2 md:px-10 text-xl rounded-lg hover:bg-opacity-80">
          <PlayArrowIcon fontSize="medium" /> Play
        </button>
        <button className="hidden md:inline-block mx-1 bg-gray-500 text-white p-2 px-10 text-xl bg-opacity-50 rounded-lg">
          <InfoOutlinedIcon /> Info
        </button>
      </div>
    </div>
  );
};

export default MainMovieTitle;
