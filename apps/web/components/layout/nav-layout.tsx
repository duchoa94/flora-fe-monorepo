'use client';

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
  Briefcase,
  CreditCard,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  UserCircle,
  Users,
} from 'lucide-react';
import * as React from 'react';

import { useAppStore } from '@/stores/useAppStore';
import Link from 'next/link';
import { useState } from 'react';

interface NavLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    layout: 'dashboard',
  },
  {
    label: 'Candidates',
    href: '/candidates',
    icon: UserCircle,
    layout: 'dashboard',
  },
  {
    label: 'Jobs',
    href: '/jobs',
    icon: Briefcase,
    layout: 'dashboard',
  },
  {
    label: 'Employees',
    href: '/employees',
    icon: Users,
    layout: 'dashboard',
  },
  {
    label: 'Chat with HR Agent',
    href: '/chat-agents',
    icon: MessageCircle,
    layout: 'dashboard',
  },
];

const footerMenuItems = [
  {
    label: 'Help',
    href: '/help',
    icon: HelpCircle,
  },
  {
    label: 'Billing',
    href: '/billing',
    icon: CreditCard,
  },
  {
    label: 'Logout',
    href: '/logout',
    icon: LogOut,
  },
];

export function NavLayout({ children }: NavLayoutProps) {
  const { sidebarOpen, setSidebarOpen, user } = useAppStore();

  const [isMenuItemActive, setIsMenuItemActive] = useState(0);

  const handleMenuItemClick = (index: number) => {
    setIsMenuItemActive(index);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-white">
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Flora</h2>
          </SidebarHeader>
          <SidebarContent className="p-4">
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuButton
                  key={index}
                  isActive={isMenuItemActive === index}
                  tooltip={item.label}
                  onClick={() => handleMenuItemClick(index)}
                  className="w-full justify-start gap-2 text-gray-900 hover:bg-gray-50"
                >
                  <item.icon className="h-4 w-4" />
                  <Link href={item.href}>
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              ))}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="mt-auto p-4 space-y-2 border-t border-gray-200">
            {footerMenuItems.map((item, index) => (
              <SidebarMenuButton
                key={index}
                tooltip={item.label}
                className="w-full justify-start gap-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <item.icon className="h-4 w-4" />
                <Link href={item.href}>
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            ))}
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 overflow-y-auto bg-white">
          <nav className="flex h-16 items-center border-b border-gray-200 bg-white px-4">
            <SidebarTrigger className="text-gray-600 hover:text-gray-900" />
            <div className="ml-auto flex items-center space-x-4"></div>
          </nav>
          <div className="container mx-auto p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
