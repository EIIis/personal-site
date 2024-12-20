import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Paragraph from '../components/Paragraph'
import ImageParagraph from '../components/ImageParagraph';
import HyperParagraph from '../components/HyperParagraph';
import DownloadLink from '../components/DownloadLink';
import LowBanner from '../components/LowBanner';
import Carousel from '../components/Carousel';
import Socials from '../components/Socials';

import expediaImage from '../assets/ExpediaGroup.png'
import hiverndImage from '../assets/HiveRnD.png'
import workdayImage from '../assets/Workday.png'
import amazonImage from '../assets/AmazonInvert.png'
import mcdcImage from '../assets/MCDC.png'

import placeholder from '../assets/projectImages/dawg.jpeg'
import ahk from '../assets/projectImages/ahk.png'
import runelite from '../assets/projectImages/runelite.jpg'
import LingoMate from '../assets/projectImages/LingoMate.png'

import resume from '../assets/Ellis_Alcantara.pdf'

// Placeholders images for my projects
const carouselItems = [
  {
    image: ahk,
    link: 'https://eiiis.github.io/ahk/',
    title: 'Oldschool RS AHK',
    tools: 'Javascript, React, AutoHotKey Scripting, Aphrodite',
    caption: 'Developed a website to offer free AHK scripts for OSRS. Developed the scripts + created the web app to have a centralized place to download the scripts.',
  },
  {
    image: runelite,
    link: 'https://eiiis.github.io/thelab/',
    title: 'TheLab Plugins [WIP]',
    tools: 'Java, Javascript, React, Aphrodite',
    caption: 'Developed a website to offer free side-loaded plug-ins for RuneLite. Developed the plug-ins myself utilizing Java.',
  },
  {
    image: placeholder,
    link: 'https://github.com/EIIis/personal-site',
    title: 'Personal Portfolio Site',
    tools: 'Javascript, React, Aphrodite, AWS - S3 Buckets, CodeBuilder, CodePipeline, Route53, and CloudFront',
    caption: 'The website you\'re on right now! Built to show personality + projects :)',
  },
  {
    image: LingoMate,
    link: 'https://github.com/EIIis/LingoMate',
    title: 'LingoMate [WIP]',
    tools: 'Javascript, React, Firebase, Aphrodite, Firebase',
    caption: 'Web platform to connect language lover, across the world, with each other in order to teach other!',
  },
];

function Temp() {
    return (
      <div>

        {/* About Me Section */}
        <Header/>
        <Subheader title="About Me!" />
        <Paragraph text="Hi, my name is Ellis Alcantara Martinez! Born and raised in Alabama 🤠 I'm currently studying computer science at the University of Alabama at Birmingham! My technical background include data analysis, software engineering, both manual + software quality assurance, and technical program managment! As you can tell from my broad background, I'm super excited to try out as many roles as possible while early career!"/>
        <Paragraph text="Outside of academic/work related stuff, I have a few hobbies. I love listening to music, enjoy playing games, both irl sport and video games. Some of my favorites include Old School Runescape (I finally maxed my main account!), FIFA, Civ 5/6, and CS:2. I also enjoy playing soccer, have started going back to the gym, and also enjoy going out with the 'homies'! All in all, I really enjoy chilling, having fun, and trying new things."/>
        <Paragraph text="While I enjoy having fun, I'm also very passionate about increasing diversity within the tech field. Please feel free to reach out to me if you're an under-represented student within technology, I would love to share some very useful resources that have helped me."/>
        
        {/* Experiences Section */}
        <Subheader title="Experiences" />
        <ImageParagraph
        myImage={workdayImage}
        altText="Workday Logo"
        texts={['Program Manager Intern', 'Atlanta, Georgia', 'Expected May 2024 - August 2024',
         'Working on the Product & Tech PMO Core Services team, assigned to the Infra Public Cloud Engineering Apps team as a scrum master. Main focus was on creating interactive dashboards in Jira to display important team and org metrics to stakeholders.']}
        />
        <ImageParagraph
        myImage={mcdcImage}
        altText="Magic City Data Collective"
        texts={['Data Analyst Intern', 'Birmingham, Alabama', 'September 2023 - Expected April 2024',
         'The Magic City Data Collective (MCDC) is a joint partnership dedicated to building the next generation of diverse data professionals and driving data-informed decisions across the Birmingham region. As a participant, I partnered with a local company to create a data visualization of utility services across Alabama. Collected and cleaned data with Excel. Then used to create a visualization with PowerBI.']}
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

        {/* Selected Projects + Technical Interest Section */}
        <Subheader title="Technical Interest and Selected Projects" />
        <Paragraph text="Currently my personal technical interest lies in accessbility/quality of life tooling. While this may sound wholesome, it really isnt, like most tech (imo). Thought hopefully once I learn more this can be used for better uses. But my current interest lies in building QOL tools for Runescape, which is done by creating plug-ins for the popular 3rd-party client -- RuneLite and forked alternatives of RuneLite."/>
        <Paragraph text="Feel free to scroll through my projects below, and click the image to view the source code or website built! (with the source code found on the page)"/>
        <Carousel items={carouselItems} />
        <Paragraph text="While I constantly try to keep my sites/tools updated, please also note that some projects are denoted with [WIP] to note that those projects are being extensively worked on."/>


        {/* Socials Section + Resume*/}
        <Subheader title="Socials" />
        <Paragraph text="Not done with the website, but I have the following links to my socials"/>
        <HyperParagraph text="<a href='https://www.linkedin.com/in/ellis-alcantara/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>" />
        <HyperParagraph text="<a href='https://www.instagram.com/rs.ellis/' target='_blank' rel='noopener noreferrer'>Instagram</a>" />
        <HyperParagraph text="<a href='https://github.com/EIIis/' target='_blank' rel='noopener noreferrer'>GitHub</a>" />
        <DownloadLink fileUrl={resume} fileName="EllisAlcantara.pdf" text="Downloadable Resume :)" />

        <LowBanner title="Last updated with love on 11/23/24 <3"/>
      </div>        
    );
  }
  
export default Temp;
