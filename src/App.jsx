import { useState } from "react";
import { Header, Footer, SearchForm, JobListings, Pagination } from "./components";
import jobsData from "./data.json";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const RESULTS_PER_PAGE = 5;
  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE);

  const pagedResults = jobsData.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resultMessage = !jobsData
    ? "Sin resultados para mostrar"
    : `Mostrando ${(currentPage - 1) * RESULTS_PER_PAGE + 1} - ${Math.min(
        currentPage * RESULTS_PER_PAGE,
        jobsData.length,
      )} de ${jobsData.length} trabajos`;

  return (
    <>
      <Header />
      <main>
        <SearchForm />

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
      <Footer />
    </>
  );
}

export default App;
