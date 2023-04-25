import React from "react";
import { Link, useParams } from "react-router-dom";

interface Props {
  data: {
    mainField: string;
    subField?: string[];
  };
}

const CategorySideContent = ({ data }: Props) => {
  const params = useParams();

  return (
    <div className="CategorySideContent">
      <p className="my-1 mx-0 text-primary">{data.mainField}</p>
      {data.subField && (
        <ul className="m-0 list-unstyled ps-5px pe-3px py-1">
          {data.subField.map((content, id) => (
            <li key={id} className="ps-2 bs-light-lg">
              <Link
                className="fs-6 text-decoration-none text-777"
                to={`/home/${params.userID}/category/${data.mainField}/${content}`}
              >
                {content}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategorySideContent;
