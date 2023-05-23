import React, { useState } from "react";
import { listGeneralHome } from "../../assets/constants/listGeneralHome";
import { Link } from "react-router-dom";
import { ROUTES } from "../../configs/routes/ROUTES";
import { FormattedMessage } from "react-intl";
import { listAdvance } from "../../assets/constants/listAdvance";

const Menubar = () => {
  const [activePath, setActivePath] = useState<string>(
    window.location.pathname
  );

  return (
    <div className="h-full w-80 fixed top-11 bottom-0 pt-8 px-4 bg-white">
      <div className="">
        <h4
          className={`${
            activePath.includes(ROUTES.home) &&
            !activePath.includes(ROUTES.settings)
              ? "text-blue-500"
              : ""
          }`}
        >
          <FormattedMessage id="home.general" />
        </h4>
        <div className="pl-6 mt-6 flex flex-col gap-4">
          {listGeneralHome.map((item, index) => (
            <Link
              onClick={() => setActivePath(ROUTES.home + "/" + item)}
              key={index}
              to={item}
              className="text-black no-underline flex p-2 rounded-lg gap-2 hover:bg-gray-300"
            >
              <img
                className="w-8"
                src={require(`../../assets/images/icon${item}.png`)}
                alt=""
              />
              <div
                className={`my-auto ${
                  activePath.includes(item) ? "text-blue-500" : ""
                }`}
              >
                <FormattedMessage id={`home.${item}`} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h4
          className={`${
            activePath.includes(ROUTES.settings) ? "text-blue-500" : ""
          }`}
        >
          <FormattedMessage id="advance" />
        </h4>
        <div className="px-6 mt-6 flex flex-col gap-4">
          {listAdvance.map((item, index) => (
            <Link
              onClick={() => setActivePath(item)}
              key={index}
              to={item}
              className="text-black no-underline flex p-2 rounded-lg gap-2 hover:bg-gray-300"
            >
              <img
                className="w-8"
                src={require(`../../assets/images/icon${item}.png`)}
                alt=""
              />

              <div
                className={`my-auto ${
                  activePath.includes(item) ? "text-blue-500" : ""
                }`}
              >
                <FormattedMessage id={`advance.${item}`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menubar;
