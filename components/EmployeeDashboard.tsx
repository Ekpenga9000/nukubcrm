import React from "react";
import EmployeeDashboardHeader from "./EmployeeDashboardHeader";
import { MdOutlineInventory2 } from "react-icons/md";
import { LuPackage2, LuUser2, LuUsers2 } from "react-icons/lu";
import { AiOutlineCustomerService } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { CiTrash } from "react-icons/ci";
import { VscRefresh } from "react-icons/vsc";


const EmployeeDashboard = () => {
  return (
    <div>
      <EmployeeDashboardHeader />
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center p-4 gap-4">
        <div className="dash-card">
          <h4 className="text-lg">Customer</h4>
          <span>
            <LuUser2 />
          </span>
        </div>
        <div className="dash-card">
          <h4 className="text-lg">Cases</h4>
          <span>
            <AiOutlineCustomerService />
          </span>
        </div>
        <div className="dash-card">
          <h4>Inventory</h4>
          <span>
            <MdOutlineInventory2 />
          </span>
        </div>
        <div className="dash-card">
          <h4>Orders</h4>
          <span>
            <LuPackage2 />
          </span>
        </div>
        <div className="dash-card">
          <h4>Team</h4>
          <span>
            <LuUsers2 />
          </span>
        </div>
      </section>
      <section className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2>Customers</h2>
         
          <div className="flex items-center gap-8">
            <input type="search" name="" id="" className="border px-4 py-2 rounded-sm" placeholder="Find customer..."/>
            <ul className="flex items-center gap-4">
              <li className="flex items-center gap-1 cursor-pointer"><FaPlus /> New</li>
              <li className="flex items-center gap-1 cursor-pointer"><CiTrash /> Delete</li>
            </ul>
            <button className="flex items-center gap-1"><VscRefresh /> Refresh</button>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default EmployeeDashboard;
