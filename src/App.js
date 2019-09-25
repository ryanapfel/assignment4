import React from 'react';
import './App.css';
import Form from './Form';
import Posts from './Posts';
import Loader from './Loading';
import History from './History';


class App extends React.Component
{
  constructor()
  {
    super();
    this.state =
    {
      currentSubName: '',
      loading: false,
      posts: [],
      postRequested: false,
      history:[]
    }
  }


  async getPosts(subName){
     let response = await fetch(`https://www.reddit.com/r/${subName}.json`);
     let posts = await response.json();

     return posts;
     }

  // subName must be set
  handleSubmit = async (subName) =>
  {
      this.setState({loading: true, postRequested: false });
      let subPosts = await Promise.all([this.getPosts(subName)]);
      this.setState({
        posts:subPosts,
        loading: false,
        postRequested: true,
        history: [this.state.history, subName].flat()
        });
  }


  handleClick = async (subName) =>
  {
    this.setState({loading: true, postRequested: false });
    let subPosts = await Promise.all([this.getPosts(subName)]);
    this.setState({
      posts:subPosts,
      loading: false,
      postRequested: true
      });
  }


  showHistory()
  {
    return(
      this.state.history.map((item) => {
        return(<History subName={item} key={item} click={this.handleClick}></History>);
      })
    );
  }




  render()
  {
    return(
      <div>
        <Form onSearch={this.handleSubmit} ></Form>
        {this.showHistory()}
        <div>
        {this.state.loading && <Loader></Loader>}
        {this.state.postRequested && <Posts posts={this.state.posts} show={this.state.postRequested}></Posts> }

        </div>
      </div>

    );
  }


}


export default App;




//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoaded: false,
//       posts: [],
//       loading: true,
//       subName: 'Reddit',
//       subFollowers: 0
//     };
//   }
//
//    componentDidMount() {
//       fetch("https://www.reddit.com/r/funny.json")
//          .then(res => res.json())
//          .then(
//            (result) => {
//              this.setState({
//                isLoaded: true,
//                posts: result.data.children,
//                loading: false,
//                subName: result.data.children[0].data.subreddit,
//                subFollowers: result.data.children[0].data.subreddit_subscribers
//              });
//            },
//            // Note: it's important to handle errors here
//            // instead of a catch() block so that we don't swallow
//            // exceptions from actual bugs in components.
//            (error) => {
//              this.setState({
//                isLoaded: true,
//                error
//              });
//            }
//          )
//       }
//
//
//     handleSubmit = subName => {
//       this.setState({ sub: subName })
//     }
//
//
//   render() {
//     return (
//
//       <div>
//         <h1>r/{this.state.subName}</h1>
//         <h3>Subscribers : {this.state.subFollowers.toLocaleString()}</h3>
//         <Form handleSubmit={this.handleSubmit} ></Form>
//
//         <div>
//         {this.state.posts.map((post) =>{
//           return (<div className="post-card">
//               <a href={post.data.url}>{post.data.title}</a>
//               <p>{post.data.author}</p>
//               <p>{post.data.ups.toLocaleString()}</p>
//               <p>{post.data.num_comments ? post.data.num_comments.toLocaleString() : "No Comments"}</p>
//             </div>);
//         })}
//
//         </div>
//
//       </div>
//
//     );
//   }
//
// }
//
//
//
//
