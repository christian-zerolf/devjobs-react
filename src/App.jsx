import { Header, Footer, Route } from "./components";
import { Contact, HomePage, SearchPage, NotFoundPage } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Route path="/" component={HomePage} />
      <Route path="/contact" component={Contact} />
      <Route path="/search" component={SearchPage} />
      <Route path="*" component={NotFoundPage} />
      <Footer />
    </>
  );
}

export default App;
