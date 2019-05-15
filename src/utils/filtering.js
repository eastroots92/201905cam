const filtering = (arr,answer1,probation) => {
    const filteredarr=arr.filter(d => d.answer1==answer1 && d.sex==probation)
    return filteredarr
}

export default filtering