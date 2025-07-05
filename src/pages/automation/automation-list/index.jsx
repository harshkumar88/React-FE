// AutomationList.jsx
import { useState } from "react";
import Tabs from "./components/Tabs";
import SearchBar from "./components/SearchBar";
import AutomationTable from "./components/AutomationTable";
import Pagination from "./components/Pagination";
import CreateAutomationModal from "./components/CreateAutomationModel";

const initialData = [
  {
    name: "Onboarding Flow",
    createdBy: "Admin",
    startedOn: "2025-06-01",
    nextTrigger: "2025-06-30",
    endsOn: "2025-12-31",
    updatedOn: "2025-06-15",
    assigned: "HR Department",
    status: "Active",
  },
  {
    name: "Exit Flow",
    createdBy: "Manager",
    startedOn: "2025-05-01",
    nextTrigger: "2025-06-15",
    endsOn: "2025-10-01",
    updatedOn: "2025-06-10",
    assigned: "Admin Team",
    status: "Inactive",
  },
  {
    name: "Birthday Wishes",
    createdBy: "HR",
    startedOn: "2025-01-01",
    nextTrigger: "2025-07-01",
    endsOn: "2025-12-31",
    updatedOn: "2025-06-25",
    assigned: "All Employees",
    status: "Scheduled",
  },
];

const AutomationList = () => {
  const [tab, setTab] = useState("Live");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [records, setRecords] = useState(initialData);
  const [sortKey, setSortKey] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const filteredData = records
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Automation</h2>

      <Tabs activeTab={tab} onTabChange={setTab} />

      <div className="flex justify-between items-center my-4">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded"
          onClick={() => setModalOpen(true)}
        >
          Create Automation
        </button>
      </div>

      <AutomationTable
        data={filteredData}
        onSort={handleSort}
        sortKey={sortKey}
        sortDirection={sortDirection}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={1}
        onPageChange={setCurrentPage}
      />

      {modalOpen && (
        <CreateAutomationModal
          onClose={() => setModalOpen(false)}
          onSuccess={(newItem) => {
            setRecords((prev) => [...prev, newItem]);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default AutomationList;
