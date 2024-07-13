import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ProductForm from "./FormComponent";
import { FormContext } from "../context/context";
import { useContext } from "react";

export default function SideBar() {
  const { isShow, setIsShow } = useContext(FormContext);

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: "100%", // Set width to 1fr
          "& .MuiDrawer-paper": {
            width: "1fr", // Set width to 1fr
            height: "100vh",
            backgroundColor: "rgb(242, 242, 242)",
            color: "black",
            boxSizing: "border-box",
            gridRow: "2 / -1", // Start from the second row
            position: "static",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Divider />
        <List>
          {["مدیریت فروش", "آمار فروش", "اطلاعات فروشگاه"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["ثبت آگهی جدید"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => setIsShow(true)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {isShow ? <ProductForm /> : <></>}
    </Box>
  );
}
