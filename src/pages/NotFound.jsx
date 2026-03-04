import { Title } from "../components";

export function NotFoundPage() {
  const title = `404 Not Found.`;
  return (
    <>
      <Title text={title} />
      <h1 style={{ color: "red" }}>404 Not Found</h1>
      <div style={{ backgroundColor: "#0fa0fa", width: "404px", height: "404px" }}></div>
    </>
  );
}
