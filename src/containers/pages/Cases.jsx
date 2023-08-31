import Navbar from '../../components/navigation/Navbar';
import Header from '../../components/cases/Header';
import Layout from '../../hocs/layouts/Layout';
import Footer from '../../components/navigation/Footer';
import CasesList from '../../components/cases/CasesList';

const Cases = () => {
  return (
    <Layout>
      <Navbar />
      <Header />
      <CasesList />
      <Footer />
    </Layout>
  );
}

export default Cases;
