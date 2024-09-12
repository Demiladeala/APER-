const AdminDashboard = () => {
    return (
      <div>
        <h1 className="text-3xl font-bold text-purple-600 mb-4">Admin Dashboard</h1>
        
        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
            <h2 className="text-lg font-semibold text-purple-700">System Stats</h2>
            <p className="mt-2">Total Users: 150</p>
            <p>Total Reports: 75</p>
            <p>Academic Assessments: 30</p>
          </div>
          {/* Add more statistics sections as needed */}
        </div>
  
        {/* User Management */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600">User Management</h2>
          <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded">Add User</button>
          {/* Display user list with options to edit and delete */}
        </div>
  
        {/* Report Management */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600">Report Management</h2>
          <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded">View Reports</button>
          {/* Display and manage reports */}
        </div>
  
        {/* Academics Management */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600">Academics Management</h2>
          <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded">Manage Assessments</button>
          {/* Display and manage academic assessments */}
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;  