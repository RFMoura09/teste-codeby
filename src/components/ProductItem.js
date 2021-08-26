import React, { useState } from "react";
import convertToBRL from "../utils/convertToBRL";

export default function ProductItem({
  image,
  title,
  originalPrice,
  price,
  onItemCLicked,
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`flex items-center -mx-2 px-2 cursor-pointer transition duration-300 hover:opacity-60 ${
        clicked && "bg-blue-200"
      }`}
      onClick={() => {
        setClicked((prev) => !prev);
        onItemCLicked();
      }}
    >
      <img
        src={image}
        alt={title}
        className="border-2 border-gray-300 h-20 w-20"
      />
      <div className="p-4 text-xs space-y-1 flex flex-col justify-center">
        <h3 className="font-bold">{title}</h3>
        <h3 className="text-gray-400" style={{ fontSize: ".5rem" }}>
          {convertToBRL(originalPrice / 100)}
        </h3>
        <h3 className="">{convertToBRL(price / 100)} </h3>
      </div>
    </div>
  );
}
