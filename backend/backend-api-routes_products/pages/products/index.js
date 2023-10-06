// - Create the file `/pages/products/index.js`.
// - Import the `useSWR` hook, create a fetcher and fetch `/api/products`.
// - Map over the fetched `data` object to create a list of all products
//  where you display their information.
// - Switch to the browser and open `/products`: you should now see a
//  (rarely styled) list of all products.

// ✨ Great work, you've consumed your own api route to display its data
// in the frontend!

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Product() {
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);
  if (error) return <div>HUHU NOT WERKING</div>;
  if (isLoading) return <div>HUHU U WAIT FOR IT</div>;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
