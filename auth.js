const btn = document.querySelector("#start");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();

  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    //fields
    // var indexNo = obj.indexNo;
    // var firstName = obj.firstName;
    // var lastName = obj.lastName;
    // var emailAddress = obj.emailAddress;
    //console.log(emailAddress);

    auth.createUserWithEmailAndPassword(emailAddress, indexNo).then((cred) => {
      return db
        .collection("userData")
        .doc(cred.user.uid)
        .set({
          //add feilds
          //   firstName: firstName,
          //   lastName: lastName,
        })
        .then(() => {
          console.log(`${indexNo} successfully added`);
          auth.signOut().then(() => {
            console.log(`${indexNo} successfully signed out`);
          });
        });
    });
    await delay(5000);
    console.log("------------------");
  }
});
