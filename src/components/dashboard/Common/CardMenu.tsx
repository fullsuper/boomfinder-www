import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IntlMessages from "@/utils/IntlMessages";

class CardMenu extends React.Component<any, any> {
  render() {
    const options = [
      <IntlMessages id="popup.updateData" />,
      <IntlMessages id="popup.detailedLog" />,
      <IntlMessages id="popup.statistics" />,
      <IntlMessages id="popup.clearData" />
    ];
    const { menuState, anchorEl, handleRequestClose } = this.props;
    return (
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={menuState}
        onClose={handleRequestClose}
        MenuListProps={{
          style: {
            width: 150,
            paddingTop: 0,
            paddingBottom: 0
          }
        }}
      >
        {options.map(option => (
          <MenuItem key={option.toString()} onClick={handleRequestClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    );
  }
}

export default CardMenu;
