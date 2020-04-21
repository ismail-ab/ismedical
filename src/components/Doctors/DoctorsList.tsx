import React, { useState, useEffect } from "react";
import Doctor from "./Doctor";
import { IDoctorsResources, IDoctor } from "../types/doctor";
import styles from "./doctorsList.module.css";

const DoctorsList: React.FC = () => {
  const [doctorsResources, setDoctorsResources] = useState<IDoctorsResources>();
  const getDoctorsResources = async () => {
    const response = await fetch(
      process.env.REACT_APP_FHIR_API_BASE_URL + "/baseDstu3/Practitioner"
    );
    const doctorsResources: IDoctorsResources = await response.json();

    setDoctorsResources(doctorsResources);
  };

  useEffect(() => {
    getDoctorsResources();
  }, [doctorsResources]);

  if (!doctorsResources?.entry?.length) {
    return <p>No doctors</p>;
  }

  return (
    <section className={styles.doctors}>
      {doctorsResources.entry.map((doctor: IDoctor) => {
        return <Doctor doctor={doctor} />;
      })}
    </section>
  );
};

export default DoctorsList;
