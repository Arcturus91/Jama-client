import React from "react";
import { ChefUpdate } from "../components";

const UpdateChefPage: React.FC<AuthenticationProps> = ({
  user,
  authentication,
}) => {
  return <ChefUpdate user={user} authentication={authentication} />;
};

export default UpdateChefPage;
