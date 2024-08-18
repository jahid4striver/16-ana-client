import auth from "@/auth/firebase.config";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div className="navbar bg-red-600 text-white">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="invisible lg:visible" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="invisible lg:visible" to="/allbooks">
                  All Books
                </Link>
              </li>
              <li>
                <Link className="invisible lg:visible" to="/wishlist">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link className="invisible lg:visible" to="/addnewbook">
                  Add New Book
                </Link>
              </li>
              {!user?.email && (
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              )}
              {user?.email ? (
                <li>
                  <Link onClick={() => signOut(auth)} to="">
                    Log Out
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </div> */}
          <Link to="/" className="btn btn-ghost text-xl">
            16ana.net
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <Link className="invisible lg:visible" to="/">
                Home
              </Link>
            </li>
             <li>
              <Link className="invisible lg:visible" to="/allbooks">
                All Books
              </Link>
            </li>
            <li>
              <Link className="invisible lg:visible" to="/wishlist">
                My Wishlist
              </Link>
            </li>
            <li>
              <Link className="invisible lg:visible" to="/addnewbook">
                Add New Book
              </Link>
            </li>
            {!user?.email && (
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            )} */}
            {user?.email ? (
              <li>
                <Link onClick={() => signOut(auth)} to="">
                  Log Out
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
      {/* <div className="">
                <div className="flex-1">
                    <a className="btn btn-ghost text-white normal-case text-xl">16 Ana</a>
                </div>
                <div className="flex-none text-white">
                    <ul className="menu menu-horizontal px-1">
                       
                      
                       
                    </ul>
                </div>
            </div> */}
    </div>
  );
};

export default Navbar;
