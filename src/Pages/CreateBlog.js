import React, { useContext, useEffect, useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { AuthContext } from '../Context/AuthenticationContext';


const CreateBlog = () => {
  const { currentUser } = useContext(AuthContext);
  const [value, setValue] = useState('');
  const [title, setTitle] = useState("")
  const [categories, setCategories] = useState([])
  const [categoryId, setCategoryId] = useState([])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      user_id: currentUser.user_id,
      content: value,
      category_id: categoryId
    }
    await axios.post(`${process.env.REACT_APP_API_URL}/posts`, payload, {
      headers: {
        Authorization: "Bearer" + currentUser.access_token
      }
    })
  }

  const fetchCategories = async (e) => {

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/categories`)
    setCategories(res.data);
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="row">
            <h1>Create a blog</h1>
            <p>
              Share your story with the world. Create a beautiful, personalized blog that fits your brand. Grow your audience  with built-in marketing tools, or transform your passion into revenue by gating access with a paywall.
            </p>
          </div>
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="">Title</label>
                <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="">Author</label>
                <input type="text" className="form-control" value={currentUser.name} disabled={true} />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="">Categories</label>
                <select className='form-control' onChange={(e) =>setCategoryId (e.target.value)}>
                  {
                    categories.map((item)=>{
                      return (
                        <option value={item.id}>{item.name}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="editor">Content</label>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
              </div>
              <button className='btn btn-success' onClick={handleSubmit} ><AddBoxIcon />Create Blog</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateBlog