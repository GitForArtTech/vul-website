function clickBtn() {
  if ($("#name").val() === "") alert("尚有資料未填");
  else {
    axios
      .post("http://localhost:3000/api/login", {
        name: $("#name").val(),
        password: $("#password").val(),
      })
      .then((res) => {
        if (res.data) $("#msg").val(res.data.message);
        else if (JSON.stringify(res.data) == "false") alert("帳號密碼輸入錯誤");
        else alert("login failed");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

function clickInjectBtn() {
  axios
    .post("http://localhost:3000/api/injectlogin", {
      name: $("#name").val(),
      password: $("#password").val(),
    })
    .then((res) => {
      //alert(JSON.stringify(res.data.id[1]));
      if (res.data) {
        let userId = res.data.id;
        let userName = res.data.name;
        let userMsg = res.data.message;

        //alert(userId);

        $("#msg").val(
          "登入ID: " +
            userId +
            "\n\r" +
            "登入帳號: " +
            userName +
            "\n\r" +
            "Message: " +
            userMsg +
            "\n\r"
        );
      } else alert("帳號密碼輸入錯誤");
    })
    .catch(function (error) {
      console.log(error);
    });
}
