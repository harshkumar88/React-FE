// ✅ ActionDropdown component
import React, { useState } from "react";

const RenderActions = ({ record }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="button-outline"
        onClick={() => setOpen(!open)}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <circle cx="5" cy="12" r="2" fill="#333" />
          <circle cx="12" cy="12" r="2" fill="#333" />
          <circle cx="19" cy="12" r="2" fill="#333" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow z-10">
          <button className="dropdown-item px-4 py-2 w-full text-left" onClick={() => setOpen(false)}>✏️ Edit</button>
          <button className="dropdown-item px-4 py-2 w-full text-left" onClick={() => setOpen(false)}>🧭 Journey</button>
          <button className="dropdown-item px-4 py-2 w-full text-left" onClick={() => setOpen(false)}>🗑️ Delete</button>
          {record.isArchived ? (
            <button className="dropdown-item px-4 py-2 w-full text-left" onClick={() => setOpen(false)}>♻️ Unarchive</button>
          ) : (
            <button className="dropdown-item px-4 py-2 w-full text-left" onClick={() => setOpen(false)}>📦 Archive</button>
          )}
          {record.flowId && (
            <button className="dropdown-item px-4 py-2 w-full text-left" onClick={() => setOpen(false)}>🔗 Get Flow ID</button>
          )}
          <button className="dropdown-item px-4 py-2 w-full text-left" onClick={() => setOpen(false)}>⬇️ Download Analytics</button>
        </div>
      )}
    </div>
  );
};

export default RenderActions;
