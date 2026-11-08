document.addEventListener("DOMContentLoaded",function(){
  var html=document.documentElement,bt=document.getElementById("btnTema");
  function tema(t){html.setAttribute("data-bs-theme",t);bt.innerHTML=t==="dark"?'<i class="bi bi-sun-fill"></i>':'<i class="bi bi-moon-stars-fill"></i>';bt.setAttribute("aria-label",t==="dark"?"Ganti ke mode terang":"Ganti ke mode gelap")}
  var s="light";try{s=localStorage.getItem("tema")||"light"}catch(e){}
  tema(s);
  bt.addEventListener("click",function(){var n=html.getAttribute("data-bs-theme")==="dark"?"light":"dark";tema(n);try{localStorage.setItem("tema",n)}catch(e){}});
  var nav=document.querySelector(".navbar");
  function cek(){nav.classList.toggle("scrolled",window.scrollY>30)}cek();window.addEventListener("scroll",cek);
  var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add("show");io.unobserve(x.target)}})},{threshold:.15});
  document.querySelectorAll(".reveal").forEach(function(el){io.observe(el)});
  document.querySelectorAll("img").forEach(function(i){i.addEventListener("error",function(){if(!i.dataset.f){i.dataset.f=1;i.src="images/placeholder.svg"}})});
  var f=document.getElementById("formKontak");
  if(f)f.addEventListener("submit",function(e){e.preventDefault();
    if(!f.checkValidity()){f.classList.add("was-validated");return}
    var t="Halo Rumpun Buket, saya "+f.nama.value.trim()+". "+f.pesan.value.trim();
    window.open("https://wa.me/6285762950895?text="+encodeURIComponent(t),"_blank","noopener");f.reset();f.classList.remove("was-validated")});
});
