import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateIcon from '@material-ui/icons/Create';
import SchoolIcon from '@material-ui/icons/School';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
export const routes = [
    {
      path: "Dashboard",
      icon: <DashboardIcon />
    },
    {
      path: "Academics",
      icon: <SchoolIcon />
    },
    {
      path: "Exam",
      icon: <CreateIcon />
    },
    {
      path: "Profile",
      icon: <AccountBoxIcon />
    }
  ];

