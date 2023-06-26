import { useParams } from "react-router-dom";
import { MealDetail } from "../components";

interface AuthenticationProps {
  user: User | Chef | null;
  authentication: (user: Partial<User | Chef> | null) => void;
}

const MealDetailPage: React.FC<AuthenticationProps> = (props) => {
  const { user } = props;
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>Meal not found</div>;
  }
  return <MealDetail id={id} user={user} />;
};

export default MealDetailPage;
