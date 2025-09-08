import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Container from "@/components/common/Container";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { images } from "@/constants/images";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
  },
];

function Navigation() {
  return (
    <div className="relative">
      <div className="fixed top-0 w-full bg-white backdrop-blur-md shadow-md z-[50] ">
        <Container className="py-2 flex items-center justify-between">
          <Link to={"/"} >
            <img src={images.logo_landscape} alt="LOGO" className="max-h-14 md:max-h-20" />
          </Link>
          <NavigationMenu viewport={false} className={"z-50"}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  background=""
                  className={""}
                >
                  Home
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 md:w-[200px] md:grid-cols-2 lg:w-[300px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 md:w-[200px] md:grid-cols-2 lg:w-[300px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link>Support</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link>News and Events</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div>
            <div className="bg-dark-green text-primary-foreground rounded-full text-sm font-medium pl-3 pr-1 flex items-center gap-2 py-1">
                Contact Us <Button size={"icon"} className={"bg-white rounded-full text-black  hover:bg-white/80"}><ArrowRight/></Button>
            </div>
            {/* <Button className={"bg-lighter-green rounded-full hover:bg-lighter-green/90"}>
              Contact Us <ArrowRight className="rounded-full bg-black p-1"/>
            </Button> */}
          </div>
        </Container>
      </div>
    </div>
  );
}

function ListItem({ title, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          {/* <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p> */}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Navigation;
