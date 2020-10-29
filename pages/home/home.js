// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"demon-ling",
    age:20,
    students:[
      {id:112,name:'kobe',age:30},
      {id:115,name:'sily',age:32},
      {id:111,name:'jams',age:29}
    ],
    counter:0
  },
  handleBtnClick(){
    // 调用this.setData()
    this.setData({
      counter:this.data.counter += 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter -=1
    })
  }
})
