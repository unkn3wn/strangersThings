import { singlePost } from "../api/auth";

import { useState, useEffect } from "react";

import { useParams  } from "react-router-dom";

function PostDetail() {
  const { postId } = useParams;
  const [postDetail, setpostDetail] = useState({});

  useEffect(() => {
    async function getSinglePost() {
      const card = await singlePost(postId);
      setpostDetail(card);
    }

    getSinglePost();
  }, []);

  return (
    <div>
      <p>{postDetail.title}</p>
      <p>{postDetail.description}</p>
      <p>{postDetail.price}</p>
    </div>
  );
}
export default PostDetail;
