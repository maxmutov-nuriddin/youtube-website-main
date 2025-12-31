import { useContext, useEffect, useState } from "react";

import { FetchContext } from "../../context/Data";
import { SearchContexts } from "../../context/Search";

import CardPage from "../cardpage/CardPage";

import './Card.css';

const Card = () => {
  const [loading, setLoading] = useState(true);
  const { data } = useContext(FetchContext);
  const { searchContext } = useContext(SearchContexts);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setLoading(true);

    const results = data.filter((item) => {
      if (searchContext === true) {
        return item;
      } else if (
        typeof searchContext === 'string' &&
        item.video.title.toLowerCase().includes(searchContext.toLowerCase())
      ) {
        return item;
      }
    });

    setTimeout(() => {
      setSearchResults(results);
      setLoading(false);
    }, 1000);
  }, [data, searchContext]);


  if (loading) {
    return <div className='load'><span className="loader"></span></div>;
  }

  return (
    <section className="cards">
      <div className="cards__list">
        {searchResults.map((fetch, index) => (
          <CardPage fetch={fetch} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Card;