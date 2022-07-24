// import React, { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading";
import RowUser from "./RowUser";

const AllUsers = () => {
 
  const { data: users, isLoading,refetch } = useQuery(["users"], () =>
    fetch("http://localhost:5000/user",{
        method:"GET",
        headers:{
            "authorization":`bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
 
  
  return (
    <div>
      <h2>all users: {users?.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
          {
                           users.map((user,index)=><RowUser
                           key={user._id}
                           user={user}
                           index={index}
                           refetch={refetch}
                           ></RowUser>)
                       }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
