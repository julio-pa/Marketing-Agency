import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Footer from "../../components/navigation/Footer";


const Home = () => {
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">hola</div>
      <Footer />
    </Layout>
  );
}

export default Home;
