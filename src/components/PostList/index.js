import data from "../../db/data.json";
import PostItem from "../PostItem";
import "./style.css";
const PostList = () => {
  return (
    <ul>
      {data.posts.map((posts) => (
        <PostItem posts={posts} key={posts.id} />
      ))}
    </ul>
  );
};
export default PostList;
