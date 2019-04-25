import React from "react";

type Icon = {
  icon: string;
};

const LeftIcon = ({ icon }: Icon) => (
  <span className="icon is-small is-left">
    <i className={`fa ${icon}`} />
  </span>
);

export default LeftIcon;
