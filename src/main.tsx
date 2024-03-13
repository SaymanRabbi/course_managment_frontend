import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import Navbar from "./Components/Navbar/Navbar.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import "./index.css";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <App />
          <Footer />
        </AuthProvider>
        <Toaster position="top-right" />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
