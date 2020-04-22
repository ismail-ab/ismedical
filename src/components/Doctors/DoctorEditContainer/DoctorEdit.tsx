import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../../common/Input";
import { IDoctor } from "../types/doctor";
import styles from "../doctors.module.css";

const DoctorEdit: React.FC = () => {
  const { doctorid: doctorId } = useParams();
  const history = useHistory();
  const [doctor, setDoctor] = useState<IDoctor>();
  const [isLoading, setIsloading] = useState(true);

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

  const editDoctor = async (editedDoctor?: IDoctor) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/doctors/${doctorId}`,
        {
          method: "PUT",
          headers: new Headers({ "content-type": "application/json" }),
          body: JSON.stringify(editedDoctor),
        }
      );
      const doctor: IDoctor = await response.json();

      setDoctor(doctor);
      setIsloading(false);

      history.push("/doctors/" + doctor.id);
    } catch (err) {
      alert("An error occured while editing doctor. Refresh page."); // do a smart toast :)
      setIsloading(false);
    }
  };

  const onInputChange = (event: React.ChangeEvent<any>) => {
    if (doctor) {
      setDoctor({
        ...doctor,
        [event.target.placeholder]: event.target.value,
      });
    }
  };

  const onSubmit = (event: React.ChangeEvent<any>) => {
    event.preventDefault();

    editDoctor(doctor);
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

  return (
    <section className={styles.doctorSheet}>
      <img src={doctor.picture} alt={doctor.name} />
      <div className={styles.doctorEditForm}>
        <form onSubmit={onSubmit}>
          <div className={styles.doctorsInfos}>
            <Input
              property="name"
              value={doctor.name}
              onChange={onInputChange}
            />
            <Input
              property="qualification"
              value={doctor.qualification}
              onChange={onInputChange}
            />
            <Input
              property="address"
              value={doctor.address}
              onChange={onInputChange}
            />
            <Input
              property="email"
              value={doctor.email}
              onChange={onInputChange}
            />
            <Input
              property="phone"
              value={doctor.phone}
              onChange={onInputChange}
            />
          </div>
          <button className={styles.editDoctorButton}>
            Save modifications
          </button>
        </form>
      </div>
    </section>
  );
};

export default DoctorEdit;
