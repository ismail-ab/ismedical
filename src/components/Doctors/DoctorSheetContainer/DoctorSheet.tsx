import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IDoctor } from "../types/doctor";
import styles from "../doctors.module.css";

const DoctorSheet: React.FC = () => {
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

  const { id, name, picture, qualification, address, email, phone } = doctor;

  return (
    <section className={styles.doctorSheet}>
      <img src={picture} alt={name} />
      <div className={styles.doctorDetails}>
        <div className={styles.doctorInfos}>
          <h2>{name}</h2>
          <h3>{qualification}</h3>
          <p>{address}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <Link className={styles.doctorLink} to={`/doctors/${id}/edit`}>
          <button className={styles.editDoctorButton}>Edit this doctor</button>
        </Link>
      </div>
    </section>
  );
};

export default DoctorSheet;
