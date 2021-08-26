import React from "react";

export default function ConfirmShopModal({ onConfirm }) {
  return (
    <div className="bg-black bg-opacity-80 w-screen h-screen fixed z-10 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 space-y-8">
        <h3 className="text-lg">Compra Confirmada!</h3>
        <div
          className="cursor-pointer flex items-center transition duration-300 hover:bg-blue-400 justify-center rounded-lg bg-blue-500 text-sm text-white m-4 p-3 text-center"
          onClick={() => onConfirm()}
        >
          <p> Voltar a Comprar! </p>
        </div>
      </div>
    </div>
  );
}
