import { Route, Routes } from "react-router-dom";

import { AdminDashboardLayout } from "./admin/Layout/AdminDashboardLayout";
import { AdminNavbarContent } from "./admin/OutletComponents/AdminNavbarContent";
import { AdminDashboard } from "./admin/OutletComponents/AdminDashboard";


function App() {
  return (
    <div>
      <Routes>
        <Route element={<AdminDashboardLayout />}>
          <Route path="open-dashboard" element={<AdminDashboard />} />
          <Route path="open-dashboard/navbar-content" element={<AdminNavbarContent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
