import "./header.css";
import logo from "../../assets/images/logoMeme.jpg";
export const Header = () => {
  return (
    <header>
      <div className="header-left">
        <img src={logo} alt="logo" />
        <h1>Meme Generator</h1>
      </div>
      <div className="header-right">
        <p>BallesterosDev56 - React</p>
      </div>
    </header>
  );
};
