import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const[adminLoading,setAdminLoading]=useState(true)
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
        .then((data) => {setAdmin(data)
        setAdminLoading(false)});
    }
  }, [user]);
  return [admin,adminLoading];
};
export default useAdmin;
