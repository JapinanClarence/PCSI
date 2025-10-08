import Header from '@/components/common/Header';
import React from 'react'
import DataTable from './table';
import { vehicleColumns } from './columns';
export const sampleData = [
  {
    id: 1,
    title: "Beetle Awareness Campaign",
    description: "A community outreach to promote beetle conservation awareness among students.",
    date: "2025-09-15",
    createdAt: "2025-08-01",
    status: "Active",
    _id: "veh-001"
  },
  {
    id: 2,
    title: "Coleopterist Field Training",
    description: "Hands-on fieldwork for identifying and collecting beetle specimens in Luzon.",
    date: "2025-10-05",
    createdAt: "2025-09-12",
    status: "Inactive",
    _id: "veh-002"
  },
  {
    id: 3,
    title: "Invertebrate Research Workshop",
    description: "A two-day workshop at TROGENIR Laboratory focusing on specimen preparation and imaging.",
    date: "2025-11-10",
    createdAt: "2025-09-25",
    status: "Active",
    _id: "veh-003"
  },
  {
    id: 4,
    title: "Annual PCS Conference",
    description: "National gathering of coleopterists to present research findings and conservation initiatives.",
    date: "2025-12-01",
    createdAt: "2025-10-01",
    status: "Active",
    _id: "veh-004"
  },
  {
    id: 5,
    title: "Bug Art Exhibit",
    description: "A creative exhibit showcasing macro photography and illustrations of Philippine beetles.",
    date: "2026-01-15",
    createdAt: "2025-09-30",
    status: "Inactive",
    _id: "veh-005"
  }
];

const Merchandise = () => {
  return (
    <div className=''>
     <Header>Merchandise</Header>
     <div>
        <DataTable
            data={sampleData}
            onAdd={() => {}}
            onEdit={(data) => {}}
            onUpdateStatus={({ vehicleId, newStatus }) => {}}
            submitting={false}
            loading={false}
            filters={["id", "title", "description", "date", "createdAt", "status"]}
            tableColumn={vehicleColumns}
        />
     </div>
    </div>
  )
}

export default Merchandise
