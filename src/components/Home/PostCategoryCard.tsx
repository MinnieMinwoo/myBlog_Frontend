import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { useModal } from "../../states/ModalState";
import { useToast } from "../../states/ToastState";

import altImage from "../../assets/images/altThumbnail.jpg";
import {
  editSubCategoryData,
  deleteSubCategoryData,
  setCategoryThumbnailList,
  setCategoryThumbnail,
} from "../../logic/getSetCategoryInfo";
import { CategoryImageForm, CategoryNameForm as inputForm } from "./PostCategoryForm";
import { deleteImg } from "../../logic/getSetImage";

interface Props {
  isEdit: boolean;
  imgLink: string;
  mainID: number;
  subID: number;
  categoryData: CategoryData[];
  setCategoryData: React.Dispatch<React.SetStateAction<CategoryData[]>>;
}

const PostCategoryCard = ({
  isEdit,
  imgLink,
  mainID: id,
  subID: index,
  categoryData,
  setCategoryData,
}: Props) => {
  const userData = useRecoilValue(loginData);
  // React ref for receive modal form data
  const categoryRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const thumbnailRef = useRef<HTMLImageElement>(null);
  const imageRef = useRef("");
  const { openModal } = useModal();
  const { openToast } = useToast();

  const onError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = altImage;
  };

  const setCategoryChange = async (name: string, mainID: number = -1, subID: number = -1) => {
    const targetCategory = categoryRef.current?.value ?? "";
    const uid = userData.uid;
    let copyArray = [...categoryData];

    // handle exception
    if (!uid || mainID === -1) return openToast("Error", "Using corrupt data.", "danger");
    if (name.includes("edit") && name.includes("Sub")) {
      if (!targetCategory) return openToast("Error", "Using corrupt data.", "danger");
      for (const category of categoryData) {
        if (category.subField.includes(targetCategory))
          return openToast("Error", "You entered duplicated category name.", "warning");
      }
    }

    try {
      switch (name) {
        case "editSubCategory":
          await editSubCategoryData(
            categoryData[mainID],
            categoryData[mainID].subField[subID],
            targetCategory,
            uid
          );
          copyArray[mainID].subField = copyArray[mainID].subField.map((element) =>
            element === categoryData[mainID].subField[subID] ? targetCategory : element
          );
          setCategoryData(copyArray);
          break;
        case "editCategoryImage":
          console.log(imageRef);
          copyArray[mainID].thumbnailLink[subID] = imageRef.current;
          await setCategoryThumbnailList(
            copyArray[mainID].thumbnailLink,
            copyArray[mainID].mainField,
            uid
          );
          setCategoryData(copyArray);
          break;
        case "deleteSubCategory":
          await deleteSubCategoryData(
            categoryData[mainID],
            categoryData[mainID].subField[subID],
            uid
          );
          copyArray[mainID] = {
            ...copyArray[mainID],
            subField: copyArray[mainID].subField.filter((e, i) => i !== subID),
            thumbnailLink: copyArray[mainID].thumbnailLink.filter((e, i) => i !== subID),
          };
          setCategoryData(copyArray);
          break;

        default:
          return;
      }
    } catch (error) {
      console.log(error);
      openToast("Error", "Category edit failed.", "danger");
    }
  };

  const onCategoryModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonTarget = event.target as HTMLButtonElement;
    const targetId = buttonTarget.id.split(",").map((index) => Number(index)) ?? [];
    let modalTitle = "";
    let modalContent: string | JSX.Element;
    let isDelete = false;
    let callBack = () => {};

    switch (buttonTarget.name) {
      case "editSubCategory":
        modalTitle = "Edit sub category";
        modalContent = inputForm(categoryRef, categoryData[targetId[0]].subField[targetId[1]]);
        callBack = () => {
          setCategoryChange("editSubCategory", targetId[0], targetId[1]);
        };
        break;
      case "deleteSubCategory":
        modalTitle = "Warning";
        modalContent = "If you really want to delete this sub category?";
        callBack = () => {
          setCategoryChange("deleteSubCategory", targetId[0], targetId[1]);
        };
        isDelete = true;
        break;
      case "editCategoryImage":
        // Form 안에 넣으면, state쓰면 작동이 이상해지는 이유?
        imageRef.current = imgLink;
        const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
          if (!event.target.files) return;
          imageRef.current && deleteImg(imageRef.current);
          imageRef.current = await setCategoryThumbnail(event.target.files[0]);
          thumbnailRef.current && (thumbnailRef.current.src = imageRef.current);
        };
        const onDelete = () => {
          imageRef.current && deleteImg(imageRef.current);
          imageRef.current = "";
          thumbnailRef.current && (thumbnailRef.current.src = altImage);
        };
        modalTitle = "Thumbnail edit";
        modalContent = CategoryImageForm(imageRef, inputRef, thumbnailRef, onChange, onDelete);
        callBack = () => {
          setCategoryChange("editCategoryImage", targetId[0], targetId[1]);
        };
        break;
      default:
        return;
    }
    openModal(modalTitle, modalContent, callBack, true, isDelete ? "danger" : "primary");
  };

  return (
    <div className="PostCategoryCard p-2 col col-12 col-md-6 col-xl-4">
      <div className="card" key={index}>
        <Link
          className="ratio ratio-16x9"
          to={`${categoryData[id].mainField}/${categoryData[id].subField[index]}`}
        >
          <img
            className="card-img-top img-fluid object-fit-cover"
            src={imgLink}
            onError={onError}
            alt="Thumbnail"
          />
        </Link>
        <div className="card-body">
          <Link
            className="card-title fs-5 fw-semibold text-decoration-none text-111"
            to={`${categoryData[id].mainField}/${categoryData[id].subField[index]}`}
          >
            {`${categoryData[id].subField[index]}`}
          </Link>
          <div className="hstack" hidden={!isEdit}>
            <button
              id={`${id},${index},1`}
              className="btn btn-outline-secondary"
              name="editSubCategory"
              onClick={onCategoryModal}
            >
              ✎
            </button>
            <button
              id={`${id},${index},2`}
              className="btn btn-outline-info ms-auto"
              name="editCategoryImage"
              onClick={onCategoryModal}
            >
              🖼️
            </button>
            <button
              id={`${id},${index},3`}
              className="btn btn-outline-danger ms-auto"
              name="deleteSubCategory"
              onClick={onCategoryModal}
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCategoryCard;
