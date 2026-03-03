import { useEffect } from "react";
import { SearchForm, JobListings, Pagination } from "../components";
import { useFilters } from "../hooks";

export function SearchPage() {
  const {
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
  } = useFilters();

  useEffect(() => {
    document.title = `Resultados: ${total}, Página ${currentPage} - DevJobs`;
  }, [total, currentPage]);

  return (
    <main>
      <SearchForm onSearch={handleSearch} onTextFilter={handleTextFilter} />

      <section>
        {/* <JobListings jobs={jobs.data} message={resultMessage} /> */}
        {loading ? (
          <JobListings jobs={jobs} message={"Cargando empleos..."} />
        ) : (
          <JobListings jobs={jobs} message={resultMessage} />
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
