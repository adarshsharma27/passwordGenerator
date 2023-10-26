import { FiArrowRight } from "react-icons/fi";
import {  FaRegCopy } from "react-icons/fa";
import {  FaClipboard} from "react-icons/fa6";
function App() {
  return (
    <>
    <section>
      <h1>Password Generator</h1>
      <div className="">
        <div className="password-section">
          <input type="text" placeholder="Password" value="XFXEGFWCEGWC" />
          <FaRegCopy className="copy-clipboard"/>
          <FaClipboard className="copy-clipboard"/>

        </div>
      </div>
      <div className="container">
        <div className="slider-container">
          <main className="slider-text-container">
            <h2>Character Length</h2>
            <p>0</p>
          </main>
          <input type="range" class="range" tabindex="1" />
        </div>

        <div className="checkbox-selector">
          <div className="input-selector">
            <input type="checkbox" class="checkbox" />
            <span>Include Uppercase Letters</span>
          </div>
          <div className="input-selector">
            <input type="checkbox" class="checkbox" />
            <span>Include Lowercase Letters</span>
          </div>
          <div className="input-selector">
            <input type="checkbox" class="checkbox" />
            <span>Include Numbers</span>
          </div>
          <div className="input-selector">
            <input type="checkbox" class="checkbox" />
            <span>Include Symbols</span>
          </div>
        </div>
        <div className="strength">
        <div className="slider-container">
          <main className="slider-text-container">
            <h2>Strength</h2>
            <p>Medium</p>
          </main>
        </div>
        </div>
        
        <button class="btn">Generate <span><FiArrowRight/></span></button>
       
   </div>
   </section>
    </>
  );
}

export default App;
