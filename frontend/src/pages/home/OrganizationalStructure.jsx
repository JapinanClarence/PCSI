import React from "react";
import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";

function OrganizationalStructure() {
  const teamMembers = [
    {
      name: "Dr. Milton Norman B. Medina",
      position: "Founding President",
      image: "/src/assets/images/DrMilton.jpg",
      affiliation: "",
    },
    {
      name: "Dr. Jhonnel P. Villegas",
      position: "Founding Secretary",
      image: "/src/assets/images/DrJhonnel.webp", // Using placeholder image
      affiliation: "",
    },
    {
      name: "Dr. Ricksterlie Verzosa",
      position: "Founding Treasurer",
      image: "/src/assets/images/DrRicksterlie.png", // Using placeholder image
      affiliation: "",
    },
    {
      name: "Mark John Pepito",
      position: "Founding Member of the Board",
      image: "/src/assets/images/MarkJhon.png", // Using placeholder image
      affiliation: "University of Mindanao, Davao City, Philippines",
    },
    {
      name: "Efrain Loidge Pajota",
      position: "Founding Member of the Board",
      image: "/src/assets/images/beatle_4.jpg", // Using placeholder image
      affiliation: "University of Mindanao, Davao City, Philippines",
    },
  ];

  return (
    <Container className="py-5">
      <div className="mb-12">
        <h1 className="font-serif font-bold text-3xl mb-2">
          Organizational Structure
        </h1>
        <p className="text-md text-gray-600 max-w-2xl mb-2">
          Meet the dedicated team leading the Philippine Coleopterological
          Society, Inc.
        </p>
        <Separator />
      </div>

      <div className="space-y-12">
        {/* Founding President, Secretary, and Treasurer */}
        <div className="space-y-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className="text-center animate-float-in">
              <div className="relative mb-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 mx-auto rounded-full border-4 border-dark-green"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-dark-green font-medium mb-2">
                {member.position}
              </p>
              {member.affiliation && (
                <p className="text-dark-green text-sm">{member.affiliation}</p>
              )}
            </div>
          ))}
        </div>

        {/* Founding Members of the Board */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Founding Members of the Board
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {teamMembers.slice(3).map((member, index) => (
              <div key={index} className="text-center mb-8 animate-float-in">
                <div className="relative mb-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-36 h-36 mx-auto rounded-full border-4 border-dark-green"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>

                <p className="text-dark-green text-sm">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default OrganizationalStructure;
