import React from "react";
import { Menu } from "../../../styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faListAlt,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ setpage }) {
  return (
    <Menu className="md:h-screen md:w-1/12 md:p-3 md:bg-gray-100 md:shadow-md md:border-r-2 md:border-gray-100">
      <ul className="flex w-full justify-evenly items-start sm:flex-col sm:items-center">
        <span onClick={() => setpage("page1")}>
          <li className="text-gray-700 text-2xl cursor-pointer p-3 flex justify-center my-3 rounded-lg border border-gray-500">
            <FontAwesomeIcon icon={faListAlt} />
          </li>
        </span>
        <span onClick={() => setpage("page2")}>
          <li className="text-gray-700 text-2xl cursor-pointer p-3 flex justify-center  my-3 rounded-lg border border-gray-500">
            <FontAwesomeIcon icon={faPaperclip} />
          </li>
        </span>
        <span onClick={() => setpage("page3")}>
          <li className="text-gray-700 text-2xl cursor-pointer p-3 flex justify-center my-3 rounded-lg border border-gray-500">
            <FontAwesomeIcon icon={faCog} />
          </li>
        </span>
      </ul>
    </Menu>
  );
}
