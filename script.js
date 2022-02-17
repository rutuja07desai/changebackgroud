const colors=["orange", "red","#cccecc","yellow","green","aqua","silver","gold"]

function changeColor(){
    const colorIx=parseInt(Math.random()*colors.length);
    document.body.style.background=colors[colorIx]
}