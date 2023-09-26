import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ handleToggle }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          handleToggle(null, false);
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          handleToggle(null, true);
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
