import { Main } from "next/document";

import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <p>
        <Link href="/users">users link</Link>
      </p>
      <p>
        <Link href="/form">form link</Link>
      </p>
      <ProductCard />
    </main>
  );
}
