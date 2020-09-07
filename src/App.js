import React from "react";
import { LanguageProvider } from "./Containers/Language";
import Layout from "./Layout/Layout";
import Particles from "react-particles-js";
import ConfigParticles from "./particles-conf";

import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Particles params={ConfigParticles} 
        style={{position:"fixed", left:0, opacity:0.2}}
        />
        <Layout></Layout>
      </div>
    </LanguageProvider>
  );
}

export default App;
