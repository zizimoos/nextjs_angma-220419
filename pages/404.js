import { useRouter } from "next/router";
import React from "react";

function ERR404(props) {
  const Roueter = useRouter();
  const onClick = () => {
    Roueter.push("/");
  };
  return (
    <div className="container">
      <div>404 Page Not Found</div>
      <button onClick={onClick}>HOME</button>
      <style jsx>{`
        .container {
          width: 900px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        button {
          margin-top: 20px;
          width: 100px;
          height: 30px;
          background-color: teal;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 14px;
          font-weight: bold;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default ERR404;
