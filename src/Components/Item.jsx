import React from "react";

const Item = ({ product, onSelect }) => {
  return (
    <div className="container shadow-2xl w-56 bg-white border-2 border-transparent rounded-lg  hover:border-dashed hover:border-myRed hover:border-2">
      <div className="rounded-lg h-56">
        <img
          src={product.imagePath}
          alt={product.name}
          className="h-full w-full "
        />
      </div>

      <div className="content-part h-full w-full p-4">
        <h3 className="font-bold">{product.name}</h3>
        <p>{product.price}</p>
        <button
          type="submit"
          className="rounded-lg w-20  bg-myRed border-myRed border-2 hover:bg-white hover:myRed text-white hover:text-myRed"
          onClick={() => onSelect(product)}
        >
          Mua
        </button>
      </div>
    </div>
  );
};

export default Item;
