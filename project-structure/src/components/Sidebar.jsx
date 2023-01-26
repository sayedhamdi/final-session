import { Link } from "react-router-dom";
function SideBar() {
  return (
    <nav>
        <div className="text-xl">hello</div>
      <ul >
        <li className="text-[30px]">
          <Link  className="text-[30px]" to="/">Home</Link>
        </li>
        <li>
          <Link  to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link  to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;