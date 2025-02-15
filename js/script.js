 // Document and  Window  - width va height lar bilan ishlash
 const box = document.querySelector('.box');
 btn = document.querySelector("button")
     // agar css da border-box berilsa scrol ni uznuligi olmaydi
     //  const width = box.clientWidth;
     //  const height = box.clientHeight;

 // offsetWidth va offsetHeight - biz css da qanday  height va width bergan bolsak, shuni ko'rsatadi 
 //  const width = box.offsetWidth
 //  const height = box.offsetHeight

 // scrolWidth va scrolHeight scrol elementimizni to'liq height va width ini bilmoqchi bo'lsak
 //  const width = box.scrollWidth;
 //  const height = box.scrollHeight

 //  btn.addEventListener('click', () => {
 //      box.style.height = box.scrollHeight + "px" // btn click qilganda boxni height iga elementni umuimiy height i qoshilib, scroolni yoyib berayuapti
 //      console.log(box);
 //  })

 // # elementimizni qanday positionda joylashganligini bilish.(elementi umumiy malumotlarini korsatib beradi:)
 // desktop windowidagi (Computed) style orqali elementimizdagi  bizga kk malumiotlarni olishimiz mn
 console.log(box.getBoundingClientRect());


 //desktop  window da; window.scrollBy(0,500) y (height) va window.scrollTo(0,700) x(width) o'qi boyicha  herakatlantirib beradi:

 // desktop da window va document bor. ular orqali height va widthlar bn ishlay olamiz
 // window -  umumiy ekran // document - windowdagi elementdir. biz ko'rib turgan malumot