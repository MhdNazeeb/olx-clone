import React, { Fragment,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useUserAuth } from '../../store/fireBaseContext';

const Create = () => {
  const [name,setName]=useState('')
  const [category, setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState(null)
  const { Firebase } = useUserAuth()
  const handleSubmit=()=>{
    Firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then(url=>{
        console.log(url)
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="name"
              name="Name"
              value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              value={category}
            onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="price" name="Price" value={price}
            onChange={(e)=>setPrice(e.target.value)}/>
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
          
            <br />
            <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
            <br />
            <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
