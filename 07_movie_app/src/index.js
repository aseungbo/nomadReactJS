import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const config = process.env.GOOGLE_ANALYTICS_TRACKING_ID;
const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
  console.log("history called");
});
ReactGA.initialize(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
