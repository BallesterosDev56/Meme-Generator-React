import "./content.css";
import { useState, useEffect } from "react";
import {FetchMemes} from '../../components/data/Data'
import firstImage from '../../assets/images/shutUp.jpg'


export const Content = () => {
  let [arrayOfMemes, setArrayOfMemes] = useState([]);
  let [meme, setMeme] = useState('');
  let [topText, setTopText] = useState('Shut Up');
  let [bottomText, setBottomText] = useState('And take my money!');

  useEffect(()=> {
    FetchMemes().then((response)=>{
      setArrayOfMemes(response);
      setMeme(firstImage);
    })
  }, [])

  function manageClick() {
    const randomIndex = Math.floor(Math.random() * arrayOfMemes.length)
    setMeme(arrayOfMemes[randomIndex].url);
    setBottomText('');
    setTopText('');
  }

  return (
    <div className="content-grid">

      <div className="form top">
        <label htmlFor="top-text">Top Text:</label>
        <br />
        <input onChange={(event)=>{setTopText(event.target.value)}} type="text" id="top-text" placeholder="Shut up" />
      </div>
      <div className="form bottom">
        <label htmlFor="bottom-text">Bottom Text:</label>
        <br />
        <input onChange={(event)=>{setBottomText(event.target.value)}} type="text" id="bottom-text" placeholder="And take my money" />
      </div>

      <div className="button-container">
        <button onClick={manageClick}>Get a new meme image :)</button>
      </div>

      <div className="image-container">
        <img src={meme} alt="meme" />
        <div className="top-text">{topText}</div>
        <div className="bottom-text">{bottomText}</div>
      </div>

    </div>
  );
};
