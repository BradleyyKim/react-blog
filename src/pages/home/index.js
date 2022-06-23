import Banner from "../../components/Banner";
import PostList from "../../components/PostList";
import About from "../../components/About";
const Home = () => {
  return (
    <>
      <Banner />
      <main>
        <div className="max-width">
          <h2 className="a11y-hidden">Post</h2>
          <PostList />
          <About />
        </div>
      </main>
    </>
  );
};
export default Home;
