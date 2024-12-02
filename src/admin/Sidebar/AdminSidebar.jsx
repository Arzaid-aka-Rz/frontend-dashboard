import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  LogOut,
  PanelsTopLeft,
  Settings,
  UserRoundCog,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const AdminSidebar = () => {
  const location = useLocation();

  const adminSidebarLinks = [
    {
      id: 1,
      name: "Dashboard",
      icon: <Settings className="w-5 h-5" />,
      path: "/open-dashboard",
    },
    {
      id: 2,
      name: "Nav Content",
      icon: <PanelsTopLeft className="w-5 h-5" />,
      path: "/open-dashboard/navbar-content",
    },
  ];

  const [activeLink, setActiveLink] = useState(() => {
    const matchingLink = adminSidebarLinks.find(
      (link) => link.path === location.pathname
    );
    return matchingLink ? matchingLink.id : 1; // Default to 1 (Dashboard) if no match
  });

  useEffect(() => {
    // On every URL change, update the active link based on the path
    const currentLink = adminSidebarLinks.find(
      (link) => link.path === location.pathname
    );
    if (currentLink) {
      setActiveLink(currentLink.id); // Set the active link by id
    }
  }, [location.pathname]);

  return (
    <div className="fixed left-0 top-0 z-10 h-full w-72 bg-gray-800 text-white flex flex-col">
      <div className="flex items-center gap-2 justify-center py-6 border-b border-gray-700">
        <h3 className="text-2xl font-semibold">Admin Panel</h3>
        <UserRoundCog className="w-6 h-6" />
      </div>

      <nav className="flex-grow overflow-y-auto py-6">
        <ul className="flex flex-col gap-2 px-4">
          {adminSidebarLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                    isActive
                      ? "bg-gray-700 text-white" // Active link styles
                      : "text-gray-300 hover:bg-gray-700 hover:text-white" // Inactive link styles
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {link.icon}
                    {link.name}
                  </div>
                  {isActive && <ArrowRight className="w-5 h-5" />}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto border-t border-gray-700 py-6 px-4">
        <Button className="w-full flex items-center justify-center gap-2 text-lg font-medium bg-gray-900 hover:bg-gray-900">
          <LogOut className="w-6 h-6" />
          Log Out
        </Button>
      </div>
    </div>
  );
};
