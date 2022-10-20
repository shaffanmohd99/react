import { destroy, edit, get ,post} from "."



export const CreateTicket=async(data,config)=>{
  
    const res=await post('http://127.0.0.1:8000/api/admin/ticket',data,config);
    return res;
}

export const destroyTicket = async (ticketID,config) => {
    const res = await destroy(
      `http://127.0.0.1:8000/api/admin/ticket/${ticketID}`,config
    );
    return res;
  }

  export const editTicket = async (ticketID,values,config) => {
    const res = await edit(
      `http://127.0.0.1:8000/api/admin/ticket/${ticketID}`,values,config
    );
    return res;
  }