import React, { useState } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { cleanup, screen, render, waitFor } from "@testing-library/react";
import CategorySideBar from "./CategorySideBar";

import * as getUID from "../../logic/getSetUserInfo";
import * as getCategory from "../../logic/getSetCategoryInfo";

const Component = () => {
  const [categoryList, setCategoryList] = useState<CategoryData[]>([]);
  return <CategorySideBar categoryList={categoryList} setCategoryList={setCategoryList} />;
};

describe("Category side bar test", () => {
  afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });

  it("rendering test", async () => {
    const spyOne = jest.spyOn(getUID, "getUserUID").mockResolvedValue("test");
    const spyTwo = jest.spyOn(getCategory, "getCategoryList").mockResolvedValue([
      {
        mainField: "Frontend",
        subField: ["fe1", "fe2", "fe3", "fe4", "fe5"],
        thumbnailLink: ["", "", "", "", ""],
      },
      {
        mainField: "Backend",
        subField: ["be1", "be2", "be3", "be4", "be5"],
        thumbnailLink: ["", "", "", "", ""],
      },
      {
        mainField: "Life",
        subField: [],
        thumbnailLink: [],
      },
    ]);

    render(
      <MemoryRouter initialEntries={["/home/minnie"]}>
        <Routes>
          <Route path="/home/:userID" element={<Component />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Categories")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Frontend")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Backend")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Life")).toBeInTheDocument();
    });
  });
});
