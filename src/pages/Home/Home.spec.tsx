import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { HomePage } from "./index";

describe("Home Page", () => {
  test("Should be abble to see the logo of the page", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("logo")).toBeInTheDocument();
  });
});
