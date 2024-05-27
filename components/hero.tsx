import React from "react";
import Image from "next/image";
import hero from "@/public/images/hero.png";

const Hero = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row justify-center">
      <div className="p-2 lg:w-1/3">
        <h1 className="text-2xl font-semibold text-secondary">
          Unlock Customer Success with Our Advanced CRM Solution - Streamline
          Your Business Operations Today!
        </h1>
        <p className="mb-4">
          Take Control of Your Customer Relationships - Dive Deeper into Our
          Comprehensive CRM Features and Revolutionize Your Approach to Sales
          and Marketing!
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <button className="signup">Try for free</button>
          <button className="login">Login</button>
        </div>
      </div>
      <div>
        <Image
          src={hero}
          alt={"3D rendered version of a perform chart"}
          height={500}
          width={500}
        />
      </div>
    </section>
  );
};

export default Hero;
