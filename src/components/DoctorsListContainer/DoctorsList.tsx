import React, { useState, useEffect } from "react";
import useQuery from "../../hooks/useQuery";
import DoctorItem from "./DoctorItem";
import Pagination from "../Pagination";
import { IDoctor } from "../../types/doctor";
import styles from "./doctorsList.module.css";

const DoctorsList: React.FC = () => {
  const page: string = useQuery().get("page") || "1";
  const limit: string = useQuery().get("limit") || "20";
  const [doctors, setDoctors] = useState<IDoctor[]>();
  const [nbTotalDoctors, setNbTotalDoctors] = useState(0); // as we limit to 20 doctors, we need the nb total of doctors for pagination
  const [isLoading, setIsloading] = useState(true);

  const getDoctors = async (page: string, limit: string) => {
    try {
      const requestQueryParams = `/doctors?_page=${page}&_limit=${limit}`;
      const response = await fetch(
        process.env.REACT_APP_API_BASE_URL + requestQueryParams
      );
      const doctors: IDoctor[] = await response.json();
      const totalCount = response.headers.get("x-total-count"); // this property contains the nb total of doctors
      const nbTotalDoctors: number = (totalCount && parseInt(totalCount)) || 0;

      setNbTotalDoctors(nbTotalDoctors);
      setDoctors(doctors);
      setIsloading(false);
    } catch (err) {
      alert("An error occured while getting doctors. Refresh page."); // do a smart toast :)
      setIsloading(false);
    }
  };

  useEffect(() => {
    getDoctors(page, limit);
  }, [page, limit]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!doctors?.length) {
    return <p>No doctors</p>;
  }

  return (
    <>
      <section className={styles.doctors}>
        {doctors.map((doctor: IDoctor) => (
          <DoctorItem key={doctor.id} doctor={doctor} />
        ))}
      </section>
      <Pagination urlResource="doctors" totalElements={nbTotalDoctors} />
    </>
  );
};

export default DoctorsList;
