import React from 'react';
import { DiFirebase, DiReact, DiMysql, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="#tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web development world.
      From backend to design.
    </SectionText>
    <List>     
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React
            Bootstap
            Html
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMysql size="3rem" />
        <ListContainer>
          <ListTitle>Backend End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Mysql
            Php


          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma
            Adobe Photoshop
            Adobe Illustrator
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider/>
 </Section>
);

export default Technologies;
