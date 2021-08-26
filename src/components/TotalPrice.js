import React from "react";
import convertToBRL from "../utils/convertToBRL";

export default function TotalPrice({ price, showFreeTaxMessage }) {
  return (
    <div className="border-b-2 border-gray-300 p-4 space-y-4">
      <div className="flex justify-between font-bold">
        <h2>Total</h2>
        <h2>{convertToBRL(price / 100)}</h2>
      </div>
      {showFreeTaxMessage && (
        <div className="mx-3 flex items-center justify-center text-green-800 text-center text-xs bg-green-200 p-2 rounded-2xl">
          <p>Parabéns, sua compra tem frete grátis! </p>
        </div>
      )}
    </div>
  );
}
