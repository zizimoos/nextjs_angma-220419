import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ItemList from "./src/components/ItemList";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="divider">베스트 상품</div>
        <hr></hr>
        <ItemList list={list.slice(0, 9)} />
        <div className="divider">새로운 상품</div>
        <hr></hr>
        <ItemList list={list.slice(9)} />
      </div>
      <style jsx>{`
        container {
          width: 900px;
          height: 100%;
        }
        .divider {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}
