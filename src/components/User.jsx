import React from "react";

export default function User(props){

    const {id,email,first_name,last_name,avatar} = props

    return (
       
                
   <div className="flow-root max-w-md mx-auto">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-16 h-16 shadow-lg rounded-full" src={avatar} alt={first_name}/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {first_name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {email}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        Id - {id}
                    </div>
                </div>
            </li>
            
            
        </ul>
   </div>

        
    )
}