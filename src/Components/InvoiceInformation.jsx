import React, { useEffect, useState } from "react";

const InvoiceInformation = ({
  data,
  onDelete,
  onIncrease,
  onDecrease,
  onConfirm,
}) => {
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);

  // nếu không có sản phẩm đang chọn (mảng rỗng) thì sẽ không hiển thị bảng hóa đơn
  // Chỉ hiển thị khi có vật phẩm đang chọn
  useEffect(() => {
    if (data.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  // Thực hiện tính tổng
  useEffect(() => {
    if (data.length > 0) {
      const total = data.reduce((sum, product) => {
        return sum + product.price * product.quantity;
      }, 0);

      setTotal(total);
    }
  });

  return (
    show && (
      <div className="container py-10 px-36 mr-auto ml-auto align-middle ">
        <h1 className="font-bold text-3xl mb-4">Thông tin hóa đơn</h1>
        <table className="rounded-md border border-black border-collapse w-full">
          <thead className="border border-black text-lg">
            <tr>
              <th className="border-r border-black">Stt</th>
              <th className="border-r border-black">Mặt hàng</th>
              <th className="border-r border-black">Số lượng</th>
              <th className="border-r border-black">Thành tiền</th>
              <th className="border-r border-black"></th>
            </tr>
          </thead>
          <tbody className="text-base">
            {data.map((product, ind) => (
              <tr key={ind}>
                <td className="border-r border-black">{ind + 1}</td>
                <td className="border-r border-black">{product.name}</td>
                <td className="border-r border-black">
                  <button
                    type="button"
                    onClick={() => onIncrease(ind)}
                    className="rounded bg-stone-300 shadow-cyan-500/50 w-6 mx-2 hover:bg-stone-400"
                  >
                    +
                  </button>
                  <span className="w-2 text-center">{product.quantity} </span>
                  <button
                    type="button"
                    onClick={() => onDecrease(ind)}
                    className="rounded bg-stone-300 shadow-cyan-500/50 w-6 mx-2 hover:bg-stone-400"
                  >
                    -
                  </button>
                </td>
                <td className="border-r border-black">
                  {product.quantity * product.price}
                </td>
                <td>
                  <button
                    type="button"
                    className="bg-myRed rounded-md border border-transparent px-2 text-white hover:bg-myRedBlur"
                    onClick={() => onDelete(product.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right pr-64 py-2">
          <p>{`Tổng tiền: ${total}`}</p>
        </div>
        <div className="py-2 text-right pr-56">
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-lg border border-transparent bg-myRed p-2 text-white hover:bg-myRedBlur"
          >
            Xác nhận mua hàng
          </button>
        </div>
      </div>
    )
  );
};

export default InvoiceInformation;
