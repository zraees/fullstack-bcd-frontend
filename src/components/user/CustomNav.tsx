import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const CustomNav = () => {

    const {user} = useAuth();

    return (
        <>
        {user == null ? (
          <li>
            <NavLink to="/login" className="nav-link px-2">
              Sign In
            </NavLink>
          </li>
        ) : (
          <>
            {(user?.userTypeId??2) == 2 && 
            <li>
              <NavLink to="auth/user-profile" className="nav-link px-2">
                My Reviews
              </NavLink>
            </li>}

            {(user?.userTypeId??2) == 1 && 
            <li>
              <NavLink to="auth/user-profile" className="nav-link px-2">
                All Reviews
              </NavLink>
              <NavLink to="auth/user-profile" className="nav-link px-2">
                Manage Business
              </NavLink>
            </li>}

            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink to="/logout" className="nav-link px-2">
                Sign out
              </NavLink>
            </li>
          </>
        )}
        </>
    );
}

export default CustomNav;