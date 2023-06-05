import { useParams } from "react-router-dom";
import { MealDetail } from "../components";

const MealDetailPage: React.FC = () => {
  const { id } = useParams();

  return <MealDetail id={id} />;
};

export default MealDetailPage;
