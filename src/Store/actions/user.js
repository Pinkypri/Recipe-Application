export const sendProduct=(data)=>{
    return {
        type:"SEND_PRODUCTS",
        data:data
    }

}

export const sendInformation=(id)=>{
    return {
        type:"SEND_INFORMATION",
        id:id
    }

}