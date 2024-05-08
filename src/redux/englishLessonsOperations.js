import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const localStor = JSON.parse(localStorage.getItem("persist:basicSettings"));

const someThingWrongAlarm = () => {
  notify(
    "error",
    localStor.language ?? "en" === "en"
      ? "Something went wrong, please try again later"
      : "Щось пішло не так, спробуйте пізніше"
  );
};

import { db } from "../../firebaseConfig";
import { notify } from "../components/AlertComponent/notify";

export const getScheduleThunk = createAsyncThunk(
  "lessonsWithJillSchedule/get",
  async (nameCollection, { rejectWithValue }) => {
    try {
      const response = await getDocs(collection(db, nameCollection));

      const scheduleArr = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return scheduleArr;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addScheduleThunk = createAsyncThunk(
  "lessonsWithJillSchedule/add",
  async ({ nameCollection, data }, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, nameCollection), data);

      if (!docRef.id) {
        throw new Error("Failed to add document to the collection");
      }
      notify(
        "success",
        localStor.language ?? "en" === "en"
          ? "Lesson added successfully"
          : "Урок додано успішно"
      );

      return { ...data, id: docRef.id };
    } catch (error) {
      someThingWrongAlarm();
      return rejectWithValue(error.message);
    }
  }
);

export const getScheduleByIdThunk = createAsyncThunk(
  "lessonsWithJillSchedule/gethById",
  async ({ nameCollection, currentId }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, nameCollection, currentId);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        notify(
          "error",
          localStor.language ?? "en" === "en"
            ? "Information about the lesson was not found"
            : "Інформація про урок не знайдена"
        );
      }
    } catch (error) {
      someThingWrongAlarm();

      return rejectWithValue(error.message);
    }
  }
);

export const deleteScheduleByIdThunk = createAsyncThunk(
  "lessonsWithJillSchedule /deleteById",
  async ({ nameCollection, id }, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, nameCollection, id));

      notify(
        "success",
        localStor.language ?? "en" === "en"
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
  "lessonsWithJillSchedule /updateById",
  async ({ nameCollection, id, updateValue }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, nameCollection, id);

      await updateDoc(docRef, updateValue);

      notify(
        "success",
        localStor.language ?? "en" === "en"
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
