import { NavLink, Outlet, useParams } from "react-router-dom";
import { menuEng } from "../../API/menuEng";
import { Fragment } from "react/jsx-runtime";

export function Dishes() {
  const { category, dishPath } = useParams();

  if (!category) {
    return <div>Invalid path</div>;
  }

  return (
    <>
      {menuEng
        .find((item) => item.path === category)
        ?.dishes.map((item) => (
          <Fragment key={item.id}>
            <NavLink to={item.dishPath} key={item.id}>
              <h2>
                {item.name}
              </h2>
              <img src={item.img} alt={item.name} />
            </NavLink>
            {dishPath === item.dishPath && <Outlet />}
          </Fragment>
        ))}
    </>
  );
}
