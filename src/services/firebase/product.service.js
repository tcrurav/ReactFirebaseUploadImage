import { push, ref } from "firebase/database";
import firebaseService from "./firebase.config.js";
import { getDownloadURL, uploadBytes, ref as storageRef } from "firebase/storage";

const uploadProductImage = (image) => {
  console.log(image);
  const myStorageRef = storageRef(firebaseService.storage, `products/algo`);
  return uploadBytes(myStorageRef, image);
}

const getProductURL = (snapshotUrl) => {
  return getDownloadURL(snapshotUrl);
}

const addProduct = (productName, productUrl) => {
  const dbRef = ref(firebaseService.db, `products`);
  return push(dbRef, {
    name: productName,
    url: productUrl
  });
}

export default {
  uploadProductImage,
  addProduct,
  getProductURL
}