import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-10 items-center font-extrabold text-lg xl:text-xl p-2">
      <div className="flex-grow flex gap-2">
        <img src="" alt="logo" />
        Home
      </div>
      <div>
        <a href="#about">ABOUT</a>
      </div>
      <div>
        <a href="#pricing">PRICING</a>
      </div>
      <div>
        <a href="#contact">CONTACT</a>
      </div>
      <Button variant="outline">LOGIN</Button>
    </div>
  );
}
