import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from '@workspace/ui/components/sidebar';
import {
  BarChart,
  Calendar,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from 'lucide-react';
import * as React from 'react';

import { useAppStore } from '@/stores/useAppStore';

interface NavLayoutProps {
  children: React.ReactNode;
}

export function NavLayout({ children }: NavLayoutProps) {
  const { sidebarOpen, setSidebarOpen, user } = useAppStore();

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-white">
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Flora</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuButton
                isActive={true}
                tooltip="Dashboard"
                className="w-full justify-start gap-2 text-gray-900 hover:bg-gray-50"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </SidebarMenuButton>
              <SidebarMenuButton
                tooltip="Users"
                className="w-full justify-start gap-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Users className="h-4 w-4" />
                <span>Users</span>
              </SidebarMenuButton>

              <SidebarMenuButton
                tooltip="Calendar"
                className="w-full justify-start gap-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <Calendar className="h-4 w-4" />
                <span>Calendar</span>
              </SidebarMenuButton>
              <SidebarMenuButton
                tooltip="Analytics"
                className="w-full justify-start gap-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <BarChart className="h-4 w-4" />
                <span>Analytics</span>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="mt-auto p-4 space-y-2 border-t border-gray-200">
            <SidebarMenuButton
              tooltip="Help"
              className="w-full justify-start gap-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <HelpCircle className="h-4 w-4" />
              <span>Help</span>
            </SidebarMenuButton>
            <SidebarMenuButton
              tooltip="Settings"
              className="w-full justify-start gap-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
            <SidebarMenuButton
              tooltip="Logout"
              variant="outline"
              className="w-full justify-start gap-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 overflow-y-auto bg-white">
          <nav className="flex h-16 items-center border-b border-gray-200 bg-white px-4">
            <SidebarTrigger className="text-gray-600 hover:text-gray-900" />
            <div className="ml-auto flex items-center space-x-4">
              {/* Add user profile, notifications, etc. here */}
            </div>
          </nav>
          <div className="container mx-auto p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
