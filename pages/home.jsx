import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Home from "../src/components/Home";
import { selectUser } from "../src/slices/userSlice";

const home = () => {
  const { uid } = useSelector(selectUser);
  const router = useRouter();
  useEffect(() => {
    !uid && router.push("/login");
  }, [router.pathname]);
  return <Home router={router} />;
};

export default home;
