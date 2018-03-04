import React from 'react'
import Blog from './components/Blog'
import AddForm from './components/AddForm'
import Togglable from './components/Togglable'
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
      user: null,
      alert: null
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
        <div className="wrapper">
          <h2>Log in to application</h2>
        <form onSubmit={this.login}>
          <div className="user">
          username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleLoginFieldChange}
          />
          </div>
          <div className="pass">
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

      <Togglable buttonLabel="add blog">
        <AddForm
        handleLoginFieldChange={this.handleLoginFieldChange}
        addBlog={this.addBlog}
        title={this.state.newBlogTitle}
        author={this.state.newBlogAuthor}
        url={this.state.newBlogUrl}   
        />
      </Togglable>
      </div>
    )
  }

}

export default App;
