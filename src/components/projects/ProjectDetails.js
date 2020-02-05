import React from "react";

const ProjectDetails = (props) => {
    const id = props.match.params.id_project
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">NEW Project Title - {id}</span>
                    <p>Lorem ipsum Project content text1 </p>
                </div>
                <div className="card-action indigo lighten-4 indigo-text text-darken-3">
                    <div>Posted by Autor's Name</div>
                    <div>date of posting</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
