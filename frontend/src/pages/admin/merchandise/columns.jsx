import React, { useState } from "react";
import { CheckCircle2Icon, CircleAlert } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const vehicleColumns = (onEdit, onUpdateStatus, submitting) => [
  {
    accessorKey: "id",
    header: "Id.",
    cell: ({ row }) => <div className="">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "banner",
    header: "",
    cell: ({ row }) => (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <div className="">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="w-52 truncate">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div className="">{row.getValue("date")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => <div className="">{row.getValue("createdAt")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const [status, setStatus] = useState(row.original.status);
      const vehicleId = row.original._id;

      const handleStatusChange = async (newStatus) => {
        setStatus(newStatus);
        onUpdateStatus({ vehicleId, newStatus });
      };

      return (
        <Select
          value={status}
          onValueChange={handleStatusChange}
          disabled={submitting}
        >
          <SelectTrigger className="justify-start gap-2 h-8 w-28 px-2 [&_svg]:size-4 rounded-sm">
            {status === "Active" ? (
              <CheckCircle2Icon className="" />
            ) : (
              <CircleAlert className="" />
            )}
            {status}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      );
    },
  },
  //   {
  //     id: "actions",
  //     enableHiding: false,
  //     cell: ({ row }) => {
  //       const vehicle = row.original;
  //       const handleEdit = (e) => {
  //         e.stopPropagation();
  //         onEdit(vehicle._id);
  //       };
  //       return (
  //         <DropdownMenu>
  //           <DropdownMenuTrigger asChild>
  //             <Button variant="ghost" className="h-5 w-5 p-0">
  //               <span className="sr-only">Open menu</span>
  //               <DotsHorizontalIcon className="h-4 w-4" />
  //             </Button>
  //           </DropdownMenuTrigger>
  //           <DropdownMenuContent align="end">
  //             <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //             <DropdownMenuSeparator />
  //             <DropdownMenuItem onClick={handleEdit}>
  //               Edit
  //               <Edit />
  //             </DropdownMenuItem>
  //           </DropdownMenuContent>
  //         </DropdownMenu>
  //       );
  //     },
  //   },
];
