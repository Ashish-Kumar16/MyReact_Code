import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';

import StarRating from "./StartRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} />
    {/* <StarRating maxRating={10}/>
    <StarRating /> */}
    <StarRating  color="black" size={70} className="test" />
    <StarRating messages={["g", "adg", "afg", "adg", "agd"]} />
    {/* <StarRating maxRating={} defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
