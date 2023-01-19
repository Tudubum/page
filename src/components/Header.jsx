import PageLogo from '../images/UnwindCabins.png';
import SignInForm from './SignInForm';

//import { useState } from 'react';

const Header = ({users, onSuccess, arPrisijunges}) => {
    return ( 
        <>
            <div className="header">
                <div className="logo">
                    <img src={PageLogo} alt="pageLogo" />
                </div>
                <div className="text">
                    { arPrisijunges ? 
                        <h1>You are logged in</h1> 
                        : 
                        <SignInForm onSuccess={onSuccess}
                        users={users} /> 
                    }
                </div>
            </div>
        </>
     );
}
 
export default Header;