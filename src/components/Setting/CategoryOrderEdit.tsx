import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import { authService } from "../../logic/firebase";
import { getCategoryList } from "../../logic/getSetCategoryInfo";
import { useModal } from "../../states/ModalState";
import { useToast } from "../../states/ToastState";

const CategoryList = <T extends {}>(list: T[], callback?: (result: DropResult) => void) => {
  return (
    <DragDropContext
      onDragEnd={(result) => {
        if (!result.destination) return;
        const {
          destination: { index: destination },
          source: { index: source },
        } = result;
      }}
    >
      <label className="mb-2">Edit main category order.</label>
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
  const navigate = useNavigate();
  const { openModal } = useModal();
  const { openToast } = useToast();
  useEffect(() => {
    if (!authService.currentUser) {
      navigate("/auth");
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

  const onClickMain = () => {
    const data = categoryList.map((e) => e.mainField);
    openModal("Edit Main Category List", CategoryList(data, editMainOrder));
  };

  const editMainOrder = (result: DropResult) => {
    if (!result.destination) return;
    const {
      destination: { index: destination },
      source: { index: source },
    } = result;
    let copyList = [...categoryList];
    const temp = copyList[destination];
    copyList[destination] = copyList[source];
    copyList[source] = temp;
    setCategoryList(copyList);
  };

  return (
    <>
      <div className="SettingData px-3 py-4 bb-light">
        <h3 className="d-inline-block w-170px fs-5 text-111">Category order</h3>
        <span className="d-inline-block float-end">
          <div className="hstack">
            <button className="btn btn-primary me-2" onClick={onClickMain}>
              Main Category
            </button>
            <button className="btn btn-secondary">Sub Category</button>
          </div>
        </span>
        <p className="mt-2 mb-0 fs-14px text-777">Adjust the order of categories shown.</p>
      </div>
    </>
  );
};

export default CategoryOrderEdit;
