import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const hotjarScript = document.createElement('script');
hotjarScript.innerHTML = ` (function(h,o,t,j,a,r){
  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
  h._hjSettings={hjid:3519713,hjsv:6};
  a=o.getElementsByTagName('head')[0];
  r=o.createElement('script');r.async=1;
  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
  a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
