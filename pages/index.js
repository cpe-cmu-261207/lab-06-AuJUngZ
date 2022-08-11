import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import UserCrad from "../Components/UserCrad";
import axios from "axios";

export default function Home() {
  const [numUser, SetnumUser] = useState("");
  const [user, Setuser] = useState([]);
  const genUsers = async () => {
    if (numUser > 0) {
      const resp = await axios.get(
        `https://randomuser.me/api/?results=${numUser}`
      );
      Setuser(resp.data.results);
    } else {
      alert("Invalid number of users");
    }
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>
      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => SetnumUser(event.target.value)}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>
      {/* User Card Section */}
      {user.map((data) => {
        return <UserCrad name={data.name.first}></UserCrad>;
      })}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Nuttapong Thepphithak 640610634
      </p>
    </div>
  );
}
