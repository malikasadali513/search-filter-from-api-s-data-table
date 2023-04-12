import React, { useEffect, useState } from 'react'
import './SearchFilter.css'
export default function SearchFilter() {
    const[data , setData] = useState ([]);
    const[searchApiData , setSearchApiData] = useState ([]);
    const[filterVal , setFilterVal] = useState ('');
    useEffect(() =>{
        const fetchData=()=> {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    setData(json)
                    setSearchApiData(json)
                })
        }
        fetchData();
    }, [])
    const handleFilter=(e)=>{
        if(e.target.value === ''){
            setData(searchApiData)
        } else{
            const filterResult = searchApiData.filter(item => item.username.toLowerCase().includes(e.target.value.toLowerCase()) || item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            if (filterResult.length > 0){
                setData(filterResult)
            } else {
                setData([{"name": "no data"}])
            }

        }
        setFilterVal(e.target.value)
    }
  return (
    <div style={{margin:'20px 20%'}}>
        <div className='p-input-icon-right'>
            <input placeholder='Search' value={filterVal} onInput={(e) =>handleFilter(e)} />
        </div>
      <div>
      <table>
      <th>Name</th>
      <th>User Name</th>
      <th>Email</th>
      <th>Phone</th>
      {
        data.map(item => {
            return(
                <tr>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            )
        })
      }
      </table>
      </div>
    </div>
  )
}
