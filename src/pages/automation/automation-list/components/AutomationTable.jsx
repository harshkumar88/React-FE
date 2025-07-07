import React from "react";

const AutomationTable = ({
  data,
  onSort,
  sortKey,
  sortDirection,
  columnDetails,
  showActions = false,
  renderActions = () => null,
}) => {
  const renderSortArrow = (key) => {
    if (sortKey !== key) return null;
    return sortDirection === "asc" ? "▲" : "▼";
  };

  const renderCell = (record, column) => {
    const { key, cellValueProperties } = column;
    const value = record[key];

    if (!cellValueProperties) {
      return (
        <span className="w-100 text-truncate" title={value}>
          {value}
        </span>
      );
    }

    switch (cellValueProperties.type) {
      case "date":
        return new Date(value).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });

      case "username":
        return (
          <div className="cellValuePropertiesUsername">
            {cellValueProperties.showPhoto && (
              <span className="logo">
                <img
                  src={record[cellValueProperties.customField]}
                  onError={(e) => (e.target.src = "./assets/img/logo-placeholder.png")}
                  alt="user"
                />
              </span>
            )}
            <span className="usernameContainer overflow-hidden">
              <span className="username" title={record[key]}>
                {record[key]}
              </span>
              <span className="usernamesub">{record[cellValueProperties.subKey]}</span>
            </span>
          </div>
        );

      case "array":
        return <span className="text-truncate">{Array.isArray(value) ? value.join(", ") : value}</span>;

      case "subtext":
        return (
          <div className={`cellValuePropertiesUsername ${cellValueProperties.className || ""}`}>
            <span className="usernameContainer w-100">
              <span className="username w-100 text-truncate" title={record[key]}>
                {record[key]}
              </span>
              <span className="usernamesub" title={record[cellValueProperties.key]}>
                {record[cellValueProperties.key]}
              </span>
            </span>
          </div>
        );

      case "phoneNumber":
        return (
          <span>
            {record[cellValueProperties.customField]} {value}
          </span>
        );

      case "boolean":
        return (
          <>
            {cellValueProperties.values.map((obj, i) => (
              <span key={i}>{obj.value === value ? obj.displayText : ""}</span>
            ))}
          </>
        );

      case "progressBar":
        const completed = value.completed || 0;
        const total = value.total || 1;
        const width = `${(completed * 100) / total}%`;
        return (
          <div className="cellValuePropertiesCreatedBy">
            <span className="createdByName">{completed === total ? "Complete" : "Incomplete"}</span>
            <div className="d-flex align-items-baseline">
              <div
                className="progress w-5rem"
                role="progressbar"
                aria-valuenow={completed}
                aria-valuemin={0}
                aria-valuemax={total}
              >
                <div className="progress-bar bg-success" style={{ width }}></div>
              </div>
              <div className="ms-1">
                {completed}/{total}
              </div>
            </div>
          </div>
        );

      default:
        return value;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg mb-3">
      <div className="cst-table">
        <table className="w-100 text-left">
          <thead className="uppercase bg-gray-100">
            <tr>
              {columnDetails.map((col) => (
                <th
                  key={col.key}
                  className={`px-6 py-3 ${col.sortable ? "cursor-pointer hover:bg-gray-200" : ""}`}
                  onClick={() => col.sortable && onSort(col.key)}
                >
                  <div className="flex items-center space-x-1">
                    <span className="text">{col.displayText}</span>
                    {col.sortable && <span>{renderSortArrow(col.key)}</span>}
                  </div>
                </th>
              ))}
              {showActions && <th className="w-40"></th>}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr className="bg-white">
                <td colSpan={columnDetails.length + (showActions ? 1 : 0)} className="px-6 py-4 text-center">
                  No data found
                </td>
              </tr>
            ) : (
              data.map((record, i) => (
                <tr key={i} className="border-b">
                  {columnDetails.map((col) => (
                    <td key={col.key} className="px-6 py-4 whitespace-nowrap mw-15rem">
                      {renderCell(record, col)}
                    </td>
                  ))}
                  {showActions && <td>{renderActions(record)}</td>}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AutomationTable;
