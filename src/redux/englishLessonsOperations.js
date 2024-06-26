import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { db, storage } from "../../firebaseConfig";
import { notify } from "../components/AlertComponent/notify";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { collectionDb } from "../locales/collectionDb";
import dayjs from "dayjs";

const localStorString = JSON.parse(
  localStorage.getItem("persist:basicSettings")
);

const language = localStorString
  ? localStorString.language.replace(/"/g, "")
  : "en";

const someThingWrongAlarm = () => {
  notify(
    "error",
    language === "en"
      ? "Something went wrong, please try again later"
      : "Щось пішло не так, спробуйте пізніше"
  );
};

export const getScheduleThunk = createAsyncThunk(
  "lessonsWithJill/get",
  async ({ nameCollection, selectMonthCalendar }, { rejectWithValue }) => {
    try {
      const colRef = collection(db, nameCollection);

      // Определяем начало и конец месяца
      const startDate = dayjs(selectMonthCalendar).startOf("month").toDate();
      const endDate = dayjs(selectMonthCalendar).endOf("month").toDate();

      // Создаем запрос, используя метод where для фильтрации по диапазону дат
      const q = query(
        colRef,
        where("timestamp", ">=", startDate),
        where("timestamp", "<=", endDate)
      );

      const response = await getDocs(q);

      // Преобразуем объекты Timestamp в строки ISO перед возвратом
      const scheduleArr = response.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          timestamp: data.timestamp.toDate().toISOString(), // Конвертируем Timestamp в строку ISO
        };
      });

      return scheduleArr;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addScheduleThunk = createAsyncThunk(
  "lessonsWithJill/add",
  async ({ nameCollection, data }, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, nameCollection), {
        ...data,
        timestamp: Timestamp.fromDate(new Date(data.date)),
      });

      if (!docRef.id) {
        throw new Error("Failed to add document to the collection");
      }
      notify(
        "success",
        language === "en" ? "Lesson added successfully" : "Урок додано успішно"
      );

      return { ...data, id: docRef.id };
    } catch (error) {
      console.log(error);
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const getScheduleByIdThunk = createAsyncThunk(
  "lessonsWithJill/getById",
  async ({ nameCollection, currentId }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, nameCollection, currentId);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if (!docSnap.data().materials) {
          notify(
            "info",
            language === "en"
              ? "Information about the lesson was not found or you have not added materials yet"
              : "Інформація про урок не знайдена або ви ще не додали матеріали"
          );
        }
        const data = docSnap.data();
        return {
          ...data,
          timestamp: data.timestamp.toDate().toISOString(),
          id: docSnap.id,
        };
      }
    } catch (error) {
      someThingWrongAlarm();

      return rejectWithValue(error.message);
    }
  }
);

export const deleteScheduleByIdThunk = createAsyncThunk(
  "lessonsWithJill /deleteById",
  async ({ nameCollection, id }, { rejectWithValue }) => {
    try {
      const folderRef = ref(storage, `files/${id}`);

      // Получаем список всех файлов в папке
      const files = await listAll(folderRef);
      console.log(files);
      // Удаляем каждый файл в папке
      if (files.items.length > 0) {
        await Promise.all(
          files.items.map(async (fileRef) => {
            await deleteObject(fileRef);
          })
        );
      }

      await deleteDoc(doc(db, nameCollection, id));

      notify(
        "success",
        language === "en"
          ? "The lesson was successfully deleted"
          : "Урок успішно видалено"
      );

      return id;
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const updateScheduleByIdThunk = createAsyncThunk(
  "lessonsWith /updateById",
  async ({ nameCollection, id, updateValue }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, nameCollection, id);

      await updateDoc(docRef, updateValue);

      notify(
        "success",
        language === "en"
          ? "The lesson has been updated successfully"
          : "Урок успішно оновлено"
      );

      return updateValue;
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const uploadMaterialsThunk = createAsyncThunk(
  "lessonsWithJillMaterials /uploadFiles",
  async (
    { data, setLoadingProgress, id, lessonMaterials },
    { rejectWithValue }
  ) => {
    try {
      if (data.length === 0) return;
      console.log(data);
      const storage = getStorage();
      const uploadPromises = [];

      await data.forEach((file, index) => {
        const imageRef = ref(storage, `files/${id}/` + file.name);
        const uploadTask = uploadBytesResumable(imageRef, file);
        const uploadPromise = new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

              setLoadingProgress((prevState) => {
                const updatedProgress = [...prevState];
                updatedProgress[index] = { index, progress };
                return updatedProgress;
              });

              switch (snapshot.state) {
                case "paused":
                  // console.log("Upload is paused");
                  break;
                case "running":
                  // console.log("Upload is running");
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
              reject(error);
            },
            () => {
              // Upload completed successfully, now we can get the download URL
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                if (file.type === "application/pdf") {
                  resolve({ pdf: downloadURL, name: file.name });
                } else {
                  resolve({ images: downloadURL, name: file.name });
                }
              });
            }
          );
        });
        uploadPromises.push(uploadPromise);
      });

      const uploadResults = await Promise.all(uploadPromises);

      const docRef = doc(db, collectionDb.lessonsWithJill, id);

      await updateDoc(docRef, {
        materials: lessonMaterials
          ? [...lessonMaterials, ...uploadResults]
          : uploadResults,
      });

      notify(
        "success",
        language === "en"
          ? "Materials added successfully"
          : "Матеріали додано успішно"
      );

      return {
        materials: lessonMaterials
          ? [...lessonMaterials, ...uploadResults]
          : uploadResults,
      };
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFileByNameThunk = createAsyncThunk(
  "lessonsWith/deleteByName",
  async ({ name, id, nameCollection, updateValue }, { rejectWithValue }) => {
    try {
      if (!name) return;

      const fileRef = ref(storage, `files/${id}/${name}`);

      await deleteObject(fileRef);

      const docRef = doc(db, nameCollection, id);

      await updateDoc(docRef, updateValue);

      notify(
        "success",
        language === "en"
          ? "The file was successfully deleted"
          : "Файл успішно видалено"
      );

      return updateValue;
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const addCommentByIdThunk = createAsyncThunk(
  "lessonsWith/addComment",
  async ({ nameCollection, id, updateValue }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, nameCollection, id);

      await updateDoc(docRef, updateValue);

      notify(
        "success",
        language === "en"
          ? "Comment added successfully"
          : "Коментар успішно додано"
      );

      return updateValue;
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);
