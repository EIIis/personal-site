import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Paragraph from '../components/Paragraph'
import ImageParagraph from '../components/ImageParagraph';
import HyperParagraph from '../components/HyperParagraph';
import DownloadLink from '../components/DownloadLink';
import LowBanner from '../components/LowBanner';

import expediaImage from '../assets/ExpediaGroup.png'
import hiverndImage from '../assets/HiveRnD.png'
import workdayImage from '../assets/Workday.png'
import amazonImage from '../assets/AmazonInvert.png'
import mcdcImage from '../assets/MCDC.png'
import resume from '../assets/Ellis_Alcantara.pdf'

function DevBox() {
    return (
      <div>
        <Header/>
        <Subheader title="About Me!" />
        <Paragraph text="Hi, my name is Ellis Alcantara Martinez! Born and raised in Alabama 🤠 I'm currently studying computer science
         at the University of Alabama at Birmingham! My technical background include being a software engineer intern, software qa engineer intern, and technical program manager intern! 
         I'm super excited to try out as many roles as possible while young and still early in my career!"/>
         
         <Paragraph text="Outside of academic/work related stuff, I have a few hobbies. I love listening to music, enjoy playing games, both irl sport and video games. Some of my favorites include Old School Runescape (I finally maxed my main account!), FIFA, some Civ 5/6, and CS:GO. I also enjoy playing soccer, have started going back to the gym, and also enjoy 
         clubbing occasionally ;)! All in all, I really enjoy hanging out with friends and just having fun and trying new things."/>

        <Paragraph text="While I enjoy having fun, I'm also very passionate about increasing diversity within the tech field. Please feel free to
         reach out to me if you're an under-represented student within technology, I would love to share some very useful resources that have helped me."/>
        
        <Subheader title="Experiences" />
        <ImageParagraph
        myImage={workdayImage}
        altText="Workday Logo"
        texts={['Program Manager Intern', 'Atlanta, Georgia', 'Expected May 2024 - August 2024',
         'Incoming summer Program Manager intern on the Product & Technology Strategy and Planning Organization team']}
        />
        <ImageParagraph
        myImage={mcdcImage}
        altText="Magic City Data Collective"
        texts={['Data Analyst Intern', 'Birmingham, Alabama', 'September 2023 - Expected April 2024',
         'The Magic City Data Collective (MCDC) is a joint partnership dedicated to building the next generation of diverse data professionals and driving data-informed decisions across the Birmingham region. As a participant, I will develop my data-related technical skills project-based learning embedded with a local company.']}
        />
        <ImageParagraph
        myImage={expediaImage}
        altText="Expedia Group Logo"
        texts={['Technical Program Manager Intern', 'Seattle, Washington', 'May 2023 - July 2023',
         'Worked on the Strategic Initiatives Program Management team to help roll out One Key. My main focus here was on revamping the way status reporting was being done. Streamlined most of the program status by utlizing Jira and Confluence macros. Was pretty cool to see from a high overview of how the program was being ran!']}
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

        <Subheader title="Selected Projects/Technical Interest" />
        <Paragraph text="None."/>
        <Paragraph text="JK, I'll add projects very soon, but in the meantime, you can check my GitHub for outdated work :p "/>
        <Paragraph text="Currently my personal technical interest lies in accessbility/quality of life tooling. While this may sound wholesome, it really isnt, like most tech (imo).
        Thought hopefully once I learn more this can be used for better. But my current interest lies in building QOL tools for Runescape, which is done by creating plug-ins for 
        the popular 3rd-party client -- RuneLite."/>


        <Subheader title="Socials" />
        <Paragraph text="Not done with the website, but I have the following links to my socials"/>
        <HyperParagraph text="<a href='https://www.linkedin.com/in/ellis-alcantara/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>" />
        <HyperParagraph text="<a href='https://www.instagram.com/rs.ellis/' target='_blank' rel='noopener noreferrer'>Instagram</a>" />
        <HyperParagraph text="<a href='https://github.com/EIIis/' target='_blank' rel='noopener noreferrer'>GitHub</a>" />
        <DownloadLink
        fileUrl={resume}
        fileName="EllisAlcantara.pdf"
        text="Downloadable Resume :)"
        />

        <LowBanner title="12/28 - Made with love <3"/>



      </div>        
    );
  }
  
export default DevBox;