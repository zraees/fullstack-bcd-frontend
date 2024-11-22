import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const toggleOpen = () => setIsOpen(!isOpen);
  
  const menuClass = `dropdown-menu${isOpen ? " show" : ""}  text-small`;

  return (
    <div className="dropdown text-end" onClick={() => toggleOpen()}>
      <a
        href="#"
        className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={user == null ? "/images/no-user.jpg" : "/images/yes-user.webp"}
          alt=""
          width="32"
          height="32"
          className="rounded-circle"
        />&nbsp; {user}
      </a>
      <ul className={menuClass}>
        {user == null ? (
          <li>
            <NavLink to="/login" className="nav-link px-2">
              Sign In
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="auth/user-profile" className="nav-link px-2">
                Profile
              </NavLink>
            </li>
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
      </ul>
    </div>
  );
};

export default UserNav;
