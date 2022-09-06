import React from "react";
import Eight from "pages/Eight";
import Seven from "pages/Seven";
import Five from "pages/Five";
import Four from "pages/Four";
import Nine from "pages/Nine";
import Three from "pages/Three";
import Two from "pages/Two";
import One from "pages/One";
import FrameOne from "pages/FrameOne";
import FactoriesDetailsOne from "pages/FactoriesDetailsOne";
import FactoriesDetails from "pages/FactoriesDetails";
import Factories from "pages/Factories";
import Landingpage from "pages/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/factories" element={<Factories />} />
        <Route path="/factoriesdetails" element={<FactoriesDetails />} />
        <Route path="/factoriesdetailsone" element={<FactoriesDetailsOne />} />
        <Route path="/frameone" element={<FrameOne />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/nine" element={<Nine />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
        <Route path="/seven" element={<Seven />} />
        <Route path="/eight" element={<Eight />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
