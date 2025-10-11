import Header from "@/components/common/Header";
import React, { useState, useEffect } from "react";
import DataTable from "./table";
import { publicationColumns } from "./columns";
import PublicationForm from "@/components/forms/publication/PublicationForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PublicationSchema } from "@/components/forms/publication/schema";
import publicationService from "@/services/publicationService";
import { toast } from "sonner";
import { formatDate } from "@/util/formatDate";

const statusMap = {
  1: "Active",
  0: "Inactive",
};

const Publications = () => {
  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [currentData, setCurrentData] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [publications, setPublications] = useState("");
  const [loading, setLoading] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState({});

  const form = useForm({
    resolver: zodResolver(PublicationSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "1",
    },
  });

  const fetchPublications = async () => {
    setLoading(true);
    try {
      const result = await publicationService.getPublications();
      if (result.success) {
        const data = result?.data?.data?.map((publication) => ({
          ...publication,
          status: statusMap[publication.status],
          createdAt: formatDate(publication.createdAt)
        }));

        setPublications(data || []);
      } else {
        toast.error(result.error || "Failed to fetch publications");
      }
    } catch (error) {
      console.error("Error fetching publications:", error);
      toast.error("Failed to fetch publications");
    } finally {
      setLoading(false);
    }
  };

  // Fetch publications on component mount
  useEffect(() => {
    fetchPublications();
  }, []);

  const handleUpdateStatus = async ({ vehicleId, newStatus }) => {
    const promise = async () => {
      setSubmitting(true);
      try {
        const result = await publicationService.togglePublicationStatus(
          vehicleId,
          newStatus
        );
        await fetchPublications();
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      } finally {
        setSubmitting(false);
      }
    };

    toast.promise(promise(), {
      loading: "Updating Status...",
      success: `Publication status updated`,
      error: (error) => error.message || "Failed to update publication status",
    });
  };

  const handleEdit = (vehicleId) => {
    // Find the publication data by ID
    const publication = publications.find((pub) => pub._id === vehicleId);
    if (!publication) return;

    setShowForm(true);
    setFormTitle("Edit Publication");
    setCurrentData(publication);
    // Populate form with existing data
    form.reset({
      title: publication.title || "",
      description: publication.description || "",
      status: publication.status === "Active" ? "1" : "0",
    });
  };

  const handleAdd = () => {
    setShowForm(true);
    setFormTitle("Add Publication");
    setCurrentData(null);
    // Reset form to default values
    form.reset({
      title: "",
      description: "",
      date: "",
      status: "1",
    });
  };

  const handleSubmit = async (data) => {
    setSubmitting(true);
    try {
      let result;

      if (currentData) {
        // Update existing publication
        result = await publicationService.updatePublication(currentData._id, {
          title: data.title,
          description: data.description,
          status: data.status === "1" ? "active" : "inactive",
        });
      } else {
        // Create new publication
        result = await publicationService.createPublication({
          title: data.title,
          description: data.description,
          status: data.status === "1" ? "active" : "inactive",
        });
      }

      if (result.success) {
        toast.success(
          currentData
            ? "Publication updated successfully!"
            : "Publication created successfully!"
        );

        // Close form and reset
        setShowForm(false);
        form.reset();

        // Refresh the data
        fetchPublications();
      } else {
        toast.error(result.error || "Failed to save publication");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="">
      <Header>Publications</Header>
      <div>
        <DataTable
          data={publications}
          onAdd={() => handleAdd()}
          onEdit={(data) => handleEdit(data)}
          onUpdateStatus={handleUpdateStatus}
          submitting={submitting}
          loading={loading}
          filters={["title", "description", "createdAt", "status"]}
          tableColumn={publicationColumns}
        />
      </div>
      <PublicationForm
        open={showForm}
        onOpenChange={setShowForm}
        data={currentData}
        submitting={submitting}
        title={formTitle}
        form={form}
        onUpdateStatus={handleUpdateStatus}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Publications;
