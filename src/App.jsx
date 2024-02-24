import './App.css';
import CompCall from './components/LikeImage';
import ComponentCall from './components/LikePost';
import Counter from './components/Counter';
import LikePost1 from './components/Likepost1';
import Likeimage1 from './components/Likeimage1';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <CompCall/>
        <ComponentCall/>

<Counter render={({count,changeHandle})=>(
        <LikePost1 count={count} handleclick={changeHandle}/>)}/>       
  {/* Using render props */}
      <Counter render={({count,changeHandle})=>(
        <Likeimage1 count={count} handleclick={changeHandle}/>)}/>
  {/* Using render props */}

      </div>
    </div>
  );
}

export default App;