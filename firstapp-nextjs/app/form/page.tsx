import { redirect } from "next/navigation";
import NavButton from "../components/NavButton";

const form = () => {
  return (
    <div className="h-3/6 flex flex-col items-center">
      <h1 className="text-3xl font-bold ">form</h1>
      <form action="" className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter Product name..."
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter Price amount..."
        />
        <button className="border bg-blue-500 text-white italic p-2 rounded-md">
          Add product
        </button>
      </form>
      <NavButton />
    </div>
  );
};

export default form;
