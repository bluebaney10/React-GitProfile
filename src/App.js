import React, { Component } from 'react'
import GitProfile from 'components/GitProfile.react'



class App extends Component {


  constructor(props) {
    super(props)
   
  }

  
  render() {
    return (
      <div>
      <section id="card">
        <GitProfile />
      </section>
       </div>
      
      
    )
  }
}

export default App;
