import React, { useState } from "react";
import styles from "../components/RailwayConcession/RailwayUpdateConcession.module.css";
import RailwayUpdateConcessionList from "../components/RailwayConcession/RailwayUpdateConcessionList.jsx";
import { UserContext } from "./_app";
import SideBar from "../components/Sidebar/Sidebar";

const RailwayConcession = () => {
  const [certificateNumber, setCertificateNumber] = useState("");
  const { user } = React.useContext(UserContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
        height: "100vh",
        marginRight: "3rem",
        overflow: "hidden",
      }}
    >
      <SideBar user={user} />
      <div style={{ padding: "16px", marginBottom: "16px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
        >
          <div>
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
              Update or Cancel a Concession
            </h1>
            <p
              style={{
                fontSize: "16px",
                marginBottom: "16px",
                color: "var(--primary-2)",
              }}
            >
              Update a Concession entry by extending its date or Cancel a it
            </p>
            <div
              className={styles.certificateSection}
              style={{ width: "60%", marginTop: "4rem", marginBottom: "2rem" }}
            >
              <span className={styles.modalInformation}>
                Enter Certificate Number
              </span>
              <input
                onChange={(e) => {
                  setCertificateNumber(e.target.value);
                }}
                style={{ border: "1px solid #D9D9D9", width: "110%" }}
              ></input>
            </div>
          </div>
        </div>
        <RailwayUpdateConcessionList />
      </div>
    </div>
  );
};

export default RailwayConcession;
