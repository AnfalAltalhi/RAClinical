import ClientSidebar from "./ClientSidebar";
import { Outlet } from "react-router";  
export default function ClientLayout() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter flex">
      {/* Sidebar */}
      <div className="flex-shrink-0">
        <ClientSidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen w-full">
        <Outlet />
      </div>
    </div>
  );
}