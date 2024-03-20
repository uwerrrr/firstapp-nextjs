import { z } from "zod";

export const FormDataSchema = z.object({
  product: z.string().min(1, "Product name is required."),
  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .positive("Price must be a positive number."),
});
