import { useState } from "react";
import Tabs from "./components/Tabs";
import SearchBar from "./components/SearchBar";
import AutomationTable from "./components/AutomationTable";
import Pagination from "./components/Pagination";
import CreateAutomationModal from "./components/CreateAutomationModel";
import RenderActions from "./components/renderActions";

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

const columnDetails = [
  {
    key: "name",
    displayText: "Name",
    sortable: true,
  },
  {
    key: "createdBy",
    displayText: "Created By",
    sortable: true,
  },
  {
    key: "startedOn",
    displayText: "Started On",
    cellValueProperties: { type: "date" },
  },
  {
    key: "nextTrigger",
    displayText: "Next Trigger",
  },
  {
    key: "endsOn",
    displayText: "Ends On",
    cellValueProperties: { type: "date" },
  },
  {
    key: "updatedOn",
    displayText: "Updated On",
    cellValueProperties: { type: "date" },
  },
  {
    key: "assigned",
    displayText: "Assigned",
  },
  {
    key: "status",
    displayText: "Status",
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
  const [pageSize, setPageSize] = useState(5); // page size dropdown value

  const filteredData = records
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const getPageRange = (currentPage, totalPages, delta = 2) => {
    if (!totalPages || totalPages < 1) return [];

    const range = [];
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    range.push(1);
    if (left > 2) range.push("...");

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < totalPages - 1) range.push("...");
    if (totalPages > 1) range.push(totalPages);

    return range;
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Automation</h2>

      <Tabs activeTab={tab} onTabChange={setTab} />

      <div className="w-full my-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="w-full sm:w-1/2">
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
          </div>

          <div className="w-full sm:w-1/2">
            <div className="actionsContainer flex justify-end">
              <button
                type="button"
                className="button-primary"
                onClick={() => setModalOpen(true)}
              >
                Create Automation
              </button>
            </div>
          </div>
        </div>
      </div>

      <AutomationTable
        data={paginatedData}
        onSort={handleSort}
        sortKey={sortKey}
        sortDirection={sortDirection}
        columnDetails={columnDetails}
        showActions={true}
        renderActions={(record) => <RenderActions record={record} />}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        getPageRange={() => getPageRange(currentPage, totalPages)}
        selectedPageSize={pageSize}
        setSelectedPageSize={(size) => {
          setPageSize(size);
          setCurrentPage(1); // Reset to page 1 on page size change
        }}
        pageSizeOptions={[5, 10, 25, 50]}
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
