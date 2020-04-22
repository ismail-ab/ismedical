import React, { useState, useContext, useEffect } from "react";
import { paginationContext } from "../../Pagination";
import DoctorItem from "./DoctorItem";
import { IDoctor } from "../types/doctor";
import styles from "../doctors.module.css";

const DoctorsList: React.FC = () => {
  const { page, limit, setTotalElements } = useContext(paginationContext);
  const [doctors, setDoctors] = useState<IDoctor[]>();
  const [isLoading, setIsloading] = useState(true);

  const getDoctors = async (
    setTotalElements: Function,
    page: string,
    limit: string
  ) => {
    try {
      const requestQueryParams = `/doctors?_page=${page}&_limit=${limit}`;
      const response = await fetch(
        process.env.REACT_APP_API_BASE_URL + requestQueryParams
      );
      const doctors: IDoctor[] = await response.json();
      const totalCount = response.headers.get("x-total-count"); // this property contains the nb total of doctors
      const nbTotalDoctors: number = (totalCount && parseInt(totalCount)) || 0;

      setTotalElements(nbTotalDoctors);
      setDoctors(doctors);
      setIsloading(false);
    } catch (err) {
      alert("An error occured while getting doctors. Refresh page."); // do a smart toast :)
      setIsloading(false);
    }
  };

  useEffect(() => {
    getDoctors(setTotalElements, page, limit);
  }, [setTotalElements, page, limit]);

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
    </>
  );
};

export default DoctorsList;
