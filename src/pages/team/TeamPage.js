import { team } from "lib/team";
import { Link, Outlet } from "react-location";

export default function TeamPage() {
  return (
    <div className="flex flex-col mt-20 items-center">
      <h1 className="my-5 text-5xl font-semibold">I'm the Team Page</h1>

      <h2 className="text-3xl font-medium my-5">
        Meet the{" "}
        <Link
          getActiveProps={(location) => ({
            style: { color: "rgb(37, 99, 235)" },
          })}
          to="/team"
        >
          Team
        </Link>
      </h2>
      <ul className="flex space-x-10 mt-2 mb-14">
        {team.map((item, index) => (
          <li key={index}>
            <Link
              to={item.name}
              getActiveProps={(location) => ({
                style: { color: "rgb(37, 99, 235)" },
              })}
            >
              <h1 className="capitalize font-semibold text-2xl hover:text-blue-500">
                {item.name}
              </h1>
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
