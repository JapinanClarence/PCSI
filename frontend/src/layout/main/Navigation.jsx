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
import { ArrowRight } from "lucide-react";
import { images } from "@/constants/images";

const servicesItems = [
  {
    title: "Beetle Species Identification",
    href: "/services/beetle-identification",
  },
  {
    title: "Training Workshop on Coleopterology",
    href: "/services/training-workshop",
    subItems: [
      {
        title: "Specimen collection protocols",
        href: "/services/training/collection-protocols",
      },
      {
        title: "Specimen high-definition imaging",
        href: "/services/training/hd-imaging",
      },
      {
        title:
          "Specimen examination: gross morphology, genitalia (basic: gross male and female genitalia examination)",
        href: "/services/training/gross-examination",
      },
      {
        title:
          "Specimen examination: genitalia (advanced: endophallus examination)",
        href: "/services/training/endophallus-examination",
      },
      {
        title: "Specimen Standard Measurements",
        href: "/services/training/standard-measurements",
      },
    ],
  },
  {
    title: "Basic Photoshop and QGIS",
    href: "/services/training/photoshop-qgis",
  },
  {
    title: "Individual and Institutional Partnerships ",
    href: "/services/training/inidividual-institutional-partnerships",
  },
];

const strategicInitiativesItems = [
  {
    title: "Sponsorships",
    href: "/strategic-initiatives/sponsorships",
  },
  {
    title: "Endowment",
    href: "/strategic-initiatives/endowment",
  },
  {
    title: "Scholarships",
    href: "/strategic-initiatives/scholarships",
  },
];

const supportItems = [
  {
    title: "Become a member",
    href: "/support/become-member",
  },
  {
    title: "Volunteer",
    href: "/support/volunteer",
  },
  {
    title: "Donate",
    href: "/support/donate",
  },
  {
    title: "Merchandise",
    href: "/support/merchandise",
  },
];

const newsEventsItems = [
  {
    title: "Publications",
    href: "/news-events/publications",
  },
  {
    title: "Feature (Beetle of the Month)",
    href: "/news-events/beetle-of-month",
  },
  {
    title: "Announcements",
    href: "/news-events/announcements",
  },
  {
    title: "PCSI Facebook Page",
    href: "https://web.facebook.com/philcolsoc",
  },
];

function Navigation() {
  return (
    <div className="relative">
      <div className="fixed top-0 w-full bg-white backdrop-blur-md shadow-md z-[50] ">
        <Container className="py-2 flex items-center justify-between">
          <Link to={"/"}>
            <img
              src={images.logo_landscape}
              alt="LOGO"
              className="max-h-14 md:max-h-20"
            />
          </Link>
          <NavigationMenu viewport={false} className={"z-50"}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to="/"
                  className="border-b-2 border-dark-green px-4 py-2 text-sm font-medium"
                >
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[300px] gap-2">
                    {servicesItems.map((item) => (
                      <li key={item.title} className="group">
                        <NavigationMenuLink asChild>
                          <Link href={item.href}>
                            <div className="text-sm leading-none font-medium">
                              {item.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        {item.subItems && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <Link href={subItem.href}>
                                    <div className="text-xs text-muted-foreground">
                                      {subItem.title}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Membership & Affiliates
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[200px] gap-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/affiliates">
                          <div className="text-sm leading-none font-medium">
                            Affiliates
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/how-to-be-member">
                          <div className="text-sm leading-none font-medium">
                            How to be a member?
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Strategic Initiatives
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[200px] gap-2">
                    {strategicInitiativesItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link href={item.href}>
                            <div className="text-sm leading-none font-medium">
                              {item.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[200px] gap-2">
                    {supportItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link href={item.href}>
                            <div className="text-sm leading-none font-medium">
                              {item.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>News & Events</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[200px] gap-2">
                    {newsEventsItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          {item.href.startsWith("http") ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block"
                            >
                              <div className="text-sm leading-none font-medium">
                                {item.title}
                              </div>
                            </a>
                          ) : (
                            <Link href={item.href}>
                              <div className="text-sm leading-none font-medium">
                                {item.title}
                              </div>
                            </Link>
                          )}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div>
            <div className="bg-dark-green text-primary-foreground rounded-full text-sm font-medium pl-3 pr-1 flex items-center gap-2 py-1">
              Contact Us{" "}
              <Button
                size={"icon"}
                className={
                  "bg-white rounded-full text-black  hover:bg-white/80"
                }
              >
                <ArrowRight />
              </Button>
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

export default Navigation;
