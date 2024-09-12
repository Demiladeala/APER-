const JuniorDashboard = () => {
    return (
      <div>
        <h1 className="text-3xl font-bold text-purple-600 mb-4">Junior Staff Dashboard</h1>
  
        {/* Document Upload */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600">Upload Documents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-purple-700">Bio Data</h3>
              <input type="file" className="mt-2" />
            </div>
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-purple-700">Research Papers</h3>
              <input type="file" className="mt-2" />
            </div>
            {/* Add more document sections as needed */}
          </div>
        </div>
  
        {/* View Status */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600">Document Status</h2>
          {/* Display the status of uploaded documents */}
        </div>
  
        {/* Submit Reports */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600">Submit Reports</h2>
          <button className="px-4 py-2 bg-purple-600 text-white rounded">Submit Report</button>
        </div>
      </div>
    );
  };
  
  export default JuniorDashboard;  