import React from 'react'
import DecryptedText from '../../components/DecryptedText'

const HeroSection = () => {
  return (
    <div>
      {/* Example 1: Defaults (hover to decrypt) */}
      <DecryptedText
        text="Welcome to our STORE!"
        style={{ fontSize: "54px" }}
      />
      {/* Example 2: Customized speed and characters */}
      <DecryptedText
        text="Customize me"
        speed={100}
        maxIterations={20}
        characters="ABCD1234!?"
        className="revealed"
        parentClassName="all-letters"
        encryptedClassName="encrypted"
      />
      {/* Example 3: Animate on view (runs once) */}
      <div style={{ marginTop: "4rem" }}>
        <DecryptedText
          text="This text animates when in view"
          animateOn="view"
          revealDirection="center"
          style={{ fontSize: "54px" }}
        />
      </div>


    </div>
  );
}

export default HeroSection