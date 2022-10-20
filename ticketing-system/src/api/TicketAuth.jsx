import { destroy, edit, get ,post} from "."



export const CreateTicket=async(data,config)=>{
  
    const res=await post('https://ticker-heroku.herokuapp.com/api/admin/ticket',data,config);
    return res;
}

export const destroyTicket = async (ticketID,config) => {
    const res = await destroy(
      `https://ticker-heroku.herokuapp.com/api/admin/ticket/${ticketID}`,config
    );
    return res;
  }

  export const editTicket = async (ticketID,values,config) => {
    const res = await edit(
      `https://ticker-heroku.herokuapp.com/api/admin/ticket/${ticketID}`,values,config
    );
    return res;
  }