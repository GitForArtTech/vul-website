

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
// function clickTestBtn() {
//     axios
//         .post("http://127.0.0.1:8787/test/login", {})
//         .then((res) => {
//             if (res.data) $("#msg").val(res.data.message);
//             else alert("login failed");
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }
function clickInjectBtn() {
    axios
        .post("http://localhost:3000/api/injectlogin", {
            name: $("#name").val(),
            password: $("#password").val(),
        })
        .then((res) => {
            if (res.data) $("#msg").val(res.data.message);
            else alert("帳號密碼輸入錯誤");
        })
        .catch(function (error) {
            console.log(error);
        });
}
