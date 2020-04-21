import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IResource } from "../types/doctor";
import styles from "./doctorsheet.module.css";
import avatar from "../../resources/avatar.png";

const DoctorSheet: React.FC = () => {
  const { doctorid: doctorId } = useParams();
  const [isLoading, setIsloading] = useState(true);
  const [resource, setResource] = useState<IResource>();
  const [resourceId, setResourceId] = useState("");

  const getResource = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_FHIR_API_BASE_URL}/baseDstu3/Practitioner/${doctorId}`
      );
      const resource: IResource = await response.json();

      setResource(resource);
      setResourceId(resource.id);
      setIsloading(false);
    } catch (err) {
      alert("An error occured"); // do a smart toast :)
    }
  };

  useEffect(() => {
    getResource();
  }, [resourceId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!resource) {
    return <p>No doctors</p>;
  }

  if (resource.resourceType !== "Practitioner") {
    return <p>This doctor may no longer exists</p>;
  }

  const {
    prefix = "Mr.",
    family = "~No family name",
    given = "~No given Name",
  } = resource.name[0];
  const { resourceType } = resource;
  const fullName = `${prefix} ${family} ${given}`;
  const address = resource.address && resource.address[0].text;
  const telecomPhone = resource.telecom && resource.telecom[0];
  const telecomFax = resource.telecom && resource.telecom[1];
  const telecomEmail = resource.telecom && resource.telecom[2];

  return (
    <section className={styles.doctorCard}>
      <img src={avatar} alt={fullName} />
      <div className={styles.doctorDetails}>
        <div className={styles.doctorInfos}>
          <h3>{fullName}</h3>
          <h2>{resourceType}</h2>
          <p>{address}</p>
          <p>
            {telecomPhone?.system} {telecomPhone?.value}
          </p>
          <p>
            {telecomFax?.system} {telecomFax?.value}
          </p>
          <p>
            {telecomEmail?.system} {telecomEmail?.value}
          </p>
        </div>
        <button className={styles.bookButton}>Book an appointment</button>
      </div>
    </section>
  );
};

export default DoctorSheet;
