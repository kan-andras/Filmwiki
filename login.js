document.addEventListener( 'mousemove', (event) => {
    if (isUsernamePasswordValid()){
        return;
    }
    
    escape(event);
})