import { Link, useNavigate } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";
import { CgProfile } from "react-icons/cg";


import toast from "react-hot-toast";

function Sidebar() {
  
  const links = [
    {
      title: "Home",
      path: "",
      icon: < MdHome />,
    },
    {
      title: "logo",
      path: "logo",
      icon: <  FaXTwitter  />,
    },
    {
      title: "search",
      path: "search",
      icon: < IoIosSearch />,
    },
    {
      title: "message",
      path: "message",
      icon: <  SiGooglemessages/>,
    },
    {
      title: "m33",
      path: "m33",
      icon: < SiGooglemessages />,
    },
    {
      title: "profile",
      path: "profile",
      icon: <  CgProfile />,
    },
  ];

  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
      toast.success("Signed out successfully");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <aside className="sidebar">
      <h3>logo</h3>
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <Link to={link.path}>
              {link.icon}
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* <button onClick={handleSignOut}>Sign Out</button> */}
      {/* <signoutModal/> */}
      <SignoutModal/>
    </aside>
  );
}

  


export default Sidebar
