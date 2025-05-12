import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppMentorsButton from "./AppMentorsButton.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppMentorsButton />
    </StrictMode>
);
