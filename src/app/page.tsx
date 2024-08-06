import React from 'react';
import Link from 'next/link';
// const HelloWorld = () => {
//     return (<h1>Hello World</h1>)
// };

function HelloWorld() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
}

export default HelloWorld;
