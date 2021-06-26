import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";

test("button has correct initial text", () => {
  render(<App />);
  const buttonEl = screen.getByRole("button", { name: "Change to Blue" });
  expect(buttonEl).toHaveTextContent("Change to Blue");
});

test("button has correct initial Background color", () => {
  render(<App />);
  const buttonEl = screen.getByRole("button", { name: "Change to Blue" });
  expect(buttonEl).toHaveStyle({
    backgroundColor: "red",
  });
});
test("button properties change on click", () => {
  render(<App />);
  const buttonEl = screen.getByRole("button", { name: "Change to Blue" });
  fireEvent.click(buttonEl);
  expect(buttonEl).toHaveStyle({
    backgroundColor: "blue",
  });
  expect(buttonEl).toHaveTextContent("Change to Red");
});

test("button properties change on multiple clicks", () => {
  render(<App />);
  const buttonEl = screen.getByRole("button", { name: "Change to Blue" });
  fireEvent.click(buttonEl);
  expect(buttonEl).toHaveStyle({
    backgroundColor: "blue",
  });
  expect(buttonEl).toHaveTextContent("Change to Red");
  fireEvent.click(buttonEl);
  fireEvent.click(buttonEl);
  fireEvent.click(buttonEl);
  expect(buttonEl).toHaveStyle({
    backgroundColor: "red",
  });
  expect(buttonEl).toHaveTextContent("Change to Blue");
});

test("checkbox initial state", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("toggle checkbox", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});

test("Enable/disable button on checked checkbox", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const buttonEl = screen.getByRole("button", { name: "Change to Blue" });
  fireEvent.click(checkbox);
  expect(buttonEl).toBeDisabled();
  fireEvent.click(checkbox);
  expect(buttonEl).toBeEnabled();
  fireEvent.click(checkbox);
  expect(buttonEl).toBeDisabled();
});

test("turn button to gray on checked checkbox", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const buttonEl = screen.getByRole("button", { name: "Change to Blue" });
  fireEvent.click(checkbox);
  expect(buttonEl).toHaveStyle({
    backgroundColor: "gray",
  });
  fireEvent.click(checkbox);
  fireEvent.click(buttonEl);
  expect(buttonEl).toHaveStyle({
    backgroundColor: "blue",
  });
  fireEvent.click(checkbox);
  expect(buttonEl).toHaveStyle({
    backgroundColor: "gray",
  });
});
