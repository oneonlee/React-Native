function checkEmail(email) {
    // 이메일 정규식
    var emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!emailRule.test(email)) {
        console.log("이메일이 아닙니다");
    } else {
        console.log("이메일이 맞습니다");
    }
}
