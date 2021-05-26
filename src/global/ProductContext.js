import React,{createContext} from 'react'
import {db} from '../firebase/config';

export const ProductContext = createContext();
export class ProductContextProvider extends React.Component{
  state={
      products:[]
  }
  componentDidMount(){
      const prevProducts = this.state.products;
      db.collection("Products").onSnapshot(snapshot=>{
          let changes = snapshot.docChanges();
          changes.forEach(change=>{
              if(change.type === "added"){
                  prevProducts.push({
                      ProductID : change.doc.id,
                      ProductName:change.doc.data().ProductName,
                      ProductDescription:change.doc.data().ProductDescription,
                      ProductImg:change.doc.data().ProductImg
                  })
              }
              this.setState({
                  products: prevProducts
              })
          })
      })
  }
  
    render(){
        return(
            <ProductContext.Provider value={{products:[...this.state.products]}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
