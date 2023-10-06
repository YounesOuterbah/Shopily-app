import { MiddleHeader } from "./MiddleHeader";
import { Navigation } from "./Navigation";
import { TopHeader } from "./TopHeader";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header">
      <TopHeader />
      <MiddleHeader />
      <Navigation />
    </div>
  );
};
