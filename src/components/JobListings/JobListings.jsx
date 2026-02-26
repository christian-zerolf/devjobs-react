import { JobCard } from "../";
import styles from "./JobListings.module.css";

export function JobListings({ jobs, message }) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Resultados de búsqueda</h2>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>{message}</p>
      <div className={styles.jobsListings}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
