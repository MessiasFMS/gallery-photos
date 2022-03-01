import { initializeApp} from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDyiRppHzJzyKjXw-N_buTOcKgICxEfvuo",
    authDomain: "gallery-photos-4a259.firebaseapp.com",
    projectId: "gallery-photos-4a259",
    storageBucket: "gallery-photos-4a259.appspot.com",
    messagingSenderId: "40028411881",
    appId: "1:40028411881:web:b4baf1c68fe60adc35dd78"
  };

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);

