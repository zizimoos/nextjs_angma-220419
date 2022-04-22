import Image from "next/image";
import Link from "next/link";
import React from "react";

function ItemList({ list }) {
  return (
    <>
      <div className="container">
        {list?.map((item) => (
          <div key={item.id} className="contentUnit">
            <Link href={`/view/${item.id}`}>
              <a>
                <Image
                  src={item.image_link}
                  alt="items"
                  width={150}
                  height={150}
                />
              </a>
            </Link>
            <div className="itemType">{item.product_type}</div>
            <div className="itemName">{item.name.slice(0, 30)}...</div>
            <div className="itemPrice"> $ {item.price}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          width: 900px;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 10px;
        }
        .contentUnit {
          width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        img {
          width: 150px;
          height: 150px;
        }
        .itemName {
          font-size: 14px;
        }
        .itemType {
          color: gray;
        }
        .itemPrice {
          padding-top: 10px;
          font-weight: 500;
          color: hotpink;
        }
      `}</style>
    </>
  );
}

export default ItemList;
