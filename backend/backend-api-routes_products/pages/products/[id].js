// The details page works quite similar to the All Listings Page,
//  but there are some minor adaptions:

// - Create the file `/pages/products/[id].js`.
// - Use the `useRouter` hook to access the `id` query parameter from
// `router.query`.
// - Fetch from `/api/products/[id]` (you need to interpolate the query
//      `id` accordingly).
// - The return statement does not return a list, but a single product.

// Switch to the browser and open `/products/[someId]`: you should now
// see the product with the id you've passed in the url.
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function SingleProductPage() {
  const id = useRouter().query.id;
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/api/products/${id}`, fetcher);
  if (error) return <div>HUHU NOT WERKING</div>;
  if (isLoading) return <div>HUHU U WAIT FOR IT</div>;
  return <h1>{product.name}</h1>;
}
