import { useEffect, useState } from "react";
// import jobsData from "../data.json";

const RESULTS_PER_PAGE = 10;

export function useFilters() {
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experienceLevel: "",
  });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);

        const params = new URLSearchParams();
        if (textToFilter) params.append("text", textToFilter);
        if (filters.technology) params.append("technology", filters.technology);
        if (filters.location) params.append("type", filters.location);
        if (filters.experienceLevel) params.append("level", filters.experienceLevel);

        const offset = (currentPage - 1) * RESULTS_PER_PAGE;
        const queryParams = params.toString();
        params.append("limit", RESULTS_PER_PAGE);
        params.append("offset", offset);

        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`);
        const json = await response.json();

        setJobs(json.data);
        setTotal(json.total);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
    // TODO: añadir elementos al array de dependencias cuando cambien los filtros
  }, [filters, textToFilter, currentPage]);

  // const jobsFilteredByFilters = jobsData.filter((job) => {
  //   return (
  //     (filters.technology === "" || job.data.technologies.includes(filters.technology)) &&
  //     (filters.location === "" || filters.location === job.data.mode) &&
  //     (filters.experienceLevel === "" ||
  //       filters.experienceLevel === job.data.seniority.toLowerCase())
  //   );
  // });

  // const jobsWithTextFilter =
  //   textToFilter === ""
  //     ? jobsFilteredByFilters
  //     : jobsFilteredByFilters.filter((job) => {
  //         return job.title.toLowerCase().includes(textToFilter.toLowerCase());
  //       });

  const totalPages = Math.ceil(total / RESULTS_PER_PAGE);

  // const pagedResults = jobsWithTextFilter.slice(
  //   (currentPage - 1) * RESULTS_PER_PAGE,
  //   currentPage * RESULTS_PER_PAGE,
  // );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resultMessage =
    jobs.length === 0
      ? "No se han encontrado empleos que coincidan con los criterios de búsqueda"
      : `Mostrando ${(currentPage - 1) * RESULTS_PER_PAGE + 1} - ${Math.min(currentPage * RESULTS_PER_PAGE, total)} de ${total} trabajos`;

  const handleSearch = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  return {
    loading,
    // jobsWithTextFilter,
    jobs,
    // pagedResults,
    total,
    totalPages,
    currentPage,
    resultMessage,
    handlePageChange,
    handleSearch,
    handleTextFilter,
  };
}
