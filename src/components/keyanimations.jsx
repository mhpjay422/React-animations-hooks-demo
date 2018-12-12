import React from 'react';
import keyPress from './keypress';
import Icons from './Icons';

const KeyAnimations = () => {
  const reactPress = keyPress('r');
  const jsPress = keyPress('j');
  const htmlPress = keyPress('h');
  const cssPress = keyPress('c');
  const allPress = keyPress('a');

  return (
    <div id="animations"
        style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: "center"
    }}>
      <p style={{
          display: 'flex',
          justifyContent: 'center',
          font: 'calibri',
          fontSize: '40px', 
          fontWeight: "bolder",
      }}>
          Type and hold the first letter of the technology below that you want to see
      </p>
      <p style={{
          display: 'flex',
          justifyContent: 'center',
          font: 'calibri',
          fontSize: '40px', 
          fontWeight: "bolder",
      }}>
          R J H C
      </p>
      <div style={{ 
        textAlign: 'center' }}>
        <Label value="REACT" isBold={reactPress} />
        <Label value="JAVASCRIPT" isBold={jsPress} />
        <Label value="HTML" isBold={htmlPress} />
        <Label value="CSS" isBold={cssPress} />
        <Label value="ALL" isBold={allPress} />

        <div
          style={{
            fontSize: '200px',
            width: '100%',
            height: '350px',
            backgroundColor: '#e6f5f8',
            marginBottom: '20px'
          }}
        >
          {reactPress && <img 
              className="tech App-logo" 
              src="./logo.svg"
              alt = "logo"
          />}
          {jsPress && <img 
              className="tech bounce" 
              src="./jsicon.png"
              alt = "logo"
          />}
          {htmlPress && <img 
              className="tech shake" 
              src="./html5.png"
              alt = "logo"
          />}
          {cssPress && <img 
              className="tech boogie" 
              src="./csssvg.svg"
              alt = "logo"
          />}
          {allPress && 
          <>
          <Icons/>
          </>
          }
        </div>
        <div className="nextdiv">
          <a class="nextnext" href="#counter">Continue</a>
        </div>
        
      </div>
    </div>
  );
}

const Label = ({ value, isBold }) => (
  <div
    style={{
      display: 'inline-block',
      margin: '15px',
      fontSize: '42px',
      fontWeight: isBold ? 'bold' : 'normal'
    }}
  >
    {value}
  </div>
);

export default KeyAnimations;

