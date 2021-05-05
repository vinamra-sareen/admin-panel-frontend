import { getModules } from "../../_services/admin";
import React, { useEffect, useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Link } from "react-router-dom";

const Module = ({ location, children }) => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    let urlParams = new URLSearchParams(location.search);
    const module_id = urlParams.get("module_id");

    getModules(module_id)
      .then((res) => {
        if (res.status === 200) {
          setModules(res.data.modules);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="container m-10 w-full">
        {/* {JSON.stringify(modules)} */}
        {/* {JSON.stringify(location.search)} */}

        {modules &&
          modules.map((module) => (
            <Link to={`${module.module_link}`}>
              <Button className="m-2 mt-5 w-72" type="button">
                {module.navigation_name.length > 31
                  ? `${module.navigation_name.substring(0, 30)}...`
                  : module.navigation_name}
              </Button>
            </Link>
          ))}

        {children}
      </div>
    </>
  );
};

export default Module;
