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
    <Menu className="h-screen w-1/12 p-3 bg-gray-100 shadow-md border-r-2 border-gray-100">
      <ul>
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
