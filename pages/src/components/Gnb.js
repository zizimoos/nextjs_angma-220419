import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

function Gnb(props) {
  const Router = useRouter();

  const goLink = (e) => {
    e.preventDefault();
    if (e.target.textContent === "Home") {
      Router.push("/");
    }
    if (e.target.textContent === "About") {
      Router.push("/about");
    }
    if (e.target.textContent === "Contact") {
      Router.push("/contact");
    }
  };
  return (
    <>
      <div className="container">
        <div className="item" onClick={goLink}>
          Home
        </div>
        <div className="item" onClick={goLink}>
          About
        </div>
        <div className="item" onClick={goLink}>
          Contact
        </div>
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
          font-size: 14px;
          background-color: black;
        }
      `}</style>
    </>
  );
}

export default Gnb;
