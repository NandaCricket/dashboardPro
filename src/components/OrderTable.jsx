import React from "react";

const OrderTable = ({ orders }) => {
  const {
    OrdderId,
    OrderNo,
    OrderDate,
    city,
    CustomerName,
    OrderValue,
    Status,
    Operation,
  } = orders;
  return (
    <div>
      <table className="order-table">
        <thead>
          <tr className="tableHeading">
            <th>Order ID</th>
            <th>Channel</th>
            <th>Order No</th>
            <th>Order Date</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Value</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody className="tdetails">
          {orders.map((order) => (
            <tr className="tabelRow" key={order.id}>
              <td>{order.OrdderId}</td>
              <td>{order.Channel}</td>
              <td className="ordernum">{order.OrderNo}</td>
              <td>{order.OrderDate}</td>
              <td>{order.city}</td>
              <td>{order.CustomerName}</td>
              <td>{order.OrderValue}</td>
              <button className="status">
                <td>{order.Status}</td>
              </button>

              <td>{order.Operation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
