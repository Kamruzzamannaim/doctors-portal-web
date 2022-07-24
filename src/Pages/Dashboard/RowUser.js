import React from "react";
import { toast } from "react-toastify";

const RowUser = ({ user, refetch, index }) => {
   
  const makeAdmin = () => {
    fetch(`https://infinite-ocean-10097.herokuapp.com/user/admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if(res.status===403){
            toast.error('failed to make an admin')
        }
       return res.json()})
      .then((data) => {
       if(data.modifiedCount>0){
        refetch();
        toast.success("successfully made an admin");
       }
      });
    
  };
  return (
    <tr key={user._id}>
      <th>{index + 1}</th>
      <td>{user?.email}</td>
      <td>
        {user.role !== "admin" && (
          <button class="btn btn-xs" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default RowUser;
