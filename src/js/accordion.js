document.querySelectorAll('.question').forEach(question => {

    question.addEventListener('click', ()=>{
    
    const arrow= question.lastElementChild.classList
    question.classList.toggle('border-b-0');
    arrow.toggle('rotate-180');
    arrow.toggle('text-white');
    arrow.toggle('text-black');
    arrow.toggle('bg-secondary_lighten');
    arrow.toggle('bg-black');

    const answer= question.nextElementSibling;

    answer.classList.toggle('overflow-hidden');
    answer.classList.toggle('h-0');
    answer.classList.toggle('opacity-0');
    answer.classList.toggle('border-t');
    answer.classList.toggle('border-dashed');

 })
})

