import React from "react";

import NotificationItem from "./NotificationItem";
import {notifications} from "./data";
import CustomScrollbars from "@/utils/CustomScrollbars";

const MailNotification = () => {
  return (
    <CustomScrollbars
      className="messages-list scrollbar"
      style={{height: 280}}
    >
      <ul className="list-unstyled">
        {notifications.map((notification, index) => (
          <NotificationItem key={index} notification={notification}/>
        ))}
      </ul>
    </CustomScrollbars>
  );
};

export default MailNotification;
