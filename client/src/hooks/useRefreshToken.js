import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const useRefreshToken = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const refresh = async () => {
    try {
      const res = await axios.get("http://localhost:4000/token", {
        withCredentials: true,
      });

      dispatch(
        addUser({
          username: user?.username,
          accessToken: res?.data?.accessToken,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  return refresh; //we could also call this function here itself
  // but since
  //we usually return data, setData and errors, loading from custom hooks
};

export default useRefreshToken;
