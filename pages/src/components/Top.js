import Image from "next/image";
import React from "react";
import Gnb from "./Gnb";

function Top(props) {
  return (
    <div>
      <div className="logoBox">
        <Image src="/vercel.svg" width={100} height={100} alt="logo" />
        <div className="logoTitle">Azer C.</div>
      </div>
      <Gnb />
      <style jsx>{`
        .logoBox {
          width: 900px;
          height: 100px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          background-color: white;
        }
        .logoTitle {
          margin-left: 20px;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}

export default Top;
