import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="w-96 bg-white shadow-xl rounded-lg">
      <div className="font-bold text-center border-b-2 border-gray-300 px-4 py-2">
        <h1>{title ?? "Meu Carrinho"}</h1>
      </div>
      {children}
    </div>
  );
}
