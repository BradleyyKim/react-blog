import data from "../../db/data.json";
import PostItem from "../PostItem";
import "./style.css";
const PostList = () => {
  return (
    <ul className="posts">
      {data.posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  );
};
export default PostList;
