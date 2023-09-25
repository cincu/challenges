import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const playAnchor = screen.getByRole("link", { name: "Play" });
  expect(playAnchor).toBeInTheDocument();
  const historyAnchor = screen.getByRole("link", { name: "History" });
  expect(historyAnchor).toBeInTheDocument();
});
// getAllByRole
