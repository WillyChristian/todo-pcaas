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
      <div class="bg-gray-900">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-white text-xs text-center sm:text-left">
            © 2021 Dev —
            <a
              href="https://github.com/WillyChristian"
              rel="noopener noreferrer"
              class="text-gray-400 ml-1"
              target="_blank"
            >
              @WillyChristian
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-gray-200">
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
            <a class="ml-3 text-gray-200">
              <span>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
            </a>
            <a class="ml-3 text-gray-200">
              <span>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
            </a>
            <a class="ml-3 text-gray-200">
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
