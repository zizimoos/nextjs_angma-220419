import { useRouter } from "next/router";
import React from "react";

function Detail(props) {
  const {
    query: { id },
  } = useRouter();

  return <div>DETAIL ID : {id} </div>;
}

export default Detail;
