import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-3xl text-center font-bold text-violet-500 mt-2">
          Welcome to Dashboard
        </h2>
        <Outlet></Outlet>
        {/* <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {!admin && (
            <>
              <li>
                <Link to="/dashboard/orders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/review">My Reviews</Link>
              </li>
            </>
          )}

          <li>
            <Link to="/dashboard/addProduct">Add Product</Link>
          </li>

          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
