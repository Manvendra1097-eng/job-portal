import Header from "../components/Header";
import Companies from "../components/landing/Companies";
import DreaMJob from "../components/landing/DreamJob";
import Footer from "../components/landing/Footer";
import JobCategory from "../components/landing/JobCategory";
import Subscribe from "../components/landing/Subscribe";
import Testimonial from "../components/landing/Testimonial";
import Working from "../components/landing/Working";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-mine-shaft-950 font-poppins">
            <Header />
            <DreaMJob />
            <Companies />
            <JobCategory />
            <Working />
            <Testimonial />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default HomePage;