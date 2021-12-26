console.log("Welcome to my profile");


const skillInfo=document.getElementById('skillInfo');
const progressbarrep=document.querySelectorAll('.progress-bar-rep');

function showProgress(){
    progressbarrep.forEach(progressBar=>{
        const value=progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width=`${value}%`;
    });
}


function hideProgress(){
    progressbarrep.forEach(p=>{
        p.style.opacity=0;
        p.style.width=0;
    })
}
window.addEventListener('scroll',()=>{
    const sectionPos=skillInfo.getBoundingClientRect().top;
    const screenPos=window.innerHeight;
    if(sectionPos<screenPos){
        showProgress();
    }else{
        hideProgress();
    }
});