import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authService } from "../../logic/firebase";
import { editMainCategoryOrder, editSubCategoryOrder, getCategoryList } from "../../logic/getSetCategoryInfo";
import { loginData } from "../../states/LoginState";
import { useToast } from "../../states/ToastState";

//list: T[], callback: (source: number, destination: number) => void
interface PropsList {
  list: any[];
  callBack: (source: number, destination: number) => void;
}
const CategoryList = ({ list, callBack }: PropsList) => {
  return (
    <DragDropContext
      onDragEnd={(result) => {
        if (!result.destination) return;
        const {
          destination: { index: destination },
          source: { index: source },
        } = result;
        callBack(source, destination);
      }}
    >
      <Droppable droppableId="lists">
        {(provided) => (
          <div className="lists" {...provided.droppableProps} ref={provided.innerRef}>
            <ul className="list-group">
              {list.map((e: any, i: number) => (
                <Draggable draggableId={e} index={i} key={e}>
                  {(provided, snapshot) => (
                    <li
                      className="list-group-item"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {e}
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const CategoryOrderEdit = () => {
  const [categoryList, setCategoryList] = useState<CategoryData[]>([]);
  const userData = useRecoilValue(loginData);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { openToast } = useToast();

  useEffect(() => {
    if (!authService.currentUser) {
      navigate("/");
      return;
    }
    const {
      currentUser: { uid },
    } = authService;
    getCategoryList(uid)
      .then((data) => setCategoryList(data))
      .catch(() => {
        openToast("Warning", "Category loading failed", "warning");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isEdit, setIsEdit] = useState(false);
  const [isSubCategory, setIsSubCategory] = useState(0);
  const [mainIndex, setMainIndex] = useState(0);
  const onClickMain = async () => {
    if (isEdit && userData.uid) {
      setIsLoading(true);
      try {
        if (!isSubCategory)
          await editMainCategoryOrder(
            categoryList.map((e) => e.mainField),
            userData.uid
          );
        else {
          const { mainField, subField, thumbnailLink } = categoryList[mainIndex];
          await editSubCategoryOrder(subField, thumbnailLink, mainField, userData.uid);
        }
      } catch (error) {
        console.log(error);
        openToast("Error", "Category update failed", "warning");
      } finally {
        setIsLoading(false);
      }
    }
    setIsEdit((prev) => !prev);
  };

  const onMainCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    setIsSubCategory(Number(value));
  };
  const onSubCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    setMainIndex(Number(value));
  };

  const editOrder = (source: number, destination: number) => {
    let copyList = [...categoryList];
    if (!isSubCategory) {
      const target = copyList[source];
      copyList.splice(source, 1);
      let changeList = [];
      for (let i = 0; i < destination; i++) changeList.push(copyList.shift());
      changeList.splice(destination, 1, target);
      while (copyList.length) changeList.push(copyList.shift());
      setCategoryList(changeList as CategoryData[]);
    } else {
      const targetField = copyList[mainIndex].subField[source];
      const targetLink = copyList[mainIndex].thumbnailLink[source];
      const changeField = [];
      const changeLink = [];
      copyList[mainIndex].subField.splice(source, 1);
      copyList[mainIndex].thumbnailLink.splice(source, 1);
      for (let i = 0; i < destination; i++) {
        changeField.push(copyList[mainIndex].subField.shift());
        changeLink.push(copyList[mainIndex].thumbnailLink.shift());
      }
      changeField.splice(destination, 1, targetField);
      changeLink.splice(destination, 1, targetLink);
      while (copyList[mainIndex].subField.length) {
        changeField.push(copyList[mainIndex].subField.shift());
        changeLink.push(copyList[mainIndex].thumbnailLink.shift());
      }
      copyList[mainIndex].subField = changeField as string[];
      copyList[mainIndex].thumbnailLink = changeLink as string[];
      setCategoryList(copyList);
    }
  };

  return (
    <>
      <div className={`SettingData px-3 ${isEdit ? "pt-4 py-2" : "bb-light py-4"}`}>
        <h3 className="d-inline-block w-170px fs-5 text-111">Category order</h3>
        <span className="d-inline-block float-end">
          <div className="hstack">
            <button className="btn btn-primary me-2" onClick={onClickMain} disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className="visually-hidden">Loading...</span>
                </>
              ) : isEdit ? (
                "Save"
              ) : (
                "Edit"
              )}
            </button>
          </div>
        </span>
        <p className="mt-2 mb-0 fs-14px text-777">Adjust the order of categories shown.</p>
      </div>
      {isEdit && (
        <div className="SettingData px-3 py-4 bb-light">
          <select className="form-select form-select-md mb-2" value={isSubCategory} onChange={onMainCategoryChange}>
            <option value={0}>Main Category</option>
            <option value={1}>Sub Category</option>
          </select>
          <select
            className="form-select form-select-sm mb-3"
            disabled={!isSubCategory}
            value={mainIndex}
            onChange={onSubCategoryChange}
          >
            {categoryList.map((category, index) => (
              <option value={index}>{category.mainField}</option>
            ))}
          </select>
          <CategoryList
            list={isSubCategory ? categoryList[mainIndex].subField : categoryList.map((e) => e.mainField)}
            callBack={editOrder}
          />
        </div>
      )}
    </>
  );
};

export default CategoryOrderEdit;
