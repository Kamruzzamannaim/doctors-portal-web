import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://infinite-ocean-10097.herokuapp.com/admin/${user.email}`, {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setAdmin(data));
    }
  }, [user]);
  return [admin];
};
export default useAdmin;
