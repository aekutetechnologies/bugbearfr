import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/bugbear_logo-removebg-preview.png";
import Model from "./Model";
import "./home.css";
import { BoltIcon, BriefcaseIcon, ShieldIcon } from "lucide-react";
import TypewriterComponent from "typewriter-effect";

export default function Component() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  function setClose() {
    setShow(true);
  }
  return (
    <div className="flex flex-col min-h-[100vh] text-white bg-gradient-to-b from-black to-sky-900">
      <nav className="flex items-center justify-between flex-wrap p-6 container">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 flex-grow">
          <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block  flex-grow lg:flex lg:w-[900px] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-center gap-4  lg:max-w-[50%] lg:ml-auto lg:">
            <a
              href="#"
              className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 border rounded-xl py-2 px-4 border-[rgba(255,255,255,0.4)] hover:bg-white/10  hover:border-white ${
                isOpen
                  ? "block mt-4 lg:inline-block lg:mt-0 text-white-200 border-none"
                  : "hidden"
              }`}
            >
              Hire Freelancers
            </a>
            <Link
              to="/selectuser"
              className={`block mt-4 lg:inline-block lg:mt-0 text-black border rounded-xl py-2 px-4 font-semibold bg-yellow-200 border-[rgba(255,255,255,0.4)] hover:bg-yellow-300  ${
                isOpen
                  ? "block mt-4 lg:inline-block lg:mt-0 text-white-200 border-none"
                  : "hidden"
              }`}
            >
              Hire Devloper
            </Link>
            <Link
              to="/selectuser"
              className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 border rounded-xl py-2 px-4 border-[rgba(255,255,255,0.4)] hover:bg-white/10  hover:border-white ${
                isOpen
                  ? "block mt-4 lg:inline-block lg:mt-0 text-white-200 border-none"
                  : "hidden"
              }`}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <main className="flex-1">
        <section className="conatiner h-[90vh] relative ">
          <div className="relative container px-4 md:px-6 h-full flex flex-col items-center justify-center space-y-6">
            <div className="text-white font-bold py-36 text-center space-y-5">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>Secure Your</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-t from-slate-900 to-yellow-200">
                  <TypewriterComponent
                    options={{
                      strings: [
                        "Digital Future.",
                        "CLOUD ENVIRONMENT.",
                        "DATA INTEGRITY.",
                        "FINANCIAL TRANSACTIONS.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </div>
              <div className="text-sm md:text-xl font-light text-zinc-400">
                Discover the top cyber security experts and protect your
                business from online threats.
              </div>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button
                  className="bg-yellow-200 rounded text-black h-11 px-4 hover:bg-yellow-300"
                  onClick={setClose}
                >
                  Hire Freelancers
                </button>
                <div className={show ? `` : "hidden"}>
                  <Model show={show} setShow={setShow} />
                </div>
                <button
                  className="border-yellow-200 rounded bg-white text-black h-11 px-4 hover:bg-yellow-300 hover:text-black"
                  onClick={setClose}
                >
                  Become a Freelancer
                </button>
              </div>
              <div className="text-zinc-400 text-xs md:text-sm font-normal">
                No credit card required.
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen py-12 md:py-24 flex flex-col items-center">
          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold mb-12 text-center">
            What Bugbear Have
          </h1>
          <div className="card-container flex flex-wrap justify-center gap-10">
            <div
              data-text="Cyber Security Experts"
              className="glass h-72 w-full max-w-xs flex flex-col items-center p-6 text-center"
            >
              <ShieldIcon className="h-8 w-8 text-yellow-500 mb-4" />
              <p>
                Hire top-tier cyber security professionals to protect your
                business.
              </p>
            </div>
            <div
              data-text="Secure Solution"
              className="glass h-72 w-full max-w-xs flex flex-col items-center p-6 text-center"
            >
              <BoltIcon className="h-8 w-8 text-yellow-500 mb-4" />
              <p>
                Implement cutting-edge security measures to safeguard your
                digital assets.
              </p>
            </div>
            <div
              data-text="Flexible Engagement"
              className="glass h-72 w-full max-w-xs flex flex-col items-center p-6 text-center"
            >
              <BriefcaseIcon className="h-8 w-8 text-yellow-500 mb-4" />
              <p>
                Hire freelancers for short-term projects or ongoing support.
              </p>
            </div>
          </div>
        </section>
        <section className="min-h-screen container flex justify-center items-center flex-col gap-20 px-4 md:px-8">
          <div>
            <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-center">
              How Bugbear Works
            </h1>
          </div>
          <div className="flex flex-col gap-10 justify-center items-center w-full md:w-3/4 lg:w-1/2">
            <span className="w-full">
              <h2 className="md:text-3xl md:font-semibold">
                Share Your Hiring Challenges
              </h2>
              <p className="md:text-lg">
                Simply describe your dream talent. We will suggest the best
                solutions and also prepare a detailed talent persona across tech
                stack, past experience, culture and more nuances.
              </p>
            </span>
            <span className="w-full">
              <h2 className="md:text-3xl md:font-semibold">
                Choose from our recommendations
              </h2>
              <p className="md:text-lg">
                Not “CV forwards” based on keywords matches, but get talent
                recommendations who are a perfect fit for your talent persona.
                Easily handpick the candidate you find to be a dream fit.
              </p>
            </span>
            <span className="w-full">
              <h2 className="md:text-3xl md:font-semibold">
                Deploy & build your product
              </h2>
              <p className="md:text-lg">
                Once you choose your dream team member, we’ll take care of all
                the boring work around contracts. You can instead focus on
                kicking-off & building your product.
              </p>
            </span>
          </div>
        </section>

        <section className="container h-[100vh] flex flex-col justify-center items-center gap-10 px-4 md:px-8">
          <div className="flex flex-col justify-center items-center animate-slidein text-center">
            <h2 className="font-mono font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl space-y-5">
              Your engineers should not be hiring.
            </h2>
            <h2 className="font-manrope font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl space-y-5 leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
              They should be coding.
            </h2>
          </div>
          <div className="text-center px-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Help your team focus on what they were hired for. Flexiple will
              manage your entire hiring process and scale your tech team.
            </p>
          </div>
          <div>
            <button className="w-full sm:w-auto h-11 text-black border rounded-xl py-2 px-4 font-semibold bg-yellow-200 border-[rgba(255,255,255,0.4)] hover:bg-yellow-300">
              Hire Developers
            </button>
          </div>
        </section>

        <section className="pricing py-12 md:py-24">
          <div className="container mx-auto flex flex-col justify-center items-center gap-10">
            <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center">
              How Bugbear Can Help You
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center w-full gap-10">
              <div className="w-full md:w-2/5 h-72 rounded-xl pcard flex flex-col gap-4 px-6 py-8 md:px-10 md:py-10 transition-transform transform hover:scale-105">
                <h1 className="text-xl md:text-3xl font-bold">
                  Full Time Hires
                </h1>
                <p className="text-sm md:text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium rerum consequatur deleniti odio debitis autem
                  cupiditate inventore ea suscipit accusantium!
                </p>
                <button className="bg-yellow-200 w-2/3 rounded-xl py-1 hover:bg-yellow-300 text-black text-lg font-bold mx-auto">
                  Start Free Trial
                </button>
                <button className="w-2/3 rounded-xl py-1 mx-auto border-2 border-gray-600">
                  Learn More
                </button>
              </div>

              <div className="w-full md:w-2/5 h-72 rounded-xl pcard flex flex-col gap-4 px-6 py-8 md:px-10 md:py-10 transition-transform transform hover:scale-105">
                <h1 className="text-xl md:text-3xl font-bold">
                  Contract Hires
                </h1>
                <p className="text-sm md:text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium rerum consequatur deleniti odio debitis autem
                  cupiditate inventore ea suscipit accusantium!
                </p>
                <button className="bg-yellow-200 w-2/3 rounded-xl py-1 hover:bg-yellow-300 text-black text-lg font-bold mx-auto">
                  Start Free Trial
                </button>
                <button className="w-2/3 rounded-xl py-1 mx-auto border-2 border-gray-600">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-6 text-sm text-gray-400 mt-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center text-white mb-4 sm:mb-0">
            <img src={logo} className="w-24 h-8" alt="Logo" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <Link className="hover:text-yellow-500" to="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-yellow-500" to="#">
              Terms of Service
            </Link>
            <p className="text-center sm:text-left">
              © 2024 bugbear. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
