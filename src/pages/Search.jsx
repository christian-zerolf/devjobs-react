import { useState } from "react";
import { useEffect } from "react";
import { SearchForm, JobListings, Pagination } from "../components";
import jobsData from "../data.json";

const RESULTS_PER_PAGE = 4;

export function SearchPage() {
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experienceLevel: "",
  });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsFilteredByFilters = jobsData.filter((job) => {
    return (
      (filters.technology === "" || job.data.technologies.includes(filters.technology)) &&
      (filters.location === "" || filters.location === job.data.mode) &&
      (filters.experienceLevel === "" ||
        filters.experienceLevel === job.data.seniority.toLowerCase())
    );
  });

  const jobsWithTextFilter =
    textToFilter === ""
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) => {
          return job.title.toLowerCase().includes(textToFilter.toLowerCase());
        });

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE);

  const pagedResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resultMessage = !jobsFilteredByFilters
    ? "Sin resultados para mostrar"
    : `Mostrando ${(currentPage - 1) * RESULTS_PER_PAGE + 1} - ${Math.min(
        currentPage * RESULTS_PER_PAGE,
        jobsWithTextFilter.length,
      )} de ${jobsWithTextFilter.length} trabajos`;

  const handleSearch = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  useEffect(() => {
    document.title = `Resultados: ${jobsWithTextFilter.length}, Página ${currentPage} - DevJobs`;
  }, [jobsWithTextFilter, currentPage]);

  return (
    <main>
      <SearchForm onSearch={handleSearch} onTextFilter={handleTextFilter} />

      <section>
        <JobListings jobs={pagedResults} message={resultMessage} />
        {/* <p>{resultMessage}</p> */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
