import React from "react";
import "./Loader.css";
const Loader = ({text}) => {
  return (
    <div class="loader">
      <div class="dot-spinner">
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
      </div>
      <div class="loader-text">{text}</div>
    </div>
  );
};

export default Loader;
