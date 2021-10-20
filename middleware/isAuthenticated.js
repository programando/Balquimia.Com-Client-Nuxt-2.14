export default function (contex) {
   if (!contex.store.state.User.Logueado) {
    return contex.redirect('/computron');
  }
  
  //console.log(!contex.store.state.User.Logueado);
}  
  

/* export default   function isAuthenticated({ store, redirect }) {
 
  if ( !store.state.Logueado ) {
      return redirect('/computron');
  }  
 
  
} */
