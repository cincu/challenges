import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  const Container = styled.div``;
  return (
    <div>
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </div>
  );
}
