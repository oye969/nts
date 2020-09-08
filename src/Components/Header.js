import React from 'react';


function Header() {
  return (
    <div className="HeaderContainer">
            <div>
            <img className= "logo" src="./logo2.jpg" alt="logo"/>
            </div>
            <nav>
                <ul>
                    <li><a href="#">RADIO</a></li>
                    <li><a href="#">LATEST</a></li>
                    <li><a href="#">EXPLORE</a></li>
                    <li><a href="#">INFINITE MIXTAPES</a></li>
                    <li><a href="#">MY NTS</a></li>
                    <li><a href="#">SUPPORT NTS</a></li>
                </ul>
            </nav>   
           <hr></hr> 
    </div>
  );
}

export default Header;
