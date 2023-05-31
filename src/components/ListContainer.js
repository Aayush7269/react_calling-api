import React,{useEffect, useState} from 'react'
import { CustomCard } from './CustomCard'


export const ListContainer = ({movieList}) => {
    const[display, setDisplay] = useState([])
    useEffect(()=>{
        setDisplay(movieList)
    }, [movieList])
    const handleOnFilter = (type)=>{
        const filteredArg = movieList.filter(item => item.type===type)
        setDisplay(filteredArg)
    }
  
  return (
    <div className="ListContainer mt-4">
        <div class="btn-group" role="group" aria-label="Basic example">
  <button onClick={()=>handleOnFilter("all")}type="button" class="btn btn-primary">All</button>
  <button onClick={()=>handleOnFilter("Awesome")} type="button" class="btn btn-warning">Awesome</button>
  <button onClick={()=>handleOnFilter("Boring")}type="button" class="btn btn-danger">Boring</button>
</div>
<div className="mt-3">{display.length} movies found</div>
<hr />
<div className="d-flex flex-wrap justify-content-around gap-2">
    {movieList?.map((itme)=>(
        <CustomCard{...itme}/>
    ))}
</div>
    </div>
  )
}
