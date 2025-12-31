import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/Context";

const HeaderLeft = () => {
  const { setValues } = useContext(AppContext);

  return (
    <div className="headerLeft d-flex flex-column gap-2 h-100">
      {/* Mobile Sidebar Header with Logo and Close Button */}
      <div className="sidebar-mobile-header d-md-none d-flex align-items-center justify-content-between px-3 py-2">
        <div className="d-flex align-items-center gap-2">
          <button className="header__button" onClick={() => setValues(false)}>
            <img src="../svg/burger-btn.svg" alt="Menu" />
          </button>
          <Link className="header__logo-link" to="/" onClick={() => setValues(false)}>
            <img src="../svg/YouTube-logo.svg" alt="Logo" style={{ height: '20px' }} />
          </Link>
        </div>
      </div>

      <ul className="headerLeft__menu d-flex flex-column gap-1 pointer-events-auto">
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../svg/home-icon.svg" alt="icon" />
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <img className="headerLeft__icon me-4" src="../svg/location-icon.svg" alt="icon" />
            <span className="link-text">Explore</span>
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="https://www.youtube.com/results?search_query=trending">
            <img className="headerLeft__icon me-4" src="../svg/shorts-icon.svg" alt="icon" />
            <span className="link-text">Shorts</span>
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="https://www.youtube.com/feed/subscriptions">
            <img className="headerLeft__icon me-4" src="../svg/subcribtions-icon.svg" alt="icon" />
            <span className="link-text">Subscriptions</span>
          </Link>
        </li>
      </ul>
      <hr className="headerLeft__separator" />
      <ul className="headerLeft__menu d-flex flex-column gap-1">
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="https://www.youtube.com/feed/library">
            <img className="headerLeft__icon me-4" src="../svg/library-icon.svg" alt="icon" />
            <span className="link-text">Library</span>
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="https://www.youtube.com/feed/history">
            <img className="headerLeft__icon me-4" src="../svg/history-icon.svg" alt="icon" />
            <span className="link-text">History</span>
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="https://studio.youtube.com/channel/UCw-3fm5P93zeGGTwtWzbOlg">
            <img className="headerLeft__icon me-4" src="../svg/your-video-icon.svg" alt="icon" />
            <span className="link-text">Your videos</span>
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="https://www.youtube.com/playlist?list=WL">
            <img className="headerLeft__icon me-4" src="../svg/watch-later-icon.svg" alt="icon" />
            <span className="link-text">Watch later</span>
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="https://www.youtube.com/playlist?list=LL">
            <img className="headerLeft__icon me-4" src="../svg/pop-icon.svg" alt="icon" />
            <span className="link-text">Pop</span>
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="/">
            <span className="link-text">Show more</span>
          </Link>
        </li>
      </ul>
      <hr className="headerLeft__separator" />
      <p className="headerLeft__titles ps-3">SUBSCRIPTIONS</p>
      <ul className="headerLeft__menu d-flex flex-column gap-1">
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="https://www.youtube.com/@FCBarcelona">
            <img className="headerLeft__icon me-4" src="../png/fc.png" alt="icon" />
            <span className="link-text">FC Barcelona</span>
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="https://www.youtube.com/@TED">
            <img className="headerLeft__icon me-4" src="../png/ted.svg" alt="icon" />
            <span className="link-text">TED</span>
          </Link>
        </li>
        <li className="headerLeft__menu-item py-2 px-3">
          <Link className='headerLeft__link' to="https://www.youtube.com/@fifa">
            <img className="headerLeft__icon me-4" src="../png/fifa.svg" alt="icon" />
            <span className="link-text">FIFA</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderLeft;