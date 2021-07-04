import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: "Nilesh",
          username: "nilesh",
        },
        {
          id: 2,
          name: "Avinash",
          username: "avinash",
        },
        {
          id: 3,
          name: "Roshan",
          username: "Roshan",
        },
        {
          id: 4,
          name: "Jignesh",
          username: "Jignesh",
        },
        {
          id: 5,
          name: "Anil",
          username: "anil",
        },
      ])
    );
  }),
];
