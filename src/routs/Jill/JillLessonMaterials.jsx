import { lazy } from "react";
import { useSelector } from "react-redux";
import { selectAuthPermissions } from "../../redux/authSlice.js";
import { pathPages } from "../../locales/pathPages.js";
import { selectLessonsById } from "../../redux/englishLessonsSlice.js";
import { collectionDb } from "../../locales/collectionDb.js";

const LessonMaterials = lazy(() =>
  import("../../pages/LessonMaterials/LessonMaterials.jsx")
);
export default function JillLessonMaterials() {
  const permissions = useSelector(selectAuthPermissions);
  const lessonMaterials = useSelector(selectLessonsById);

  return (
    <LessonMaterials
      pathNavigate={pathPages.lessonsWithJill}
      permissions={permissions?.jill || permissions?.superAdmin}
      lessonMaterials={lessonMaterials}
      nameCollection={collectionDb.lessonsWithJill}
    />
  );
}
