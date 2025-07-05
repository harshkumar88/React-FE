const tabOptions = ["Live", "Archived"];

const Tabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-gray-300 mb-4">
      {tabOptions.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === tab
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-blue-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
