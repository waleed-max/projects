import React from 'react';
import ReactDOM from 'react-dom';






  class Cart extends React.Component {
render() {
  return (
    <div>
    <center><Badge
          badgeContent={2}
          secondary={true}
          badgeStyle={{top: 12, right: 12}}
        >
          <IconButton tooltip="Notifications">
            <NotificationsIcon />
          </IconButton>
        </Badge></center>

</div


}


export default Cart
