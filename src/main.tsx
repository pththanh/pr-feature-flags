import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

import { withLDProvider } from "launchdarkly-react-client-sdk";

const clientSideID = import.meta.env.VITE_LAUNCHDARKLY_CLIENT_ID;

const LDApp = withLDProvider({
  clientSideID: clientSideID,
})(() => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
));

createRoot(document.getElementById("root")!).render(<LDApp />);
