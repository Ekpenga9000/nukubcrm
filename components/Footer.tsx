import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 flex justify-between items-center text-xs">
      <p>&#169; 2024 KubiForce CRM. All rights reserved.</p>
      <ul className="flex gap-4">
        <li>Terms of Service</li>
        <li>Privacy</li>
      </ul>
    </footer>
  );
};

export default Footer;
