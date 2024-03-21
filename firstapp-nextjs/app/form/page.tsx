"use client";

import { useFormState, useFormStatus } from "react-dom";
import ProductList from "../components/ProductList";
import { addProductToDb } from "@/actions/productActions";
import SubmitBtn from "../components/SubmitBtn";
import NavButton from "../components/NavButton";

const form = () => {
  const [state, formaAction] = useFormState(addProductToDb, null); // action: addEntry, initialState: null

  return (
    <div className="">
      <NavButton />
      
      <h1 className="text-3xl font-bold text-center">form page</h1>

      {/* form section */}
      <section className="flex flex-col gap-5 justify-center md:flex-row m-6">
        <form
          action={formaAction}
          className="flex flex-1 flex-col gap-4 md:w-1/5"
        >
          <input
            name="product"
            type="text"
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Enter Product name..."
          />
          <input
            name="price"
            type="number"
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Enter Price amount..."
          />
          {/* <button className="border bg-blue-500 text-white italic p-2 rounded-md">
            Add product
          </button> */}
          <SubmitBtn btnLabel={"Add Product"} pendingLabel={"Adding..."} />
        </form>
        <div className="flex-1 rounded-lg bg-cyan-500 p-8 text-white md:w-1/2 ">
          <h3 className="font-bold">Submit response: </h3>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      </section>

      <ProductList />
    </div>
  );
};

export default form;
