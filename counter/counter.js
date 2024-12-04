const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const box = document.querySelector('.box')

count = 0 


function countdisplay(){
    box.textContent = count;
}
inc.addEventListener("click",()=>{
    count = count +1;
    countdisplay()

})

dec.addEventListener("click",()=>{
    if (count > 0){
        count = count -1;
    }
    countdisplay()
})