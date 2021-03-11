const btn_share = document.querySelector('.btn');
const share_container = document.querySelector('.share-container');


btn_share.addEventListener('click',function(){
     share_container.classList.toggle('share-container-off')
})