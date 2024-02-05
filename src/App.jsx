import { useState } from 'react';
import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';

function App() {
  // const [count,setcount]=useState(0);
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost />
        <LikeImage/>
      </div>
    </div>
  );
}

export default App;
