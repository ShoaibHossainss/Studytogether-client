import { useLoaderData, useParams} from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const PendingAssignment = () => {
    const assignment = useLoaderData()
    const [bookings, setBookings] = useState([]);
    const {id} = useParams();
    console.log(assignment)
    const {user} = useContext(AuthContext)

    const handleSubmitAssignment = e =>{
        e.preventDefault()
        const form = e.target;
        const pdf = form.pdf.value;
        const notes = form.notes.value
        const email = user.email
        const name = user.displayName
        const status = 'pending'
        const submitAssignment = {pdf,notes,name,email,status}
        
        console.log(submitAssignment)
  
        fetch(`http://localhost:5000/my-assignment/${id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(submitAssignment)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if (data.modifiedCount > 0) {
                  // update state
                //   const remaining = bookings.filter(booking => booking._id !== id);
                //   const updated = bookings.find(booking => booking._id === id);
                //   updated.status = 'pending'
                //   const newBookings = [updated, ...remaining];
                //   setBookings(newBookings);
              }
          })
      }
    
    const sign = assignment.filter(sign=>sign.status==='pending')
    console.log(sign)
    
    
    
    return (
        <div>
         <Navbar></Navbar>
      <div className="mt-16 mb-16">
          
      {
        sign.map(p=>   <div key={p._id} className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Assignment Marks</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody >
                        <tr>
                          
                          
                          <td>{p.title}</td>
                          <td>{p.marks}</td>
                          <td>{p.user_name}</td>
                          <td><button className="btn border-none bg-[#007bff] text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>Take Assignment</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form onSubmit={handleSubmitAssignment}>
  <div className="form-control">
  <label className="label">
    <span className="label-text">PDF</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='pdf' placeholder="Enter Your PDF Link" className="input input-bordered w-full" defaultValue={p.pdf}/>
  </label>
</div>

           

            <div className="form-control mb-3">
              <p className="pb-2">Notes</p>
              <textarea  className="px-4 py-2 border-[1px] rounded-xl input-bordered" placeholder="Write A Short Description" name="notes" id="" cols="30" rows="5"></textarea>
            </div>
            <input type="submit" value="Submit" className="btn bg-[#007bff] text-white w-full mt-3 mb-3" />
  </form>
            
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  </td>
                          
                          
                       
                        </tr>
                      </tbody>
          
        </table>
      </div>)
      }
      </div>
         <Footer></Footer>   
        </div>
    );
};

export default PendingAssignment;