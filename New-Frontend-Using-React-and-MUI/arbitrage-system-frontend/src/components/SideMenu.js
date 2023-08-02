import React, { useState } from 'react';
import './SideMenu.css';
import { Button } from '@mui/material';

const SideMenu = ({ isOpen, onClose, menuList }) => {
  const drawerClass = isOpen ? 'drawer open' : 'drawer';

  return (
    <div className={drawerClass}>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      {/* Drawer content */}
      {menuList.map((item, index) => (
        <Button variant='text'>item</Button>
      ))}
    </div>
  );
}

export default SideMenu;
