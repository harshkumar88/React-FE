import React from "react";

const AutomationTable = ({ data, onSort, sortKey, sortDirection }) => {
  const renderSortArrow = (key) => {
    if (sortKey !== key) return null;
    return sortDirection === "asc" ? " ▲" : " ▼";
  };

  return (
    <table className="w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 cursor-pointer" onClick={() => onSort("name")}>
            Name{renderSortArrow("name")}
          </th>
          <th
            className="p-2 cursor-pointer"
            onClick={() => onSort("createdBy")}
          >
            Created By{renderSortArrow("createdBy")}
          </th>
          <th className="p-2">Started On</th>
          <th className="p-2">Next Trigger</th>
          <th className="p-2">Ends On</th>
          <th className="p-2">Updated On</th>
          <th className="p-2">Assigned</th>
          <th className="p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan="8" className="p-4 text-center text-gray-500">
              No automations found.
            </td>
          </tr>
        ) : (
          data.map((item, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.createdBy}</td>
              <td className="p-2">{item.startedOn}</td>
              <td className="p-2">{item.nextTrigger}</td>
              <td className="p-2">{item.endsOn}</td>
              <td className="p-2">{item.updatedOn}</td>
              <td className="p-2">{item.assigned}</td>
              <td className="p-2">{item.status}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default AutomationTable;
