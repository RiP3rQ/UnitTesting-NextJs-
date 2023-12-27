import { UserProfile } from "@/components/UserProfile";
import { render, screen } from "@testing-library/react";

describe("UserProfile - Rendering", () => {
  it("should have text Email Verified when isEmailVerified is true", () => {
    render(
      <UserProfile
        displayName="Essa"
        username="essabessa"
        email="essa@bessa.com"
        isEmailVerified={true}
      />
    );
    expect(screen.getByText("Email Verified")).toBeInTheDocument();
  });

  it("should have text Email Not Verified when isEmailVerified is false", () => {
    render(
      <UserProfile
        displayName="Essa"
        username="essabessa"
        email="essa@bessa.com"
        isEmailVerified={false}
      />
    );
    expect(screen.queryByText("Email Verified")).not.toBeInTheDocument();
    expect(screen.getByText("Email Not Verified")).toBeInTheDocument();
  });

  it("should have display name end with three dots when length is greater than 30 characters", () => {
    render(
      <UserProfile
        displayName="Essa Bessa Essa Bessa Essa Bessa Essa Bessa Essa Bessa Essa Bessa Essa Bessa Essa Bessa"
        username="essabessa"
        email="essa@bessa.com"
        isEmailVerified={false}
      />
    );
    const displayName = screen.getByText(/Display Name: /);
    expect(displayName).toHaveTextContent(/.*\.\.\./);
  });

  it("should not have three dots at end of display name when less than 30 characters", () => {
    render(
      <UserProfile
        displayName="Essa"
        username="essabessa"
        email="essa@bessa.com"
        isEmailVerified={false}
      />
    );
    const displayName = screen.getByText(/Display Name: /);
    expect(displayName).not.toHaveTextContent(/.*\.\.\./);
  });
});
