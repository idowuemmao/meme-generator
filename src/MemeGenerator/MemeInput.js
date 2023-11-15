import React from "react";
import thepic from "../Images/grass.jpg";

export default function MemeInput() {
  const [allMeme, setAllMeme] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((response) => response.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: thepic,
  });
  function GetMeme() {
    const randomMeme = Math.floor(Math.random() * allMeme.length);
    const image = allMeme[randomMeme].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImg: image };
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="grid grid-cols-2 gap-4">
        <input
          value={meme.topText}
          name="topText"
          type="text"
          placeholder="Top Text"
          className="border-2 p-2"
          onChange={handleChange}
        />
        <input
          value={meme.bottomText}
          name="bottomText"
          type="text"
          placeholder="Bottom Text"
          className="border-2 p-2"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-fuchsia-800 col-span-2 text-white p-2 hover:bg-sky-400"
          onClick={GetMeme}
        >
          Get a new meme image
        </button>
      </div>
      <div className="relative grid place-items-center">
        <p className="absolute p-2  top-0 text-4xl text-yellow-500 font-extrabold font-mono z-10">
          {meme.topText}
        </p>
        <img
          src={meme.randomImg}
          alt="meme_image"
          className="border relative border-black"
        />
        <p className="absolute bottom-0 p-2 text-4xl text-yellow-500 font-extrabold font-mono z-10">
          {meme.bottomText}
        </p>
      </div>
    </div>
  );
}
