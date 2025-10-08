import React from "react";
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
import { Camera, File } from "lucide-react";

export default function PublicationForm({
  open,
  onOpenChange,
  onSubmit,
  data,
  submitting,
  title,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Please fill in all required fields and click submit to save.
          </DialogDescription>
        </DialogHeader>
        <div>
          <form>
            <FieldGroup>
              <FieldSet>
                <Field>
                  <div className="h-40 bg-muted rounded-lg">
                    <div className="h-full flex flex-col items-center justify-center font-semibold text-muted-foreground">
                      <span >
                        <File size={30}/>
                      </span>
                      <span>
                         Upload Banner
                      </span>
                    </div>
                  </div>
                </Field>
                <Field>
                  <FieldLabel htmlFor="title">Title</FieldLabel>
                  <Input id="title" type="text" placeholder="" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="feedback">Description</FieldLabel>
                  <Textarea
                    id="description"
                    rows={4}
                    className={"resize-y"}
                  />

                </Field>
              </FieldSet>
              <Field orientation="horizontal">
                <Button type="submit">Submit</Button>
                <Button type="button" variant={"outline"}>
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
