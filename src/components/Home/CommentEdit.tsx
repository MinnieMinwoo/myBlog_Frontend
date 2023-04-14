import React, { useState } from "react";

interface Props {
  title: string;
  text: string;
  target?: string;
  submitCallback: (value: string, index?: string) => void;
  closeCallback?: () => void;
}

const CommentEdit = ({ title, text, target, submitCallback, closeCallback }: Props) => {
  const [value, setValue] = useState(text);

  const onEditChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    target ? submitCallback(value, target) : submitCallback(value);
    setValue(text);
    if (closeCallback) closeCallback();
  };

  return (
    <>
      <form onSubmit={onSubmit} className="CommentEdit">
        <label className="form-label text-555">{title}</label>
        <textarea
          value={value}
          onChange={onEditChange}
          className="form-control mb-3 h-100px textarea-fixed"
          placeholder="Write text"
          aria-label="With textarea"
          maxLength={300}
        />
        <span className="text-555">{value.length} / 300</span>
        <button type="submit" className="btn btn-outline-primary float-end">
          Submit
        </button>
        {closeCallback ? (
          <button type="button" className="btn btn-outline-secondary me-2 float-end" onClick={closeCallback}>
            Cancel
          </button>
        ) : null}
      </form>
    </>
  );
};
export default CommentEdit;
