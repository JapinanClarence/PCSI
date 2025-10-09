import Header from "@/components/common/Header";
import React, { useState } from "react";
import DataTable from "./table";
import { vehicleColumns } from "./columns";
import PublicationForm from "@/components/forms/publication/PublicationForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PublicationSchema } from "@/components/forms/publication/schema";

export const sampleData = [
  {
    id: 1,
    title: "Beetle Awareness Campaign",
    description:
      "A community outreach to promote beetle conservation awareness among students.",
    date: "2025-09-15",
    createdAt: "2025-08-01",
    status: "Active",
    _id: "veh-001",
  },
  {
    id: 2,
    title: "Coleopterist Field Training",
    description:
      "Hands-on fieldwork for identifying and collecting beetle specimens in Luzon.",
    date: "2025-10-05",
    createdAt: "2025-09-12",
    status: "Inactive",
    _id: "veh-002",
  },
  {
    id: 3,
    title: "Invertebrate Research Workshop",
    description:
      "A two-day workshop at TROGENIR Laboratory focusing on specimen preparation and imaging.",
    date: "2025-11-10",
    createdAt: "2025-09-25",
    status: "Active",
    _id: "veh-003",
  },
  {
    id: 4,
    title: "Annual PCS Conference",
    description:
      "National gathering of coleopterists to present research findings and conservation initiatives.",
    date: "2025-12-01",
    createdAt: "2025-10-01",
    status: "Active",
    _id: "veh-004",
  },
  {
    id: 5,
    title: "Bug Art Exhibit",
    description:
      "A creative exhibit showcasing macro photography and illustrations of Philippine beetles.",
    date: "2026-01-15",
    createdAt: "2025-09-30",
    status: "Inactive",
    _id: "veh-005",
  },
];

const Publications = () => {
  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [currentData, setCurrentData] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(PublicationSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "1"
    }
  })


  const handleEdit = (data) => {
    setShowForm(true);
    setFormTitle("Edit Publication")
    setCurrentData(data);
    // Populate form with existing data
    form.reset({
      title: data.title || "",
      description: data.description || "",
      status: data.status === "Active" ? "1" : "0"
    });
  };

  const handleAdd = () => {
    setShowForm(true)
    setFormTitle("Add Publication")
    setCurrentData(null);
    // Reset form to default values
    form.reset({
      title: "",
      description: "",
      date: "",
      status: "1"
    });
  }

  const handleSubmit = async (data) => {
    setSubmitting(true);
    try {
      // Here you would typically make an API call
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Close form and reset
      setShowForm(false);
      form.reset();
      
      // You might want to refresh the data here
      // fetchPublications();
      
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="">
      <Header>Publications</Header>
      <div>
        <DataTable
          data={sampleData}
          // title="Publications"
          onAdd={() => handleAdd()}
          onEdit={(data) => handleEdit(data)}
          onUpdateStatus={({ vehicleId, newStatus }) => {}}
          submitting={false}
          loading={false}
          filters={[
            "id",
            "title",
            "description",
            "createdAt",
            "status",
          ]}
          tableColumn={vehicleColumns}
        />
      </div>
      <PublicationForm
        open={showForm}
        onOpenChange={setShowForm}
        data={currentData}
        submitting={submitting}
        title={formTitle}
        form={form}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Publications;
