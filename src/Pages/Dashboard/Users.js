import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://stormy-journey-50277.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              key={user._id}
              user={user}
              refetch={refetch}
              index={user.index}
            ></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
