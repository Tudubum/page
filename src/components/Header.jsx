import PageLogo from '../images/UnwindCabins.png';
//import User from '../images/logo3.png';
import SignInForm from './SignInForm';

//import { useState } from 'react';

const Header = () => {
    return ( 
        <>
            <div className="header">
                <div className="logo">
                    <img src={PageLogo} alt="pageLogo" />
                </div>
                <div className="text">
                        <SignInForm />
                </div>
            </div>
        </>
     );
}
 
export default Header;