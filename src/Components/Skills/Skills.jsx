import React from 'react';
import { SkillBar } from 'react-skills';

const Skills = () => {

    return (
        <div className='flex flex-col gap-6 font-bold text-xl'>
            <SkillBar name="HTML 5" level={70} color="#E44D25" />
            <SkillBar name="CSS 3" level={60} color="#337CC5" />
            <SkillBar name="JavaScript" level={50} color="#FFD500" />
            <SkillBar name="React.js" level={70} color="#53C1DE" />
            <SkillBar name="Node.js" level={30} color="#AED373" />
            <SkillBar name="Express.js" level={30} color="#868686" />
            <SkillBar name="MongoDB" level={30} color="#499D4A" />
        </div>
    );
};

export default Skills;