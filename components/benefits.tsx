import React from "react";
import { PiUsersThree } from "react-icons/pi";
import { GoWorkflow } from "react-icons/go";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const Benefits = () => {
  return (
    <section className="flex flex-col items-center justify-center py-32">
      <h2 className="text-4xl font-semibold text-secondary">Key Features of KubiForce CRM</h2>
      <p className="text-zinc-600">
        Streamline your sales, marketing, and customer service with our powerful
        CRM platform.
      </p>
      <ul className="lg:flex mt-10 lg:w-3/5">
        <li>
          <h3 className="md:text-2xl font-semibold flex items-center gap-1 mb-2 text-primary">
            <span className="md:text-2xl">
              <PiUsersThree />
            </span>
            Centralized Customer Data
          </h3>
          <p className="text-zinc-600 text-sm">
            Manage all your customer information in one place, making it easy to
            track interactions and history.
          </p>
        </li>
        <li>
          <h3 className="md:text-2xl font-semibold flex items-center gap-1 mb-2 text-primary">
            <span className="md:text-2xl">
              <GoWorkflow />
            </span>
            Automated Workflows
          </h3>
          <p className="text-zinc-600 text-sm">
            Streamline your sales, marketing, and support processes with
            customizable workflows and automation.
          </p>
        </li>
        <li>
          <h3 className="md:text-2xl font-semibold flex items-center gap-1 mb-2 text-primary">
            <span className="md:text-2xl">
              <MdOutlineReportGmailerrorred />
            </span>
            Powerful Reporting
          </h3>
          <p className="text-zinc-600 text-sm">
            Gain valuable insights into your business with our comprehensive
            reporting and analytics tools.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Benefits;
