var users = []; // 가입한 회원 정보를 저장할 배열
var isUsernameValid = false; // 아이디의 유효성 여부를 추적하는 변수

document.getElementById('checkDuplicate').addEventListener('click', function() {
    var inputUsername = document.getElementById('username').value;

    if (users.some(user => user.username === inputUsername)) {
        document.getElementById('result').textContent = '중복된 아이디입니다.';
        isUsernameValid = false;
    } else {
        document.getElementById('result').textContent = '사용 가능한 아이디입니다.';
        isUsernameValid = true;
    }
});

document.getElementById('password').addEventListener('input', function() {
    var password = document.getElementById('password').value;
    var passwordError = document.getElementById('password-error');

    if (!isUsernameValid) {
        passwordError.textContent = '먼저 아이디의 중복 여부를 확인해주세요.';
    } else if (password.length < 8) {
        passwordError.textContent = '비밀번호는 최소 8자 이상이어야 합니다.';
    } else if (!isStrongPassword(password)) {
        passwordError.textContent = '비밀번호는 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.';
    } else {
        passwordError.textContent = '';
    }
});

document.getElementById('submit').addEventListener('click', function() {
    var inputUsername = document.getElementById('username').value;
    var inputPassword = document.getElementById('password').value;
    var confirmPassword = document.getElementById('check-password').value;

    if (inputUsername.trim().length < 6) {
        alert('아이디는 6자리 이상이어야 합니다.');
    } else if (!isUsernameValid) {
        alert('아이디 중복 여부를 확인해주세요.');
    } else if (inputPassword.trim() === "") {
        alert('비밀번호를 입력해주세요.');
    } else if (inputPassword !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다. 다시 확인하세요.');
    } else if (password.length < 8 || !isStrongPassword(inputPassword)) {
        alert('비밀번호는 8자 이상이어야 하며, 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.');
    } else {
        alert('가입이 완료되었습니다.');

        // 회원 정보를 객체로 생성하여 배열에 추가
        var userInfo = {
            username: inputUsername,
            password: inputPassword
        };

        users.push(userInfo);

        // 여기에서 서버로 데이터를 전송하거나 다른 저장 방법을 구현할 수 있습니다.
    }
});

function isStrongPassword(password) {
    // 대문자, 소문자, 숫자, 특수문자 각각 한 글자 이상을 포함하는지 확인
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password);
}
