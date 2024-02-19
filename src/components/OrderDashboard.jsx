import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import OrdersTab from "./OrdersTab";
import OrderTable from "./OrderTable";
import { TbMoneybag } from "react-icons/tb";

import "./style.css";

const OrderDashboard = () => {
  // Dummy data for orders
  const [orders, setOrders] = useState([
    {
      OrdderId: 1,
      channel: <TbMoneybag />,
      OrderNo: "TKN20203754",
      OrderDate: "2022/05/04",
      city: "Lucknow",
      CustomerName: "Abhishek Dixit",
      OrderValue: "0.0",
      Status: "Pending",
      Operation: "Action",
    },

    {
      OrdderId: 1,
      channel: <TbMoneybag />,
      OrderNo: "TKN20203754",
      OrderDate: "2022/05/04",
      city: "Lucknow",
      CustomerName: "Abhishek Dixit",
      OrderValue: "0.0",
      Status: "Pending",
      Operation: "Action",
    },
    {
      OrdderId: 1,
      channel: <TbMoneybag />,
      OrderNo: "TKN20203754",
      OrderDate: "2022/05/04",
      city: "Lucknow",
      CustomerName: "Abhishek Dixit",
      OrderValue: "0.0",
      Status: "Pending",
      Operation: "Action",
    },
    // Add more dummy data as needed
  ]);

  // State to track active tab
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="order-dashboard">
      <NavigationBar />
      <div className="container">
        <div className="DetailsList">
          <ul>
            <li>Pending</li>
            <li>Accepted</li>
            <li>AWB Created</li>
            <li>Ready to Ship</li>
            <li>Shipped</li>
            <li>Completed</li>
            <li>Cancelled</li>
          </ul>
        </div>
        <OrdersTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <OrderTable orders={orders} />
      </div>
    </div>
  );
};

export default OrderDashboard;
