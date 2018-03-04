import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
  it('renders title, author, likes ', () => {
    const simpleBlog = {
      title:"otsikko",
      author:"kirjoittaja",
      likes:2,
      url:"osoite"
    }
    console.log(simpleBlog)

    const blogComponent = shallow(<SimpleBlog blog={simpleBlog} />)
    
    console.log(blogComponent)

    const titleDiv = blogComponent.find('.title')
    expect(titleDiv.text()).toContain(simpleBlog.title)
    expect(titleDiv.text()).toContain(simpleBlog.author)
    const likesDiv = blogComponent.find('.likes')
    expect(likesDiv.text()).toContain(simpleBlog.likes) 


    })
})