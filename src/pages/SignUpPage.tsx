import { SignUpForm } from "../components";

const SignUpPage: React.FC<AuthenticationProps> = ({
  user,
  authentication,
}) => {
  return <SignUpForm user={user} authentication={authentication} />;
};

export default SignUpPage;
