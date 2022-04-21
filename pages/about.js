import React from "react";

function about(props) {
  return (
    <div className="container">
      <div>COMPANY</div>
      <div className="descripBox">
        <div>Description</div>
        <p>
          Blockchain technology has been developing at a rapid rate and so is
          its adoption in various markets. Initially, Blockchain was introduced
          as a solution to manage financial transactions. However, Blockchain is
          now something completely different and offers major services for
          individuals and enterprises alike. However, blockchain technology is
          still new and unknown to many due to the different and unique
          technical requirements it has. Blockchain technology is still
          developing and there are very few professionals who are good at this.
          It is one of the reasons why companies are hesitant when it comes to
          adopting blockchain technology for complete operation.{" "}
        </p>
      </div>
      <style jsx>{`
        .container {
          width: 900px;
          height: 100%;
          margin-top: 20px;
        }
        .descripBox {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}

export default about;
