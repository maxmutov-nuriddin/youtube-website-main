/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./onePage.css";

const LeftPageCard = ({ fetch }) => {
  const handleLinkClick = () => {
    localStorage.clear();
  };
  return (
    <div className="left__page">
      <div className="left__page-content text-sm-start text-center mt-3">
        <div className="my-2">
          <Link className="left__page-link row" onClick={handleLinkClick} to={`/video/${fetch.video.videoId}`}>
            <div className="col-md-6">
              <img className="left__page-thumbnail mx-auto mx-sm-0" src={`${fetch.video.thumbnails[0].url}`} alt="video thumbnail" />
            </div>
            <div className="col-md-6">
              <div>
                <h5 className="left__page-title">{fetch.video.title}</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftPageCard;