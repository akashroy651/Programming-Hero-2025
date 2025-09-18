
// export default function ToDO({task}){
//     return(
//         <div>
//             <p> hello {task}</p>
//         </div>
//     )
// }


export default function ToDo({task, isDone}){
    if(isDone === true){
        return <li>Done: {task}</li>
    }
    else{
        return <li>panding: {task}</li>
    }
}

