const openBtn = document.getElementById('openBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const progressFill = document.getElementById('progressFill');

let progressInterval = null;  

function startProgress() {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
    
    let percent = 0;
    const duration = 3000; 
    const stepTime = 30;
    const stepPercent = (stepTime / duration) * 100;
    
    progressInterval = setInterval(() => {
        percent += stepPercent;
        if (percent >= 100) {
            percent = 100;
            progressFill.style.clipPath = 'inset(0 0 0 0)';
            clearInterval(progressInterval);
            progressInterval = null;
        } else {
            progressFill.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
            
        }
    }, stepTime);
}

openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
    startProgress();         
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
    progressFill.style.width = '0%'; 
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
        progressFill.style.width = '0%';
    }
});

