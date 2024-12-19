import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Sponsors from "./pages/Sponsors";
import Careers from "./pages/Careers";
import SantaLand from "./pages/SantaLand";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/santaland" element={<SantaLand />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
