const Synch =()=>{
    const funcA =() =>{
        console.log("함수 명령");
    }
    console.log("명령1");
    console.log("명령2");
    funcA();
    setTimeout(() => {
        console.log("타임아웃 명령1")
        setTimeout(() => {
            console.log("타임아웃 명령4")
        }, 100);
    }, 1000);
    setTimeout(() => {
        console.log("타임아웃 명령2")
    }, 50);
    setTimeout(() => {
        console.log("타임아웃 명령3")
    }, 100);
    console.log("명령3");
    return(
        <>
        </>
    )
}
export default Synch;
