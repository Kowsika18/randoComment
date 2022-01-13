let userList = {
  "users" : [
    {
      "email" : "test@gmail.com",
      "pass" : "test@123",
      "secret" : "0987654321"
    }
  ]
}

let userComments = {
  "comments" : [
    {
      "email" : "test@gmail.com",
      "comment" : "Test Message changed"
    }
  ]
}

let commentAdded = 1;


const _commentAdder = () => {
  let userMail = window.localStorage.getItem('email');
  let userCommentIn = document.getElementById('userInput').value;

  if(userCommentIn != "" || userCommentIn != " ") {
    userComments["comments"].push({email : window.localStorage.getItem('email'), comment : document.getElementById('userInput').value})
    commentAdded += 1;
    _autoReader();
  }
}

const _autoReader = () => {
  let count = userComments.comments.length;
  if(count == commentAdded) {
    _commentGenerator();
  }
}

const _commentGenerator = () => {
  const updateSegment = document.getElementById('update-segment');

  for(let i = 0; i< userComments.comments.length; i++) {
    const updateSection = document.createElement('div');
    updateSection.className = 'update-section';

    let userMail = document.createElement('div');
    userMail.className = 'mail-id';
    userMail.innerText = userComments.comments[i].email;

    let userComment = document.createElement('div');
    userComment.className = 'mail-comment';
    userComment.innerText = userComments.comments[i].comment;


    updateSection.appendChild(userMail);
    updateSection.appendChild(userComment);

    updateSegment.appendChild(updateSection);
  }
}


const _signUp = () => {

  const emailField = document.getElementById('signinEmail').value;
  const emailPass = document.getElementById('signinPass').value;
  const secretField = document.getElementById('secretField').value;
  let userListCount = (userList.users).length;

  if(userListCount != 0 ) {
    if(emailField != "" || emailField != " " || emailPass != "" || emailPass == " ") {
      window.localStorage.setItem("email", emailField);
      window.localStorage.setItem("pass", emailPass);
      userList["users"].push({_id : userListCount, email : emailField, pass : emailPass, secret : secretField});
      _navSignIn();
    }
    
  } else {
    console.log('User Not Created due to some reason');
  }
}



const _navSignUp = () => {
  window.location.href = "/signup";
}


const _navSignIn = () => {
  window.location.href = "/";
}

const _navDash = () => {
  window.location.href = "/dashboard";
}

const _navForPass = () => {
  window.location.href = "/forgot";
}

const _signIn = () => {

  const emailField = document.getElementById('signinEmail').value;
  const emailPass = document.getElementById('signinPass').value;

  const emailSto = window.localStorage.getItem('email');
  const passSto = window.localStorage.getItem('pass');


  for(let i = 0; i< userList.users.length; i++) {
    if(emailField == userList.users[i].email  && emailPass == userList.users[i].pass
      || emailField == emailSto && emailPass == passSto) {
      _navDash();
    } else {
      window.alert("User Not Found");
    }
  }
}