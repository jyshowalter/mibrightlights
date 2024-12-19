import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      {/* External script for Eloise MI Bright Lights */}
      <script
        type="text/javascript"
        src="//tag.brandcdn.com/autoscript/eloisemibrightlights_vgtsuk1rmuvxvfu9/Eloise_MI_Bright_Lights.js"
      ></script>

      {/* Tracking pixel images */}
      <img
        height="1"
        width="1"
        style={{ display: "none", borderStyle: "none" }}
        alt=""
        src="//insight.adsrvr.org/track/evnt/?adv=sa1lhrs&ct=0:pjt4m3u&fmt=3"
      />

      <img
        height="1"
        width="1"
        style={{ borderStyle: "none" }}
        alt=""
        src="//insight.adsrvr.org/track/conv/?adv=sa1lhrs&ct=0:urovjsf&fmt=3"
      />

      <img
        height="1"
        width="1"
        style={{ display: "none", borderStyle: "none" }}
        alt=""
        src="//adservices.brandcdn.com/pixel/cv_img?aid=446069"
      />

      {/* Layout components */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
