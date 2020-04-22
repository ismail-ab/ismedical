import React, { createContext, useState } from "react";
import Pagination from "../components/Pagination";
import useQuery from "../../../hooks/useQuery";

interface IPaginationContext {
  page: string;
  limit: string;
  totalElements: number;
  setTotalElements: Function;
}

interface IPaginationProvider {
  urlResource: string;
}

const initialState: IPaginationContext = {
  page: "1",
  limit: "20",
  totalElements: 0,
  setTotalElements: () => null,
};

export const paginationContext = createContext<IPaginationContext>(
  initialState
);

export const PaginationProvider: React.FC<IPaginationProvider> = ({
  urlResource,
  children,
}) => {
  const [totalElements, setTotalElements] = useState(0);

  const page: string = useQuery().get("page") || "1";
  const limit: string = useQuery().get("limit") || "20";

  return (
    <paginationContext.Provider
      value={{ page, limit, totalElements, setTotalElements }}
    >
      {children}
      <Pagination urlResource={urlResource} />
    </paginationContext.Provider>
  );
};
