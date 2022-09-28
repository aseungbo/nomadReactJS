import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import ReactGA from "react-ga";
// import { createBrowserHistory } from "history";

const config = process.env.GOOGLE_ANALYTICS_TRACKING_ID;
ReactGA.initialize(config);

// const history = createBrowserHistory();
// history.listen((location) => {
//   console.log("history called");
//   ReactGA.set({ page: location.pathname });
//   ReactGA.pageview(location.pathname);
// });

function App() {
  console.log("App called");
  // ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        {/* <Route path="/" element={<Home />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
