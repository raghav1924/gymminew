let con=true;
function showBottomMenu(){
    // alert("dvdsv");
    // con!=con;
    // alert(con);
    var bottom=document.getElementById('bottom');
    if(con==true){
        con=false;
        bottom.style.display="inline"
        bottom.style.animation="menuAnimationopen 300ms ease-in-out forwards";
    }else{
        con=true;
        bottom.style.animation="menuAnimationclose 300ms ease-in-out forwards";
        setTimeout(() => {
            bottom.style.display="none"
        }, 300)
    }


  }