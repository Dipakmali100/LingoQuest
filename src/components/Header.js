
import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <header>
        <div className='header-main'>
            <div className="header-logo">
                <Link to="/dashboard" className='logo'>LingoQuest</Link>
            </div>
            <div className="header-menu">
                <div><Link to="/dashboard" className='header-menu-com'>Quizzes</Link></div>
                <div><Link to="/" className='header-menu-com'>Leaderboard</Link></div>
                <div><Link to="/" className='header-menu-com'>Profile</Link></div>
                <div><Link to="/" className='header-menu-com'>Logout</Link></div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
