import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../../redux/localOperation";
import { useLocation } from "react-router-dom";
import { selectLessonsJillById } from "../../../redux/englishLessonsSlice";
import { useEffect, useState } from "react";
import { getScheduleByIdThunk } from "../../../redux/englishLessonsOperations";
import { collectionDb } from "../../../locales/collectionDb";
import { AlertComponent } from "../../../components/AlertComponent/AlertComponent";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  styled,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import ImageTitle from "../../../components/ImageTitle/ImageTitle";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function MaterialfromJill() {
  const location = useLocation();
  const language = useSelector(selectLanguage);
  const lesson = useSelector(selectLessonsJillById);
  const dicpatch = useDispatch();

  const [selectedFile, setSelectedFile] = useState([]);
  const [picturesArr, setPicturesArr] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(null);
  console.log(selectedFile);
  console.log(picturesArr);

  const handleFileChange = (e) => {
    setSelectedFile([...e.target.files]?.slice(0, 5));
  };

  const storage = getStorage();
  const imageRef = ref(storage, "images/" + selectedFile?.name);

  const handleUpload = async () => {
    if (selectedFile.length === 0) return;

    selectedFile.forEach((file) => {
      const uploadTask = uploadBytesResumable(imageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setLoadingProgress(progress);
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setPicturesArr((prevState) => [...prevState, downloadURL]);
          });
        }
      );
    });
  };

  // useEffect(() => {
  //   dicpatch(
  //     getScheduleByIdThunk({
  //       nameCollection: collectionDb.lessonsWithJillSchedule,
  //       currentId:
  //         location.pathname.split("/")[location.pathname.split("/").length - 1],
  //     })
  //   );
  // }, [dicpatch, location.pathname]);

  return (
    <>
      <AlertComponent />
      <ImageTitle
        tipingText={lesson && lesson?.date && lesson.date}
        title={language === "en" ? "Lesson materials" : "Матеріали уроку"}
      />
      {/* ///////////////////////////////// */}
    </>
  );
}

//    <div>
//         <Button
//           component="label"
//           role={undefined}
//           variant="contained"
//           tabIndex={-1}
//           startIcon={<CloudUploadIcon />}
//         >
//           {language === "en" ? "Upload file" : "Завантажити файл"}
//           <VisuallyHiddenInput
//             type="file"
//             onChange={handleFileChange}
//             multiple
//             accept=".jpg, .jpeg, .png"
//           />
//         </Button>

//         <button onClick={handleUpload}>Upload</button>
//  <button onClick={() => uploadTask.pause()}>pause</button>
//         <button onClick={() => uploadTask.resume()}>resume</button>
//         <button onClick={() => uploadTask.cancel()}>cancel</button>

//       </div>
//       <Box sx={{ position: "relative", display: "inline-flex" }}>
//         <CircularProgress variant="determinate" value={loadingProgress} />
//         <Box
//           sx={{
//             top: 0,
//             left: 0,
//             bottom: 0,
//             right: 0,
//             position: "absolute",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Typography variant="caption" component="div" color="text.secondary">
//             {`${Math.round(loadingProgress)}%`}
//           </Typography>
//         </Box>
//       </Box>
//       {picturesArr.length > 0 &&
//         picturesArr.map((imegeLink, index) => (
//           <Box key={index}>
//             <img src={imegeLink} style={{ width: "100%" }} />
//           </Box>
//         ))}
