import React from 'react';
import { BiPencil } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsCheckLg } from "react-icons/bs"
import { GiCancel } from "react-icons/gi"
import axios from 'axios';

import './style.css';

export default function Todo({ title, isDone, id }) {
    const [done, setDone] = React.useState(false);
    const [change, setChange] = React.useState(false)
    const [inputChange, setInputChange] = React.useState("")

    React.useEffect(() => {
        if (isDone) {
            setDone(true)
        }
        if (title) {
            setInputChange(title)
        }
    },[])

    const ChangeTodo = async(id) => {
        const res = await axios.put("http://localhost:9000/todos/" + id, {
            title: inputChange,
            isDone: done
        })
        setChange(!change)
        console.log(id)
    }

    return (
        <div className='border-4'>

            {!change ? <p className={done ? 'red' : ''}>{title}</p> :
                <>
                    <input type="text"
                    placeholder=  {title}
                        className={`qwer ${done ? 'red' : ''}`}
                        onChange={(event) => setInputChange(event.target.value)}
                        value={inputChange} />
                    <button className='gi' onClick={() => setChange(!change)}><GiCancel /> </button>
                </>

            }

            <div className='div-10'>
                <input type='checkbox' checked={done} onClick={() => setDone(!done)} />
                < button className='btn' onClick={() => !change ? setChange(!change) : ChangeTodo(id)}>

                    {change ? <BsCheckLg /> : <BiPencil />}


                </button>
                <RiDeleteBin5Line />
            </div>

        </div>
    )
}

