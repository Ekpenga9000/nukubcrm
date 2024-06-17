import React from "react";

const EmployeeDashboardHeader = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center gap-8">
          <h3 className="md:text-2xl logo">
            <span className="font-semibold text-primary">Kubi</span>
            <span className="text-secondary">Force</span>
          </h3>

          <p>Dashboards</p>
        </div>

        <ul className="flex items-center gap-4">
          <li>Quick Search</li>
          <li>Recents</li>
          <li>Quick Add</li>
          <li>Filter</li>
        </ul>

        <ul className="flex items-center gap-4">
          <li>Settings</li>
          <li>User Profile</li>
        </ul>
      </nav>
    </header>
  );
};

export default EmployeeDashboardHeader;
