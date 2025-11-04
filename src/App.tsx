import { RouterProvider } from "react-router/dom";
import { ThemeProvider } from "@/components/theme/theme-provider";

import { router } from "@/routes";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ww-discord-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
