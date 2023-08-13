import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import './locales/i18n'

function App() {
  return <RouterProvider router={router} />;
}

export default App;
