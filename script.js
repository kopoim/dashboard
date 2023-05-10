const asideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close_btn");
const themeToggler = document.querySelector(".theme-toggler");

   // show sidebar
menuBtn.addEventListener('click', () =>{
    asideMenu.style.display = 'block';
})

 // close sidebar
closeBtn.addEventListener('click', () =>{
    asideMenu.style.display = 'none';
})

 // change theme
 themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle("dark-theme-variables");

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

 // fill orders in table
// Orders.forEach(order =>{
//     const tr = document.createElement('tr');
//     trContent = '
               
//                 <td>${order.productName}</td>
//                 <td>${order.productNumber}</td>
//                 <td>${order.shipping}</td>
//                 <td>Detail</td>

//                 ';
   
// })