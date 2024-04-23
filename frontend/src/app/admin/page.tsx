import DashboardCard from "@/atom/Cards/DashboardCard";
import DashBoardDetails from "@/components/DashBoard/DashBoardDetails";
import Header from "@/components/Header/Header"
import Welcome from "@/components/Welcome/Welcome";
import { Stack } from "@mui/material";

export default function Admin() {
    return (
      <Stack gap={3}>
        <Header heading="Dashboard" />
        <Welcome /> 
        <DashBoardDetails />
      </Stack>
    );
  }
  