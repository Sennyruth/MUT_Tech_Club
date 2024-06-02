import "./Events.css";
import { GiCyberEye } from "react-icons/gi";
import { LuFigma } from "react-icons/lu";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoAndroid } from "react-icons/io";
import { SiAzuredataexplorer } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
const Events = () => {
  return (
    <section className="events-section">
      <h2 className="title">Events</h2>
      <div className="container"></div>
      <div className="main-container">
        <div className="container-items">
          <h3>Cybersecurity</h3>
          <p className="cyb-icon">
            <GiCyberEye />
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            nobis distinctio. Fugiat animi cupiditate iste rem dignissimos vitae
            ex explicabo.
          </p>
          <h4>Monday 4pm-7pm</h4>
          <h4>Webster Ifedha</h4>
        </div>

        <div className="container-items">
          <h3>UI/UX</h3>
          <p className="cyb-icon">
            <LuFigma />
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            nobis distinctio. Fugiat animi cupiditate iste rem dignissimos vitae
            ex explicabo.
          </p>
          <h4>Tuesday 5pm-8pm</h4>
          <h4>By Manase Gunga</h4>
        </div>

        <div className="container-items">
          <h3>Web Development</h3>
          <p className="cyb-icon">
            <IoLogoHtml5 />
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            nobis distinctio. Fugiat animi cupiditate iste rem dignissimos vitae
            ex explicabo.
          </p>
          <h4>Wednesday 6pm-9pm</h4>
          <h4>By Carolyn Wanjiru</h4>
        </div>

        <div className="container-items">
          <h3>Mobile App Development</h3>
          <p className="cyb-icon">
            <IoLogoAndroid />
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            nobis distinctio. Fugiat animi cupiditate iste rem dignissimos vitae
            ex explicabo.
          </p>
          <h4>Thursday 4pm-7pm</h4>
          <h4>By Stanely Amunze</h4>
        </div>

        <div className="container-items">
          <h3>Cloud Engineering</h3>
          <p className="cyb-icon">
            <SiAzuredataexplorer />
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            nobis distinctio. Fugiat animi cupiditate iste rem dignissimos vitae
            ex explicabo.
          </p>
          <h4>Friday 3pm-6pm</h4>
          <h4>By Paul Karanja</h4>
        </div>

        <div className="container-items">
          <h3>Power Platform</h3>
          <p className="cyb-icon">
            <SiPowerbi />
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            nobis distinctio. Fugiat animi cupiditate iste rem dignissimos vitae
            ex explicabo.
          </p>
          <h4>Saturday 1pm-4pm</h4>
          <h4>Yvonne Mbithe</h4>
        </div>
      </div>
    </section>
  );
};
export default Events;
