import React,{useState,useEffect} from 'react';
import { SideBar } from '../components';

function Home() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        console.log("Executed when the component is mounted")
    },[])

    useEffect(()=>{
        console.log("component is updated")
        
    },[counter])

    return (
        <div>
        <SideBar />
        <h1>this is the homepage</h1>
        <div>{counter}</div>
        <button onClick={()=>setCounter(counter+1)}>Counter</button>
        </div>
    );
}

export default Home;