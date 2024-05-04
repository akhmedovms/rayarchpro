import InfoArchitect from "./InfoArchitect";
import Slider from "./Slider";
import Main from "./Main";
const Home = () => {
  return (
    <div className="">
      <div className="">
        <Main />
        <div className="hidden lg:block">
          <InfoArchitect />
        </div>
        <div className="block lg:hidden">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
