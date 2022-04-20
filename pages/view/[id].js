import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function Detail(props) {
  const [list, setList] = useState({});
  const {
    query: { id },
  } = useRouter();

  const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  }

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  return (
    <div className="container">
      <div className="contentBox">
        <div className="imgBox">
          <img src={list.image_link}></img>
        </div>
        <div className="purchaseBox">
          <div>{list.name}</div>
          <div>{list.product_type}</div>
          <div className="price">$ {list.price}</div>
          <div className="purchaseButton">구매하기</div>
        </div>
      </div>

      <div className="description">
        <p>Description</p>
        {list.description}
      </div>

      <style jsx>{`
        .container {
          width: 900px;
          height: 100%;
        }
        .contentBox {
          width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }
        .imgBox {
          width: 300px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 40px;
        }
        img {
          width: 200px;
          height: 200px;
        }
        .purchaseBox {
          width: 300px;
          height: 300px;
          margin-left: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .purchaseBox div {
          font-size: 14px;
          margin-top: 10px;
        }
        .price {
        }
        .purchaseButton {
          width: 100px;
          height: 30px;
          margin-top: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: hotpink;
          color: white;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
        }
        .description {
          padding: 40px;
          line-height: 1.5;
          font-size: 16px;
          margin-top: 20px;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}

export default Detail;
