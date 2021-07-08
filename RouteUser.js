import {withRouter} from 'react-router-dom'
import React ,{useState ,useEffect} from 'react'
import axios from 'axios'
function RouteUser(props)
{
    const [repos,setRepos] = useState([])
    const ID =props.match.params.id
    useEffect(() => {
        const fetchRepos = async () => {
            const res =await axios.get(`https://api.github.com/repos/octocat/Hello-World/issues/ ${ID}`)
            setRepos(res.data)
            console.log(res)
        }
        fetchRepos()
    },[ID])
    console.warn(props)
    return(
    <div>
            <h1>Details of List of Issues</h1>  
            <p>Title :{repos.title}</p> 
            <p>State :{repos.state}</p>
            <p>Created_at :{repos.created_at}</p>
            <p>Updated_at :{repos.updated_at}</p> 
            <p>node_id:{repos.node_id}</p>
            <p>id:{repos.id}</p>
            <p>number:{repos.number}</p>
    </div>
    )
}
export default  withRouter(RouteUser)