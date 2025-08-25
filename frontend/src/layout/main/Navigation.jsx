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
import { ArrowRight, ChevronDown } from "lucide-react";
import { images } from "@/constants/images";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
    title: "Individual and Institutional Partnerships",
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

const ajisItems = [
  {
    title: "About the Journal",
    href: "/ajis/about",
  },
  {
    title: "Author Guidelines",
    href: "/ajis/author-guidelines",
  },
  {
    title: "Editorial Board",
    href: "/ajis/editorial-board",
  },
  {
    title: "Manuscript Preparation",
    href: "/ajis/manuscript-preparation",
  },
  {
    title: "Deposition",
    href: "/ajis/deposition",
  },
  {
    title: "Submission Process",
    href: "/ajis/submission-process",
  },
  {
    title: "Review Process",
    href: "/ajis/review-process",
  },
  {
    title: "Abstracting and Indexing",
    href: "/ajis/abstracting-indexing",
  },
  {
    title: "Submit Manuscript",
    href: "/ajis/submit-manuscript",
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
        <Container className="py-4 flex items-center justify-between">
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
                        {item.subItems ? (
                          <Collapsible>
                            <CollapsibleTrigger className="w-full group">
                              <div className="text-sm leading-none font-medium flex items-center justify-between pl-2">
                                {" "}
                                {/* Adjusted padding-left */}
                                {item.title}
                                <ChevronDown className="ml-2 size-3 transition-transform group-data-[state=open]:rotate-180" />
                              </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <ul className="ml-6 mt-1">
                                {item.subItems.map((subItem) => (
                                  <li key={subItem.title}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={subItem.href}
                                        className="block px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                                      >
                                        <div className="text-xs text-foreground hover:text-foreground">
                                          {subItem.title}
                                        </div>
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        ) : (
                          <NavigationMenuLink asChild>
                            <Link to={item.href}>
                              <div className="text-sm leading-none font-medium">
                                {item.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
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
                        <Link to="/affiliates">
                          <div className="text-sm leading-none font-medium">
                            Affiliates
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/how-to-be-member">
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
                          <Link to={item.href}>
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
                <NavigationMenuTrigger>AJIS</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[200px] gap-2">
                    {ajisItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link to={item.href}>
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
                          <Link to={item.href}>
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
