function DisplayTimer({hour,mins,secs}){

    return(
        <div style={{display:"flex",marginBottom:"50px"}}>
        <div className='test'>
          <h1>{hour}</h1>
          <p>hour</p>
        </div>
        <h1>:</h1>
        <div className='test'>
          <h1>{mins}</h1>
          <p>minute</p>
        </div>
        <h1> : </h1>
        <div className='test'>
          <h1>{secs}</h1>
          <p>second</p>
        </div>
      </div>
    )
}

export default DisplayTimer