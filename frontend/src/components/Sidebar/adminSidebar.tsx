"use client";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from '@mui/icons-material/Logout';
import ListItemText from "@mui/material/ListItemText";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MailIcon from "@mui/icons-material/Mail";
import AdminNavbar from "../Navbar/adminNavbar";
import PeopleIcon from '@mui/icons-material/People';
import styles from "./adminSidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";

const drawerWidth = 240;

const poppins = Poppins( {
  weight:  ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: "normal",
  subsets: ["latin"]
});

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: 'white',
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const links = [
  { text: "Dashboard", link: "/admin", icon:(active:boolean) => <DashboardIcon sx={{ color: active? 'white' : undefined }} /> },
  { text: "All Books", link: "/admin/all-books", icon:(active:boolean) => <LibraryBooksIcon sx={{ color: active? 'white' : undefined }} /> },
  { text: "Add Book", link: "/admin/add-book", icon:(active:boolean) => <AddBoxIcon sx={{ color: active? 'white' : undefined }} /> },
  { text: "All Users", link: "/admin/all-users", icon:(active:boolean) => <PeopleIcon sx={{ color: active? 'white' : undefined }} /> },
  { text: "Settings", link: "/admin/admin-settings", icon:(active:boolean) => <ManageAccountsIcon sx={{ color: active? 'white' : undefined }} /> },
  { text: "Logout", link: "/login", icon:(active:boolean) => <LogoutIcon /> },
];

export default function AdminSidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const pathname = usePathname();

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} sx={{'& .MuiDrawer-paper': {border:"none"}}} >
        <AppBar position="fixed" open={open} className={styles.appbar}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              sx={{
                marginRight: 5,
                color: "#f75866",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <AdminNavbar />
            </Box>
          </Toolbar>
        </AppBar>

        <DrawerHeader />

        <List>
          {
          links.map((items) => (
            <ListItem
              key={items.text}
              disablePadding
              sx={{ display: "block", p:0.5 }}
              
            >
              <Link href={items.link}  >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    borderRadius: 2                    
                  }}
                  className={pathname === items.link ? styles.active : "" }
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {items.icon(pathname === items.link ? true : false)}
                  </ListItemIcon>
                  {/* <Typography sx={{ opacity: open ? 1 : 0, fontFamily: 'Poppins' }} >{items.text}</Typography> */}
                  <ListItemText
                    sx={{ opacity: open ? 1 : 0 }}
                    primary={items.text}
                    primaryTypographyProps={{fontFamily: 'Poppins' }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "#f8f9f8", minHeight: '100vh' }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
