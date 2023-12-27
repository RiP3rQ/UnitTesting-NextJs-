import { UserList } from "@/components/UserList";
import { render, screen } from "@testing-library/react";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("UserList - Rendering", () => {
  it("should have the text anson", async () => {
    render(<UserList />);
    expect(await screen.findByText("essa")).toBeInTheDocument();
    expect(screen.queryByText("No Users")).not.toBeInTheDocument();
  });

  it("should have username mike rendered", async () => {
    server.use(
      rest.get("/api/users", (req: any, res: any, ctx: any) => {
        return res(ctx.json([{ id: 2, username: "bessa" }]));
      })
    );
    render(<UserList />);
    expect(await screen.findByText("bessa")).toBeInTheDocument();
  });
});
