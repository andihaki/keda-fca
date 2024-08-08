import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import Login from "./Login";

export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-10 items-center font-extrabold text-lg xl:text-xl p-2">
      <a href="#" className="flex-grow flex gap-2">
        <img src="./logo.svg" alt="logo" className="size-8" />
        Home
      </a>
      <a href="#about">ABOUT</a>
      <a href="#pricing">PRICING</a>
      <a href="#contact">CONTACT</a>
      <Dialog>
        <DialogTrigger>
          <Button variant="outline">LOGIN</Button>
        </DialogTrigger>
        <DialogContent className="p-3">
          <Login />
        </DialogContent>
      </Dialog>
    </header>
  );
}
