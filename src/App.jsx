import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";

/* Footer Help & FAQs Pages */
import About from "./pages/footer/footerpages/About";
import Reviews from "./pages/footer/footerpages/Reviews";
import Career from "./pages/footer/footerpages/Career";
import Contact from "./pages/footer/footerpages/Contact";
import Terms from "./pages/footer/footerpages/Terms";
import Returns from "./pages/footer/footerpages/Returns";
import Privacy from "./pages/footer/footerpages/Privacy";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Footer Help & FAQs Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
