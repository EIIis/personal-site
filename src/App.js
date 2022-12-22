
import './App.css';
import './Bio.css'
import resume from './assets/Ellis_Alcantara2024.pdf';


function App() {
  return (
    <div className="App">
      <p>Hello World!</p>

      <p>You're probably thinking where is my website! Maybe you don't care, I don't know to be honest 🤷🏽‍♂️</p>

      <p>But tl;dr, I had an outdated site and decided to build a new website and it's currently under construction 👷🏽‍♂️, hopefully it'll look nice once done.</p>

      <p>You can follow my progress following clicking <a href="https://github.com/EIIis/personal-site" target="_blank" rel="noopener noreferrer">me</a> which will redirect you to my Github repository</p>

      <p>In the meantime, here's a short bio of myself!</p>

      <div className='Bio-align'>
        <ul className='Erase-bullet'>
          <li>👋🏽 My name is Ellis Alcantara and I'm from Birmingham, Alabama</li>
          <li>📚 I study computer science and mathematics at the <a href="https://en.wikipedia.org/wiki/University_of_Alabama_at_Birmingham" target="_blank" rel="noopener noreferrer">University of Alabama at Birmingham</a></li>
          <li>💼 Previously worked at HiveRnD,a local Birmingham start-up as a software engineer, focusing on the frontend web development. I've also worked at Amazon Lab126, in Sunnyvale, California, 
            as a software qa engineer working in the Consumer Robotics group.</li>
          <li>🔜 This upcoming summer I will be joining the Expedia Group as a Technical Program Manager (TPM) based in Seattle, Washington!</li>
          <li>👨🏽‍💻 Currently working on learning iOS development through <a href="https://www.codepath.org/courses/ios-mobile-development" target="_blank" rel="noopener noreferrer">CodePath </a> 
          and web development (MERN stack) through <a href="https://fullstackopen.com/" target="_blank" rel="noopener noreferrer">Full Stack Open</a></li>
        </ul>
      </div>

      <p>In the chance you want to see my resume, you're in luck cause it's <a href={resume} download>here</a>!</p>

      <p>If, for whatever reason, you want to meet me, feel free to book a time on my <a href="https://calendly.com/ellisalcantara/meeting" target="_blank" rel="noopener noreferrer">Calendly</a></p>

      <p>
      So that's all for now, but please feel free to connect with me on <a href="https://www.linkedin.com/in/ellis-alcantara/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or 
      visit my <a href="https://github.com/EIIis/" target="_blank" rel="noopener noreferrer">Github</a>
      </p>

      <p>
      You can also check out my <a href="https://twitter.com/ellis_alc" target="_blank" rel="noopener noreferrer">Twitter</a> or 
      follow me on <a href="https://www.instagram.com/rs.ellis/" target="_blank" rel="noopener noreferrer">Instagram</a> if you're cool 😎
      </p>

    </div>    
  );
}

export default App;
