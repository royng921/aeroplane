import React from "react";

const WasteManagement = () => {
  return (
    <div className="mt-8 lg:mt-20 mx-auto max-w-[85%] xl:max-w-[100%] flex flex-col lg:flex-row lg:w-[80vw] justify-center text-white">
      <div className="flex-1 mb-4 xl:mr-3">
        <h1 className="text-2xl xl:text-[2.15rem] font-bold mb-2 xl:mb-5">
          我勁唔勁!!!!
        </h1>
        <p className="mb-4 xl:text-[1.5rem] max-w-[85%]">
          勁到癲!!
        </p>
        <ul className="list-disc mb-4 ml-3 xl:text-[1.25rem]">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
      <div className="flex-1 lg:mb-4 xl:ml-3">
        <h1 className="text-2xl font-bold mb-2 xl:text-[2.15rem] xl:mb-5">
          西西
        </h1>
        <p className="mb-4 xl:text-[1.5rem]  max-w-[85%]">
          CTO
        </p>
        <ul className="list-disc mb-4 ml-3 xl:text-[1.25rem]">
          <li>西西射波勁到</li>
          <li>牙朗又射</li>
          <li>牙葛又射</li>
          <li>CTO都射</li>
          <li>射到癲</li>
          <li>射到傻</li>
        </ul>
      </div>
    </div>
  );
};

export default WasteManagement;
