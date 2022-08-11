import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React from "react";

export default function UserCradDetail() {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> Email...
      </p>
      <p>
        <IconMapPins /> Address...
      </p>
    </div>
  );
}
