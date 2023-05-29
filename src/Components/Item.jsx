import React from "react";

const Item = ({ product }) => {
  return (
    <div className="container w-56 bg-white rounded-md border-2 border-black">
      <div className="bg-slate-50 rounded-md h-56 ">
        <img
          src={product.imagePath}
          alt={product.name}
          className="h-full w-full "
        />
      </div>

      <div className="content-part h-full w-full">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button
          type="submit"
          className="rounded-full border-2 w-12 border-red-400 bg-red-600"
        >
          Mua
        </button>
      </div>
    </div>
  );
};

export default Item;
