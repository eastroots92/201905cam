const monthFormat = (number) => {
    let result
    const year = Math.floor(number/12)
    const month=number%12
    if(year!==0 && month !==0){
        result = year+'년 '+month+'개월'
    }else if(year ===0 && month !==0){
        result = month+'개월'
    }else if(year !==0 && month ===0){
        result = year+'년'
    }else{
        result=''
    }
    return result
}

export default monthFormat