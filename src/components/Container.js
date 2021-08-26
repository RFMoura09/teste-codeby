import React from "react";

export default function Container({ children }) {
  return (
    <div className="bg-gray-300 min-w-screen min-h-screen flex flex-col space-y-8 justify-center items-center p-20">
      {children}
    </div>
  );
}
