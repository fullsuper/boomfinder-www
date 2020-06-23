import React from "react";
import UserCell from "./UserCell/index";

const ChatUserList = ({ chatUsers, onSelectUser }: any) => {
  return (
    <div>
      {chatUsers.map((chat: any, index: any) => (
        <UserCell key={index} chat={chat} onSelectUser={onSelectUser} />
      ))}
    </div>
  );
};

export default ChatUserList;
