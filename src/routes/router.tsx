import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomePage } from "../pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<HomePage />} />)
);
