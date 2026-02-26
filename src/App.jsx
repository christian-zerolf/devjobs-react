import { Header, Footer, Route } from "./components";
import { HomePage, SearchPage, NotFoundPage } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Route path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="*" component={NotFoundPage} />
      <Footer />
    </>
  );
}

export default App;
