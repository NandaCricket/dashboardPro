import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { MdDirectionsRun } from "react-icons/md";
// for side nav
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import { TbArticle } from "react-icons/tb";
import { TiLocationArrowOutline } from "react-icons/ti";
import OrderTable from "./OrderTable";
const NavigationBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <ul>
            <li>
              <img src="hvbaskchascshc" className="imgList" alt="image" />
            </li>
            <li>
              <AiOutlineMenuFold />
            </li>
          </ul>
        </div>
        <ul className="nav-links">
          <li>
            <IoMoonOutline />
          </li>
          <li>
            <GoBell />
          </li>
          <li>
            <MdDirectionsRun />
          </li>
          <li>
            <img src="sbnasdkjaSaBSJDHad" alt="avator" />
          </li>
        </ul>
      </nav>
      <div class="sidenav">
        <ul>
          <li className="list-item">
            <AiOutlineDashboard className="icon" />
            <span className="text">Dashboard</span>
          </li>
          <li className="list-item">
            <TiLocationArrowOutline className="icon" />
            <span className="text">Inventory</span>
          </li>
          <li className="list-item">
            <TbArticle className="icon" />
            <span className="text">Orders</span>
          </li>
          <li className="list-item">
            <MdOutlineLocalShipping className="icon" />
            <span className="text">Shipping</span>
          </li>
          <li className="list-item">
            <GoShareAndroid className="icon" />
            <span className="text">Channel</span>
          </li>
        </ul>
      </div>
      <main class="main-container"></main>
    </div>
  );
};

export default NavigationBar;
