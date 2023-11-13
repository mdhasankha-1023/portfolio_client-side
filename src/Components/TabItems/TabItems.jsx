import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabItems.css'
import ProjectCard from '../ProjectCard/ProjectCard';


const TabItems = ({ projects }) => {

    return (
        <Tabs >
            <TabList className={'flex lg:justify-center justify-start flex-wrap lg:gap-10 gap-6 pb-12 px-4'}>
                <Tab className={'tab border border-[#33F5B3] cursor-pointer text-md lg:text-lg font-bold text-white lg:px-8 px-4 py-2 rounded-lg bg-[#040C18]'}>All</Tab>
                <Tab className={'tab border border-[#33F5B3] cursor-pointer text-md lg:text-lg font-bold text-white lg:px-8 px-4 py-2 rounded-lg bg-[#040C18]'}>JavaScript</Tab>
                <Tab className={'tab border border-[#33F5B3] cursor-pointer text-md lg:text-lg font-bold text-white lg:px-8 px-4 py-2 rounded-lg bg-[#040C18]'}>React</Tab>
                <Tab className={'tab border border-[#33F5B3] cursor-pointer text-md lg:text-lg font-bold text-white lg:px-8 px-4 py-2 rounded-lg bg-[#040C18]'}>Redux</Tab>
                <Tab className={'tab border border-[#33F5B3] cursor-pointer text-md lg:text-lg font-bold text-white lg:px-8 px-4 py-2 rounded-lg bg-[#040C18]'}>Next.js</Tab>
                <Tab className={'tab border border-[#33F5B3] cursor-pointer text-md lg:text-lg font-bold text-white lg:px-8 px-4 py-2 rounded-lg bg-[#040C18]'}>TypeScript</Tab>
            </TabList>

            {/* all content */}
            <TabPanel>
                <div className='grid grid-cols-1 mx-4 lg:grid-cols-3 gap-8 lg:py-10'>
                    {
                        projects?.map(project =>
                            <ProjectCard
                                key={project._id}
                                project={project}
                            ></ProjectCard>)
                    }
                </div>
            </TabPanel>

            {/* js content */}
            <TabPanel>
                <h1>This is JavaScript content</h1>
            </TabPanel>

            {/* react content */}
            <TabPanel>
                <h1>This is React content</h1>
            </TabPanel>

            {/* redux content */}
            <TabPanel>
                <h1>This is Redux content</h1>
            </TabPanel>

            {/* next.js content */}
            <TabPanel>
                <h1>This is Next.js content</h1>
            </TabPanel>

            {/* typescript content */}
            <TabPanel>
                <h1>This is typeScript content</h1>
            </TabPanel>
        </Tabs>
    );
};

export default TabItems;