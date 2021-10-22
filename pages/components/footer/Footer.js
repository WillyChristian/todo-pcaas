import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <>
      <div className="bg-gray-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-xs text-center sm:text-left">
            © 2021 Dev —
            <a
              href="https://github.com/WillyChristian"
              rel="noopener noreferrer"
              className="text-gray-400 ml-1"
              target="_blank"
            >
              @WillyChristian
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-200">
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
            <a className="ml-3 text-gray-200">
              <span>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
            </a>
            <a className="ml-3 text-gray-200">
              <span>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
            </a>
            <a className="ml-3 text-gray-200">
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
