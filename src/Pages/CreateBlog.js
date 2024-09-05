import React, { useEffect, useMemo, useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const CreateBlog = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      author: author,
      content: value
    }
    await axios.post("https://some-end-point/create", payload)
  }

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
                <input type="text" className="form-control" onChange={(e) => setAuthor(e.target.value)} />
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