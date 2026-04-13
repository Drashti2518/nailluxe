import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookingPage from "./components/BookingForm";
import AdminPanel from "./pages/Admin/AdminPanel";
import AdminLogin from "./pages/Admin/AdminLogin";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import "./App.css";

const App = () => {
  const [page, setPage] = useState("home");
  const [selectedService, setSelectedService] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const goToBooking = (serviceName?: string) => {
    setSelectedService(serviceName || "");
    setPage("booking");
  };

  const goToHome = () => {
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToServices = () => {
    setPage("home");
    setTimeout(() => {
      const section = document.getElementById("services");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const goToGallery = () => setPage("gallery");
  const goToAbout = () => setPage("about");

  // 🔐 Admin access
  const goToAdmin = () => {
    window.location.href = "/admin";
  };

  useEffect(() => {
    const path = window.location.pathname;
  
    if (path === "/admin") {
      const admin = localStorage.getItem("isAdmin");
  
      if (admin === "true") {
        setIsAdmin(true);
        setPage("admin");
      } else {
        setPage("admin-login");
      }
    }
  }, []);

  return (
    <>
      <Navbar
        onBook={goToBooking}
        onHome={goToHome}
        onServices={goToServices}
        onGallery={goToGallery}
        onAbout={goToAbout}
        onAdmin={goToAdmin} // 👈 ADD
      />

{page === "admin-login" && (
        <AdminLogin
          onLogin={() => {
            setIsAdmin(true);
            setPage("admin");
          }}
        />
      )}

      {page === "admin" && isAdmin && <AdminPanel />}
      {page === "home" && <Home goToBooking={goToBooking} />}

      {page === "booking" && (
        <BookingPage
          preSelected={selectedService}
          onBack={goToHome}
        />
      )}

      {page === "gallery" && <Gallery />}
      {page === "about" && <About />}
    </>
  );
};

export default App;