import React, { useState } from "react";

const CreateAutomationModal = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    createdBy: "",
    assigned: "",
    status: "Active",
    startedOn: "",
    nextTrigger: "",
    endsOn: "",
    updatedOn: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.createdBy) {
      onSuccess(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-bold">Create Automation</h3>
          <button onClick={onClose}>✖</button>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-2 mb-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="createdBy"
          placeholder="Created By"
          className="w-full border p-2 mb-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="assigned"
          placeholder="Assigned To"
          className="w-full border p-2 mb-2"
          onChange={handleChange}
        />
        {/* You can add more fields here as needed */}

        <div className="flex justify-end gap-2 mt-4">
          <button className="px-4 py-2 border" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-pink-500 text-white"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAutomationModal;
