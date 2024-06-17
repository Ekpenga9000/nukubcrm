import React from "react";
import dynamic from "next/dynamic";

const Form = dynamic(() => import("./Form"), {
  ssr: false,
});

const page = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <Form />
    </section>
  );
};

export default page;
