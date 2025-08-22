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
      <script
        type="text/javascript"
        src="//tag.brandcdn.com/autoscript/eloisemibrightlights_vgtsuk1rmuvxvfu9/Eloise_MI_Bright_Lights.js"
      ></script>
    </div>
  );
};

export default Homepage;
