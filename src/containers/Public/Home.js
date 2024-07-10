
import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import {Navigation,Search} from './index';
import { Intro,Contact } from '../../componets';
const Home=()=>{
    return(
        <div className='w-full flex flex-col items-center h-full gap-6'>
            <Header/>
            <Navigation />
            <Search/>
            <div className='w-4/5 lg:w-3/5 flex flex-col items-start justify-start'>
                <Outlet/>
            </div>
            <Intro/>
            <Contact/>
            <div className='h-[500px]'></div>
        </div>
    )
}
export default Home;