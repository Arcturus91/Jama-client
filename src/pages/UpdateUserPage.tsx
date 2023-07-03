import React from "react";
import { UserUpdate } from "../components";

const UpdateUserPage: React.FC<AuthenticationProps> = ({
  user,
  authentication,
}) => {
  return <UserUpdate user={user} authentication={authentication} />;
};

export default UpdateUserPage;
