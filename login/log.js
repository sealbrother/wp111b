function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
let main = document.querySelector('#main')

let pages = {
  '#login':`
  <h1>登入</h1>
  <input type="text" placeholder="帳號"/><br/>
  <input type="password" placeholder="密碼"/><br/>
  <p style="color:red;">Choose your gender</p>
<input type="radio" id="html" name="fav_language" value="男">
<label for="html">男</label>
<input type="radio" id="html" name="fav_language" value="女">
<label for="html">女</label>
<p style="color:red;">Choose your blood type</p>
<input type="radio" id="html" name="fav_language" value="A">
<label for="html">A</label>
<input type="radio" id="html" name="fav_language" value="B">
<label for="html">B</label>
<input type="radio" id="html" name="fav_language" value="O">
<label for="html">O</label>
<input type="radio" id="html" name="fav_language" value="AB">
<label for="html">AB</label>
<p style="color:red;">Choose your birthday</p>
<p><input type="date" placeholder="生日"/></p>
  <input type="button" value="登入"/><br/>
  `,
  '#logout':`
  <p>確定登出嗎?</p>
  <input type="submit" value="確定">
  <input type="submit" value="取消">
  `,
  '#signup':`
  <h1 style="color:blue;">註冊</h1>
<label for="fname">姓:</label>
<input type="text" id="fname" name="fname" value="">
<label for="lname">名:</label>
<input type="text" id="lname" name="lname" value="">
<p><input type="text" placeholder="帳號"/></p>
<p><input type="email" placeholder="email"/></p>
<p><input type="password" placeholder="密碼"/></p>
  `,
  '#home':`
  <h1>首頁</h1>
  <p>本網頁可以按功能表去切換畫面</p>
  `,
}
window.onhashchange = function () {
  let hash = window.location.hash
  main.innerHTML = pages[hash]
}
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}