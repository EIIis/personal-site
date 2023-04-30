import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Paragraph from '../components/Paragraph'
import ImageParagraph from '../components/ImageParagraph';

import expediaImage from '../assets/ExpediaGroup.png'
import hiverndImage from '../assets/HiveRnD.png'
import amazonImage from '../assets/AmazonInvert.png'

function DevBox() {
    return (
      <div>
        <Header/>
        <Subheader title="About Me!" />
        <Paragraph text="Hi, my name is Ellis Alcantara Martinez! Born and raised in Alabama 🤠 I'm currently studying computer science and mathematics
         at the University of Alabama at Birmingham! My technical background include being a software engineer intern, software qa engineer intern,
         and most recently will have a go-around as a technical program manager intern! Super excited to try out as many roles as possible when I'm early
         in my career."/>
         <Paragraph text="Outside of academic/work related stuff, I love listening to music, I'll  make sure to link my Spotify somewhere on here so y'all
         can see what I'm listening to! I really enjoy playing games, both irl sport and video games. Some of my favorites include Old School Runescape 
         (where I got this font from), FIFA, some Civ 5/6, and CS:GO. I also enjoy playing soccer, have started going back to the gym, and also enjoy 
         clubbing occasionally ;)! All in all, I really enjoy hanging out with friends and just having fun and trying new things."/>
        <Paragraph text="While I enjoy having fun, I'm also very passionate about increasing diversity within the tech field. Please feel free to
         reach out to me if you're an under-represented student within technology, I would love to share some very useful resources that have helped me."/>
        
        <Subheader title="Experiences" />
        <ImageParagraph
        myImage={expediaImage}
        altText="Expedia Group Logo"
        texts={['Technical Program Manager Intern', 'Seattle, Washington', 'Expected May 2023 - July 2023',
         'Incoming technical program manager intern for Expedia Group working on the Business Enablement team, under Product & Tech group.']}
        />
        <ImageParagraph
        myImage={amazonImage}
        altText="Amazon Lab126 Logo"
        texts={['Software Quality Assurance Engineer Intern', 'Sunnyvale, California', 'May 2022 - August 2022',
         'Worked at Amazon, specifically Lab126, where I was part of the Platform QA team under Consumer Robotics. During my time here, I focused improving testing methods by automating certain test cases. I also developed a new testing platform, which reduced manual testing, as it would record the time for certain charging when plugged into Amazon Astro.']}
        />
        <ImageParagraph
        myImage={hiverndImage}
        altText="HiveRnD Logo"
        texts={['Software Engineer Intern', 'Birmingham, Alabama', 'May 2021 - July 2021',
         'My first ever internship :)! Working here I focused on developing the frontend of the website. Utilized a lot of JavaScript and React here in order to build out a responsive, dynamic website. Mostly built out webpages, such as the information page, login page, and a few others, as well as fixing the occasional UI issue.']}
        />

        <Subheader title="Selected Projects" />
        <Paragraph text="None."/>
        <Paragraph text="JK, I'll add them soon, but in the meantime, you can check my GitHub :p "/>

        <p>-------------End of Experience -------------</p>
        
        <p>-------------END DEV ENV -------------</p>

      </div>        
    );
  }
  
export default DevBox;
  