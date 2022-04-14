import React from 'react';

function NavContainer() {
  return (
    <div id="navbar">
      <div id="nav-title"> 
        <i className="fa-solid fa-terminal"></i>          
        Speaking My Language 
      </div>
      <a href="/?program">Pair</a>
      <a href="/?matches">Matches</a>
      <a href="/?profile">Profile</a>
      <a href="/">Logout</a>
    </div>
  );
}

export default NavContainer;
