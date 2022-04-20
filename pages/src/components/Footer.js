import React from "react";

function Footer(props) {
  return (
    <>
      <hr></hr>
      <div className="container">
        <div>Copyright © 2022 azerC. All rights reserved.</div>
      </div>
      <style jsx>{`
        .container {
          width: 900px;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export default Footer;
