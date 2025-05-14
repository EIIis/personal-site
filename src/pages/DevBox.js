import { StyleSheet, css } from "aphrodite";
import Header from "../components/Header";
import Subheader from "../components/Subheader";
import Paragraph from "../components/Paragraph";
import ImageParagraph from "../components/ImageParagraph";
import DownloadLink from "../components/DownloadLink";
import LowBanner from "../components/LowBanner";
import Carousel from "../components/Carousel";
import Socials from "../components/Socials";

import expediaImage from "../assets/ExpediaGroup.png";
import hiverndImage from "../assets/HiveRnD.png";
import workdayImage from "../assets/Workday.png";
import amazonImage from "../assets/AmazonInvert.png";
import mcdcImage from "../assets/MCDC.png";

import placeholder from "../assets/projectImages/dawg.jpeg";
import ahk from "../assets/projectImages/ahk.png";
import runelite from "../assets/projectImages/runelite.jpg";
import LingoMate from "../assets/projectImages/LingoMate.png";

import { ReactComponent as LinkedInIcon } from "../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as InstaIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as BSIcon } from "../assets/icons/bluesky.svg";

import resume from "../assets/Ellis_Alcantara.pdf";

const carouselItems = [
  {
    image: ahk,
    link: "https://eiiis.github.io/ahk/",
    title: "Oldschool RS AHK",
    tools: "Javascript, React, AutoHotKey Scripting, Aphrodite",
    caption:
      "Developed a website to offer free AHK scripts for OSRS. Developed the scripts + created the web app to have a centralized place to download the scripts.",
  },
  {
    image: runelite,
    link: "https://eiiis.github.io/thelab/",
    title: "TheLab Plugins [WIP]",
    tools: "Java, Javascript, React, Aphrodite",
    caption:
      "Developed a website to offer free side-loaded plug-ins for RuneLite. Developed the plug-ins myself utilizing Java.",
  },
  {
    image: placeholder,
    link: "https://github.com/EIIis/personal-site",
    title: "Personal Portfolio Site",
    tools:
      "Javascript, React, Aphrodite, AWS - S3 Buckets, CodeBuilder, CodePipeline, Route53, and CloudFront",
    caption:
      "The website you're on right now! Built to show personality + projects :)",
  },
  {
    image: LingoMate,
    link: "https://github.com/EIIis/LingoMate",
    title: "LingoMate [WIP]",
    tools: "Javascript, React, Firebase, Aphrodite, Firebase",
    caption:
      "Web platform to connect language lover, across the world, with each other in order to teach other!",
  },
];

function Temp() {
  return (
    <div>
      {/* About Me Section */}
      <Header />
      <Subheader title="About Me!" />
      <Paragraph text="Hi, my name is Ellis Alcantara Martinez! Born and raised in Alabama 🤠 I'm currently studying computer science at the University of Alabama at Birmingham! My technical background include being a software engineer intern, software qa engineer intern, and technical program manager intern! I'm super excited to try out as many roles as possible while young and still early in my career!" />
      <Paragraph text="Outside of academic/work related stuff, I have a few hobbies. I love listening to music, enjoy playing games, both irl sport and video games. Some of my favorites include Old School Runescape (I finally maxed my main account!), FIFA, some Civ 5/6, and CS:GO. I also enjoy playing soccer, have started going back to the gym, and also enjoy clubbing occasionally ;)! All in all, I really enjoy hanging out with friends and just having fun and trying new things." />
      <Paragraph text="While I enjoy having fun, I'm also very passionate about increasing diversity within the tech field. Please feel free to reach out to me if you're an under-represented student within technology, I would love to share some very useful resources that have helped me." />

      {/* Experiences Section */}
      <Subheader title="Experiences" />
      <ImageParagraph
        myImage={workdayImage}
        altText="Workday Logo"
        texts={[
          "Program Manager Intern",
          "Atlanta, Georgia",
          "May 2024 - August 2024",
          "Worked on the Product & Tech PMO Core Services team, assigned to the Infra Public Cloud Engineering Apps team as a scrum master. Main focus was on creating interactive dashboards in Jira to display important team and org metrics to stakeholders. By doing this, we increased engineering team productivity, by allowing us to vizualize how as a team, we can improve.",
        ]}
      />
      <ImageParagraph
        myImage={mcdcImage}
        altText="Magic City Data Collective"
        texts={[
          "Data Analyst Intern",
          "Birmingham, Alabama",
          "September 2023 -  April 2024",
          "The Magic City Data Collective (MCDC) is a joint partnership dedicated to building the next generation of diverse data professionals and driving data-informed decisions across the Birmingham region. As a participant, I partnered with a local company to create a data visualization of utility services across Alabama. Collected and cleaned data with Excel. Then used to create a visualization with PowerBI.",
        ]}
      />
      <ImageParagraph
        myImage={expediaImage}
        altText="Expedia Group Logo"
        texts={[
          "Technical Program Manager Intern",
          "Seattle, Washington",
          "May 2023 - July 2023",
          "Worked on the Strategic Initiatives Program Management team to help roll out One Key. My main focus here was on revamping the way status reporting was being done. Streamlined most of the program status by utlizing Jira and Confluence macros. Was pretty cool to see from a high overview of how the program was being ran!",
        ]}
      />
      <ImageParagraph
        myImage={amazonImage}
        altText="Amazon Lab126 Logo"
        texts={[
          "Software Quality Assurance Engineer Intern",
          "Sunnyvale, California",
          "May 2022 - August 2022",
          "Worked at Amazon, specifically Lab126, where I was part of the Platform QA team under Consumer Robotics. During my time here, I focused improving testing methods by automating certain test cases. I also developed a new testing platform, which reduced manual testing, as it would record the time for certain charging when plugged into Amazon Astro.",
        ]}
      />
      <ImageParagraph
        myImage={hiverndImage}
        altText="HiveRnD Logo"
        texts={[
          "Software Engineer Intern",
          "Birmingham, Alabama",
          "May 2021 - July 2021",
          "My first ever internship :)! Working here I focused on developing the frontend of the website. Utilized a lot of JavaScript and React here in order to build out a responsive, dynamic website. Mostly built out webpages, such as the information page, login page, and a few others, as well as fixing the occasional UI issue.",
        ]}
      />

      {/* Selected Projects + Technical Interest Section */}
      <Subheader title="Technical Interest and Selected Projects" />
      <Paragraph text="Currently my personal technical interest lies in accessbility/quality of life tooling. While this may sound wholesome, it really isnt, like most tech (imo). Thought hopefully once I learn more this can be used for better uses. But my current interest lies in building QOL tools for Runescape, which is done by creating plug-ins for the popular 3rd-party client -- RuneLite and forked alternatives of RuneLite." />
      <Paragraph text="Feel free to scroll through my projects below, and click the image to view the source code or website built! (with the source code found on the page)" />
      <Carousel items={carouselItems} />
      <Paragraph text="While I constantly try to keep my sites/tools updated, please also note that some projects are denoted with [WIP] to note that those projects are being extensively worked on." />

      {/* Socials Section */}
      <Subheader title="Socials" />
      <div className={css(styles.socialsContainer)}>
        <Socials
          icon={<LinkedInIcon />}
          link="https://www.linkedin.com/in/ellis-alcantara/"
        />
        <Socials icon={<GithubIcon />} link="https://github.com/EIIis" />
        <Socials
          icon={<InstaIcon />}
          link="https://www.instagram.com/rs.ellis/"
        />
        <Socials
          icon={<BSIcon />}
          link="https://bsky.app/profile/ellisalcantara.com"
        />
      </div>

      <Subheader title="Resume" />

      <DownloadLink
        fileUrl={resume}
        fileName="EllisAlcantara.pdf"
        text="Downloadable Resume :)"
      />

      <Paragraph text="To have a more 'professional' insight of myself, please feel free to download my resume :)" />

      <LowBanner title="Last updated with love on 1/3/25 ❤️" />
    </div>
  );
}

const styles = StyleSheet.create({
  socialsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "black",
    padding: "20px",
    borderRadius: "8px",
    flexWrap: "wrap",
  },
});

export default Temp;
