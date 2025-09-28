import Container from "@/components/common/Container";
import React from "react";
import { images } from "@/constants/images";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, Facebook, MapPin } from "lucide-react";
import { Link } from "react-router";
function Footer() {
  return (
    <div className="w-full">
      <div className="bg-dark-green">
        <Container className={" "}>
          <div className="py-8 flex flex-col md:flex-row h-fit gap-6">
            <img src={images.logo_white} className="md:max-h-48" />
            <div className="flex flex-col md:flex-row gap-4 text-sm text-primary-foreground font-medium">
              <div className="p-2 flex-col justify-between flex-none">
                <h1 className="text-lg mb-2 font-serif">QUICK LINKS</h1>
                <div className="flex gap-2 flex-col">
                  <Link to="/" className="hover:text-lighter-green">
                    Home
                  </Link>
                  <Link
                    to="/services/training/collection-protocols"
                    className="hover:text-lighter-green"
                  >
                    Specimen Collection Protocols
                  </Link>
                  <Link
                    to="/strategic-initiatives"
                    className="hover:text-lighter-green"
                  >
                    Strategic Initiatives
                  </Link>
                  <Link to="/ajis/about" className="hover:text-lighter-green">
                    About AJIS
                  </Link>
                  <Link
                    to="/ajis/editorial-board"
                    className="hover:text-lighter-green"
                  >
                    Editorial Board
                  </Link>
                  <Link
                    to="/support/volunteer"
                    className="hover:text-lighter-green"
                  >
                    Volunteer
                  </Link>
                  <Link
                    to="/support/donate"
                    className="hover:text-lighter-green"
                  >
                    Donate
                  </Link>
                </div>
              </div>
              <Separator orientation="vertical" />
              <div className="p-2 ">
                <div className="space-y-2">
                  <h1 className="text-lg font-serif">GET IN TOUCH</h1>
                  <p>
                    pcsi@gmail.com
                  </p>
                  <p>
                   +639 11 234 5678
                  </p>
                  <p>
                    <a
                      href="https://www.facebook.com/philcolsoc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      PCSI Facebook Page
                    </a>
                  </p>
                </div>
                <div>
                  <h1 className="text-lg mb-2 mt-2 font-serif">LOCATION</h1>
                  <p>
                     Guang-Guang, Dahican,
                    City of Mati, Davao Oriental, 8200
                  </p>
                </div>
              </div>
              <Separator orientation="vertical" />
              <div className="p-2 ">
                <Button
                  className={
                    "text-accent-foreground bg-accent hover:bg-lighter-green rounded-full font-bold"
                  }
                >
                  Be a member
                </Button>
                <div className="mt-4">
                  <p className="text-white py-2 text-xs">
                    Copyright © 2025. Philippine Coleopterists Society Inc. All
                    Rights Reserved.
                  </p>
                  <p className="text-white text-sm">
                    <u>Privacy Policy</u> | <u>Terms of Use</u>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* <Separator /> 
      <div className="bg-gray-900">
        <Container>
          <p className="text-center text-white py-3 text-sm">
            Copyright © 2025. Philippine Coleopterists Society Inc. All Rights
            Reserved.
          </p>
        </Container>
      </div> 
      */}
    </div>
  );
}

export default Footer;
