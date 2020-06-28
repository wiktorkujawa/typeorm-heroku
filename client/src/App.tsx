import React from 'react';
import logo from './logo.svg';
import './App.css';
import { usePostsQuery } from './generated/graphql';

export const App = () => {

  const {data, loading, error }= usePostsQuery();

  if (!data) {
    return <div>loading...</div>;
  }
  
  return (
    <div className="App">

      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
        {
          data.posts.map(post => {
            return (
              <li>
                {post.subject}, {post.content}
              </li>
            );
          })
        }
      </ul>
      </header>
    </div>
  );
}
