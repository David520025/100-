Page({
  onShareAppMessage(){
    return {
      title: '我的购物车',
      path: 'pages/index/index'
    }
  },
 data:{
   carts:[],
   hasList:false,
   totalPrice:0,
   selectAllStatus:true
 },

// 初始化数据
 onShow(){
   this.setData({
     hasList:true,
     carts:[
       { id: 1, title: "红楼梦 曹雪芹", image: "/image/hlm.jpg", num: 1, price: 18, selected: true},
       { id: 2, title: "三国演义 罗贯中", image: "/image/sgyy.jpg", num: 1, price: 28, selected: true},
       { id: 3, title: "水浒传 曹雪芹", image: "../../image/hlm.jpg", num: 2, price: 38, selected: true },
       { id: 4, title: "西游记 罗贯中", image: "/image/sgyy.jpg", num: 1, price: 58, selected: true },
       { id: 5, title: "红楼梦 曹雪芹", image: "/image/hlm.jpg", num: 1, price: 18, selected: true },
       { id: 6, title: "三国演义 罗贯中", image: "/image/sgyy.jpg", num: 1, price: 28, selected: true },
       { id: 7, title: "水浒传 曹雪芹", image: "/image/hlm.jpg", num: 2, price: 38, selected: true },
       { id: 8, title: "西游记 罗贯中", image: "/image/sgyy.jpg", num: 1, price: 58, selected: true },
     ]
   })
   this.getTotalPrice();
 },

// 计算被选中的总价
 getTotalPrice(){
   let carts = this.data.carts;
   let total = 0;
   for(let i = 0; i<carts.length; i++){
       if(carts[i].selected){
          total += carts[i].num*carts[i].price;
       }
   }
   this.setData({
     carts:carts,
     totalPrice: total.toFixed(2)
   })
 },

// 切换单个选中状态
selectList(e){
  console.log(e)
  const index = e.currentTarget.dataset.index;
  let carts = this.data.carts;
  const selected = carts[index].selected;
  carts[index].selected = !selected;
  this.setData({
     carts:carts
  });
  this.getTotalPrice();
},
 
//  切换全选状态
selectAll(e){
  let selectAllStatus = this.data.selectAllStatus;
  selectAllStatus = !selectAllStatus;
  let carts = this.data.carts;

  for(let i = 0; i < carts.length; i++){
     carts[i].selected = selectAllStatus;
  }
  this.setData({
    selectAllStatus:selectAllStatus,
    carts:carts
  })
  this.getTotalPrice();
},

// 加
addCount(e){
  const index = e.currentTarget.dataset.index;
  let carts = this.data.carts;
  let num = carts[index].num;
  num = num + 1;
  carts[index].num = num;
  this.setData({
    carts:carts
  })
  this.getTotalPrice();
},

// 减
minusCount(e){
  const index = e.currentTarget.dataset.index;
  let carts = this.data.carts;
  let num = carts[index].num;
  if(num <= 1){
    return false;
  }
  num = num - 1;
  carts[index].num = num;
  this.setData({
    carts:carts
  })
  this.getTotalPrice();
},

// 移除
deleteList(e){
  const index = e.currentTarget.dataset.index;
  let carts = this.data.carts;
  carts.splice(index,1);
  this.setData({
    carts:carts
  });
  if(!carts.length){
    this.setData({
      hasList:false
    })
  }else{
    this.getTotalPrice();
  }
}
})

