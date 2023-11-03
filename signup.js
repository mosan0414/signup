var users = []; // 가입한 회원 정보를 저장할 배열

document.getElementById('checkDuplicate').addEventListener('click', function() {
    var inputUsername = document.getElementById('username').value;

    if (users.some(user => user.username === inputUsername)) {
        document.getElementById('result').textContent = '중복된 아이디입니다.';
    } else {
        document.getElementById('result').textContent = '사용 가능한 아이디입니다.';
    }
});

document.getElementById('submit').addEventListener('click', function() {
    var inputUsername = document.getElementById('username').value;
    var inputPassword = document.getElementById('password').value;
    var confirmPassword = document.getElementById('check-password').value;

    if (users.some(user => user.username === inputUsername)) {
        alert('중복된 아이디입니다. 다른 아이디를 선택하세요.');
    } else if (inputPassword !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다. 다시 확인하세요.');
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
