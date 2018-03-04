import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'




describe('<App />', () => {
  let app
  
  beforeAll(() => {
    app = mount(<App />)
    console.log(app.debug())
  })

  

  it('renders no blogs if not logged in', () => {
    app.update()
    console.log(app.debug())
   
    const userDiv = app.find('.user')
    console.log(userDiv.debug())
    expect(userDiv.text()).toContain('username:')

    const passDiv = app.find('.pass')
    expect(passDiv.text()).toContain('password:')

    const blogComponents = app.find(Blog)
    expect(blogComponents.length).toEqual(0)
  })
})


/*

const user = {
  username: 'tester',
  token: '1231231214',
  name: 'Teuvo Testaaja'
  }

describe('<App />', () => {
  let app

  describe('when user is not logged', () => {
    beforeEach(() => {
      app = mount(<App />)
    })

    it('only login form is rendered', () => {
      app.update()
      const userDiv = app.find('.user')
      expect(userDiv.text()).toContain('username:')

      const passDiv = app.find('.pass')
      expect(passDiv.text()).toContain('password:')

      const blogComponents = app.find(Blog)
      expect(blogComponents.length).toEqual(0)
    })
  })

  describe('when user is logged', () => {
    
    beforeEach(() => {
        localStorage.setItem('loggedBlogger', JSON.stringify(user))
        app = mount(<App />)
    })
      
    it('all notes are rendered', () => {
      app.update()
      const blogComponents2 = app.find(Blog)
      expect(blogComponents2.length).toEqual(2)
      console.log(blogComponents2.debug())
    })
  })
})
*/