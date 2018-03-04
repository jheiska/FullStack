import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
import blogService from './services/blogs'

describe('<App />', () => {
  let app
  beforeAll(() => {
    app = mount(<App />)
  })

  it('renders no blogs if not logged in', () => {
    app.update()
    const blogComponents = app.find(Blog)
    expect(blogComponents.length).toEqual(0)
  })
})