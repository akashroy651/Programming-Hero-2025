import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignRiders = () => {
  const [selectedParcel, setSelectedParcel] = useState(null);

  const riderModalRef = useRef();

  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch: parcelsRefetch } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup"
      );
      return res.data;
    },
  });

  /// todo: invalidate query after assigning
  const { data: riders = [],  } = useQuery({
    queryKey: ["riders", selectedParcel?.riderDistrict, "available"],
    enabled: !!selectedParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(`/riders?status=approved&
            riderDistrict${selectedParcel?.riderDistrict}&workStatus=available`);
      return res.data;
    },
  });

  // modal open use
  const openAssignRiderModal = (parcel) => {
    setSelectedParcel(parcel);
    // console.log('jdsinvi', parcel.riderDistrict)
    riderModalRef.current.showModal();
  };


  // btn a click korle modal kar korbe
  const handleAssignRider = rider => {
    const riderAssignInfo = {
        riderId: rider._id,
        riderEmail: rider.email,
        riderName: rider.name,
        parcelId: selectedParcel._id
    }
        axiosSecure.patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
        .then(res => {
            if(res.data.modifiedCount) {
                riderModalRef.current.close();
                parcelsRefetch()
                Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: `Rider has been assigned.`,
                          showConfirmButton: false,
                          timer: 2000,
                        });
            }
                
            
        })
  }





  //   console.log('hello check',parcels)
  return (
    <div>
      <h2 className="text-5xl">Assign Riders: {parcels.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Created At</th>
              <th>Pickup District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>{parcel.createdAt}</td>
                <td>{parcel.riderDistrict}</td>
                {/* {  console.log('c sbsubdsibd',parcel)} */}
                <td>
                  <button
                    onClick={() => openAssignRiderModal(parcel)}
                    className="btn btn-primary text-black"
                  >
                    Find Riders
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog
        ref={riderModalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Riders: {riders.length}!</h3>

          {/* modal a table added */}

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                 
                </tr>
              </thead>
              <tbody>
                
                {
                    riders.map((rider, index) =>  <tr key={rider._id}>
                       
                  <th>{index + 1}</th>
                  <td>{rider.name}</td>
                  <td>{rider.email}</td>
                  <td>
                        <button
                        onClick={()=> handleAssignRider(rider)}
                         className="btn btn-primary text-black">Assign</button>
                  </td>
                </tr> 
            )}

         
              
             
              </tbody>
            </table>
          </div>


          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRiders;
