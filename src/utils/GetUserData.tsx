import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { useUserStore } from "../Store/UserStore";
export default function GetUserData() {
  const { setUserData } = useUserStore((state) => state);

  const token = Cookies.get("token");
  const {} = useQuery("user", async () => {
    const url = `https://course-managment-backend.onrender.com/api/v1/user/login/token`;
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await resp.json();
    if (data) {
      setUserData(data.data);
    }
  });
}
