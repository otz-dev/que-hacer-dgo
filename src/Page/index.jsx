export const Page = (props)=>{
    return (
         <>
              <header><h1>Qué hacer en Durango</h1></header>
              
              <main className='main-page-container'>
                  {props.children}
             </main>
            
              <footer>
                  <div> <strong>Te gustaría que tu evento apareciera en nuestro calendario</strong></div>
                   <div>  envia un correo: quehacerendurango@gmail.com</div>
               </footer>
             </>
    )
}