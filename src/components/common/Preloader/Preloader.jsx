import React from 'react';
import preloader from '../../img/loader.svg'

const Preloader = (props) => {
    return <div className='preloader'><img src = {preloader} /></div>
};

export default Preloader;