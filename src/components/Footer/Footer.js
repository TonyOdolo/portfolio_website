import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:+254748318032">+254748318032</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:tonyodolo391@gmail.com">tonyodolo391@gmail.com</LinkItem>
        </LinkColumn>      
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"From Frontend Magic to Backend Mastery: Unleashing Full Stack Solutions"</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/TonyOdolo/">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/odolo_tony">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/tony-odolo-3aa902227/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
