import Banner from "../../components/Banner";
import PostList from "../../components/posts/PostList";

const Home = () => {
  return (
    <>
      <Banner />
      <main>
        <div className="max-width">
          <h2 className="a11y-hidden">Post</h2>
          <PostList />
        </div>
      </main>
    </>
  );
};
export default Home;
