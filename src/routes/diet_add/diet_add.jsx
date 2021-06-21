import React, { useEffect } from "react";
import DietDirectly from "../../components/diet_directly/diet_directly";
import DietSearch from "../../components/diet_search/diet_search";
import styles from "./diet_add.module.css";
const DietAdd = ({
  authService,
  history,
  database,
  foodSearch,
  loadUserInformation,
  uid,
  user,
  dateObject,
  addDiet,
}) => {
  useEffect(() => {
    authService.onAuthStateChanged((USER) => {
      if (!USER) {
        history.push("/");
      }
    });
  });
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <DietSearch
          database={database}
          foodSearch={foodSearch}
          loadUserInformation={loadUserInformation}
          uid={uid}
          user={user}
          dateObject={dateObject}
          addDiet={addDiet}
        />
        <hr className={styles.line} />
        <DietDirectly
          database={database}
          loadUserInformation={loadUserInformation}
          uid={uid}
          user={user}
          dateObject={dateObject}
          addDiet={addDiet}
        />
      </div>
    </div>
  );
};

export default DietAdd;
