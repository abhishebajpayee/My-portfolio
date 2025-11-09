document.getElementById('year').textContent = new Date().getFullYear();
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}
function fakeSend(e){
  e.preventDefault();
  document.getElementById('sent').style.display='block';
  setTimeout(()=>{document.getElementById('sent').textContent='Demo done — message not actually sent. Use email to contact.'},1200);
}
function openDemo(which){
  alert('Demo: '+which+' — frontend preview placeholder. Hosted demos or embed images can be added.');
}
function showCode(which){
  alert('Code: '+which+' — repository link placeholder. Main site code downloadable as index.html');
}
