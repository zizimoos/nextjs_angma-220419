import React from "react";
import { useState } from "react";

function Gnb(props) {
  return (
    <>
      <div className="container">
        <div className="item">Home</div>
        <div className="item">About</div>
        <div className="item">Contact</div>
      </div>
      <style jsx>{`
        .container {
          width: 900px;
          height: 40px;
          padding-left: 20px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          background-color: black;
        }
        .item {
            width: 100px;
            color: white;
            background-color: black;
      `}</style>
    </>
  );
}

export default Gnb;
