import { lazy } from "react";
import { pathPages } from "../../locales/pathPages.js";
import { useSelector } from "react-redux";
import { selectAuthPermissions } from "../../redux/authSlice";

const Schedule = lazy(() => import("../../pages/Schedule/Schedule.jsx"));

export default function JillSchedule() {
  const permissions = useSelector(selectAuthPermissions);

  return (
    <Schedule
      pathNavigate={pathPages.lessonsWithJill}
      permissions={permissions?.jill || permissions?.superAdmin}
    />
  );
}
