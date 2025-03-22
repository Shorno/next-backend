import Link from "next/link";
import { LayoutDashboard} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 sm:px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <LayoutDashboard className="h-6 w-6" />
          <span>Admin Dashboard</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link
            href="/dashboard/products"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Products
          </Link>
          <Link
            href="/dashboard/users"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Users
          </Link>
          <Link
            href="/dashboard/settings"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Settings
          </Link>
          <Button
            variant="outline"
            size="sm"
            className="ml-2"
          >
            Logout
          </Button>
        </nav>
      </div>
    </header>
  );
}
