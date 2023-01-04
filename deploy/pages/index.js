import SingleImage from "../components/Intro/SingleImage";
import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import Header from "../components/Sections/Header";
import Features from "../components/Sections/Features";
import Overview from "../components/Sections/Overview";
import Testimonials from "../components/Sections/Testimonials";
import Screenshots from "../components/Sections/Screenshots";
import Support from "../components/Sections/Support";
import Subscribe from "../components/Sections/Subscribe";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";

const Index = () => (

    <Layout 
        pageTitle="Miért Mozgásműhely Pécs" 
        colorSchema="/assets/colors/turquoise.css" 
    >
        <Loader />
        <Header nav="home" />
        <SingleImage />
        <Features />
        <Overview />
        <Screenshots className="bg-grey" />
        <Support />
        <Pricing className="bg-grey" />
        <Testimonials />
        <Subscribe />
        <Contact />
        <Footer />
        <ToTop />
    </Layout>

)

export default Index;