import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const writeDataToFirestore = async (nameCollection, data) => {
  try {
    const docRef = await addDoc(collection(db, nameCollection), data);

    const updateId = doc(db, nameCollection, docRef.id);

    await updateDoc(updateId, {
      id: docRef.id,
    });
    return "success";
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const getDataToFirestore = async (nameCollection, setActualSchedul) => {
  try {
    const response = await getDocs(collection(db, nameCollection));

    const scheduleArr = [...response.docs.map((doc) => doc.data())];
    await setActualSchedul(scheduleArr);
    return "getData is success";
  } catch (e) {
    console.error("Error get documents: ", e);
    throw e;
  }
};

export const deleteDataToFirestore = async (nameCollection, id) => {
  try {
    await deleteDoc(doc(db, nameCollection, id));
    return "delete";
  } catch (e) {
    console.error("Error delete documents: ", e);
    throw e;
  }
};
