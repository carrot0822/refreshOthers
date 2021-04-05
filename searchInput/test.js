 let data = [{test:[1,2,3]},{test:['测试']}]

data.forEach((e,index)=>{
    let temp = [];
    e.test.forEach((item,index)=>{
        temp.push(item)
    })
    e.imgUrl = temp
    console.log(e.imgUrl,temp,index + '次数')
    console.log(data)
})