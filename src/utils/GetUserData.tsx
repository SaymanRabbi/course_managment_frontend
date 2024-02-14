import { useQuery } from "react-query";
import { useUserStore } from "../Store/UserStore";

export default function GetUserData() {
  const { setUserData, user } = useUserStore((state) => state);
  const token = localStorage.getItem("token");
  const { isLoading } = useQuery("user", async () => {
    const url = `http://localhost:5000/api/v1/user/login/token`;
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
