import React from "react";
import ReactDOM from "react-dom";
import Routing from "./Routing";
import './styles/index.scss';

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <div className='w-full h-screen'>
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className="h-full w-full max-w-screen-sm">
          <Navbar/>
          <Routing />
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
if (process.env.NODE_ENV === "production") {
  serviceWorkerRegistration.register();
  reportWebVitals();
} else {
  serviceWorkerRegistration.unregister();
}
