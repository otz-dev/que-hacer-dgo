export const Page = (props)=>{
    return (
         <>
              <header className="header"><h1>¿Qué hacer en Durango?</h1></header>
              
              <main className='main-page-container'>
                  {props.children}
             </main>
            
              <footer className="footer">
                  <div className="foot-container"> 
                    
                    <p>  <strong>¿Te gustaría que tu evento apareciera en nuestro calendario?</strong></p>
                    <p>Envia un correo: quehacerendurango@gmail.com</p>
                </div>
                   
               </footer>
             </>
    )
}