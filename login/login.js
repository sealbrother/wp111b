let main = document.querySelector('#main')

let pages=
  {
    '#home':
    '這裡是可切換畫面首頁喔',
    '#login':
    '登入',
    '#logout':
    '登出',
    '#signup':
    '註冊',
  }

window.onhashchange = function()
{
  let hash =window.location.hash
  main.un =pages[hash]
}