import axios from 'axios';
import { useContext, useState } from "react";
import { useEffect } from 'react';

import { useParams } from "react-router-dom";

import { FetchContext } from "../context/Data";

import OnePage from "../components/cardpage/OnePege";


const VideoPage = () => {
  const { id } = useParams();
  const { data } = useContext(FetchContext);
  const [commetns, setComments] = useState([])

  const filteredData = data.filter((item) => item.video.videoId === id);


  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://youtube-v2.p.rapidapi.com/video/comments',
        params: {
          video_id: id
        },
        headers: {
          'X-RapidAPI-Key': 'ca3db54de2msh2932c26b50a80bap188689jsn224469bf1f7d',
          'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
        }
      };
      

      try {
        const response = await axios.request(options);
        setComments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id, commetns]);


  return (
    <section>
      {filteredData.map((fetch, index) => (
        <OnePage fetch={fetch} id={id} commetns={commetns} key={index} />
      ))}
    </section>
  );
};

export default VideoPage;