import React from "react";

const AppRow = ({ styleName, children }: any) => {
  return (
    <div className="row">
      <div className={`${styleName}`}>{children}</div>
    </div>
  );
};

export default AppRow;
