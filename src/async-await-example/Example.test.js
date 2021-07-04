import { render, screen } from "@testing-library/react";
import { formatUsername } from "./formatUsername";
import Test from "./index";
import { server } from "./mocks/server";
import { rest } from "msw";
describe("format username", () => {
  test("it shows formatted username", () => {
    expect(formatUsername("Nilesh")).toBe("@Nilesh");
  });
  test("edge case with format username starting with @", () => {
    expect(formatUsername("@Nilesh")).toBe("@Nilesh");
  });
});

describe("Component testing", () => {
  test("showing loading text", () => {
    render(<Test />);
    const loading = screen.getByText(/loading.../i);
    expect(loading).toBeInTheDocument();
  });

  test("it shows a list users", async () => {
    render(<Test />);
    const list = await screen.findAllByRole("listitem");
    expect(list.length).toBe(5);
  });

  test("its shows an error message when API return an error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({ message: "Really Sorry!! Internal Server Occured" })
          );
        }
      )
    );

    render(<Test />);
    const error = await screen.findByRole("alert");
    expect(error).toHaveTextContent(/internal server error/i);
  });
});
