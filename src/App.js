import logo from './logo.svg';
import './App.css';
import './Bio.css'


function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <p>You're probably thinking where is my website! Maybe you don't care, I don't know to be honest 🤷🏽‍♂️</p>
      <p>But tl;dr, I had an outdated site and decided to build a new website and it's currently under construction 👷🏽‍♂️, hopefully it'll look nice once done.</p>
      <p>You can follow my progress following clicking me which will redirect you to my Github repository</p>
      <p>In the meantime, here's a short bio of myself!</p>
      <div className='Bio-align'>
        <ul className='Erase-bullet'>
          <li>👋🏽 My name is Ellis Alcantara and I'm from Birmingham, Alabama</li>
          <li>📚 I study computer science and mathematics at the <a href="https://en.wikipedia.org/wiki/University_of_Alabama_at_Birmingham">University of Alabama at Birmingham</a></li>
          <li>💼 Previously worked at HiveRnD,a local Birmingham start-up as a software engineer, focusing on the frontend web development. I've also worked at Amazon Lab126, in Sunnyvale, California, as a software qa engineer working in the Consumer Robotics group.</li>
          <li>👨🏽‍💻 Currently working on learning iOS development through <a href="https://www.codepath.org/courses/ios-mobile-development">CodePath</a> and web development (MERN STACK) through <a href="https://fullstackopen.com/">Full Stack Open</a></li>
          <li>👋🏽 My name is Ellis Alcantara Martinez</li>
        </ul>
      </div>
    </div>    
  );
}

export default App;
