import React from 'react'
const AddForm = ({ handleLoginFieldChange, addBlog, title, author, url }) => {
    return (
      <div>
          <form onSubmit={addBlog}>
        <h2>create new</h2>
      <div>
      title
        <input
          type="text"
          name="newBlogTitle"
          value={title}
          onChange={handleLoginFieldChange}
        />
      </div>
      <div>
        author
        <input
          type="text"
          name="newBlogAuthor"
          value={author}
          onChange={handleLoginFieldChange}
        />
        </div>
        <div>
        url
        <input
          type="text"
          name="newBlogUrl"
          value={url}
          onChange={handleLoginFieldChange}
        />
        </div>
      <button type="submit">create</button>
      </form>
      </div>
    )
  }

  export default AddForm