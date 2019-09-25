import React, { Component } from 'react'
import Loader from './Loading';

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: this.props.show,
      subFollowers: 0,
      posts: this.props.posts,

    };
  }


     renderNothing()
     {
      return(<div>
        <p>Nothing to be seen</p>
        </div>
      );
     }

     renderPosts()
     {
       return(
         <div>
         <h1>r/{this.state.posts[0].data.children[0].data.subreddit}</h1>
         <h3>Subscribers : {this.state.posts[0].data.children[0].data.subreddit_subscribers.toLocaleString()}</h3>
           {this.state.posts[0].data.children.map((post) => {
             return (<div className="post-card" key={post.data.id}>
                 <a href={post.data.url}>{post.data.title}</a>
                 <p>{post.data.author}</p>
                 <p>{post.data.ups.toLocaleString()}</p>
                 <p>{post.data.num_comments ? post.data.num_comments.toLocaleString() : "No Comments"}</p>
               </div>);
           })}

         </div>
       );

     }
     //
     // componentDidMount()
     // {
     //   this.setState({
     //     posts: this.props.posts,
     //   });
     // }

     render() {
       return(<div>
         {this.state.isLoaded && this.renderPosts()}
       </div>
     );
     }
}

export default Posts
