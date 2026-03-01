import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

const AdminRoute = ({children}) => {

    const {  loading } = useAuth();
    const {role, roleLoading } = useRole();

    if (loading || roleLoading){
      return  <div>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }
    if (role !== 'admin')
        return <div>
            <p>access is forbidden</p>
        </div>
    return children;
};

export default AdminRoute;