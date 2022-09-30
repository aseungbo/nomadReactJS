import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;

const useGAPageTracking = () => {
  const location = useLocation();
  console.log(location);
  const [initialized, setInitialized] = useState(false);

  /* localhost는 인지 못하게  */
  useEffect(() => {
    // if (!window.location.href.includes("localhost")) {
    ReactGA.initialize(gaTrackingId);
    // }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);

  //   //   // 개발용
  //     useEffect(() => {
  //         console.log(location.pathname, location.search);
  //       ReactGA.initialize(gaTrackingId);
  //       ReactGA.pageview(location.pathname + location.search);
  //     }, [location]);
};

export default useGAPageTracking;
