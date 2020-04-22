import React from "react";
import DoctorsList from "./DoctorsList";
import { PaginationProvider } from "../../Pagination";

const DoctorsContainer: React.SFC = () => (
  <>
    <h2>Doctors</h2>
    <PaginationProvider urlResource="doctors">
      <DoctorsList />
    </PaginationProvider>
  </>
);

export default DoctorsContainer;
