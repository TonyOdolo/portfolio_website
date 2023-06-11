import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, am Tony<br />
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      "Versatile Full Stack Web Developer with expertise in frontend and backend technologies. Seamlessly bridging design and functionality, I create intuitive interfaces using HTML, CSS, and JavaScript while building robust backend systems with Node.js and Php. With a problem-solving mindset and a collaborative approach, I deliver high-quality, scalable solutions that enhance user experiences and drive business growth."
      </SectionText>
      <Button OnClick={() => window.location = 'https:google.com'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;