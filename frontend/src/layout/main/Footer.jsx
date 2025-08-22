import Container from "@/components/common/Container";
import React from "react";
import { images } from "@/constants/images";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
function Footer() {
  return (
    <div className="w-full bg-dark-green">
      <Container className={" "}>
        <div className="py-10 flex h-full gap-10">
          <img src={images.logo_white} className="max-h-40" />
          <div className="flex gap-5 text-sm text-primary-foreground font-medium">
            <div className="p-2 flex flex-col justify-between">
              <div>
                <h1 className="text-lg mb-2 font-serif">Email</h1>
                <p>pcsi@gmail.com</p>
              </div>
              <div>
                <h1 className="text-lg mb-2 font-serif">Address</h1>
                <p>
                  Guang-Guang, Dahican, City of Mati, Davao Oriental,
                  8200
                </p>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="p-2 ">
              <h1 className="text-lg mb-2 font-serif">Services</h1>
              <div className="flex gap-2 flex-col">
                <p>Beetle species identification</p>
                <p>Training Workshop on Coleopterology</p>
                <p>Basic Photoshop and QGIS</p>
                <p>Individual and Institutional Partnerships</p>
              </div>
            </div>
            <Separator orientation="vertical" />
            <div className="p-2 ">
              <Button className={"text-accent-foreground bg-accent rounded-full font-bold"} >
                Be a member
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
