import React from 'react';
import App from './App';
import NavigationBar from "./NavigationBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function () {
  return (
    <Router>
      <div className="todo-app-container">
        <NavigationBar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact />} />
            {/*<Route path="/blog" element={<Blog />} />*/}
            {/*<Route path="/blog/:id" element={<BlogPost />} />*/}
            {/*<Route path="*" element={<NoMatch />} />*/}
          </Routes>
        </div>
      </div>
    </Router>
  )
}