const firebaseConfig = {
  apiKey: "AIzaSyDf7OhUXoSysjitp5MEu6J-PHmRcgMWeTc",
  authDomain: "contactform-gymmi.firebaseapp.com",
  databaseURL: "https://contactform-gymmi-default-rtdb.firebaseio.com",
  projectId: "contactform-gymmi",
  storageBucket: "contactform-gymmi.appspot.com",
  messagingSenderId: "581947519209",
  appId: "1:581947519209:web:09612ab1bb38e84a754078"
};

//   initialize firebase
  firebase.initializeApp(firebaseConfig);

  // refrence your database
  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener("submit" , submitform);

  function submitform(e){
    e.preventDefault();

    var emailaddress = getElementVal('email');

    saveMassages(email);

  }

const saveMassages  = (email) =>{
   var newcontactForm = contactFormDB.push();

   newcontactForm.set({
    emailaddress : email,
    
   })
};

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }

  