import { useEffect, useRef, useState, useId } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa6";
function App() {
  const ref = useRef(null);
  const uId = useId();
  const [password, setPassword] = useState();
  const [length, setLength] = useState(8);
  const [copyPassword, setCopyPassword] = useState();
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [lowerCaseLtAllowed, setLowerCaseLtAllowed] = useState(false);
  const [upperCaseLtAllowed, setUpperCaseLtAllowed] = useState(false);
  const generatePassword = () => {
    let password = "";
    let str = "abcdefghijklmnopqrstuwwxyzABCDEFGHIJKLMNOPQRSTUWWXYZ";
    if (numberAllowed) str += "0123456789";
    if (symbolsAllowed) str += "!@#$%^&*()_+-=[]{};<>|~?";
    if (lowerCaseLtAllowed) str += "abcdefghijklmnopqrstuwwxyz";
    if (upperCaseLtAllowed) str += "ABCDEFGHIJKLMNOPQRSTUWWXYZ";
    for (let i = 0; i < length; i++) {
      const chr = Math.floor(Math.random() * str.length) + 1;
      password += str.charAt(chr);
    }
    setPassword(password);

    setCopyPassword(false);
  };
  useEffect(() => {
    generatePassword();
  }, []);
  const copyToClipboard = () => {
    setCopyPassword(true);
    ref.current.select();
    navigator.clipboard.writeText(ref.current.value);
  };
  return (
    <>
      <section>
        <h1>Password Generator</h1>
        <div className="">
          <div className="password-section">
            <input
              type="text"
              placeholder="Password"
              value={password}
              ref={ref}
            />
            {copyPassword ? (
              <FaRegCopy className="copy-clipboard" />
            ) : (
              <FaClipboard
                className="copy-clipboard"
                onClick={copyToClipboard}
              />
            )}
          </div>
        </div>
        <div className="container">
          <div className="slider-container">
            <main className="slider-text-container">
              <h2>Character Length</h2>
              <p>{length ? length : 0}</p>
            </main>
            <input
              type="range"
              id={uId}
              className="range"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="checkbox-selector">
            <div className="input-selector">
              <input
                type="checkbox"
                id={uId}
                className="checkbox"
                defaultChecked={upperCaseLtAllowed}
                onChange={() => {
                  setUpperCaseLtAllowed((prev) => !prev);
                }}
              />
              <label htmlFor={uId}>Include Uppercase Letters</label>
            </div>
            <div className="input-selector">
              <input
                type="checkbox"
                id={uId}
                className="checkbox"
                defaultChecked={lowerCaseLtAllowed}
                onChange={() => setLowerCaseLtAllowed((prev) => !prev)}
              />
              <label htmlFor={uId}>Include Lowercase Letters</label>
            </div>
            <div className="input-selector">
              <input
                type="checkbox"
                id={uId}
                className="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor={uId}>Include Numbers</label>
            </div>
            <div className="input-selector">
              <input
                type="checkbox"
                id={uId}
                className="checkbox"
                defaultChecked={symbolsAllowed}
                onChange={() => setSymbolsAllowed((prev) => !prev)}
              />
              <label htmlFor={uId}>Include Symbols</label>
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

          <button className="btn" onClick={generatePassword}>
            Generate{" "}
            <span>
              <FiArrowRight />
            </span>
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
