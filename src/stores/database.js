import {
  collection,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore/lite";
import { defineStore } from "pinia";
import { db } from "../../firebaseConfig";

export const userDatabaseStore = defineStore("database", {
  state: () => {
    return {
      documents: [],
      destinos: [],
    };
  },
  actions: {
    // Get all documents from a collection
    async getDocuments(collectionName) {
      this.documents = [];
      const q = query(collection(db, collectionName));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.documents.push(doc.data());
      });
    },
    // Get document by key
    async getDocumentByKey(collectionName, key, value) {
      const q = query(collection(db, collectionName), where(key, "==", value));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        this.destinos = doc.data().destinos;
      });
    },
  },
});
