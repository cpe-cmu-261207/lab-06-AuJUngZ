import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import React from "react";
import UserCradDetail from "./UserCradDetail";

export default function UserCrad(props) {
  const [isOpen, setIsOpen] = useState(false);
  const onclick = () => {
    setIsOpen(true);
  };
  const onclick2 = () => {
    setIsOpen(false);
  };
  return (
    <div className="border-bottom">
      {/* main section */}
      <div className="d-flex align-items-center p-3">
        <img
          src="/profile-placeholder.jpeg"
          width="90px"
          class="rounded-circle me-4"
        />
        <span className="text-center display-6 me-auto">{props.name}</span>
        <IconChevronDown onClick={onclick} />
        {/* UserCardDetail is hidden */}
      </div>
    </div>
  );
}
