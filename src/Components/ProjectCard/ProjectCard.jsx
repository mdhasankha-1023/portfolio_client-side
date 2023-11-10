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
            title: "<h1 class='font-bold text-[#00F3A1] uppercase'>JavaScript Project</h1>",
            background: '#040C18',
            html: `
                    <div class='grid grid-cols-1 lg:grid-cols-2 gap-y-4 text-center my-8 mx-auto text-white'>
                            <div class="flex items-center gap-3">
                            <i class="fa-regular text-[#00F3A1] r fa-file-lines"></i>                                <span>Project:</span>
                                <span>Learnbased website</span>
                            </div>
                            <div class="flex items-center gap-3">
                            <i class="fa-solid  text-[#00F3A1] fa-file-signature"></i>
                                <span>Project Name:</span>
                                <span>Learnbased website</span>
                            </div>
                            <div class="flex items-center gap-3">
                            <i class="fa-solid  text-[#00F3A1] fa-code"></i>
                                <span>Language:</span>
                                <span>Learnbased website</span>
                            </div>
                            <div class="flex items-center gap-3">
                            <i class="fa-solid  text-[#00F3A1] fa-arrow-up-right-from-square"></i>
                                <span>Preview:</span>
                                <span>
                                    <a class='underline uppercase text-[#00F3A1] font-bold' href='${livePreviewLink}' target='_blank'>
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
        <div className='cursor-pointer text-white'>
            <div className='flex flex-col justify-center items-center p-4 border border-[#33F5B3] rounded-lg'>
                <figure className='w-full h-[60%] pb-4 relative group'>
                    <img className='w-full rounded-lg' src={projectPic} alt="" />
                    <div className='hidden flex absolute top-0 w-full h-[95%] items-center justify-center opacity-60 bg-gradient-to-r from-[#37F5F4] to-[#33F5B3] rounded-lg group-hover:flex text-white text-lg font-bold transition duration-1000'>JavaScript</div>
                </figure>
                <div className='w-full h-[40%] border-t-2 border-t-[#33F5B3] pt-4 flex justify-between'>
                    <div className='flex flex-col items-start gap-1'>
                        <h6 className='text-[#76A6A5]'>javaScript</h6>
                        <h3 className='text-lg lg:text-2xl font-bolder text-[#00F3A1]'>{projectName}</h3>
                    </div>
                    <button onClick={handleProjectCard} type="button" class="text-white border border-[#33F5B3] hover:bg-gradient-to-r from-[#37F5F4] to-[#33F5B3] outline-none font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">More Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;