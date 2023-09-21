import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex justify-between m-4 sm:m-10">
      <Link href="/" className="flex items-center">
        <div className="flex text-2xl sm:text-4xl items-center gap-2 text-[#67611F] sm:gap-5">
          <h1>Our</h1>
          <div className="relative w-24 h-12 sm:w-28 sm:h-16">
            <Image
              src="/parkrun-logo-brown.png"
              fill={true}
              alt="parkrun logo"
            />
          </div>
          <h1>heroes</h1>
        </div>
      </Link>
      <Sheet>
        <SheetTrigger>
          <FontAwesomeIcon
            icon={faBars}
            className="h-5 w-5 xs:flex min-[425px]:hidden"
            color="#67611F"
          />
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] sm:w-[400px]">
          <div className="flex flex-col">
            <Link href="https://www.facebook.com/queenelizabethparkruncasino">
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-5 w-5"
                color="#67611F"
              />
            </Link>
            <Button
              size="sm"
              className="bg-white text-[#67611F] border-solid border-[2px] border-[#67611F] hover:bg-[#67611F] hover:text-white"
            >
              Refresh
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-5 xs:hidden min-[425px]:flex sm:gap-10">
        <Link href="https://www.facebook.com/queenelizabethparkruncasino">
          <FontAwesomeIcon
            icon={faFacebook}
            className="h-5 w-5"
            color="#67611F"
          />
        </Link>
        <Button
          size="sm"
          className="bg-white text-[#67611F] border-solid border-[2px] border-[#67611F] hover:bg-[#67611F] hover:text-white"
        >
          Refresh
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
