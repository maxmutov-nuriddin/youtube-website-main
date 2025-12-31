/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CardPage = ({ fetch }) => {
  // Safe access to nested properties
  const videoId = fetch?.video?.videoId;
  const thumbnails = fetch?.video?.thumbnails || [];
  const title = fetch?.video?.title || "No Title";
  const authorName = fetch?.video?.author?.title || "Unknown Channel";
  const views = fetch?.video?.stats?.views ? formatViews(fetch.video.stats.views) : "0 views";
  const published = fetch?.video?.publishedTimeText || "";

  const thumbnailSrc = thumbnails.length > 0 ? thumbnails[0].url : "";
  // Placeholder avatar if API doesn't provide one (often it doesn't in some endpoints)
  const avatarSrc = fetch?.video?.author?.avatar?.[0]?.url || thumbnailSrc;

  return (
    <div className="cards__item">
      <Link to={`/video/${videoId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img className="cards__image" src={thumbnailSrc} alt={title} />

        <div className="cards__content">
          <img className="cards__content-img" src={avatarSrc} alt={authorName} />

          <div className="cards__details">
            <h5 className="cards__title" title={title}>{title}</h5>

            <div className="channel-name">{authorName}</div>

            <div className="card-meta-row">
              <span className="video-meta">{views}</span>
              <span className="video-meta">• {published}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

// Helper to format views (e.g. 1.2M views)
function formatViews(views) {
  if (!views) return "";
  if (views >= 1000000) return (views / 1000000).toFixed(1) + 'M views';
  if (views >= 1000) return (views / 1000).toFixed(1) + 'K views';
  return views + ' views';
}

export default CardPage;