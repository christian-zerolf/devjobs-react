import { SearchForm, JobListings, Pagination, Title } from "../components";
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

  const title = loading
    ? `Cargando... - DevJobs`
    : `Resultados: ${total}, Página ${currentPage} - DevJobs`;

  return (
    <main>
      <Title text={title} />
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
