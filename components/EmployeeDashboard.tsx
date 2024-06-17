import React from "react";
import EmployeeDashboardHeader from "./EmployeeDashboardHeader";
import { MdOutlineInventory2 } from "react-icons/md";
import { LuPackage2, LuUser2, LuUsers2 } from "react-icons/lu";
import { AiOutlineCustomerService } from "react-icons/ai";

const EmployeeDashboard = () => {
  return (
    <div>
      <EmployeeDashboardHeader />
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center p-4">
        <div className="dash-card">
          <h4>Customer</h4>
          <LuUser2 />
        </div>
        <div className="dash-card">
          <h4>Cases</h4>
          <AiOutlineCustomerService />
        </div>
        <div className="dash-card">
          <h4>Inventory</h4>
          <MdOutlineInventory2 />
        </div>
        <div className="dash-card">
          <h4>Orders</h4>
          <LuPackage2 />
        </div>
        <div className="dash-card">
          <h4>Team</h4>
          <LuUsers2 />
        </div>
      </section>
    </div>
  );
};

export default EmployeeDashboard;
