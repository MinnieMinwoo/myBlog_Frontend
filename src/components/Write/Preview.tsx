import React, { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { loginData } from "../../states/LoginState";
import { uuidv4 } from "@firebase/util";

import { useToast } from "../../states/ToastState";

import altImage from "../../assets/images/altThumbnail.jpg";
import { deleteImg, uploadImg } from "../../logic/getSetImage";
import { getCategoryList } from "../../logic/getSetCategoryInfo";

import "../../styles/Preview.css";

interface Props {
  isEdit: boolean;
  isPreview: boolean;
  postContent: postEditData;
  setPostContent: React.Dispatch<React.SetStateAction<postEditData>>;
  onPreview: () => void;
  onSubmit: () => void;
}

const Preview = ({
  isEdit,
  isPreview,
  postContent,
  setPostContent,
  onPreview,
  onSubmit,
}: Props) => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const userData = useRecoilValue(loginData);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [categoryIndex, setCategoryIndex] = useState("");
  const [firstOpen, setFirstOpen] = useState(false);
  const { openToast } = useToast();

  useEffect(() => {
    userData.uid &&
      getCategoryList(userData.uid).then((result) => {
        setCategoryData(result);
        if (!postContent.category.length) return;
        const categoryArray = postContent.category;
        const mainFieldList = result.map((element) => element.mainField);
        const mainIndex = mainFieldList.indexOf(categoryArray[0]);
        const subIndex = result[mainIndex].subField.indexOf(categoryArray[1]);
        setCategoryIndex(String([mainIndex, subIndex]));
      });
  }, [userData, postContent.category]);

  useEffect(() => {
    isPreview && setFirstOpen(true);
  }, [isPreview]);

  const onImgUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) throw console.log("no image files");
    try {
      const uploadURL = await uploadImg(files[0], `$thumbnail/${uuidv4()}`);
      setPostContent((prev) => ({
        ...prev,
        thumbnailImgLink: uploadURL,
      }));
    } catch (error) {
      console.log(error);
      openToast("Error", "Image upload failed.", "danger");
    }
  };

  const onUpload = () => {
    imgRef.current?.click();
  };

  const onDelete = () => {
    postContent.thumbnailImgLink && deleteImg(postContent.thumbnailImgLink);
    setPostContent((prev) => ({
      ...prev,
      thumbnailImgLink: "",
    }));
    if (imgRef.current?.value) imgRef.current.value = "";
  };

  const onEditDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setPostContent((prev) => ({
      ...prev,
      thumbnailData: value,
    }));
  };

  const onCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    setCategoryIndex(value);
    if (value === "") {
      setPostContent((prev) => ({
        ...prev,
        category: [],
      }));
      return;
    }
    const index = value.split(",").map(Number);
    setPostContent((prev) => ({
      ...prev,
      category: [categoryData[index[0]].mainField, categoryData[index[0]].subField[index[1]]] ?? [],
    }));
  };

  return (
    <div
      className={`Preview d-flex position-fixed w-100 h-100 bg-fff z-index-1 ${
        isPreview ? "scrollOpen" : firstOpen ? "scrollClose" : "hidden"
      }`}
    >
      <div></div>
      <div className="col-10 offset-1 col-md-5 offset-md-1 col-xxl-4 offset-xxl-2 px-4 align-self-center be-light">
        <div className="vstack gap-3">
          <h3>Preview</h3>
          <img
            className="img-fluid img-thumbnail ratio-16x9 object-fit-cover w-100 bg-eee"
            src={postContent.thumbnailImgLink ? postContent.thumbnailImgLink : altImage}
            alt="Thumbnail"
          />
          <input
            hidden
            type="file"
            accept="image/*"
            ref={imgRef}
            src={postContent.thumbnailImgLink}
            onChange={onImgUpload}
          />
          <div className="hstack gap-2">
            <button className="btn btn-primary" onClick={onUpload}>
              Upload Image
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={onDelete}
              hidden={!postContent.thumbnailImgLink}
            >
              Delete Image
            </button>
          </div>
          <h3>{postContent.title}</h3>
          <div className="input-group input-group-lg h-200px">
            <textarea
              className="form-control"
              value={postContent.thumbnailData}
              maxLength={150}
              onChange={onEditDescription}
            />
          </div>
          <p>{postContent.thumbnailData.length}/150</p>
        </div>
      </div>
      <div className="col-10 col-md-5 col-xxl-4 px-4 align-self-center">
        <div className="vstack gap-1">
          <h4>Category Setting</h4>
          <select className="form-select" value={categoryIndex} onChange={onCategoryChange}>
            <option value={""}>None</option>
            {categoryData &&
              categoryData.map((category, id) => {
                return category.subField.map((subCategory, index) => (
                  <option key={index} value={String([[id, index]])}>
                    {`${category.mainField} - ${subCategory}`}
                  </option>
                ));
              })}
          </select>
        </div>
        <div className="hstack gap-3 float-end">
          <button className="btn btn-outline-primary" onClick={onPreview}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={onSubmit}>
            {isEdit ? "Edit" : "Write Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
