import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();
  // detector de idioma
  useEffect(() => {
    if (!localStorage.getItem("i18nextLng")) {
      const browserLang = navigator.language.startsWith("es") ? "es" : "en";
      i18n.changeLanguage(browserLang);
    }
  }, []);
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
