import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
  const {id, title} = post;

  const navigate = useNavigate();

  const postStyle = {
    border: '2px solid blue',
    padding: '5px',
    borderRadius: '20px'
  }

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  }

  return (
    <div style={postStyle}>
      <h4>Post of id: {id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Detail</Link>
      <Link to={`/post/${id}`}><button>Post Detail</button></Link>
      <button onClick={handleShowDetail}>see details</button>
    </div>
  );
};

export default Post;