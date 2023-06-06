import { useParams } from "react-router-dom";
import { MealDetail } from "../components";

const MealDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>Meal not found</div>;
  }
  return <MealDetail id={id} />;
};

export default MealDetailPage;
