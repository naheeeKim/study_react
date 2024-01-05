import '../../style/pages/guide/layout.scss';

export default function Layout({children,id}){
    return(
      <>
        <section className='section' id={id}>
              <div className="section-inner">
                  <div className="container">
                      <h2 className="title">{id}</h2>
                      {children}
                  </div>
              </div>
          </section>
      </>
    )
}