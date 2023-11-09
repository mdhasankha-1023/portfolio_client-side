import React from 'react';
import { Helmet } from 'react-helmet-async';

const WebTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title} - Portfolio of HASAN Kha</title>
        </Helmet>
    );
};

export default WebTitle;