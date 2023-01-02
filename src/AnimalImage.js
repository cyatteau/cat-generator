import React, { useState, useEffect } from "react";

export default function AnimalImage() {
  const [theImage, setTheImage] = useState("");
  const url = "https://aws.random.cat/meow?ref=apilist.fun";
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTheImage(data.file));
  }, []);

  const handleClick = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setTheImage(json.file);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  function handleChange(event) {
    setTopText(event.target.value);
  }

  function handleBottomChange(event) {
    setBottomText(event.target.value);
  }

  return (
    <div>
      <div className="form">
        <div className="inputs">
          <input
            placeholder="Enter top text..."
            value={topText}
            onChange={handleChange}
          />
          <input
            placeholder="Enter bottom text..."
            value={bottomText}
            onChange={handleBottomChange}
          />
        </div>
        <button onClick={handleClick}>Get a new cat 🐱 image</button>
        <div className="top">{topText}</div>
        {theImage && <img src={theImage} className="catImage" alt="cat" />}
        <div className="bottom">{bottomText}</div>
      </div>
    </div>
  );
}
