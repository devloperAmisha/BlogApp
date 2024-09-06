import React, { useContext, useEffect, useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import axios from 'axios';


const Home = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
    setPosts(res.data);
  }

  useEffect(() => {
    fetchPosts();
  }, [])




  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="row">
            <h1>View a blog</h1>
            <p>
              Share your story with the world. Create a beautiful, personalized blog that fits your brand. Grow your audience  with built-in marketing tools, or transform your passion into revenue by gating access with a paywall.
            </p>
          </div>
          <div className="row">
            {
              posts.map((item) => {
                return (
                  // <h1>{item.title}</h1>
                  <div className="card mb-3" >
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">{item.category.name}</h6>
                      <p className="card-text">{new Date(item.created_at).toLocaleDateString()}</p>
                      <a href="#" className="card-link">Read</a>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>
    </div>
  )
}


export default Home