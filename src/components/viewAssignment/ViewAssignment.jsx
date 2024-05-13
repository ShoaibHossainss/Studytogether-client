import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const ViewAssignment = () => {
  const {user} = useContext(AuthContext)
    const assignments = useLoaderData()
    const {id} = useParams();
    const assignment = assignments.find(assignment=>assignment._id===id)
    console.log(assignment)
   
    const handleSubmitAssignment = e =>{
      e.preventDefault()
      const form = e.target;
      const pdf = form.pdf.value;
      const description = form.description.value
      const email = user.email
      const name = user.displayName
      const status = 'pending'
      const submitAssignment = {pdf,description,name,email,status}
      
      console.log(submitAssignment)
    }
    return (
        <div className="lg:grid lg:grid-cols-2 lg:mx-auto lg:mt-16 mt-8 mb-8">
        <div className=" bg-[#1313130D] rounded-2xl lg:ml-3">
        <img className="p-10 px-4 lg:mb-1 mb-10" src={assignment.thumbnail_image_url} alt="" />
        </div>
        
      <div className="px-10">
      <p className='font-playfair font-bold text-4xl text-[#131313]'>{assignment.title}</p>
      <hr className='border-[1px] border-dashed border-[#0d0d0d1a] mt-4' />
      <p className="font-sans font-bold text-[#131313] mb-12 mt-12 ">Description : <span className="font-sans font-bold text-[#131313B3]">{assignment.description}</span></p>
      <hr className='border-[1px] border-dashed border-[#0d0d0d1a] mt-4 mb-16' />
      
     
      
      
      <p className="font-sans text-[#131313B3] mb-4">Marks : <span className="lg:ml-5 font-sans font-semibold text-black">{assignment.marks}</span></p>
      <p className="font-sans text-[#131313B3] mb-4">Difficulty :<span className="lg:ml-8 font-sans font-semibold text-black">{assignment.difficulty_level}</span></p>
    
      <p className="font-sans text-[#131313B3] mb-4">Due Date : <span className="ml-4 font-sans font-semibold text-black">{assignment.due_date}</span></p>
     
     <div>
   
   <Link to='/'>
      <button className="btn bg-[#007bff] text-white mr-2">Home</button>
      </Link>
   {/* <button className="btn bg-[#007bff] text-white ">Take Assignment</button> */}
   {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-[#007bff] text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>Take Assignment</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form onSubmit={handleSubmitAssignment}>
  <div className="form-control">
  <label className="label">
    <span className="label-text">PDF</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='pdf' placeholder="Enter Your PDF Link" className="input input-bordered w-full"/>
  </label>
</div>

           

            <div className="form-control mb-3">
              <p className="pb-2">Description</p>
              <textarea className="px-4 py-2 border-[1px] rounded-xl input-bordered" placeholder="Write A Short Description" name="description" id="" cols="30" rows="5"></textarea>
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
  
     </div>
     
      
      </div>
      
      
      </div>
    );
};

export default ViewAssignment;