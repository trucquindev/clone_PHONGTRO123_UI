export  const formatVietNameseToString =(keyword)=>{
    return keyword
        .toLowerCase() 
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split(" ")
        .join("-")
}