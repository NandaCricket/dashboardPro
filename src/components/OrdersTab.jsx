import React from "react";

const OrdersTab = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="orders-tab">
      <button
        className={
          activeTab === "All Orders" ? "tab-button active" : "tab-button"
        }
        onClick={() => handleTabClick("All Orders")}
      >
        Import Orders
      </button>
      <button
        className={activeTab === "Pending" ? "tab-button active" : "tab-button"}
        onClick={() => handleTabClick("Pending")}
      >
        Accept
      </button>
      <button
        className={
          activeTab === "Completed" ? "tab-button active" : "tab-button"
        }
        onClick={() => handleTabClick("Completed")}
      >
        Print
      </button>
    </div>
  );
};

export default OrdersTab;
