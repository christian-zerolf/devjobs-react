import { Link } from "../../components";

export function Header() {
  return (
    <header>
      <Link href="/" style={{ textDecoration: "none" }}>
        <h1 style={{ color: "white" }}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          DevJobs
        </h1>
      </Link>

      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/search">Empleos</Link>
        <a href="/">Empresas</a>
        <a href="/search">Salarios</a>
      </nav>

      <div>
        <devjobs-avatar service="github" username="christian-jfr" size="40"></devjobs-avatar>

        <div>
          <a href="">Publicar un empleo</a>
          <a href="">Iniciar sesión</a>
        </div>

        <devjobs-avatar service="twitch" username="cj_zerolf" size="40"></devjobs-avatar>
      </div>
    </header>
  );
}
