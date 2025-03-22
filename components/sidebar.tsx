import Link from "next/link";
import { LayoutDashboard, Package, Plus, Settings, User } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 border-r h-[calc(100vh-4rem)] p-4">
      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100"
        >
          <LayoutDashboard className="h-5 w-5 text-gray-500" />
          <span>Dashboard</span>
        </Link>
        <div>
          <div className="flex items-center gap-2 rounded-lg px-3 py-2">
            <Package className="h-5 w-5 text-gray-500" />
            <span className="font-medium">Products</span>
          </div>
          <div className="ml-4 space-y-1">
            <Link
              href="/dashboard/products"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100"
            >
              <span>All Products</span>
            </Link>
            <Link
              href="/dashboard/products/new"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-100"
            >
              <Plus className="h-4 w-4" />
              <span>Add New</span>
            </Link>
          </div>
        </div>
        <Link
          href={"/dashboard/users"}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100"
        >
          <User className="h-5 w-5 text-gray-500" />
          <span>Users</span>
        </Link>
        <Link
          href={"/dashboard/settings"}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100"
        >
          <Settings className="h-5 w-5 text-gray-500" />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
}
