import { StyledTypingBubble } from 'styles/TypingBubbleStyle';

export default function TypingBubble() {
  return (
    <StyledTypingBubble>
      <div className="typing">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </StyledTypingBubble>
  );
}
