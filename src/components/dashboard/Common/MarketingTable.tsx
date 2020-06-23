import React from "react";
import MarketingTableCell from "./MarketingTableCell";

const MarketingTable = ({ data }: any) => {
  return (
    <div className="table-responsive-material markt-table">
      <table className="table default-table table-sm full-table remove-table-border table-hover mb-0">
        <tbody>
          {data.map((data: any) => {
            return <MarketingTableCell key={data.id} data={data} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MarketingTable;
