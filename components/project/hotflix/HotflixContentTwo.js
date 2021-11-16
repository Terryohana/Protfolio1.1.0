import * as styled from './styles';

import Image from 'next/image';

export default function HotflixContent() {
  return (
    <styled.Hotflix>
      <styled.TextContainer>
        <styled.Title>Riff Radio</styled.Title>
        <styled.Description>
        Discover Music NOW . Riff Radio is an all-day online radio station. We have a wide variety of music genres, including English music, Afro Pop, Gospel music, Hip Hop and a whole lot more. Tune-in to hear live DJ mixes from your vernacular musicians across Africa or check out our latest homegrown experiments from South America, Australia and New Zealand just as well as you’ll see renewed classic tunes from the producers of these nations.,{' '}
          <span>
         
          </span>
        </styled.Description>
        <styled.Table>
          <tbody>
            <tr>
              <th>Stack</th>
              <th>Live</th>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>React
              </td>
              <td>
                <a href="http://riffradio.x10.bz/wp/">
                  <span className="link">Site</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>NextJs
              </td>
              <td>
                <a href="https://github.com/Terryohana/">
                  <span className="link">Code</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>Styled-Components
              </td>
              
              <td></td>
            </tr>
          </tbody>
        </styled.Table>
      </styled.TextContainer>
      <styled.ImageContainer>
        <Image
          src="/images/hotflix/riffradio.jpg"
          alt="hotflix demo"
          width={1266}
          height={720}
        />
      </styled.ImageContainer>
      <styled.TextContainer>
        <styled.SubTitle>Project Purpose and Goal</styled.SubTitle>
        <styled.Description>
        We’re the type of global problem solving connecting frequent listeners with mates then fans than fiends, be sure that you feel each one of our music wherever ! Riff is ideal for loyal global supporters wanting to hear licensed hits, therefore after so many years they canstay in touch with their favorite artists even when on the go!{' '}
        
        </styled.Description>
      </styled.TextContainer>
     
    
     
    
    </styled.Hotflix>
  );
}
