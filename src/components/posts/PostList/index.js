import data from "../../../db/data.json";
import PostItem from "../PostItem";
import "./style.css";
const PostList = () => {
  return (
    <ul>
      {data.posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  );
};
export default PostList;
