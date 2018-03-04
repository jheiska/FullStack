import React from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      newBlogTitle: '',
      newBlogAuthor: '',
      newBlogUrl: '',
      showAll: true,
      username: '',
      password: '',
      user: null
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )

    const loggedUserJSON = window.localStorage.getItem('loggedBlogger')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({user})
      blogService.setToken(user.token)
  }

  } 

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleBlogChange = (event) => {
    this.setState({ newBlog: event.target.value })
  }
  
  handleLogout = () => {
      window.localStorage.clear()
      this.setState.user=null
  }


  login = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })
  
      window.localStorage.setItem('loggedBlogger', JSON.stringify(user))
      blogService.setToken(user.token)
      this.setState({ username: '', password: '', user})
    } catch(exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      "title": this.state.newBlogTitle,
      "author": this.state.newBlogAuthor,
      "url": this.state.newBlogUrl,
      "user": this.state.user._id
    }

    blogService
      .create(blogObject)
      this.setState({
          newBlog: ''
        })
  }

  render() {
    if (this.state.user === null) {
      return (
        <div>
          <h2>Log in to application</h2>
        <form onSubmit={this.login}>
          <div>
          username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleLoginFieldChange}
          />
          </div>
          <div>
          password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleLoginFieldChange}
          />
        </div>
        <button type="submit">login</button>
      </form>
      </div>
      )
    }

    return (
      <div>
        <h2>blogs</h2>
        <p>{this.state.user.name} logged in</p>
        <button onClick={this.handleLogout}>logout</button>
        {this.state.blogs.map(blog =>
          <Blog key={blog._id} blog={blog} />
        )}

        <h2>create new</h2>

        <form onSubmit={this.addBlog}>
          
        <div>
        title
          <input
            type="text"
            name="newBlogTitle"
            value={this.state.newBlogTitle}
            onChange={this.handleLoginFieldChange}
          />
        </div>
        <div>
          author
          <input
            type="text"
            name="newBlogAuthor"
            value={this.state.newBlogAuthor}
            onChange={this.handleLoginFieldChange}
          />
          </div>
          <div>
          url
          <input
            type="text"
            name="newBlogUrl"
            value={this.state.newBlogUrl}
            onChange={this.handleLoginFieldChange}
          />
          </div>
        <button type="submit">create</button>
    </form>


      </div>
    )
  }

}

export default App;
