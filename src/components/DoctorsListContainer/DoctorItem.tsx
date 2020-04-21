import React from "react";
import { Link } from "react-router-dom";
import { IDoctor } from "../../types/doctor";
import styles from "./doctorsList.module.css";

interface IDoctorItemProps {
  doctor: IDoctor;
}

const DoctorItem: React.SFC<IDoctorItemProps> = ({ doctor }) => {
  const { id, name, picture, qualification } = doctor;

  return (
    <div className={styles.doctorCard}>
      <Link className={styles.doctorLink} to={"/doctors/" + id}>
        <div className={styles.doctorImage}>
          <img src={picture} alt={name} />
        </div>
        <div className={styles.doctorInfos}>
          <h4>{name}</h4>
          <h5>{qualification}</h5>
        </div>
      </Link>
    </div>
  );
};

export default DoctorItem;
