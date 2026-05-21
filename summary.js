function showInfo() {
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(function () {
        toast.style.display = 'none';
    }, 1200);
}