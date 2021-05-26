import React,{ useState}from 'react'
import {storage,db} from '../firebase/config'
const AddProducts = () => {
const [productName, setProductName] = useState("")
const [productDescription,setProductDescription] = useState("")
const [productImg, setProductImg] = useState(null);
const [error,setError] = useState(null)
const types = ['image/png','image/jpeg']
const productImgHandler = (e) => {
    let selectedFile = e.target.files[0]
    if(selectedFile && types.includes(selectedFile.type)){
    setProductImg(selectedFile)
    setError('');
    }
    else {
    setProductImg(null);
    setError("Por favor sube una imagen de formato soportado")
    }
}
const AddProduct = (e)=>{
    e.preventDefault();
    console.log(productName,productDescription,productImg);
    const uploadProduct = storage.ref(`product-images/${productImg.name}`).put(productImg);
    uploadProduct.on('state_changed',snapshot => {
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        console.log(progress)
    },err=>{
        setError(err.message)
    },()=>{
        storage.ref("product-images").child(productImg.name).getDownloadURL().then(url =>{
            db.collection('Products').add({
                ProductName: productName ,
                ProductDescription: productDescription,
                ProductImg: url
            }).then(()=>{
                setProductName("");
                setProductDescription("");
                setProductImg("");
                setError("")
                document.getElementById('file').value = " ";
            }).catch(err=>setError(err.message));
        })
    })
}
    return (
        <div className="container">
            <br />
            <h2>Add products </h2>
            <form autoComplete="off" className="form-group" onSubmit={AddProduct}>
            <label htmlFor="product-name">Product Name</label>
            <input type="text" className="form-control" 
            onChange={(e)=>setProductName(e.target.value)} 
            value={productName}
            required 
            placeholder="Nombre del producto"/>
            <input type="text" className="form-control"
            onChange={(e)=>setProductDescription(e.target.value)}
            value={productDescription}
             required 
             placeholder="Descripcion del producto"/>
            <input type="file" className="form-control" 
            name="" id="file"   onChange={productImgHandler}/>
            <br />
            <button type="submit" className="btn btn-success btn-md">Add </button>
            </form>
            {error && <span className="error-msg">{error}</span>}
        </div>
    )
}

export default AddProducts
