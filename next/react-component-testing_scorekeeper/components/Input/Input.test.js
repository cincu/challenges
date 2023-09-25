import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

// You can now go a step further and not only check for a component being rendered,
//but also for its callback function being called.

// Switch to `components/Input/Input.test.js` and write the tests for all given acceptance criteria.

// - To check for attributes like `placeholder` or `name`,
//you can use the matcher `toHaveAttribute(attributeName, value)`.
// - The `Input` component receives an `onChange` callback; in order to test it,
//remember that you have to mock if first.
// - You can check how often a function has been called with
//`toHaveBeenCalledTimes(numberOfExpectedCalls)`.

test("renders a label and an input with the correct attributes", () => {
  render(<Input />);
  //checking if an element is rendered with certain attributes using tohaveatr::::
  const textbox = getByRole(textbox, { name: "name" });
  expect(screen.getByRole(textbox, { name: "name" })).toHaveAttribute(
    ("placeholder", "placeholder") && ("name", "name")
  );
});

test("calls callback on every user input", async () => {
  //creating mock-functions:::::
  const onChange = jest.fn();
  const user = userEvent.setup();
  render(<Input onChange={onChange} />);
  const gameInput = screen.getByRole("StyledInput", {
    name: /nameOfGame/i,
  });
  const playerInput = screen.getByRole("StyledInput", {
    name: /playerNames/i,
  });
  await user.type(gameInput, "abc");
  await user.type(playerInput, "abc");
  getByLabelText;

  expect(onChange).toHaveBeenCalledTimes(1);
});
