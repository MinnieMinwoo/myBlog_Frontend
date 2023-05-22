import React from "react";
import altImage from "../../assets/images/altThumbnail.jpg";

export const CategoryNameForm = (categoryRef: React.RefObject<HTMLInputElement>, defaultValue = "") => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label className="form-label">Write down the category name.</label>
      <input
        className="form-control"
        type="text"
        placeholder="enter category name"
        defaultValue={defaultValue}
        key={defaultValue}
        ref={categoryRef}
        required
      />
    </form>
  );
};

export const CategoryImageForm = (
  imageRef: React.MutableRefObject<string>,
  inputRef: React.RefObject<HTMLInputElement>,
  thumbnailRef: React.RefObject<HTMLImageElement>,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>,
  onDelete: () => void
) => {
  const onUpload = (event: React.MouseEvent) => {
    inputRef.current?.click();
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label className="form-label">Please upload the image.</label>
      <div className="vstack gap-2">
        <div className="w-100 ratio ratio-16x9">
          <img
            className="img img-fluid object-fit-cover border rounded fs-0"
            ref={thumbnailRef}
            src={thumbnailRef.current?.src ? thumbnailRef.current?.src : imageRef.current ? imageRef.current : altImage}
            alt="Thumbnail"
          />
        </div>

        <input hidden type="file" accept="image/*" ref={inputRef} onChange={onChange} />
        <div className="hstack gap-2">
          <button className="btn btn-primary" onClick={onUpload}>
            Upload Image
          </button>
          <button className="btn btn-outline-primary" onClick={onDelete}>
            Delete Image
          </button>
        </div>
      </div>
    </form>
  );
};
