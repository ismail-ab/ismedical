import { useLocation } from "react-router-dom";

// hook took from https://reacttraining.com/react-router/web/example/query-parameters
const useQuery = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search);
};

export default useQuery;
