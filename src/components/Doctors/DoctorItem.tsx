import React from "react";
import { Link } from "react-router-dom";
import { IDoctor } from "../types/doctor";
import styles from "./doctorsList.module.css";
import avatar from "../../resources/avatar.png";

interface IDoctorItemProps {
  doctor: IDoctor;
}

const DoctorItem: React.SFC<IDoctorItemProps> = ({ doctor }) => {
  const {
    prefix = "Mr.",
    family = "~No family name",
    given = "~No given Name",
  } = doctor.resource.name[0];
  const { resourceType, id } = doctor?.resource;
  const fullName = `${prefix} ${family} ${given}`;

  return (
    <div className={styles.doctorCard}>
      <Link to={"/doctors/" + id}>
        <div className={styles.doctorImage}>
          <img src={avatar} alt={fullName} />
        </div>
        <div className={styles.doctorInfos}>
          <h6>{fullName}</h6>
          <h5>{resourceType}</h5>
        </div>
      </Link>
    </div>
  );
};

export default DoctorItem;
