
//To get access
const likebutton=document.querySelector('.like-btn');
const unlikebutton=document.querySelector('.unlike-btn');

const likecount=document.querySelector('.like-count');
//console.log(likecount);
let likes=0;

likebutton.addEventListener('click', () =>{
    console.log("Like button clicked")
    likes++;
    likecount.innerHTML=`${likes} Likes`;
})

unlikebutton.addEventListener('click', () =>{
    console.log("Unlike button clicked");
    if(likes > 0){
    likes--;
    likecount.innerHTML=`${likes} Likes`;
    }
})
  