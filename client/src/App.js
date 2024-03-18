
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {

    const [listOfPosts, setlistOfPosts] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3001/api/v1/posts').then((response) => {
        setlistOfPosts(response.data);
      });
    }, []);
  return (
    <div className="App">
      {listOfPosts.map((value, key) => {
        return (
          <div className="post">
            <div className="title"> {value.title} </div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
