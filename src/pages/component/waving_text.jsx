import * as React from 'react'
import styled from 'styled-components';
import { wave } from './layout.module.css'

const WavingParagraph = styled.p`
  display: flex;
  margin: -6pt 0 -12pt 0;
  flex-direction: row;
  justify-content: space-evenly;
  user-select: none;

  color: var(--fg-primary);
  font-size: 64pt;
  font-weight: bold;
  text-shadow: 6px 6px 0px var(--fg-highlight);
`;

const WavingChar = styled.span`
  animation: ${({ delay }) => `${wave} 2s ease-in-out ${delay}s infinite`};
`;

function WavingText({ children }) {
    // Depending on the character, the animation is delayed
    const text = React.Children.toArray(children).join('');

    return (
      <WavingParagraph>
        {text.split("").map((char, index) => (
          <WavingChar key={index} delay={index * 0.2}>
            {char}
          </WavingChar>
        ))}
      </WavingParagraph>
    );
}

export default WavingText