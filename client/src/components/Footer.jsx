import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-rose-500">
      <div className="w-full max-w-7xl max-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div>
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span
                className="
            px-2
            py-1
            bg-gradient-to-r
            from-indigo-500
            via-purple-500
            to-pink-500
            rounded-lg
            text-white
          "
              >
                Mihi's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Introduction
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mihi's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/MiHiii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Mihi's blog" year={new Date().getFullYear()} />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/profile.php?id=100043128612883"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://twitter.com/?lang=vi"
              icon={BsTwitterX}
            />
            <Footer.Icon href="https://github.com/MiHiii" icon={AiFillGithub} />
            <Footer.Icon
              href="https://www.instagram.com/hieupham761/"
              icon={AiFillInstagram}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/mihi-undefined-49203527a/"
              icon={AiFillLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
