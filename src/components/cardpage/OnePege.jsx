/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';

import { FetchContext } from '../../context/Data';
import { SearchContexts } from '../../context/Search';

import LeftPageCard from './LeftPageCard';

import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

import '../cardpage/onePage.css';


const OnePage = ({ fetch, id, commetns }) => {
  ''
  const [loading, setLoading] = useState(true);
  const { data } = useContext(FetchContext)
  const { searchContext } = useContext(SearchContexts)
  const [searchResults, setSearchResults] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, [commetns]);

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObj = {
        id: Date.now(),
        text: newComment,
        author_name: "Liliya",
        published_time: "Just Now",
        like_count: 0,
        dislike_count: 0,
        thumbnails: [{ url: "./png/ted.svg" }],
      };
  
      const updatedComments = [...commetns.comments, newCommentObj];
      setComments(updatedComments);
      setNewComment('');
  
      localStorage.setItem('comments', JSON.stringify(updatedComments));
    }
  };
  



  useEffect(() => {
    setLoading(true)
    const results = data.filter((item) => {
      if (searchContext === true) {
        return item;
      } else if (typeof searchContext === 'string' && item.video.title.toLowerCase().includes(searchContext.toLowerCase())) {
        return item;
      }
    });
    setTimeout(() => {
      setSearchResults(results);
      setLoading(false);
    }, 1000);
  }, [data, searchContext]);


  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subscribe, setSubscribe] = useState(true);
  const [subscribed, setSubscribed] = useState(0);

  const handleLikeClick = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const handleDislikeClick = () => {
    if (!disliked) {
      setDislikes(dislikes + 1);
      setDisliked(true);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
    } else {
      setDislikes(dislikes - 1);
      setDisliked(false);
    }
  };

  const handleShareSubscribe = () => {
    if (subscribe == false) {
      setSubscribe(true)
      setSubscribed(subscribed - 1);
    } else {
      setSubscribe(false)
      setSubscribed(subscribed + 1);
    }
  }

  const handleDownloadClick = () => {
    alert('Файл загружен!');
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Ссылка скопирована в буфер обмена!');
  };

  if (loading) {
    return <div className='load'><span className="loader"></span></div>;
  }

  return (
    <section className="one__page mt-5">
      <div className="one__page-content col-lg-8">
        <iframe className="one__page-iframe mt-3" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <div className="one__page-details p-0 mt-2 d-flex flex-column">
          <h5 className="one__page-title">{fetch.video.title}</h5>
          <div className="one__page-info ms-3">
            <div className="one__page-box d-flex justify-content-between align-items-center">
              <ul className="one__page-author-info d-flex align-items-center gap-md-4 justify-content-between">
                <li>
                  <img className="one__page-thumbnail" src={`${fetch.video.thumbnails[0].url}`} alt="" />
                </li>
                <li>
                  <ul>
                    <li>
                      <a className="one__page-link" href={`https://www.youtube.com/${fetch.video.author.canonicalBaseUrl}`}>{fetch.video.author.title}</a>
                    </li>
                    <li>
                      <p className="one__page-text">{subscribed} subscribes</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="one__page-subscribe-button" onClick={handleShareSubscribe} style={{ color: subscribe ? 'black' : 'red' }}>{subscribe ? 'Subscribe' : "Subscribed"}</button>
                </li>
              </ul>
              <ul className="one__page-actions d-flex gap-3 align-items-center justify-content-between">
                <li>
                  <ul className="one__page-like-dislike d-flex align-items-center">
                    <li>
                      <button className="one__page-like-button btn btn-link d-flex align-items-center me-2" onClick={handleLikeClick} style={{ color: liked ? 'red' : 'black' }}>
                        <AiOutlineLike className="one__page-like-icon me-1" /> {likes}
                      </button>
                    </li>
                    <li>
                      <button className="one__page-dislike-button ms-2 btn btn-link d-flex align-items-center" onClick={handleDislikeClick} style={{ color: disliked ? 'red' : 'black' }}>
                        <AiOutlineDislike className="one__page-dislike-icon me-1" /> {dislikes}
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="one__page-share-button" onClick={handleShareClick}>Share</button>
                </li>
                <li>
                  <button className="one__page-download-button" onClick={handleDownloadClick}>Downloaded</button>
                </li>
              </ul>
            </div>
            <div className='d-flex align-items-center mt-5 gap-3'>
              <div>
                <img src="./png/ted.svg" alt="icon" className='commetn__img' />
              </div>
              <div>
                <input
                  type="text"
                  placeholder='Your comment'
                  className='comment__inp'
                  value={newComment}
                  onChange={handleInputChange}
                />
                <button onClick={handleAddComment}>Add Comment</button>
              </div>
            </div>
            <div className='mt-5'>
              <ul>
                {comments.length === 0 ? (
                  commetns?.comments?.map((comment) => (
                    <li key={comment.id} className=' d-flex gap-4 my-3 align-items-center'>
                      <div>
                        <img className='rounded-circle commetn__img' src={`${comment?.thumbnails[0]?.url}`} alt="img" />
                      </div>
                      <div>
                        <p>
                          <strong className='me-2'>{comment.author_name}</strong>
                          {comment.published_time}
                        </p>
                        <p>{comment.text}</p>
                        <div className=' d-flex gap-3'>
                          <button className="  d-flex align-items-center me-2" style={{ color: liked ? 'red' : 'black' }}>
                            <AiOutlineLike className="me-1" /> {comment.like_count}
                          </button>
                          <button className=" ms-2 d-flex align-items-center" style={{ color: disliked ? 'red' : 'black' }}>
                            <AiOutlineDislike className=" me-1" /> {dislikes}
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  comments?.map((comment) => (
                    <li key={comment.id} className=' d-flex gap-4 my-3 align-items-center'>
                      <div>
                        <img className='rounded-circle commetn__img' src={`${comment?.thumbnails[0]?.url}`} alt="img" />
                      </div>
                      <div>
                        <p>
                          <strong className='me-2'>{comment.author_name}</strong>
                          {comment.published_time}
                        </p>
                        <p>{comment.text}</p>
                        <div className=' d-flex gap-3'>
                          <button className="  d-flex align-items-center me-2" style={{ color: liked ? 'red' : 'black' }}>
                            <AiOutlineLike className="me-1" /> {comment.like_count}
                          </button>
                          <button className=" ms-2 d-flex align-items-center" style={{ color: disliked ? 'red' : 'black' }}>
                            <AiOutlineDislike className=" me-1" /> {dislikes}
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                )}

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-12 d-flex flex-column box__card">
        {searchResults.map((fetch, index) => (
          <LeftPageCard fetch={fetch} key={index} />
        ))}
      </div>
    </section>
  );
};

export default OnePage;