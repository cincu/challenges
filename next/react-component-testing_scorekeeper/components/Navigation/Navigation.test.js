import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);

  const navLinks = screen.getAllByRole("link");

  //  expect(navLinks).toHaveLength(2)
  expect(navLinks.length).toBe(2);
  expect(navLinks[0]).toHaveAccessibleName("Play");
  expect(navLinks[1]).toHaveAccessibleName("History");
});
