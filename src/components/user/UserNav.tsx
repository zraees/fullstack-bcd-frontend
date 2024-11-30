import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import CustomNav from "./CustomNav";

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
        />&nbsp; {user?.username}
      </a>
      <ul className={menuClass}>
        <CustomNav />
      </ul>
    </div>
  );
};

export default UserNav;
