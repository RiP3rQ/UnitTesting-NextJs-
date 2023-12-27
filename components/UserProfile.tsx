type UserProfileProps = {
  displayName: string;
  username: string;
  email: string;
  isEmailVerified: boolean;
};

export const UserProfile: React.FC<UserProfileProps> = ({
  displayName,
  username,
  email,
  isEmailVerified,
}) => (
  <div>
    <div>
      <span>
        Display Name:{" "}
        {displayName.length > 30
          ? displayName.slice(0, 28).concat("...")
          : displayName}
      </span>
    </div>
    <div>
      <span>Username: {username}</span>
    </div>
    <div>
      <span>Email: {email}</span>
    </div>
    <div>
      Verified:
      <span>{isEmailVerified ? "Email Verified" : "Email Not Verified"}</span>
    </div>
  </div>
);
