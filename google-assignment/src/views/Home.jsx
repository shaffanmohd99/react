const Home = () => {
    return (
        <div 
          style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",width:"80vw",
            height:"80vh"
          }}
        >
          <div
            style={{
              display:"flex",
              flexDirection:"column"
            }}
          >
            <h1>GOOGLE</h1>
            
            <div style={{ marginTop:"100px"}}>
            < div class="wrap">
              <div class="search">
                <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                <button type="submit" class="searchButton">
                  <i class="fa fa-search"></i>
              </button>
              </div>
                </div>
            </div>
          </div>
        </div>
    );
  };
  export default Home