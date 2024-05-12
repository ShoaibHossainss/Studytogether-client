

import { useLoaderData } from "react-router-dom";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Faq from "../faq/Faq";


const Home = () => {
    const assignment = useLoaderData()
    return (
        <div>
        <Navbar></Navbar>
        <Header></Header>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-10 gap-4'>
        {
            assignment.map(feature=><Feature key={feature._id} feature={feature}></Feature>)
        }
        </div>
       
        <Faq></Faq>
     
         <Footer></Footer>
        </div>
    );
};

export default Home;