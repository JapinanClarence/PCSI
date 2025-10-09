import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Camera, File, X } from "lucide-react";

export default function PublicationForm({
  open,
  onOpenChange,
  onSubmit,
  data,
  submitting,
  title,
}) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage({
        file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const removeImage = () => {
    setImage(null);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={"max-h-[90%]"} showCloseButton={false}>
        <DialogHeader>
          <DialogTitle className={"text-start"}>{title}</DialogTitle>
          <DialogDescription className={"text-start"}>
            Please fill in all required fields and click submit to save.
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] ">
          <form>
            <FieldGroup>
              <FieldSet>
                <Field>
                  <div className="relative min-h-40  bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    {image ? (
                      <>
                        <img
                          src={image.preview}
                          alt="Uploaded banner"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 hover:bg-black/80"
                        >
                          <X size={16} />
                        </button>
                      </>
                    ) : (
                      <label
                        htmlFor="banner-upload"
                        className="h-full w-full flex flex-col items-center justify-center font-semibold text-muted-foreground cursor-pointer"
                      >
                        <File size={30} />
                        <span>Upload Banner</span>
                        <input
                          id="banner-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </Field>
                <Field>
                  <FieldLabel htmlFor="title">Title</FieldLabel>
                  <Input id="title" type="text" placeholder="" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="feedback">Description</FieldLabel>
                  <Textarea id="description" rows={4} className={"resize-y overflow-y-auto min-h-[100px]"} />
                </Field>
              </FieldSet>
              <Field orientation="horizontal">
                <Button type="submit">Submit</Button>
                <Button
                  type="button"
                  variant={"outline"}
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
