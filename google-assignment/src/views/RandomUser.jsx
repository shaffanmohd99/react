import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomUser } from "../api/RandomUser";

const RandomUser=()=>{

    const {name,location,phoneNumber,picture}=useSelector(state=>state.randomUser);
    const dispatch=useDispatch();
    const setRandomUser=(name,location,phoneNumber,picture)=>dispatch({type:'SET_RANDOMUSER_STATE',payload:{name:name,location:location,phoneNumber:phoneNumber,picture:picture}})

    const fetchRandomUser=async()=>{
    
        const res=await getRandomUser();
        console.log(res.data.results[0].picture.large)
        if(res.status === 200 && res.data) {
            const name=[res.data.results[0].name.title,res.data.results[0].name.first,res.data.results[0].name.last].join(' ')
            const phone=res.data.results[0].phone;
            const location=[res.data.results[0].location.city,res.data.results[0].location.country].join(', ')
            const picture=res.data.results[0].picture.large

            setRandomUser(name,location,phone,picture);
        }
        else {
            alert('Error calling API');
        }
        
        // console.log(res.data.results[0].name);
    }
    useEffect(()=>{fetchRandomUser()},[])
    return(
        <div style={{
            width:"80vw",
            height:"80vh"
        }}>
            <h1 style={{textAlign:"center",fontSize:"30px"}}>this is the random user page</h1>
            <div
            style={{
                display:"flex",
                alignItems:"center",
                flexDirection:"column",
                justifyContent:"center",
                marginTop:"30px",
               padding:"30px",
                backgroundColor:"aqua",
                gap:"20px",
                borderRadius:"20px"
            }}
            >
                <img style={{borderRadius:"50%"}} src={picture} alt="" />
                <h2>Name: {name}</h2>
                <h2>Address: {location}</h2>
                <h2>Phone: {phoneNumber}</h2>
            </div>
        </div>
    )
}

export default RandomUser