import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Assignment = () => {
    const assignment = useLoaderData()
    const {user} = useContext(AuthContext)
    const [assignments, setAssignments] = useState([]);
    const handleDelete = id => {
      const proceed = confirm('Are You sure you want to delete');
      if (proceed) {
          fetch(`http://localhost:5000/delete/${id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                      alert('deleted successful');
                      const remaining = assignments.filter(assignment => assignment._id !== id);
                      setAssignments(remaining);
                  }
                  
              })
      }
  }
    return (
        <div>
            
         <Navbar></Navbar> 
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-10">
         {
         assignment.map(p=><div key={p._id} className="card card-compact w-96 bg-base-100 shadow-xl">
         <figure><img src={p.thumbnail_image_url} alt="Shoes" /></figure>
         <div className="card-body">
           <h2 className="card-title">{p.title}</h2>
           <p>Description : {p.description}</p>
           <p>Marks : {p.marks}</p>
           <p>Difficulty : {p.difficulty_level}</p>
           <p>Due Date : {p.due_date}</p>
           <div className="card-actions">
            <Link to=
        {`/view-assignment/${p._id}`}>
            <button className="btn btn-primary">View Assignment</button>
            </Link>
            <Link to={`/update/${p._id}`}>
            <button className="btn btn-primary">Update</button>
            </Link>
             
           {
            user?.email === p.email ?  <button onClick={()=>handleDelete(p._id)} className="btn btn-primary">Delete</button> :  <button onClick={()=>handleDelete(p._id)} className="btn btn-primary hidden">Delete</button>
           }
           </div>
         </div>
       </div>)
         
        }
         </div>
       
         <Footer></Footer>  
        </div>
    );
};

export default Assignment;