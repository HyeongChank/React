
const MyClock = () =>{
    const d = new Date().toLocaleTimeString();
    return(  //반드시 return 해야 함
        <div>현재 시간 : {d}</div>
    );
}
export default MyClock;   //반드시 export 해야함