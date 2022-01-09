import { team } from "lib/team";
import { Link, Outlet } from "react-location";

export default function TeamPage() {
  return (
    <div>
      <h1>I'm the Team Page</h1>
      <ul>
        <h2>Meet the Team</h2>
        {team.map((item, index) => (
          <li key={index}>
            <Link to={item.name}>
              <h1>{item.name}</h1>
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
