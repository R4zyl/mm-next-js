import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import Header from "../components/Sections/Header";
import WorkerInfo from "../components/Worker/WorkerInfo";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";

const Worker = () => (

    <Layout 
        pageTitle="Frei Judit - Személyi edző" 
        colorSchema="/assets/colors/turquoise.css"
    >
        <Loader />
        <Header />
        <WorkerInfo />
        <Footer />
        <ToTop />
    </Layout>

)

export default Worker;