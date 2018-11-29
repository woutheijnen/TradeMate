// Material UI icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AddIcon from "@material-ui/icons/Add";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ComputerIcon from "@material-ui/icons/Computer";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import SettingsIcon from "@material-ui/icons/Settings";
import SwapVertIcon from "@material-ui/icons/SwapVert";

// Views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import PriceChart from "views/PriceChart/PriceChart.jsx";
import AddBot from "views/AddBot/AddBot.jsx";
import FinancialStats from "views/FinancialStats/FinancialStats.jsx";
import SystemStats from "views/SystemStats/SystemStats.jsx";
import ViewLogs from "views/ViewLogs/ViewLogs.jsx";
import Settings from "views/Settings/Settings.jsx";
import Bot from "views/Bot/Bot.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: DashboardIcon,
    component: DashboardPage
  },
  {
    path: "/price-chart",
    sidebarName: "Price Chart",
    navbarName: "Price Chart",
    icon: TrendingUpIcon,
    component: PriceChart
  },
  {
    path: "/add-bot",
    sidebarName: "Add Bot",
    navbarName: "Add Bot",
    icon: AddIcon,
    component: AddBot
  },
  {
    path: "/financial-stats",
    sidebarName: "Financial Stats",
    navbarName: "Financial Stats",
    icon: AccountBalanceIcon,
    component: FinancialStats
  },
  {
    path: "/system-stats",
    sidebarName: "System Stats",
    navbarName: "System Stats",
    icon: ComputerIcon,
    component: SystemStats
  },
  {
    path: "/view-logs",
    sidebarName: "View Logs",
    navbarName: "View Logs",
    icon: FormatAlignLeftIcon,
    component: ViewLogs
  },
  {
    path: "/settings",
    sidebarName: "Settings",
    navbarName: "Settings",
    icon: SettingsIcon,
    component: Settings
  },
  {
    path: "/bot-1",
    sidebarName: "zqw10k@Binance",
    navbarName: "zqw10k@Binance",
    icon: SwapVertIcon,
    component: Bot,
    special: true
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
