import React from "react";
import { LogInForm } from "../components";

const LoginPage: React.FC<AuthenticationProps> = ({ user, authentication }) => {
  return <LogInForm user={user} authentication={authentication} />;
};

export default LoginPage;
