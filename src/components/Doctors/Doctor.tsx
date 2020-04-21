import React from "react";
import { IDoctor } from "../types/doctor";
import styles from "./doctorsList.module.css";
import avatar from "./avatar.png";

interface IDoctorDetailsProps {
  doctor: IDoctor;
}

const DoctorDetails: React.SFC<IDoctorDetailsProps> = ({ doctor }) => {
  const {
    prefix = "Mr.",
    family = "~No Family name",
    given = "~No given Name",
  } = doctor?.resource?.name[0];
  const fullName = `${prefix} ${family} ${given}`;

  return (
    <div className={styles.doctorCard}>
      <div className={styles.doctorImage}>
        <img src={avatar} alt={fullName} />
      </div>
      <div className={styles.doctorInfos}>
        <h6>{fullName}</h6>
      </div>
    </div>
  );
};

export default DoctorDetails;
