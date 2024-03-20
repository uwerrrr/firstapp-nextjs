import ProductList from "../components/ProductList";
import { addProductToDb } from "@/actions/productActions";

const form = async () => {
  return (
    <div className="h-3/6 flex flex-col items-center">
      <h1 className="text-3xl font-bold ">form page</h1>

      {/* form section */}
      <form
        action={addProductToDb}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="product"
          type="text"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter Product name..."
        />
        <input
          name="price"
          type="text"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter Price amount..."
        />
        <button className="border bg-blue-500 text-white italic p-2 rounded-md">
          Add product
        </button>
      </form>
      {/* <NavButton /> */}
      <ProductList />
    </div>
  );
};

export default form;
