import { Link, useLoaderData, useParams } from "react-router-dom";


const ViewAssignment = () => {
    const assignments = useLoaderData()
    const {id} = useParams();
    const assignment = assignments.find(assignment=>assignment._id===id)
    console.log(assignment)
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
   <Link>
   <Link to='/'>
      <button className="btn bg-[#007bff] text-white mr-2">Home</button>
      </Link>
   <button className="btn bg-[#007bff] text-white ">Take Assignment</button>
   </Link>
     </div>
     
      
      </div>
      
      
      </div>
    );
};

export default ViewAssignment;