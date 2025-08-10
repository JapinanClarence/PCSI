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
import Container from "@/components/common/container";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

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
      <div className="fixed top-0 w-full backdrop-blur-md bg-dark-green shadow-sm z-[100] ">
        <Container className="py-5 flex items-end justify-between">
          <Link to={"/"}>
            {/* <img src="/vite.svg" alt="LOGO" className="max-h-14 md:max-h-14" /> */}
            <Button className={"rounded-full"}>
              Philippine Coleopterists Society Incorporated
            </Button>
          </Link>
          <NavigationMenu viewport={false} className={"z-50"}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  background="transparent"
                  className={"hover:bg-transparent"}
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
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link>Contact Us</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
