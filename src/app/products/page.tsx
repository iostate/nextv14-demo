'use client';
import Link from 'next/link';
export default function Products() {
  const productId = 100;
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <h2>
          <li>
            <Link href="/products/[productId]" as="/products/1">
              Product 1
            </Link>
          </li>
        </h2>
        <h2>
          <li>
            <Link href="/products/[productId]" as="/products/2">
              Product 2
            </Link>
          </li>
        </h2>
        <h2>
          <li>
            {/* Replace will replace the history of links visited from the stack */}
            <Link href="/products/[productId]" as="/products/3" replace>
              Product 3
            </Link>
          </li>
        </h2>
        <h2>
          <li>
            <Link href={`/products/${productId}`}>Product {productId}</Link>
          </li>
        </h2>
      </ul>
    </div>
  );
}
