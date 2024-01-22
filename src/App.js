import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import Header from './components/Header';
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
         <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
