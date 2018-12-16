// Material UI icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import AddIcon from "@material-ui/icons/Add";

// Views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import AddBot from "views/AddBot/AddBot.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: DashboardIcon,
    component: DashboardPage
  },
  {
    path: "/add-bot",
    sidebarName: "Add Bot",
    navbarName: "Add Bot",
    icon: AddIcon,
    component: AddBot
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
