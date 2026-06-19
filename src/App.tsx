import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const AboutMePage = lazy(() => import("./pages/AboutMePage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactMePage = lazy(() => import("./pages/ContactMePage"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoadingProvider>
            <Suspense>
              <MainContainer>
                <ErrorBoundary>
                  <Suspense>
                    <CharacterModel />
                  </Suspense>
                </ErrorBoundary>
              </MainContainer>
            </Suspense>
          </LoadingProvider>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<div style={{ background: "#0b080c", height: "100vh" }}></div>}>
            <AboutMePage />
          </Suspense>
        }
      />
      <Route
        path="/service"
        element={
          <Suspense fallback={<div style={{ background: "#0b080c", height: "100vh" }}></div>}>
            <ServicePage />
          </Suspense>
        }
      />
      <Route
        path="/projects"
        element={
          <Suspense fallback={<div style={{ background: "#0b080c", height: "100vh" }}></div>}>
            <ProjectsPage />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<div style={{ background: "#0b080c", height: "100vh" }}></div>}>
            <ContactMePage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;

