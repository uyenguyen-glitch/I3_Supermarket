import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import data from "../data.json";
import InvoiceInformation from "./InvoiceInformation";

const SupermarketApp = () => {
  // selected item list
  const [selectedItems, setSelectedItems] = useState([]);

  // Handle data
  /*Purpose: Để tạo 1 grid(gồm: 6 item) trên 1 slider ở carousel trong ListItem component
    Solution: Từ 1 mảng danh sách data đầu vào thành một mảng chứa các mảng con. 
  */
  let subData = [];
  const handleData = () => {
    let begin = 0;
    let end = 6;
    for (let i = 0; i < Math.ceil(data.length / 6); i++) {
      subData.push(data.slice(begin, end));
      begin += 6;
      end += 6;
    }
  };
  handleData();

  // Handle Selected
  /**
   * Purpose: Xử lí vấn đề: nếu người dùng đã chọn product muốn mua rồi, nhưng lại bấm chọn nút "mua" một lần nữa
   *          thì tiến hành tăng số lượng sản phẩm đã chọn lên một, thay vì thêm sản phẩm ấy vào danh sách sản phẩm
   *          đang chọn một lần nữa
   * Solution: Kiểm tra danh sách sản phẩm đang chọn ->
   *            + Nếu sản phẩm đã có trong mảng: tiến hành cập nhật số lượng
   *            + Nếu sản phẩm chưa có trong mảng: tiến hành thêm sản phẩm vào mảng
   */
  const handleSelected = (selectedItem) => {
    let findItem = selectedItems.findIndex(
      (item) => item.id === selectedItem.id
    );

    if (findItem >= 0) {
      setSelectedItems((state) => {
        state = [...state];
        state[findItem].quantity += 1;
        return state;
      });
    } else {
      selectedItem = { ...selectedItem, quantity: 1 };
      setSelectedItems((state) => [...state, selectedItem]);
    }
  };

  // Handle increase
  const handleIncrease = (index) => {
    setSelectedItems((state) => {
      state = [...state];
      state[index].quantity += 1;

      return state;
    });
  };

  // Handle decrease
  const handleDecrease = (index) => {
    setSelectedItems((state) => {
      state = [...state];

      state[index].quantity -= 1;

      // Kiểm tra xem nếu số lượng bằng 0 tiến hành xóa ra khỏi mảng sản phẩm đang chọn
      if (state[index].quantity === 0) {
        return state.filter((item) => state[index].id !== item.id);
      }

      return state;
    });
  };

  // Handle delete
  const handleDelete = (id) => {
    setSelectedItems((state) => {
      return state.filter((item) => id !== item.id);
    });
  };

  // Handle purchase confirmation
  const handlePurchseConfirm = () => {
    alert("Bạn đã mua hàng thành công");
    setSelectedItems([]);
  };
  return (
    <div>
      <ListItem data={subData} onSelect={handleSelected} />
      <InvoiceInformation
        data={selectedItems}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onDelete={handleDelete}
        onConfirm={handlePurchseConfirm}
      />
    </div>
  );
};

export default SupermarketApp;
