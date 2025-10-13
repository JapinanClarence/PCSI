import Header from "@/components/common/Header";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/components/forms/user/schema";
import userService from "@/services/userService";
import { toast } from "sonner";
import UserForm from "@/components/forms/user/UserForm";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const fetchUserProfile = async () => {
    setLoading(true);
    try {
      const response = await userService.getProfile();
      if (response.success) {
        const user = response.data.data.user;
        setUserData(user);
        // Populate form with user data
        form.reset({
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        toast.error(response.error || "Failed to load profile");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  // Fetch user profile on component mount
  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleSubmit = async (data) => {
    setSubmitting(true);
    try {
      // Handle password change if requested
      if (data.oldPassword && data.newPassword) {
        const passwordResponse = await userService.changePassword({
          oldPassword: data.oldPassword,
          newPassword: data.newPassword
        });
        
        if (!passwordResponse.success) {
          toast.error(passwordResponse.error || "Failed to change password");
          setSubmitting(false);
          return;
        }
        
        toast.success("Password changed successfully");
      }

      // Update profile data (excluding password fields)
      const updateData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      };

      const response = await userService.updateProfile(updateData);
      
      if (response.success) {
        toast.success("Profile updated successfully");
        // Update local user data
        setUserData(response.data.data.user);
        // Reset password fields
        form.setValue('oldPassword', '');
        form.setValue('newPassword', '');
        form.setValue('confirmPassword', '');
      } else {
        toast.error(response.error || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="">
      <Header>User Profile</Header>
      <div className="flex items-center justify-center">
        <UserForm
          userData={userData}
          form={form}
          submitting={submitting}
          loading={loading}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default UserProfile;
