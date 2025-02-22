document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const divider = item.querySelector('.faq-divider');

        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isOpen = answer.classList.contains('open');

            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('open');
                ans.style.maxHeight = '0';
                ans.style.opacity = '0';
            });

            document.querySelectorAll('.faq-divider').forEach(div => {
                div.style.width = '0';
                div.style.opacity = '0';
            });

            if (!isOpen) {
                answer.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.opacity = '1';
                
                divider.style.width = '75%';
                divider.style.opacity = '1';
            }
        });
    });
});