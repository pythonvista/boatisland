import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDVumJKx-5cH742cWrF-pFuusP4zk4CbTQ',
  authDomain: 'kinapp-32d0b.firebaseapp.com',
  projectId: 'kinapp-32d0b',
  storageBucket: 'kinapp-32d0b.appspot.com',
  messagingSenderId: '1077209809427',
  appId: '1:1077209809427:web:79d1834ec03371c52fb5e6',
};
let app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// create account function for new users
function signup() {
  this.start = (email, password) => {
    let data = createUserWithEmailAndPassword(auth, email, password);
    return data;
  };
}
let createAccount = new signup();
// end create account function for new users

function signin() {
  this.start = (email, password) => {
    let data = signInWithEmailAndPassword(auth, email, password);
    return data;
  };
}
let login = new signin();
// end create account function for new users

// set the value of users in a database
function updateSingleDoc() {
  this.update = (dbname, userId, arrayinfo) => {
    let data = setDoc(doc(db, dbname, userId), arrayinfo);
    return data;
  };
}
let docUpate = new updateSingleDoc();
// set the value of users in a database


// update the value of a document  in an exising database
function updateExitingDoc() {
  this.update = (dbname, userId, arrayinfo) => {
    const selectedUser = doc(db, dbname, userId);
    return updateDoc(selectedUser, arrayinfo)
  };
}
let UpdateADoc = new updateExitingDoc();
// update the value of a document  in an exising database

// log out function in the database
function logOut() {
  let data = signOut(auth);
  return data;
}
// log out function in the database



// get the value of a single document realtime
let selectedUser = (dbname, user_id)=>{
   let User = doc(db, dbname, user_id);
   return User
}
// used with snapshot  onSnapshot(selectedUser("users", curUser), (doc) => {})
// gets the value of a single user by its id


// get the value of collection of documents 
let alluser = (dbname)=>{
  let User = collection(db, dbname);
  return User
}

export {
  alluser,
  app,
  auth,
  createAccount,
  docUpate,
  getAuth,
  getDownloadURL,
  getStorage,
  login,
  logOut,
  onSnapshot,
  ref,
  selectedUser,
  UpdateADoc,
  uploadBytesResumable,
};

// upload(file) {
//   const storage = getStorage(app);
//   const metadata = {
//     contentType: 'image/jpeg'
//   };
//   // const file = './images.jpeg'
//   // Upload file and metadata to the object 'images/mountains.jpg'
//   const storageRef = ref(storage, 'kinapp/userprofile/' + file.name);
//   const uploadTask = uploadBytesResumable(storageRef, file, metadata);

//   // Listen for state changes, errors, and completion of the upload.
//   uploadTask.on('state_changed',
//     (snapshot) => {
//       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log('Upload is ' + progress + '% done');
//       switch (snapshot.state) {
//         case 'paused':
//           console.log('Upload is paused');
//           break;
//         case 'running':
//           console.log('Upload is running');
//           break;
//         case 'done':
//           console.log('Upload is done');
//           break
//       }
//     },
//     (error) => {
//       console.log(error.code)
//       // A full list of error codes is available at
//       // https://firebase.google.com/docs/storage/web/handle-errors
//       switch (error.code) {
//         case 'storage/unauthorized':
//           alert('storage/unauthorized')
//           // User doesn't have permission to access the object
//           break;
//         case 'storage/canceled':
//            alert('storage/canceled')
//           // User canceled the upload
//           break;

//         // ...

//         case 'storage/unknown':
//           // Unknown error occurred, inspect error.serverResponse
//           break;
//       }
//     },
//     () => {
//       // Upload completed successfully, now we can get the download URL
//       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         console.log('File available at', downloadURL);
//         UpdateADoc.update("users", this.uid, { img: downloadURL }).then(()=>{
//           alert("image upladesd ")
//         })
//       });
//     }
//   );
// }

// onSnapshot(alluser("users"), (snapshot) => {
//   this.Users = []
//   snapshot.forEach((doc) => {
//     this.Users.push({ ...doc.data(), id: doc.id });
//   });
// })
// end of get the value of all documents or user
// getDocs(usersDetail)
// .then((snapshot)=>{
//   let users = []
//   snapshot.forEach((doc)=>{
//     users.push({...doc.data(), id: doc.id})
//   })
//   console.log(users)
// }).catch((err)=>{
//   console.log(err)
// })
// Storage areaa