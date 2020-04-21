import React, { useState, useEffect } from "react";
import DoctorItem from "./DoctorItem";
import { IDoctor } from "../../types/doctor";
import styles from "./doctorsList.module.css";

const DoctorsList: React.FC = () => {
  const [doctors, setDoctors] = useState<IDoctor[]>();
  const [isLoading, setIsloading] = useState(true);

  const getDoctors = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_BASE_URL + "/doctors"
      );
      const doctors: IDoctor[] = await response.json();

      setDoctors(doctors);
      setIsloading(false);
    } catch (err) {
      alert("An error occured while getting doctors. Refresh page."); // do a smart toast :)
      setIsloading(false);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!doctors?.length) {
    return <p>No doctors</p>;
  }

  return (
    <section className={styles.doctors}>
      {doctors.map((doctor: IDoctor) => (
        <DoctorItem key={doctor.id} doctor={doctor} />
      ))}
    </section>
  );
};

export default DoctorsList;
