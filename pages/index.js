import axios from "axios";
import Head from "next/head";
import ItemList from "./src/components/ItemList";

export default function Home({ list }) {
  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // const API_URL = process.env.NEXT_PUBLIC_API_URL;
  // // "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  // function getData() {
  //   axios.get(API_URL).then((res) => {
  //     setList(res.data);
  //     setIsLoading(false);
  //   });
  // }
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <div className="container">
        <Head>
          <title>{`azerc's shop`}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="This is a azerc project" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="divider">베스트 상품</div>
        {/* {isLoading ? (
          <div className="isLoading">...isLoading</div>
        ) : (
          <>
            <hr></hr>
            <ItemList list={list.slice(0, 9)} />
            <div className="divider">새로운 상품</div>
            <hr></hr>
            <ItemList list={list.slice(9)} />
          </>
        )} */}
        <>
          <hr></hr>
          <ItemList list={list?.slice(0, 9)} />
          <div className="divider">새로운 상품</div>
          <hr></hr>
          <ItemList list={list?.slice(9)} />
        </>
      </div>
      <style jsx>{`
        container {
          width: 900px;
          height: 100%;
        }
        .divider {
          margin-top: 20px;
        }
        .isLoading {
          width: 900px;
          margin: 50px auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const API_URL = process.env.apiUrl;
  const res = await axios.get(API_URL);
  const data = res.data;
  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
