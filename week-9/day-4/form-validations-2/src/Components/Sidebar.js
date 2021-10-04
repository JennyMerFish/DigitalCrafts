import React from "react";

import SidebarLinks from "./SidebarLinks";
import { SidebarContainer } from "../styled-components/SidebarStyle";
import { sidebarData } from "./SidebarLinksData.js";

export default function Sidebar(props) {
  const viewSidebar = props.viewSidebar;
  return (
    <>
      {viewSidebar ? (
        <SidebarContainer>
          {sidebarData?.map((linkData) => (
            <SidebarLinks linkData={linkData} />
          ))}
        </SidebarContainer>
      ) : (
        <></>
      )}
    </>
  );
}
