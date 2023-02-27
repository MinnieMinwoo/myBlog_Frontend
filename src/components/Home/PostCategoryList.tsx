import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack } from "react-bootstrap";

import { getUserUID } from "../../logic/getSetUserInfo";
import { getCategoryData } from "../../logic/getSetCategoryInfo";

const PostCategoryList = () => {
  const params = useParams();

  useEffect(() => {
    if (!params.userID) throw console.log("no params");
    getUserUID(params.userID).then((uid) => {
      getCategoryData(uid);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="PostCategoryList">
      <div>
        <Stack direction="horizontal" gap={1}>
          <h2>{"title"}</h2>
          <span>{0}</span>
        </Stack>
      </div>

      <div>
        <img></img>
        <p></p>
      </div>
    </div>
  );
};

export default PostCategoryList;
