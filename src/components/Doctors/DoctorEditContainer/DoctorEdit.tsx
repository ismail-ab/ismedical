import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IDoctor } from "../types/doctor";
import styles from "./doctoredit.module.css";

const DoctorEdit: React.FC = () => {
  const { doctorid: doctorId } = useParams();
  const [isLoading, setIsloading] = useState(true);
  const [doctor, setDoctor] = useState<IDoctor>();

  const getDoctor = async (doctorId?: string) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/doctors/${doctorId}`
      );
      const doctor: IDoctor = await response.json();

      setDoctor(doctor);
      setIsloading(false);
    } catch (err) {
      alert("An error occured while getting doctor. Refresh page."); // do a smart toast :)
      setIsloading(false);
    }
  };

  useEffect(() => {
    getDoctor(doctorId);
  }, [doctorId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!doctor) {
    return <p>No doctor</p>;
  }

  const { name, picture, qualification, address, email, phone } = doctor;

  return (
    <section className={styles.doctorCard}>
      <img src={picture} alt={name} />
      <div className={styles.doctorDetails}>
        <div className={styles.doctorInfos}>
          <h3>{name}</h3>
          <h2>{qualification}</h2>
          <p>{address}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <button disabled={true} className={styles.bookButton}>
          Book an appointment
        </button>
      </div>
    </section>
  );
};

export default DoctorEdit;
