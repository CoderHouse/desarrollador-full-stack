(function(){
  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyBD0565LqTll_ntUyK0XcgYvQKBc-8t3Wo",
    authDomain: "fullstack-a32e2.firebaseapp.com",
    databaseURL: "https://fullstack-a32e2.firebaseio.com",
    projectId: "fullstack-a32e2",
    storageBucket: "fullstack-a32e2.appspot.com",
    messagingSenderId: "431996955044"
  };
  firebase.initializeApp(config);
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const txtTitle = document.getElementById('txtTitle');
  const txtSummary = document.getElementById('txtSummary');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const form = document.getElementById('form');
  const list = document.getElementById('postList');
  const btnAddPost = document.getElementById('btnAddPost');

  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, pass).catch(e => console.log(e.message));
  });

  btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, pass).catch(e => console.log(e.message));
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  btnAddPost.addEventListener('click', e => {
      const post = dbRefPosts.push();
      post.set({title: txtTitle.value, summary: txtSummary.value});
  });

  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      form.classList.add('hide');
      btnLogout.classList.remove('hide');
    } else {
      form.classList.remove('hide');
      btnLogout.classList.add('hide');
    }
  });

  const dbRefPosts = firebase.database().ref().child('posts');


  dbRefPosts.on('child_added', snap => {
    const li = document.createElement('li');
    li.innerText = snap.val().title + ': ' + snap.val().summary;
    list.append(li);
  });

})();
