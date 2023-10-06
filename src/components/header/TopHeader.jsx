import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";

export const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="container">
        <ul className="list">
          <li className="location">
            <CiLocationOn style={{ fontSize: "22px" }} />
            Store Location: 4042 Russel Ports, Kautzermouth, CA 03094
          </li>
          <li className="call">
            <PiPhoneCallLight className="icon" />
            <p>(213) 658-3916</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
