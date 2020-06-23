import React from "react";
import FeedCell from "./FeedCell";

const DailyFeed = ({ data }: any) => {
  return (
    <div className="daily-feed-body">
      {data.map((data, index) => {
        return <FeedCell key={index} feed={data} />;
      })}
    </div>
  );
};

export default DailyFeed;
