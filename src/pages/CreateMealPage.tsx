import React from "react";
import { CreateMealForm } from "../components";

const CreateMealPage: React.FC<AuthenticationProps> = ({
  user,
  authentication,
}) => {
  return <CreateMealForm user={user} authentication={authentication} />;
};

export default CreateMealPage;
