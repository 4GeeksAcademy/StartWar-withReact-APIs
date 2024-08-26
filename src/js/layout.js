import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Home } from "../js/views/home";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Planets } from "../js/views/planets";
import { Vehicles } from "../js/views/vehicles";
import { Character } from "../js/views/character";
import { Planet } from "../js/views/planet";
import { Vehicle } from "../js/views/vehicle";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  // if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
  //   return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters/:id" element={<Character />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<Planet />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<Vehicle />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);