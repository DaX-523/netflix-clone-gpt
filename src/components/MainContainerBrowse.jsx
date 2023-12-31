import MainMovieTitle from "./MainMovieTitle";
import MainMovieVideo from "./MainMovieVideo";
import { useSelector } from "react-redux";

const MainContainerBrowse = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const movie = movies[10];
  const { original_title, overview, id } = movie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <MainMovieTitle title={original_title} description={overview} />
      <MainMovieVideo movie_id={id} />
    </div>
  );
};

export default MainContainerBrowse;
