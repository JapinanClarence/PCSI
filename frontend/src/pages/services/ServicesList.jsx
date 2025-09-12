import Container from "@/components/common/Container";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
import { images } from "@/constants/images";

const ServiceList = () => {
  return (
    <div className="bg-accent">
    <Container className="py-20 flex flex-nowrap  items-center gap-20">
      <div  className="h-96 w-96 rounded-full overflow-hidden flex-shrink-0">
        <img src={images.coleopterist} alt="coleopterist" className=" w-full h-full object-cover"/>
      </div>
      <ol className="list-decimal list-outside space-y-3 text-lg marker:font-semibold marker:text-dark-green marker:text-3xl">
        <li>Beetle species identification</li>
        <li>Training Workshop on Coleopterology
          <ol className="list-decimal list-outside space-y-1 mt-2 ml-6 marker:font-bold marker:text-dark-green marker:text-xl">
            <li>Specimen collection protocols</li>
            <li>Specimen high-definition imaging</li>
            <li>Specimen examination: gross morphology, genitalia &#40;basic: gross male and female genitalia examination &#41;, genitalia &#40;advance: endophallus examination&#41;</li>
            <li>Specimen Standard Measurements</li>
          </ol>

        </li>
        <li>Basic Photoshop and QGIS</li>
        <li>Individual and Institutional Partnership</li>
      </ol>
    </Container>
    </div>
  );
};

export default ServiceList;
