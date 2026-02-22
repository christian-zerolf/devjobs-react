import { JobCard } from "../";
import styles from "./JobListings.module.css";

export function JobListings({ jobs, message }) {
  return (
    <>
      <h2>Resultados de búsqueda</h2>
      <p>{message}</p>
      <div className={styles.jobsListings}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
