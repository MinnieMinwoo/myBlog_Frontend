import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategorySideContent from "./CategorySideContent";

import { getUserUID } from "../../logic/getSetUserInfo";
import { getCategoryList } from "../../logic/getSetCategoryInfo";

interface Props {
  categoryList: CategoryData[];
  setCategoryList: React.Dispatch<React.SetStateAction<CategoryData[]>>;
}

const CategorySideBar = ({ categoryList, setCategoryList }: Props) => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.userID) {
      navigate("/404");
      return;
    }
    getUserUID(params.userID)
      .then((uid) => {
        return getCategoryList(uid);
      })
      .then((data) => {
        setCategoryList(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <aside className="CategorySideBar d-none d-lg-block ps-4 my-5 bs-light">
      <nav className="category_navigation">
        <p className="fs-6 fw-bold text-decoration-none mb-3 text-dark">Categories</p>
        {categoryList.map((element, id) => (
          <CategorySideContent key={id} data={element} />
        ))}
      </nav>
    </aside>
  );
};

export default CategorySideBar;
