import React,{useContext} from 'react'
import { ProductContext} from '../global/ProductContext'

const Products = () => {
    const {products} = useContext(ProductContext);
    console.log(products);
    return (
        <>
        {products.length !== 0 && <h1>Products</h1>}
        <div className="container">
            {products.length === 0 && <div>No hay noticias aun</div>}
            {products.map(product=>(
                <div className="card-group" key={product.ProductID}>
                    <div className="card-body" key={product.ProductName}>
                    {product.ProductName}
                    </div>
                    <div className="card-body" key={product.ProductDescription}>
                        {product.ProductDescription}
                    </div>
                    <div className="card-body" key={product.ProductImg}>
                    <img src={product.ProductImg} style={{width:'100%'}} alt="not found" />
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Products
