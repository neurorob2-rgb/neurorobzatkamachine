const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('[data-product]').forEach(link=>{link.addEventListener('click',()=>{const product=link.dataset.product;link.href='https://wa.me/919313971693?text='+encodeURIComponent(`Hello NeuroRob Team,\n\nI am interested in your ${product} and would like to receive complete product details, technical specifications, pricing, warranty information, and delivery details.\n\nPlease assist me with the best option for my requirements.\n\nThank you.`);link.target='_blank';link.rel='noopener';});});
