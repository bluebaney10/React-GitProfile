import React from 'react'
import './GitProfile.css'
import {fetchUser} from 'api'



class GitProfile extends React.Component{
   
 state={
      repository:{}
  }

  componentDidMount(){
    fetchUser( "bluebaney10").then(repository=>{
          this.setState({
              repository:repository
          })
      })
  }

    render() {

      const { 
         login="loading...",
         name,
         avatar_url,
         location,
         public_repos,
         followers,
         following,
         html_url,
         message
      } = this.state.repository
      
      return (
         <section className="github--profile">
          <div className="github--profile__info">
            <a href={html_url} target="_blank" title={name || login}><img src={avatar_url} alt={login}/></a>
            <h2><a href={html_url} title={login} target="_blank">{name || login}</a></h2>
            <h3>{location || 'I Live In My Mind'}</h3>
          </div>
          <div className="github--profile__state">
            <ul>
               <li>
                  <a href={followers} target="_blank" title="Number Of Followers"><i>{followers}</i><span>Followers</span></a>
               </li>
               <li>
                  <a href={public_repos} target="_blank" title="Number Of Repositoriy"><i>{public_repos}</i><span>Repositoriy</span></a>
               </li>
               <li>
                  <a href={following} target="_blank" title="Number Of Following"><i>{following}</i><span>Following</span></a>
               </li>
            </ul>
          </div>
        </section>
       )
   }
}
export default GitProfile