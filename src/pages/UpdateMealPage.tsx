import React from "react";
import { MealUpdate } from "../components";
import { Navigate } from "react-router-dom";

const UpdateMealPage: React.FC<AuthenticationProps> = ({
  user,
  authentication,
}) => {
  console.log('yo soy user',user)
  return user?.type==='chef' ? <MealUpdate user={user} authentication={authentication} /> : <Navigate to="/" />;
};

export default UpdateMealPage;

