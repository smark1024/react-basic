import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppMentor from "./AppMentor.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppMentor />
    </StrictMode>
);
