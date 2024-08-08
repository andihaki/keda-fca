import { AlignRight } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Login from "./Login";

export default function Header() {
  return (
    <header className="flex justify-between gap-2 lg:gap-10 items-center font-extrabold text-lg xl:text-xl sticky top-0 z-20">
      <a href="#" className="flex-grow flex gap-2  p-2">
        <img src="./logo.svg" alt="logo" className="size-8" />
        Home
      </a>
      <div className="hidden gap-2 lg:gap-10 lg:flex bg-white p-2 rounded">
        <a href="#about">ABOUT</a>
        <a href="#pricing">PRICING</a>
        <a href="#contact">CONTACT</a>
      </div>
      <Dialog>
        <Button variant="outline" asChild>
          <DialogTrigger>LOGIN</DialogTrigger>
        </Button>
        <DialogContent className="p-3">
          <Login />
        </DialogContent>
      </Dialog>
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignRight />
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col">
            <SheetTrigger>
              <a href="#about">ABOUT</a>
            </SheetTrigger>
            <SheetTrigger>
              <a href="#pricing">PRICING</a>
            </SheetTrigger>
            <SheetTrigger>
              <a href="#contact">CONTACT</a>
            </SheetTrigger>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
