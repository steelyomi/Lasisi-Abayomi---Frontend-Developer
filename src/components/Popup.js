import React from "react";

const Popup = ({ capsule, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
      <div className="bg-black rounded p-4">
        <button
          className="absolute top-2 right-2 text-blue-500 hover:text-red-500"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-xl font-bold mb-5 text-white">
          {capsule.type},{" "}
          <span className="text-base opacity-75 font-light">
            {capsule.serial}
          </span>
        </h2>
        <p className="mt-5 text-white opacity-75">{capsule.last_update}</p>
      </div>
    </div>
  );
};

export default Popup;
