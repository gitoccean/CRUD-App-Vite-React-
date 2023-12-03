import React, { useEffect, useState }  from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { readUser , deleteUser} from '../redux/Slice';
import { Link } from 'react-router-dom';


const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(readUser());
    }, []);
    
    const {users, loading} = useSelector((state)=> state.globalstore);
    console.log("alldata",users)

    const [count, setCount] = useState(0);
    
    const incrementCount = () => {
        setCount(count+1);
    }

    if (loading){
        return (<h2>Loading ....</h2>)
    }

    return (
        <div className='container mx-5 my-5'>
            <h1 className='font-size:1.87em font-sansarial text-center mt-5'>Crud App with JSON Server</h1>
            <Link to='/create' className='btn btn-success my-3'>Create +</Link>
            <Link to='/' className='btn btn-success my-3 ms-2'>All Passengers ({users.length})</Link>
            <table className='table'>
                <thead>
                <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Passport No.</th>
                        <th>Destination</th>
                        <th>Action</th>               
                </tr>
                </thead>
                <tbody>
                    { users && users.map((ele)=>(
                        <tr key={ele}>
                            <td>{incrementCount}</td>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.passport}</td>
                            <td>{ele.destination}</td>
                            <td>
                                <Link to={`/update/${ele.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button className='btn btn-sm btn-danger ms-2' onClick={()=>dispatch(deleteUser(ele.id))}>Delete</button>
                            </td>
                        </tr>
                    ))}                
                </tbody>
            </table>
            </div>
        )
    }

export default Home;