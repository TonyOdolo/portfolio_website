import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
   <Div1>
    <Link
      href="/"
      style={{ display: "flex", alignItems: "center", color: "white", marginbottom: "20"  }}>

      <DiCssdeck size="3rem" /> <Span>Portfolio</Span>

    </Link>
  </Div1>
    <Div2>
      <li>
        <Link href="#Projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#Tech" legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#About" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/TonyOdolo/">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/odolo_tony">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/tony-odolo-3aa902227/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>

);

export default Header;
