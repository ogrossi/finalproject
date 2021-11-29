
import React, { useEffect } from 'react';
import {HousesList}  from '../Components/HousesList';
import {House} from '../Components/House';





const Page2 = () => {
    useEffect(() => {
        document.title = 'Page2';
    });
    return (
        <div>
           
          
            <HousesList/>
            
        </div>
     
    );
};
export default Page2;