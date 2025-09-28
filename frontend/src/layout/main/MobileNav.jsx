import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, ChevronDown, MenuIcon } from "lucide-react";
import Container from "@/components/common/Container";
import { Link, useLocation, useNavigate } from "react-router";
import { images } from "@/constants/images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import path from "path";

const MENU = [
  {
    label: "Home",
    path: "/", // no children
  },
  {
    label: "Services",
    path: "/services", // no children
  },
  {
    label: "Membership",
    children: [
      { name: "Affiliates", path: "#" },
      { name: "How to be a member?", path: "#" },
    ],
  },
  {
    label: "Strategic Initiatives",
    path: "/strategic-initiatives",
  },
  {
    label: "AJIS",
    children: [
      { name: "About the Journal", path: "/ajis/about" },
      { name: "Author Guidelines", path: "/ajis/author-guidelines" },
      { name: "Editorial Board", path: "/ajis/editorial-board" },
      { name: "Manuscript Preparation", path: "/ajis/manuscript-preparation" },
      { name: "Deposition", path: "/ajis/deposition" },
      { name: "Submission Process", path: "/ajis/submission-process" },
      { name: "Review Process", path: "/ajis/review-process" },
      { name: "Abstracting and Indexing", path: "/ajis/abstracting-indexing" },
      { name: "Submit Manuscript", path: "/ajis/submit-manuscript" },
    ],
  },
  {
    label: "Support",
    path:"/support"
  },
  {
    label: "Contests",
    path: "/contests", // no children
  },
  {
    label: "News & Events",
    path: "/news-events", // no children
  },
];

export default function MobileNav() {
  const [openSections, setOpenSections] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSection = (label) => {
    setOpenSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // close sidebar on navigation
  };

  return (
    <div className="relative lg:hidden ">
      <div className="fixed top-0 w-full bg-background backdrop-blur-md shadow-md z-[50]">
        <Container className="py-5 md:py-1 flex items-center justify-between">
          <Link to={"/"}>
            <img
              src={images.logo_landscape}
              alt="LOGO"
              className="max-h-15 md:max-h-20"
            />
          </Link>
          <Sheet>
            <SheetTrigger>
              <Button variant={"ghost"} size={"icon"}>
                <MenuIcon className="size-7" />
              </Button>
            </SheetTrigger>
            <SheetContent className="max-w-[400px]">
              <div className="flex flex-col h-full">
                <div className="h-14"></div>
                <nav className="flex-1 overflow-y-auto px-2 pb-8">
                  {MENU.map((item) => {
                    const hasChildren =
                      item.children && item.children.length > 0;
                    const isActiveParent =
                      item.path && location.pathname === item.path;

                    return (
                      <div key={item.label} className="mb-1">
                        {hasChildren ? (
                          <>
                            <button
                              className={`w-full flex items-center justify-between px-4 py-3 text-lg font-medium rounded transition hover:bg-gray-100 ${
                                openSections[item.label] ? "bg-gray-50" : ""
                              }`}
                              onClick={() => toggleSection(item.label)}
                            >
                              <span>{item.label}</span>
                              {openSections[item.label] ? (
                                <ChevronDown size={20} />
                              ) : (
                                <ChevronRight size={20} />
                              )}
                            </button>
                            {openSections[item.label] && (
                              <div className="pl-8">
                                {item.children.map((child) => {
                                  const isActiveChild =
                                    location.pathname === child.path;
                                  return (
                                    <div
                                      key={child.name}
                                      className={`py-2 text-lg rounded cursor-pointer px-2 ${
                                        isActiveChild
                                          ? "text-foreground bg-accent"
                                          : "text-gray-800 hover:bg-gray-100"
                                      }`}
                                      onClick={() =>
                                        handleNavigation(child.path)
                                      }
                                    >
                                      {child.name}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </>
                        ) : (
                          <div
                            className={`px-4 py-3 text-lg font-medium rounded cursor-pointer ${
                              isActiveParent
                                ? "text-foreground bg-accent"
                                : "hover:bg-gray-100"
                            }`}
                            onClick={() =>
                              item.path && handleNavigation(item.path)
                            }
                          >
                            {item.label}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div className="ml-3 w-fit bg-dark-green text-primary-foreground rounded-full text-lg font-semibold pl-3 pr-1 flex items-center gap-1 py-1">
                    Contact Us{" "}
                    <Button
                      size={"sm"}
                      className={
                        "bg-white rounded-full text-black  hover:bg-white/80"
                      }
                    >
                      <ArrowRight />
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </Container>
      </div>
    </div>
  );
}
