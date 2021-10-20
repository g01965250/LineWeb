 

 function Communication (props){
  const {img , title ,content }=props

   return(
    <div className='communication-content down'>
      <img src={img} alt='損壞'/>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
   )
 }

 export default Communication