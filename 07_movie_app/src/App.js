import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(gaTrackingId);

const history = createBrowserHistory();
history.listen((response) => {
  console.log(response.location.pathname);
  ReactGA.set({ page: response.location.pathname + response.location.search });
  ReactGA.pageview(response.location.pathname + response.location.search);
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
