import React from "react";

// Pages
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

const routes = {
  "/": () => <Home />,
  "/pagenotfound": () => <PageNotFound />
};

export default routes;
