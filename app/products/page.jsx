"use client";
import { useEffect, useState } from "react";

import { CardImage } from "@/components/Card";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);
  console.log(products);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <CardImage
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.thumbnail}
          />
        ))}
      </div>
    </>
  );
}

// export default async function Products() {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   const products = data.products;
//   console.log(products);
//   return (
//     <>
//       <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
//         {products.map((product) => (
//           <CardImage
//             key={product.id}
//             id={product.id}
//             title={product.title}
//             description={product.description}
//             image={product.thumbnail}
//           />
//         ))}
//       </div>
//     </>
//   );
// }
