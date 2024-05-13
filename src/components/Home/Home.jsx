

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
        <div>
        <h3 className="text-center text-2xl">Feature Section</h3>
        <p className="text-center mt-2 mb-2">Here you can see all the assignment
            <br />
             related information</p>
        <div className='mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-10 gap-4 '>
       
       {
           assignment.map(feature=><Feature key={feature._id} feature={feature}></Feature>)
       }
       </div>
        </div>
        
        
       
        <Faq></Faq>
     
         <Footer></Footer>
        </div>
    );
};

export default Home;