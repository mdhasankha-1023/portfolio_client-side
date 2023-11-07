import React from 'react';
import './ProjectCard.css'
import Swal from 'sweetalert2';
import file from '../../assets/iconSVG/file-alt-solid.svg'
import fileName from '../../assets/iconSVG/file-signature-solid.svg'
import language from '../../assets/iconSVG/code-solid.svg'
import livePreview from '../../assets/iconSVG/external-link-alt-solid.svg'

const ProjectCard = ({ project }) => {
    const { projectName, projectFeatures, projectPic, livePreviewLink, sourceCode } = project;


    // handle project card
    const handleProjectCard = () => {
        Swal.fire({
            title: "<h1 class='font-bold text-[#0788FF] uppercase'>JavaScript Project</h1>",
            background:'#252525',
            html: `
                    <div class='grid grid-cols-2 gap-y-4 text-center my-8 mx-auto text-white'>
                            <div class="flex items-center gap-3">
                            <i class="fa-regular fa-file-lines"></i>                                <h5>Project:</h5>
                                <span>Learnbased website</span>
                            </div>
                            <div class="flex items-center gap-3">
                            <i class="fa-solid fa-file-signature"></i>
                                <h5>Project Name:</h5>
                                <span>Learnbased website</span>
                            </div>
                            <div class="flex items-center gap-3">
                            <i class="fa-solid fa-code"></i>
                                <h5>Language:</h5>
                                <span>Learnbased website</span>
                            </div>
                            <div class="flex items-center gap-3">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                <h5>Preview:</h5>
                                <span>
                                    <a class='underline uppercase text-[#0788FF] font-bold' href='${livePreviewLink}' target='_blank'>
                                    Live
                                    </a>
                                </span>
                            </div>
                    </div>
                    <img class='h-[70%] rounded-xl w-full' src='${projectPic}' />
                    <div>
                    <h1 class='text-center font-bold text-xl text-[#0788FF]'>Key Features</h1>
                    </div>
            `,
            showCloseButton: true,
            focusConfirm: false,
            width: '80%',
            heightAuto: true,
        });
    }


    return (
        <div className='cursor-pointer relative group'>
            <figure className='w-full'>
                <img className='w-full rounded-lg' src={projectPic} alt="" />
            </figure>
            <div onClick={handleProjectCard} className='hidden flex absolute top-0 w-full h-full items-center justify-center bg-[#0788FF] rounded-lg group-hover:flex text-white text-lg font-bold transition duration-1000'>JavaScript</div>
        </div>
    );
};

export default ProjectCard;