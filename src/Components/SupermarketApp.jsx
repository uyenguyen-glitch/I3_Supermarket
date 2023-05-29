import React, { useEffect } from "react";
import ListItem from "./ListItem";
import data from "../data.json";
import InvoiceInformation from "./InvoiceInformation";

const SupermarketApp = () => {
  let subData = [];

  // Handle data
  const handleData = () => {
    let begin = 0;
    let end = 6;
    for (let i = 0; i < Math.round(data.length / 6); i++) {
      subData.push(data.slice(begin, end));
      begin += 6;
      end += 6;
    }
  };

  handleData();

  return (
    <div>
      <ListItem data={subData} />
      <InvoiceInformation />
    </div>
  );
};

export default SupermarketApp;
