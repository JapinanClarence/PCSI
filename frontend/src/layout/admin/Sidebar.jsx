import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Bell,
  Calendar,
  Home,
  Inbox,
  Megaphone,
  Newspaper,
  Search,
  Settings,
  ShoppingBag,
} from "lucide-react";
import { images } from "@/constants/images";
import { NavUser } from "./NavUser";
import { useLocation } from "react-router";
// Menu items.
const items = [
  {
    title: "Home",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Publications",
    url: "/admin/publications",
    icon: Newspaper,
  },
  {
    title: "Announcements",
    url: "/admin/announcements",
    icon: Bell,
  },
  {
    title: "Feature",
    url: "/admin/feature",
    icon: Megaphone,
  },
  {
    title: "Merchandise",
    url: "/admin/merchandise",
    icon: ShoppingBag,
  },
];

export function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={"flex-row items-center font-bold font-serif"}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                <img src={images.logo_square} className="" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {"Phlippine Coleopterist "}
                </span>
                <span className="truncate font-semibold">{"Society Inc."}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    variant="outline"
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <a href={item.url} className="font-medium">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
