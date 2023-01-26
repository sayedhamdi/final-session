import { SideBar } from "../components";
import { useEffect ,useState} from "react";

export default function SignUp(){
    // react Hook 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [todos,setTodos]  = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(err => console.error(err));
    },[])



    function submitForm(){
        let user = {
            username,
            email,
            password
        }
        fetch('http://localhost:8000/signup',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-type':'application/json; charset=UTF-8',
            }
        }).then(response => response.json())
            .then(data => console.log(data))
            console.log("form submitted")
    }
    return (
        <div>
        <SideBar />
        <h1>this is the signup page</h1>
        <ul>
            <li>username : {username}</li>
            <li>email : {email}</li>
            <li>password : {password}</li>
        </ul>
        <div style={{display:"flex",flexDirection:"column"}}>
        <input type="text" name="" id="" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="email" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={submitForm}>sign up</button>
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
        </div>
        </div>
    )
}