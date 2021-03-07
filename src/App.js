// import logo from './logo.svg';
import './App.css';
import Blog from './components/blogs/Blog';

function App() {
  // const image2 = "https://i.ibb.co/T8mCBFb/1.jpg"
  const image = "https://i.ibb.co/QPhFW4L/2.jpg"
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={image} alt=""/> */}
        <h1>নিরবতা</h1>
        <h5>Content of the page will be uploaded soon</h5>
        <h6>This will be modified soon based on the author of the page</h6>
        <img src={image} alt="raufupolo"/>
        <h6>Scroll Down</h6>
      </header>
     <Blog></Blog>
    </div>
  );
}

export default App;
