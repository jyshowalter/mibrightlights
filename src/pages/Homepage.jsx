import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Map from "../components/Map";
import MIBrightLights from "../components/MIBrightLights";
import AboutHome from "../components/AboutHome";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <AboutHome />
      <MIBrightLights />
      <Map />
    </div>
  );
};

export default Homepage;
