import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa6";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
    // search ar jonno
    const [searchText, setSearchText] = useState('')
    //<


  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users', searchText],// ai khane {searchText} na search korte parbe na
    queryFn: async () => {
      // const res = await axiosSecure.get(`/users`);
              // backend a search ar data pathasci
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      //<
      return res.data;
    },
  });

  // add admin
  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch(),
          //   Swal.fire({
          //     position: "top-end",
          //     icon: "success",
          //     title: `${user.displayName} marked as an Admin`,
          //     showConfirmButton: false,
          //     timer: 2000,
          //   });

          Swal.fire({
            title: "Are you sure?",
            text: `${user.displayName} marked as an Admin!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Success",
                text: "Your admin create  has been success.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  // remove admin
  const handleRemoveAdmin = (user) => {
    const roleInfo = { role: "user" };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch(),
          //   Swal.fire({
          //     position: "top-end",
          //     icon: "success",
          //     title: `${user.displayName} removed from  Admin`,
          //     showConfirmButton: false,
          //     timer: 2000,
          //   });

          Swal.fire({
            title: "Are you sure?",
            text: `${user.displayName} removed from  Admin?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your admin has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl">Manage Users: {users.length} </h2>

<p>search text : {searchText} </p>
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
        onChange={(e)=> setSearchText(e.target.value)}
         type="search"
         className="grow" 
         placeholder="Search" />
      </label>





      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>Others Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn bg-red-400"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-green-400"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <th>Action</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
