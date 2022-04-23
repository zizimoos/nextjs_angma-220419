import React from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";

function Detail({ list, name }) {
  return (
    <div className="container">
      <div>{name} 환경입니다.</div>
      {list && (
        <>
          <Head>
            <title>{list.name}</title>
            <meta
              name="description"
              content={`This is a azerc ${list.description}`}
            />
          </Head>
          <div className="contentBox">
            <div className="imgBox">
              <Image
                src={list.image_link}
                alt="detail image"
                layout="raw"
              ></Image>
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
        </>
      )}

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
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 80px;
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
        .isLoading {
          width: 900px;
          margin: 50px auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Detail;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: "740" },
      },
      {
        params: { id: "730" },
      },
      {
        params: { id: "729" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  return {
    props: {
      list: res.data,
      name: process.env.name,
    },
  };
}
