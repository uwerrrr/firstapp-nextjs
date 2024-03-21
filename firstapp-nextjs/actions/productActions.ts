"use server";
import { Product } from "@/interfaces";
import { FormDataSchema } from "@/schemas/FormDataSchema";
import { revalidatePath, revalidateTag } from "next/cache";

// export const addProductToDb = async (e: FormData) => {
//   const product = e.get("product")?.toString();
//   const price = e.get("price")?.toString();

//   if (!product || !price) return;

//   const newProduct: Product = {
//     product: product,
//     price: price,
//   };

//   // POST request
//   await fetch("https://65fa6ab13909a9a65b1a5bee.mockapi.io/products", {
//     method: "POST",
//     body: JSON.stringify(newProduct),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   // revalidation
//   revalidateTag("products"); // re-fetch any fetch that has tag "products"
//   // revalidatePath('/') // re-fetch all fetch in a path
// };

export const addProductToDb = async (state: any, FormData: FormData) => {
  const validatedFields = FormDataSchema.safeParse({
    product: FormData.get("product"),
    price: Number(FormData.get("price")),
  });

  // await new Promise((resolve) => setTimeout(resolve, 1000));

  if (validatedFields.success) {
    const newProduct: Product = {
      product: validatedFields.data.product,
      price: String(validatedFields.data.price),
    };

    // POST request
    try {
      await fetch("https://65fa6ab13909a9a65b1a5bee.mockapi.io/products", {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.error("Fetch failed:", e);
      // if (typeof e === "string") {
      //   console.error(e.toUpperCase());
      // } else if (e instanceof Error) {
      //   console.error(e.message);
      // }
      if (e instanceof Error) {
        return { error: e.message };
      }
    }

    revalidateTag("products");

    return { data: validatedFields.data };
  }

  if (validatedFields.error) {
    return { error: validatedFields.error.format() };
  }
};
