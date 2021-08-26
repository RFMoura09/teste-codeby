import React from "react";

export default function FinishShopButton({ onShopButtonClicked }) {
  return (
    <div
      onClick={() => onShopButtonClicked()}
      className="cursor-pointer flex items-center transition duration-300 hover:bg-blue-400 justify-center rounded-lg bg-blue-500 text-sm text-white m-4 p-3 text-center"
    >
      <p> Finalizar Compra </p>
    </div>
  );
}
