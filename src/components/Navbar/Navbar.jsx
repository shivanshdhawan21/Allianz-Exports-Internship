import React, { useState } from 'react';
import './navbar.scss';
import { AccountCircle, Notifications, Search, Settings, Menu } from '@mui/icons-material';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (event, href) => {
    event.preventDefault();
    setActiveLink(href);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='navbar'>
        <div className='top'>
          <span className="left" onClick={() => window.scroll(0, 0)}>
            unfluke
          </span>
          <div className='right'>
            <div className='search'>
              <Search style={{ cursor: "pointer" }} />
              <input type='text' placeholder='Type here...'></input>
            </div>
            <div className='settings'>
              <Settings />
            </div>
            <div className='notif'>
              <Notifications />
            </div>
            <div className='account'>
              <AccountCircle />
              <div>Sign in</div>
            </div>
          </div>
          <div className='menu-icon' onClick={toggleMenu}>
            <Menu />
          </div>
        </div>
        <div className={`down ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a
                className={`links ${activeLink === '#home' ? 'active' : ''}`}
                href="#home"
                onClick={(e) => handleClick(e, '#home')}
              >
                LeaderBoard
              </a>
            </li>
            <li>
              <a
                className={`links ${activeLink === '#hist_trade' ? 'active' : ''}`}
                href="#hist_trade"
                onClick={(e) => handleClick(e, '#hist_trade')}
              >
                Historical Trading
              </a>
            </li>
            <li>
              <a
                className={`links ${activeLink === '#hist_chart' ? 'active' : ''}`}
                href="#hist_chart"
                onClick={(e) => handleClick(e, '#hist_chart')}
              >
                Historical Chart
              </a>
            </li>
            <li>
              <a
                className={`links ${activeLink === '#scanners' ? 'active' : ''}`}
                href="#scanners"
                onClick={(e) => handleClick(e, '#scanners')}
              >
                Scanners
              </a>
            </li>
            <li>
              <a
                className={`links ${activeLink === '#alerts' ? 'active' : ''}`}
                href="#alerts"
                onClick={(e) => handleClick(e, '#alerts')}
              >
                Alerts
              </a>
            </li>
            <li>
              <a
                className={`links ${activeLink === '#basic_backtest' ? 'active' : ''}`}
                href="#basic_backtest"
                onClick={(e) => handleClick(e, '#basic_backtest')}
              >
                Basic Backtest
              </a>
            </li>
            <li>
              <a
                className={`links ${activeLink === '#adv_backtest' ? 'active' : ''}`}
                href="#adv_backtest"
                onClick={(e) => handleClick(e, '#adv_backtest')}
              >
                Advanced Backtest
              </a>
            </li>
            <li>
              <a
                className={`links ${activeLink === '#pricing' ? 'active' : ''}`}
                href="#pricing"
                onClick={(e) => handleClick(e, '#pricing')}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className={`links ${activeLink === '#my_earnings' ? 'active' : ''}`}
                href="#my_earnings"
                onClick={(e) => handleClick(e, '#my_earnings')}
              >
                My Earnings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
