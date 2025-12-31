import { Link } from "react-router-dom";
import './BottomNav.css';

const BottomNav = () => {
   return (
      <div className="bottom-nav">
         <Link to="/" className="bottom-nav-item active">
            <img src="/svg/home-icon.svg" alt="Home" />
            <span>Home</span>
         </Link>
         <Link to="/" className="bottom-nav-item">
            <img src="/svg/shorts-icon.svg" alt="Shorts" />
            <span>Shorts</span>
         </Link>
         <div className="bottom-nav-item circle-plus">
            <img src="/png/plus.png" alt="Upload" className="plus-icon" />
            {/* Note: plus png might not exist, checking files later or using + char */}
         </div>
         <Link to="/" className="bottom-nav-item">
            <img src="/svg/subcribtions-icon.svg" alt="Subs" />
            <span>Subscriptions</span>
         </Link>
         <Link to="/" className="bottom-nav-item">
            <img src="/svg/library-icon.svg" alt="Library" />
            <span>Library</span>
         </Link>
      </div>
   );
};

export default BottomNav;
