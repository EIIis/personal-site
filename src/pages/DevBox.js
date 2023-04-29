import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Paragraph from '../components/Paragraph'

function DevBox() {
    return (
      <div>
        <Header/>
        <Subheader title="About Me!" />
        <Paragraph text="Hi, my name is Ellis Alcantara Martinez! I'm currently studying computer science and mathematics
         at the University of Alabama at Birmingham! My technical background include being a software engineer intern, software qa engineer intern,
         and most recently will have a go-around as a technical program manager intern! Super excited to try out as many roles as possible when I'm early
         in my career."/>
         <Paragraph text="Outside of academic/work related stuff, I love listening to music, I'll  make sure to link my Spotify somewhere on here so y'all
         can see what I'm listening to! I really enjoy playing games, both irl sport and video games. Some of my favorites include Old School Runescape 
         (where I got this font from), FIFA, some Civ 5/6, and CS:GO. I also enjoy playing soccer, have started going back to the gym, and also enjoy 
         clubbing occasionally ;)! All in all, I really enjoy hanging out with friends and just having fun and trying new things."/>
        <Paragraph text="While I enjoy having fun, I'm also very passionate about increasing diversity within the tech field. Please feel free to
         reach out to me if you're an under-represented student within technology, I would love to share some very useful resources that have helped me."/>
        
        <p>-------------End of About -------------</p>
        <p>-------------Experience-------------</p>
        <Subheader title="Experiences" />

        <p>-------------End of Experience -------------</p>
        
        <p>-------------END DEV ENV -------------</p>

      </div>        
    );
  }
  
export default DevBox;
  