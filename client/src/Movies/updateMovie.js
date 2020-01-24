import React, {useState,useEffect} from "react";
import axios from "axios";

const UpdateMovie =(props) => {

    const [state,setState] = useState({
        id:"",
        title:"",
        director:"",
        metascore:"",
        stars: [],

    })

    useEffect(()=> {
        axios
        .get(`http://localhost:5000/api/movies/${props.match.params.id}`,)
        .then(res => {
            setState(res.data) 
        })
        .catch(err=> {
            console.log(err.response)
        })

    },[props.match.params.id])
  

   const handleChange = e => {
        setState({
           ...state,[e.target.name]:e.target.value
        })
    }
 const handleSubmit = event => {
    event.preventDefault()
    axios.put(`http://localhost:5000/api/movies/${state.id}`,state)
    .then(res => {
        props.history.push("/")
    })
    .catch(err => {
        console.log(err)
    })
 }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={this.state.title}
                
                />
                <input 
                type="text"
                name="director"
                placeholder="Director"
                onChange={handleChange}
                value={state.director}
                
                />
                <input 
                 name="director"
                 placeholder="Director"
                 onChange={this.handleChange}
                 value={state.metascore}
                />
                <input 
                  name="director"
                  placeholder="Director"
                  onChange={this.handleChange}
                  value={state.stars}
                
                />
                <button>Update movie</button>
            </form>
        </div>
    )

}  
  

export default UpdateMovie