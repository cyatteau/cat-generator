import React, { useState } from "react";

export default function AnimalImage() {
  const [theImage, setTheImage] = useState("");
  const url = "https://aws.random.cat/meow?ref=apilist.fun";

  const handleClick = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      console.log(json.file);
      setTheImage(json.file);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <div>
      <div className="form">
        <div className="inputs">
        </div>
        {theImage && <img src={theImage} className="catImage" alt="cat"/>}
        <button onClick={handleClick}>Get a new cat 🐱 image</button>
      </div>
    </div>
  );
}
