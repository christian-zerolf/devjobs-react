import { useId } from "react";
import { useSearchForm } from "../../hooks";

export function SearchForm({ onSearch, onTextFilter }) {
  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperienceLevel = useId();

  const { handleSubmit, handleTextChange } = useSearchForm({
    idTechnology,
    idLocation,
    idExperienceLevel,
    idText,
    onSearch,
    onTextFilter,
  });

  return (
    <section className="jobs-search">
      <h1>Encuentra tu próximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico.</p>

      <form onChange={handleSubmit} id="jobs-search-form" role="search">
        <div className="search-bar">
          <svg
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          <input
            name={idText}
            onChange={handleTextChange}
            id="jobs-search-input"
            type="text"
            placeholder="Buscar trabajos, empresas o habilidades"
          />
          <button type="submit" style={{ position: "absolute", right: "4px" }}>
            Buscar
          </button>
        </div>

        <div className="search-filters">
          <select name={idTechnology} id="filter-technology">
            <option value="">Tecnología</option>
            <optgroup label="Lenguajes de Programación">
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python</option>
              <option value="swift">Swift</option>
              <option value="kotlin">Kotlin</option>
              <option value="java">Java</option>
              <option value="csharp">C#</option>
              <option value="c++">C++</option>
              <option value="ruby">Ruby</option>
              <option value="php">PHP</option>
            </optgroup>

            <optgroup label="Frameworks">
              <option value="rails">Ruby on Rails</option>
              <option value="spring">Spring Boot</option>
              <option value="django">Django</option>
              <option value="fastapi">FastAPI</option>
            </optgroup>
            <hr />
            <option value="nodejs">Node.js</option>
            <option value="express">Express</option>
            <option value="react">React</option>
            <option value="react native">React Native</option>
            <option value="flutter">Flutter</option>
            <option value="pandas">Pandas</option>
            <option value="sql">SQL</option>
            <option value="postgresql">PostgreSQL</option>
            <option value="mongodb">MongoDB</option>
            <option value="aws">AWS</option>
            <option value="azure">Azure</option>
            <option value="powerbi">Power BI</option>
            <option value="figma">Figma</option>
          </select>

          <select name={idLocation} id="filter-location">
            <option value="">Ubicación</option>
            <option value="argentina">Argentina</option>
            <option value="chile">Chile</option>
            <option value="colombia">Colombia</option>
            <option value="españa">España</option>
            <option value="mexico">México</option>
            <option value="peru">Perú</option>
            <option value="remote">Remoto</option>
          </select>

          <select name={idExperienceLevel} id="filter-seniority">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </div>
      </form>
    </section>
  );
}
