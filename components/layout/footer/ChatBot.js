import * as styled from './styles';

import TypingBubble from 'components/layout/footer/TypingBubble';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import OutsideClickHandler from 'react-outside-click-handler';

export default function ChatBot({ setChatBotState, chatBotState }) {
  const contentRef = useRef();

  const Delayed = ({ children }) => {
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
      // prevent memory leaks
      let mounted = true;
      setTimeout(() => {
        if (mounted) {
          setIsShown(true);
          contentRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 2000);
      return () => (mounted = false);
    }, []);

    return isShown ? children : <TypingBubble />;
  };

  const ChatQNA = ({ currentQuestion, setCurrentQuestion }) => {
    const question =
      currentQuestion === 1
        ? `I'm good, just wanna say hi.`
        : currentQuestion === 2
        ? `Fun facts about you?`
        : currentQuestion === 3
        ? `Other ways to contact you?`
        : currentQuestion === 4
        ? `I'd like to hire you!`
        : null;
    const answer =
      currentQuestion === 1 ? (
        <Delayed>
          <div className="agent" ref={contentRef}>
            <p>Well hi there!</p>
            <br />
            <p>Thanks for saying hi 😁</p>
            <br />
            <p> I hope you've enjoyed browsing my website!</p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : currentQuestion === 2 ? (
        <Delayed>
          <div className="agent" ref={contentRef}>
            <p>
              1. I was once a music producer
❤️🎹.I had a song chart to number 1 in my region and stayed there for more than 5 weeks .
            </p>
            <br />
            <p>
              2. I want to become a techie with swag 
✨!! .My inspiration is Elon Musk
            </p>
            <br />
           
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : currentQuestion === 3 ? (
        <Delayed>
          <div className="agent mw-93" ref={contentRef}>
            <p>📧 Here is my email:</p>
            <br />
            <p>
              <a href="mailto:terryohanna@gmail.com">
                terryohanna@gmail.com
              </a>
            </p>
            <br />
            <p>I'm always open to job opportunities and new connections🤝!</p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : currentQuestion === 4 ? (
        <Delayed>
          <div className="agent" ref={contentRef}>
            <p>That's great!</p>
            <p className="mt-sm">I'm so Excited🕺!</p>
            <p>
              Have a look at my
              <a
                href="https://drive.google.com/file/d/1Neh66oJyiG87217mAF55pRB-Lr48LvYK/view?usp=sharing"
                className="link-btn"
              >
                resume💾
              </a>
              and let's
              <a href="mailto:adrian.li.dev@gmail.com" className="link-btn">
                chat💌
              </a>
              further!
            </p>
          </div>
          <div className="agent">Can I help you with anything else?</div>
        </Delayed>
      ) : (
        ''
      );

    const onQuestionBtnClick = (questionNum) => {
      setCurrentQuestion(questionNum);
    };

    return (
      <>
        <styled.ChatAnswer currentQuestion={currentQuestion}>
          <div tabIndex="-1" className="user">
            {question}
          </div>
          {answer}
        </styled.ChatAnswer>
        <styled.ChatQuestion currentQuestion={currentQuestion}>
          <button
            onClick={() => {
              onQuestionBtnClick(1);
            }}
            className="question-btn"
          >
            👋 I'm good, just wanna say hi.
          </button>
          <button
            onClick={() => {
              onQuestionBtnClick(2);
            }}
            className="question-btn"
          >
            🎉 Fun facts about you?
          </button>
          <button
            onClick={() => {
              onQuestionBtnClick(3);
            }}
            className="question-btn"
          >
            💬 Other ways to contact you?
          </button>
          <button
            onClick={() => {
              onQuestionBtnClick(4);
            }}
            className="question-btn"
          >
            💼 I'd like to hire you!
          </button>
        </styled.ChatQuestion>
      </>
    );
  };
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const onCloseBtnClick = () => {
    setChatBotState('close');
    setCurrentQuestion(0);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setChatBotState('close');
        setCurrentQuestion(0);
      }}
    >
      <styled.ChatBot chatBotState={chatBotState}>
        <styled.ChatHeader>
          <Image
            src="/images/misc/avatar.jpg"
            alt="Pic of Adrian"
            width={40}
            height={40}
            className="avatar"
          />
          <div className="desc">
            <span className="name">Terry Bot</span>
            <span className="question">Ask me a question!</span>
          </div>

          <div className="align-left">
            <button className="close-btn" onClick={onCloseBtnClick}>
              <styled.CloseIcon />
            </button>
          </div>
        </styled.ChatHeader>

        <styled.ChatContent>
          <div className="agent">Hello! My name is Terry Bot 🤖</div>

          <div className="agent">
            I know as much as Terry. Maybe even a little bit more! 😉
          </div>

          <div className="agent">How can I help you today?</div>

          <ChatQNA
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        </styled.ChatContent>
      </styled.ChatBot>
    </OutsideClickHandler>
  );
}
