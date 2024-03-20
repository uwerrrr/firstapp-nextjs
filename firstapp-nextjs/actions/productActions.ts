"use server";
import { Product } from "@/interfaces";
import { revalidatePath, revalidateTag } from "next/cache";

export const addProductToDb = async (e: FormData) => {
  const product = e.get("product")?.toString();
  const price = e.get("price")?.toString();

  if (!product || !price) return;

  const newProduct: Product = {
    product: product,
    price: price,
  };

  // POST request
  await fetch("https://65fa6ab13909a9a65b1a5bee.mockapi.io/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // revalidation
  revalidateTag("products"); // re-fetch any fetch that has tag "products"
  // revalidatePath('/') // re-fetch all fetch in a path
};
