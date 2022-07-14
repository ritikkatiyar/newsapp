import React, { Component } from 'react'
import NewItem from '../NewItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>News
      <h2>TopHeadlines</h2>
      <div className="row">
          <div className="col md-3"><NewItem/>
          </div>
          <div className="col md-3"><NewItem/>
          </div>
          <div className="col md-3"><NewItem/>
          </div>
          
          
          
          </div>
          
      </div>
    )
  }
}

export default News