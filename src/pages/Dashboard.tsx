// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import DashboardHome from "./DashboardHome";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import { MdOutlineArrowDropUp, MdAdUnits, MdTripOrigin } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
// import { FaRegUser } from "react-icons/fa";
// import { RiProductHuntLine } from "react-icons/ri";
// import { TbBrandBeats, TbCategory2 } from "react-icons/tb";

// import { CiSettings } from "react-icons/ci";
import { GoListOrdered } from "react-icons/go";

const Dashboard = () => {
  //   const setting = useSelector((state) => state.info.settings);
  //   const user = useSelector((state) => state.user.user);
  //   const [open, setOpen] = useState(true);
  //   const [open2, setOpen2] = useState(true);

  return (
    // <div className="drawer drawer-mobile mt-16">
    //   <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content text-center">
    //     <div className="w-full mx-auto">
    //       <Outlet />
    //     </div>
    //   </div>
    //   <div className="drawer-side h-screen mt-px">
    //     <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    // <ul className="menu p-4 overflow-y-scrool w-60 bg-red-600 text-white text-xs font-semibold">
    //   {/* <!-- Sidebar content here --> */}
    //   <li className="bg-white text-red-600 shadow-xl mb-2">
    //     <Link to="/">
    //       <RxDashboard />
    //       Dashboard
    //     </Link>
    //   </li>
    //   <li className="bg-white text-red-600 shadow-xl mb-2">
    //     <Link to="/adduser">
    //       <FaRegUser />
    //       User Management
    //     </Link>
    //   </li>

    //   <div className="collapse mb-2">
    //     <input
    //       onClick={() => setOpen(!open)}
    //       type="checkbox"
    //       className="peer"
    //     />
    //     <div className="collapse-title bg-white text-red-600 peer-checked:bg-gray-200 peer-checked:text-red-content flex justify-between">
    //       <RiProductHuntLine className="my-auto text-xl" />
    //       Products Info
    //       {open ? (
    //         <span>
    //           <MdOutlineArrowDropDown className="text-2xl" />
    //         </span>
    //       ) : (
    //         <span>
    //           <MdOutlineArrowDropUp className="text-2xl" />
    //         </span>
    //       )}
    //     </div>
    //     <div className="collapse-content">
    //       <li className="bg-white text-red-600 shadow-xl mt-2">
    //         <Link to="/addbrand">
    //           <TbBrandBeats />
    //           Add Brand
    //         </Link>
    //       </li>
    //       <li className="bg-white text-red-600 shadow-xl mt-2">
    //         <Link to="/addcategory">
    //           <TbCategory2 />
    //           Add Category
    //         </Link>
    //       </li>
    //       <li className="bg-white text-red-600 shadow-xl mt-2">
    //         <Link to="/addunit">
    //           <MdAdUnits />
    //           Add Unit
    //         </Link>
    //       </li>

    //       <li className="bg-white text-red-600 shadow-xl mt-2">
    //         <Link to="/addorigin">
    //           <MdTripOrigin />
    //           Add Origin
    //         </Link>
    //       </li>
    //       <li className="bg-white text-red-600 shadow-xl mt-2">
    //         <Link to="/addproduct">
    //           <RiProductHuntLine />
    //           Add A Product
    //         </Link>
    //       </li>
    //     </div>
    //   </div>
    //   <div className="collapse mb-2">
    //     <input
    //       onClick={() => setOpen2(!open2)}
    //       type="checkbox"
    //       className="peer"
    //     />
    //     <div className="collapse-title bg-white text-red-600 peer-checked:bg-gray-200 peer-checked:text-red-content flex justify-between">
    //       <CiSettings className="text-xl" /> Settings
    //       {open2 ? (
    //         <span>
    //           <MdOutlineArrowDropDown className="text-2xl" />
    //         </span>
    //       ) : (
    //         <span>
    //           <MdOutlineArrowDropUp className="text-2xl" />
    //         </span>
    //       )}
    //     </div>
    //     <div className="collapse-content">
    //       <li className="bg-white text-red-600 shadow-xl mt-2">
    //         <Link to="/smssetting">SMS Settings</Link>
    //       </li>
    //     </div>
    //   </div>
    // </ul>
    //   </div>
    // </div>
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-center">
        <div className="w-full lg:w-11/12  mx-auto">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side h-screen bg-red-600 mt-px">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-scrool w-56 bg-red-600 text-white text-xs font-semibold">
          {/* <!-- Sidebar content here --> */}
          <li className="bg-white text-red-600 shadow-xl mb-2">
            <Link to="/dashboard">
              <RxDashboard />
              Dashboard
            </Link>
          </li>
          {/* <li className="bg-white text-red-600 shadow-xl mb-2">
            <Link to="/adduser">
              <FaRegUser />
              User Management
            </Link>
          </li> */}
          <li className="bg-white text-red-600 shadow-xl mb-2">
            <Link to="/dashboard/orders">
              <GoListOrdered />
              Order Management
            </Link>
          </li>
          <li className="bg-white text-red-600 shadow-xl mb-2">
            <Link to="/dashboard/addsliderimages">
              <GoListOrdered />
              Add Homepage Slider
            </Link>
          </li>
          <li className="bg-white text-red-600 shadow-xl mb-2">
            <Link to="/dashboard/sliderimages">
              <GoListOrdered />
              Slider Images
            </Link>
          </li>
          <li className="bg-white text-red-600 shadow-xl mb-2">
            <Link to="/dashboard/addnewbook">
              <GoListOrdered />
              Add New Product
            </Link>
          </li>
          {/* 
          <div className="collapse mb-2">
            <input
              onClick={() => setOpen(!open)}
              type="checkbox"
              className="peer"
            />
            <div className="collapse-title bg-white text-red-600 peer-checked:bg-gray-200 peer-checked:text-red-content flex justify-between">
              <RiProductHuntLine className="my-auto text-xl" />
              Products Info
              {open ? (
                <span>
                  <MdOutlineArrowDropDown className="text-2xl" />
                </span>
              ) : (
                <span>
                  <MdOutlineArrowDropUp className="text-2xl" />
                </span>
              )}
            </div>
            <div className="collapse-content">
              <li className="bg-white text-red-600 shadow-xl mt-2">
                <Link to="/addbrand">
                  <TbBrandBeats />
                  Add Brand
                </Link>
              </li>
              <li className="bg-white text-red-600 shadow-xl mt-2">
                <Link to="/addcategory">
                  <TbCategory2 />
                  Add Category
                </Link>
              </li>
              <li className="bg-white text-red-600 shadow-xl mt-2">
                <Link to="/addunit">
                  <MdAdUnits />
                  Add Unit
                </Link>
              </li>

              <li className="bg-white text-red-600 shadow-xl mt-2">
                <Link to="/addorigin">
                  <MdTripOrigin />
                  Add Origin
                </Link>
              </li>
              <li className="bg-white text-red-600 shadow-xl mt-2">
                <Link to="/addproduct">
                  <RiProductHuntLine />
                  Add A Product
                </Link>
              </li>
            </div>
          </div>
          <div className="collapse mb-2">
            <input
              onClick={() => setOpen2(!open2)}
              type="checkbox"
              className="peer"
            />
            <div className="collapse-title bg-white text-red-600 peer-checked:bg-gray-200 peer-checked:text-red-content flex justify-between">
              <CiSettings className="text-xl" /> Settings
              {open2 ? (
                <span>
                  <MdOutlineArrowDropDown className="text-2xl" />
                </span>
              ) : (
                <span>
                  <MdOutlineArrowDropUp className="text-2xl" />
                </span>
              )}
            </div>
            <div className="collapse-content">
              <li className="bg-white text-red-600 shadow-xl mt-2">
                <Link to="/smssetting">SMS Settings</Link>
              </li>
            </div>
          </div> */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
