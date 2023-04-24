import "./header.css";
import name from "../assets/name.png";

export const Header = () => {
  return (
    <div className="header">
      <img src={name} alt="name"/>
    </div>
  );
};
