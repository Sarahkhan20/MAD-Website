import RailwayUpdateConcessionCard from "./RailwayUpdateConcessionCard";
import styles from "./RailwayConcession.module.css";

const RailwayUpdateConcessionList = () => {
  const concessionRequest = [
    {
      name: "BOHRA PRATHAM SURESH",
      gender: "Male",
      type: "WESTERN",
      from: "Charni Road",
      certificateNumber: "Z 0182984",
      to: "Bandra",
      class: "I (First)",
      mode: "QTY",
      dateOfIssue: "19/07/05",
      address:
        "SHREEPATI ARADHNA, C WING, 9TH FLOOR, 903 KABUTAR KHANA, BHULESHWAR, MUMBAI - 400002",
      dateOfBirth: "31/01/05",
      documents: ["ID card", "Previous pass"],
    },
    {
      name: "SMITHA RAO",
      gender: "Female",
      type: "SOUTHERN",
      from: "CST",
      certificateNumber: "Z 0182984",
      to: "Thane",
      class: "II (Second)",
      mode: "MONTHLY",
      dateOfIssue: "19/07/10",
      address: "SUNSHINE APARTMENTS, FLAT NO. 301, PALI HILL, MUMBAI - 400050",
      dateOfBirth: "15/05/03",
      documents: ["ID card", "Residential proof"],
    },
    // Add more items as needed
  ];

  return (
    <div className={styles.scrollContainer}>
      {concessionRequest.map((request, index) => (
        <RailwayUpdateConcessionCard key={index} request={request} />
      ))}
    </div>
  );
};

export default RailwayUpdateConcessionList;
