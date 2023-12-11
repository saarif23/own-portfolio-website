import Banner from "../../Components/Banner";
import FecturedProjects from "../../Components/FecturedProjects";
import Navbar from "../../Components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner/>
            <FecturedProjects/>
        </div>
    );
};

export default Home;