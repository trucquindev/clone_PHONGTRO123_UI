export const path={
    HOME:'/*',
    LOGIN:'login',
    CHO_THUE_CAN_HO:'cho-thue-can-ho',
    CHO_THUE_MAT_BANG:'cho-thue-mat-bang',
    CHO_THUE_PHONG_TRO:'cho-thue-phong-tro',
    CHO_THUE_NHA:'cho-thue-nha'
}

export const text={
    HOME_TITLE:'Tìm kiếm chỗ thuê ưng ý',
    HOME_DESCRIPTION:'Kênh thông tin Phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.'
}

export  const formatVietNameseToString =(keyword)=>{
    return keyword
        .toLowerCase() 
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .split(" ")
        .join("-")
}