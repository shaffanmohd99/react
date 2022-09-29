function TopNavBar(){
    return(
        <div style={{
            height: "10%",
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            alignItems: "center",
        }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <h2>TRAVELx</h2>
                </div>
                <ul style={{
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "30px",
                }}>
                    <li>Destinations</li>
                    <li>Activities</li>
                    <li>About Us</li>   
                    <li>Contact</li>
                </ul>
                <i class="fa-solid fa-bars"></i>
        </div>
    );
}

export default TopNavBar;