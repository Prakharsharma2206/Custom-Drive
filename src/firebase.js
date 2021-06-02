import firebase from 'firebase'


const firebaseConfig = {
Your configurations here
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db = firebase.firestore()


  export { auth , provider , storage ,db}