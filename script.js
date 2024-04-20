const addbtn = document.querySelector('#submit-btn');
const titleIp = document.querySelector('#input-heading');
const noteIp = document.querySelector('#notes');
const notesResultBox=document.querySelector('#notes-result-box');
const noteBgColorIp=document.querySelector('#note-color');
const dateOp=document.querySelector('#date-ip');
const form=document.querySelector('.form');


let notesArr=JSON.parse(localStorage.getItem('notes')) ?? [];
showData(notesArr);





form.addEventListener('submit', (e) => {
    notesArr.push({
      "Title": `${titleIp.value}`,
       "Notes":`${noteIp.value}`,
       "Color":`${noteBgColorIp.value}`,
       "Date":`${dateOp.value}`
    })
    localStorage.setItem('notes',JSON.stringify(notesArr));
    // console.log(notesArr);
    e.target.reset();
    showData(notesArr);
    e.preventDefault();
})



function showData(notesArr) {
    
    notesResultBox.innerHTML='';
    notesArr.forEach((item,i) => {
    
    let notesCard=document.createElement('div');
    notesResultBox.appendChild(notesCard);
    notesCard.classList.add('notes-card');
    notesCard.innerHTML=`
    <div id="notes-title-op" class="rounded-[10px] border-2 border-black w-[80%] mx-auto min-[900px]:text-[20px] min-[900px]:p-[7px] text-[15px] py-[5px] text-center font-bold my-[10px]">${item.Title}</div>
    <div id="notes-output" class="rounded-[10px] border-2 border-white font-semibold w-[100%] min-[900px]:text-[20px] min-[900px]:p-[14px] text-[13px] p-[10px] my-[15px]  bg-[${item.Color}] text-white">${item.Notes}</div>
    <div id="notes-date" class="rounded-[10px] border-2 border-black w-[80%] mx-auto min-[900px]:text-[20px] min-[900px]:p-[7px] text-[15px] py-[5px] text-center font-bold my-[10px]">Date:${item.Date}</div>
    <button  class="border-2 border-black notes-delete-btn p-[7px] text-[20px] block rounded-[10px] hover:bg-black hover:text-white transtition duration-200 ease-in mx-auto my-[10px]">Delete</button> `;

    const deletebtn=notesCard.querySelector(".notes-delete-btn");
    deletebtn.addEventListener('click',(e)=>{
    notesArr.splice(i,1);
    localStorage.setItem('notes',JSON.stringify(notesArr));
    showData(notesArr);
    e.preventDefault();
})
    });
    
   
}














































// if(titleIp.value === "" && noteIp.value ===""){
    //     alert("Please Enter valid details")
    //     return;
    // }
    // if(titleIp.value === ""){
    //     alert("Please Enter valid title")
    //     return;
    // }
    // if( noteIp.value ===""){
    //     alert("Please Enter valid notes")
    //     return;
    // }