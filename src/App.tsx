import Description from "./components/Description";
import Layout from "./components/Layout";
import Hero from "./components/common/Hero";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Description />
        <div className="">Data will appear here</div>
        <div className="">Data will appear here</div>
        <div className="">Data will appear here</div>
        <div className="">Data will appear here</div>
      </Layout>
    </>
  );
}

export default App;
