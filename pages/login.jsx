import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../src/slices/userSlice";
import { auth } from "../firebase";
import SignIn from "../src/components/SignIn";
import Home from "../src/components/Home";
import { useRouter } from "next/router";

const App = () => {
  const { uid } = useSelector(selectUser);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoUrl,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch]);
  useEffect(() => {
    uid && router.push("/home");
  }, [router.pathname]);
  return <SignIn />;
};

export default App;
