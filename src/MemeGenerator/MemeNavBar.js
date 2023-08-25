import logo from "../Images/logo192.png";

const MemeNavBar = () => {
  return (
    <nav className="flex items-center w-full bg-fuchsia-800 text-white p-4">
      <img src={logo} alt="logo" className="w-6 mr-2 object-contain" />
      <h3 className="font-mono font-bold text-xl">Meme Generator</h3>
      <p className="ml-auto">React Course - Project 3</p>
    </nav>
  );
};

export default MemeNavBar;
