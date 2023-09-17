let userName = prompt('당신의 이름은 무엇입니까?', '서유진');
let isUserNamecorrect = confirm(
  '당신의 이름이 ' + userName + '이(가) 맞습니까?'
);
if (isUserNamecorrect == true) {
  document.getElementById('user-name-goes-here').textContent =
    '환영합니다. ' + userName + '님.';
}
