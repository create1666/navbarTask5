let loginBtn = document.querySelector('.nav_btn')
let navLink = document.querySelectorAll('.a_link_container')
console.log(loginBtn)

    loginBtn.addEventListener('click', () =>{
           navLink.forEach(item => {
               item.classList.toggle('active')
           });
    })

console.log('This is used to checkout how branches work')