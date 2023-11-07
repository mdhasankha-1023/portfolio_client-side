import React from 'react';
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
    const { projectName, projectFeatures, projectPic, livePreviewLink, sourceCode } = project;
    return (
        <div className='cursor-pointer relative group'>
            <figure className='w-full'>
                <img className='w-full rounded-lg' src={projectPic} alt="" />
            </figure>
            <div className='hidden flex absolute top-0 w-full h-full items-center justify-center bg-[#0788FF] rounded-lg group-hover:flex text-white text-lg font-bold transition duration-1000'>JavaScript</div>
        </div>
    );
};

export default ProjectCard;