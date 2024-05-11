import { Link } from "react-router-dom";



const Feature = ({feature}) => {
    const {_id,title,description,marks,thumbnail_image_url,difficulty_level,due_date} = feature;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
         <figure><img src={thumbnail_image_url} alt="Shoes" /></figure>
         <div className="card-body">
           <h2 className="card-title">{title}</h2>
           <p>Description : {description}</p>
           <p>Marks : {marks}</p>
           <p>Difficulty : {difficulty_level}</p>
           <p>Due Date : {due_date}</p>
           <div className="card-actions">
            <Link to=
        {`/view-assignment/${_id}`}>
            <button className="btn btn-primary">View Assignment</button>
            </Link>
          
           </div>
         </div>
       </div>
    );
};

export default Feature;