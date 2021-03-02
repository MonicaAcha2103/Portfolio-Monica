import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <div>
      Portfolio
      <Link to="/portfolio/1">Item one </Link>
      <Link to="/portfolio/2">Item two </Link>
    </div>
  );
};
export default Portfolio;
