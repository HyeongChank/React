
const MyDiv2 = () => {
    console.log('App.js');
    const myName = '김형찬';
    const myGit = 'https://github.com/HyeongChank' ;
    console.log(myName);
    return (
        <div>
            <p>{myName}</p>
            <p>Github :  <a 
            className="App-link"
            href={myGit}>{myGit}</a></p>


        </div>
    );
}

export default MyDiv2;
