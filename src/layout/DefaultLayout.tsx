import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { SideBar } from "./SideBar";

export function DefaultLayout () {
  return (
   <LayoutContainer>
     <SideBar />
     <Outlet />
   </LayoutContainer>
  )
}