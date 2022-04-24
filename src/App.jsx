import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/features/userSlice";
import User from "./components/User";

export default function App() {
  const {isLoading, userInfo} = useSelector((state)=>state)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUser())
    console.log(userInfo)
  }, [])
  return (
    <>
    <h1 className="mx-auto max-w-md">Welcome to Redux Async Users Project</h1>
    <p className="mx-auto max-w-md">Redux thunk is used with redux-toolkit for this project</p>

    {isLoading && <h1>Loading...</h1>}
    <h5 className="text-xl mx-auto max-w-md font-bold leading-none text-gray-900 dark:text-white">Latest Users</h5>

    {userInfo.map(item=>(
      
          <User key={item.id} {...item} />
     
    ))}
    
  </>
  )
  
}
  

