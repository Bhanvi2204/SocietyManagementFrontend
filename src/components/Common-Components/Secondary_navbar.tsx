import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";


const navItems = [
  {
    href: "",
    label: "Home",
  },
  {
    href: "events",
    label: "Events",
  },
  {
    href: "members",
    label: "Our Team",
  },
  {
    href: "Societymembers",
    label: "Members",
  },
  {
    href: "evaluation",
    label: "Evalution",
  },
  {
    href: "news",
    label: "News",
  },
  {
    href: "societygallery",
    label: "Gallery",
  },

  {
    href: "coordinators",
    label: "Coordinators",
  },
  {
    href: "openings",
    label: "Openings",
  },
  {
    href: "testimonials",
    label: "Testimonials",
  },
];


const SecondaryNavbar = () => {
  let id: string | undefined;
  const location = useLocation();
  const pathname = location.pathname;
  const route = pathname.split("/");
  console.log(route)
  id=route[2]
  console.log(id);



  return (
    <div className="flex w-screen overflow-x-hidden">
      <NavigationMenu className="flex justify-center w-screen overflow-x-hidden">
        <NavigationMenuList className="w-screen overflow-x-hidden flex justify-evenly flex-wrap  py-3 bg-gray-200 text-gray-900">
          {navItems.map((navItem, index) => {
  
            if(navItem.label==="Home"){
              return(
                <NavigationMenuItem key={index}>
                  <Link to={`/society/${id}`}>{navItem.label}</Link>
                </NavigationMenuItem>
              )
            }else{
              return(
                <NavigationMenuItem key={index}>
                  <Link to={`/society/${id}/${navItem.href}`}>{navItem.label}</Link>
                </NavigationMenuItem>
              )
            }
})}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default SecondaryNavbar;
