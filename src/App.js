import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🐶": "Dog",
  "🐯": "Tiger",
  "🐵": "Monkey",
  "🐷": "Pig",
  "🐴": "Horse",
  "🐜": "Ant",
  "🐘": "Elephant",
  "🐬": "Dolphin",
  "🐊": "Crocodile"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");

  function emojiinputHandler(event) {
    var userInput = event.target.value;
    //var meaning = imojiDictionary[userInput];
    //if (meaning === undefined) {
    //  meaning = "imoji not there in dictionary";
    //}
    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else if (userInput === " ") {
      setMeaning(" ");
    } else {
      setEmoji(userInput);
      setMeaning("Failed to detect your emoji....!!!");
    }
  }
  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>Inside outt...</h1>
      <input placeholder="Search required emoji" onChange={emojiinputHandler} />
      <div style={{ fontWeight: "bold", fontSize: "2rem" }}>{emoji}</div>
      <h3>{meaning}</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
