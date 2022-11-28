import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Copyright from "./components/Copyright";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";

const App = () => {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API

  // Loading bar
 
  const [progress, setProgress] = useState (0)

  // Loading bar end


    return (
      <div>
        <Router>
          <NavBar />

      {/* loading bar */}

          <LoadingBar
          height={4}
        color='#f11946'
        progress={progress}
      />

      {/* Loading bar end */}

          <Routes>
            <Route path="/home" element={<News setProgress={setProgress} apiKey={apiKey} key="home" pageSize={pageSize} country="in" category="business"/>}></Route>
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
            <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
          </Routes>
        </Router>
        <Copyright/>
      </div>
    );
} 


export default App;