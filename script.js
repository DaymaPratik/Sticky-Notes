const addbtn = document.querySelector('#submit-btn');
const titleIp = document.querySelector('#input-heading');
const noteIp = document.querySelector('#notes');
const notesResultBox=document.querySelector('#notes-result-box');
const noteBgColorIp=document.querySelector('#note-color');







addbtn.addEventListener('click', (e) => {
    showData();
    e.preventDefault();
})



function showData() {
    if(titleIp.value === "" && noteIp.value ===""){
        alert("Please Enter valid details")
        return;
    }
    if(titleIp.value === ""){
        alert("Please Enter valid title")
        return;
    }
    if( noteIp.value ===""){
        alert("Please Enter valid notes")
        return;
    }
    
    
    let notesCard=document.createElement('div');
    notesResultBox.appendChild(notesCard);
    notesCard.classList.add('notes-card');
    notesCard.innerHTML=`
    <div id="notes-title-op" class="rounded-[10px] border-2 border-black w-[100%] min-[900px]:text-[20px] min-[900px]:p-[7px] text-[15px] p-[5px] text-center font-bold my-[10px]">${titleIp.value}</div>
    <div id="notes-output" class="rounded-[10px] border-2 border-white w-[100%] min-[900px]:text-[20px] min-[900px]:p-[7px] text-[10px] p-[5px] my-[15px] bg-[${noteBgColorIp.value}]">${noteIp.value}</div>
    <button  class="border-2 border-black notes-delete-btn p-[7px] text-[20px] block rounded-[10px] hover:bg-black hover:text-white transtition duration-200 ease-in mx-auto my-[10px]">Delete</button> `;
    const deletebtn=notesCard.querySelector(".notes-delete-btn");
    deletebtn.addEventListener('click',(e)=>{
    notesCard.remove();
    e.preventDefault();
})
   
}
