const cats = ['https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg', 'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg', 'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg', 'https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8', 'https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all', 'https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU', 'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU', 'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU', 'https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg', 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg', 'https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg', 'https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU'];

const list = document.querySelector('.list')
const markup = cats.map(item => `<li><img src="${item}" loading="lazy" alt="cat" width="300px"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta cumque quos, necessitatibus provident id perspiciatis dolor omnis dignissimos minus aspernatur magnam incidunt corrupti fugiat quo maiores quia suscipit nihil facere.
// Possimus at quod vero eveniet soluta odio enim harum magni, temporibus blanditiis voluptatum aliquid tempora. Excepturi quo quos ratione, eveniet impedit quasi nostrum quia error modi optio illo vel dolorum?
// Doloremque ut dolor ipsum non illo quibusdam corporis vitae magni eveniet iure. Quia reiciendis sunt dolore delectus quo numquam, ipsa at architecto. Quasi incidunt eum reiciendis tenetur voluptatum sequi cupiditate!
// Reiciendis vitae aut quibusdam obcaecati consequuntur in aliquam magni molestias deleniti ipsam non laboriosam odio magnam nesciunt, iure fugit est possimus sit porro nobis? Corrupti nostrum nam cumque dolore tempore!
// Omnis, nesciunt illum quas dolorem, vel recusandae quo corrupti corporis non debitis velit harum, expedita saepe itaque autem beatae earum neque fuga ducimus! Dolorem totam error eaque quia, nisi sit!</p> </li>`).join('');
// list.insertAdjacentHTML('beforeend', markup)

// document.addEventListener('scroll', _.debounce(onScroll, 300), {
//     trailing: false,
//     leading: false

// })
// let i = 0;
// function onScroll () {
// i+=1
// console.log(i)
// }

// const input = document.querySelector('input');
// input.addEventListener('input', onInput)
// function onInput(evt) {
// console.log(evt.target.value)
// }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
  
//     if(totalPrice > customerCredits) {
//       message = 'Insufficient funds!'
//     } else {
//       message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//     }
//     // Change code above this line
//     return message;
//   }
  
//   console.log(makeTransaction(5000, 10, 8000))
//   console.log(checkStorage(25, 30))
//   console.log(checkStorage(10, 10))
//   console.log(checkStorage(50, 5))

