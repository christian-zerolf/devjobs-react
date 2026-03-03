import { useState } from "react";
import styles from "./JobCard.module.css";

export function JobCard({ job }) {
  const [isApplied, setIsApplied] = useState(false);

  const handleApplyClick = (e) => {
    isApplied ? setIsApplied(false) : setIsApplied(true);

    e.currentTarget.blur();
  };

  const buttonClasses = isApplied ? "isApplied" : "";
  const buttonText = isApplied ? "Aplicado" : "Aplicar";

  return (
    <article className={styles.jobCard}>
      <div>
        <h3 className={styles.jobTitle}>{job.titulo}</h3>
        <small className={styles.jobTags}>
          {job.empresa} | {job.ubicacion}
        </small>
        <p className={styles.jobDescription}>{job.descripcion}</p>
      </div>

      <button
        className={`${styles.buttonApplyJob} ${styles[buttonClasses]}`}
        onClick={handleApplyClick}
      >
        {buttonText}
      </button>
    </article>
  );
}
