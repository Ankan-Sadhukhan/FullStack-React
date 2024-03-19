import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [listOfPosts, setlistOfPosts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
      axios.get('http://localhost:3001/api/v1/posts').then((response) => {
        setlistOfPosts(response.data);
      });
    }, []);
  return (
    <div>
        {listOfPosts.map((value, key) => {
        return (
          <div className="post" onClick={()=>navigate(`/posts/${value.id}`)}>
            <div className="title"> {value.title} </div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  )
}

export default Home