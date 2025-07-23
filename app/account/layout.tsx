import { ReactNode } from "react";
import SideNavigation from "../components/SideNavigation";

type LayoutPropTypes = {
  children: ReactNode;
};

function layout({ children }: LayoutPropTypes) {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-12 h-full">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

export default layout;
