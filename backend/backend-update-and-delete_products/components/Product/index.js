import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { useState } from "react";
import { StyledButton } from "../Button/Button.styled";
import ProductForm from "../ProductForm";
export default function Product() {
  const router = useRouter();
  const [isEditMode, setIsEditMode] = useState(false);
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch("/api/products", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
    event.target.reset();
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      {isEditMode && (
        <ProductForm isEditMode={isEditMode} onSubmit={handleEditProduct} />
      )}
      <StyledButton
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit fish
      </StyledButton>

      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
