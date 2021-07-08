import React ,{useState ,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import RouteUser from './RouteUser'
import 'antd/dist/antd.css';
import {Table} from 'antd';
function RouteGit() {
    const dataSource = [
        {
          key: '1',
          title: 'List Of Issues',
          serialno :'1',
          
        },
        
      ];
    const columns = [
        {
            title: 'SerialNo',
            dataIndex: 'serialno',
            key: 'serialno',
          },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        }  
      ];
    const[information,setInformation]=useState([])
    console.log(information)
    useEffect(() => {
            axios.get('https://api.github.com/repos/octocat/Hello-World/issues')
            .then(response =>{
                setInformation(response.data)
                console.log(response)
            } )
           
    },[])
    const data =information.map(value =>{
        return(
            <div>
                <Link key={value.id} to={`/issues/${value.number}`}>
                    {value.title}
                </Link>
            </div>
        )
    }) 
        return (
            <div>
                <Router>
                <h1>GitHub Issues Page</h1>
                <Link to="/issues" exact strict><Table dataSource={dataSource} columns={columns} /></Link>
                <Route path="/issues" exact strict render={() => {
                    return(
                    <div>
                        <ul>
                            {data}
                        </ul>
                    </div>
                    )}}>

                    </Route>
                <Route path="/issues/:id" exact strict><RouteUser/></Route>
                </Router>
            </div>
        )
     }
     
     export default RouteGit