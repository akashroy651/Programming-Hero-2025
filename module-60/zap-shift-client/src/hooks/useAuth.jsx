import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const useAuth = () => {

    const authInfo = use(AuthContext);
    return authInfo

    // return (
    //     <div>
            
    //     </div>
    // );
};

export default useAuth;