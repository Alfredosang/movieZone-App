import React from 'react'
import Search from '../Search'
import SlideOne from '../SlideOne';
import Popular from '../Popular';


const Homepage = ({popular}) => {


    
    return (
        <div>
            
            <Search />
            <SlideOne />
            <Popular popular={popular} />
            <Popular popular={popular}  />
        </div>
    )
}

export default Homepage