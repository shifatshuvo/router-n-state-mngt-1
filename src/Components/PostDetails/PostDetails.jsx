import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

  const {postId} = useParams();
  const navigate = useNavigate();
  const post = useLoaderData();
  const {id, userId, title, body} = post;

  console.log(postId);

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <h3>Post Details about id: {id}</h3>
      <h4>{title}</h4>
      <p>User id: {userId}</p>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;