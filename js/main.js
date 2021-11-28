const menu_list = document.querySelector('.menu_list');
const toggle_btn = document.querySelector('.toggle_btn');
const copyright_content = document.querySelector('.copyright_content');
const Full_Year = new Date().getFullYear();

toggle_btn.addEventListener('click',()=>{
    menu_list.classList.toggle('active');
});

copyright_content.innerHTML = `&#169; Copyrights ${Full_Year} <a target=${'_blank'} href=${'https://github.com/thejaved/'}>thejaved</a> - All Rights Reserved.`;