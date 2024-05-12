import { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";


const MyAssignment = () => {
    const {user} = useContext(AuthContext)
    const [list,setList] = useState([])
    
    
    useEffect(()=>{
        fetch(`http://localhost:5000/my-assignment/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setList(data)
        })
    },
    [user])
    return (
        <div>
        <Navbar></Navbar>
        <div>
           {
            list.map(p=><div key={p._id}>
                <h3>Marks: {p.marks}</h3>
                <h3>Title: {p.title}</h3>
            </div>)
           }
        </div> 
        <Footer></Footer>  
        </div>
    );
};

export default MyAssignment;