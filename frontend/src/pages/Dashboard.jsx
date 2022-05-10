import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";
import {
  getRecruters,
  resetRecruter,
} from "../features/recruter/recruterSlice";

import SideBar from "./SideBar";
import Header from "../components/Header";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );
  const { recruters, recrutersIsLoading, recruterIsError, recruterMessage } =
    useSelector((state) => state.recruters);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (recruterIsError) {
      console.log(recruterMessage);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getRecruters());

    dispatch(getRecruters());

    return () => {
      dispatch(reset());
    };
  }, [
    user,
    navigate,
    isError,
    message,
    dispatch,
    recruterIsError,
    recruterMessage,
    recrutersIsLoading,
  ]);

  if (isLoading || recrutersIsLoading) {
    return <Spinner />;
  }

  return (
    <>  
<input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main-content">
 
        <Header />
        <main>
          <Outlet />
        </main> 
      </div>
    </>

 
 
  );
}

export default Dashboard;
