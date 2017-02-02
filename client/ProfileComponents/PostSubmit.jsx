// Component for creating a new post

import React from 'react';

const PostSubmit = () => (
  <form className="post-list-form">Title:
    <input className="form-title" type="text" />Content:
    <input className="form-content" type="text" />
    <input type="submit" value="Submit" />
  </form>

);

export default PostSubmit;