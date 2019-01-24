Page({
	data: {
    screenData: '',   
	},

	test: function(e) {
    var dataId = e.target.dataset.id;
    console.log("dataId")
    console.log(dataId)
    var screenData = this.data.screenData;

		switch (dataId) {
			case 'C':
				this.clear();
				break;

			case '←':
				this.delete();
				break;

      case '+':
        if(screenData){
          if (!Number.isNaN(parseInt(screenData.charAt(screenData.length-1)))){
            this.add();
          }
        }
				break;

			case '-':
        if(screenData){
        } else {
          this.getValue(dataId);
        }

        if(screenData){
          if (!Number.isNaN(parseInt(screenData.charAt(screenData.length-1)))){
            this.reduce();
          }
        }
				break;

      case '×':
      if(screenData){
        if (!Number.isNaN(parseInt(screenData.charAt(screenData.length-1)))){
          this.multiply();
        }
      }   
				break;

			case '÷':
      if(screenData){
        if (!Number.isNaN(parseInt(screenData.charAt(screenData.length-1)))){
          this.divide();
        }
      }  
				break;

      case '=':
        if(screenData){
          if (!Number.isNaN(parseInt(screenData.charAt(screenData.length-1)))){
            this.equals();
          }
        }
				break;

      case 'icon':
      break;
        
			default:
				this.getValue(dataId);
				break;
		}
	},

	// 获取值
	getValue(value) {
    var screenData = this.data.screenData;

		switch (value) {
			case '.':
        var arr = screenData.split('');
				var state = arr.some(function(elem, index, arr) {
					return elem == '.';
				});
        if (!state) screenData += value;
        break;
        
      default:
          screenData += value;
				break;
    }
    
    // 设置新值
		this.setData({
			screenData: screenData
		});
	},

  add(){
    var screenData = this.data.screenData;
    screenData += '+';
    // 设置新值
		this.setData({
			screenData: screenData
    }); 
  },

  reduce(){
    var screenData = this.data.screenData;
    screenData += '-';
    // 设置新值
		this.setData({
			screenData: screenData
    });
  },
  
  multiply(){
    var screenData = this.data.screenData;
    screenData += '×';
    // 设置新值
		this.setData({
			screenData: screenData
    });
  },

  divide(){
    var screenData = this.data.screenData;
    screenData += "÷";
    // 设置新值
		this.setData({
			screenData: screenData
    });
  },

  equals(){
    // var screenData = this.addbit(this.data.screenData);
    var screenData = this.data.screenData
       if(screenData.indexOf("×") != -1) {
        var screenData = this.addbitmultiply(this.data.screenData);
       } else if ( screenData.indexOf("÷") !=-1){
        console.log("除法")
        var screenData = this.addbitdiv(this.data.screenData);
       }else if ( screenData.indexOf("+") !=-1){
        var screenData = this.addbitadd(this.data.screenData);
        var screenData = String(screenData)   
       }else if( screenData.indexOf("-") !=-1){
        var screenData = this.addbitadd(this.data.screenData);
       }else{
       }
        var screenData = String(screenData)
        this.setData({
          screenData: screenData
        }); 
  },

	// 清空
	clear() {
		this.setData({
			screenData: ''
		});
	},

	// 删去
	delete() {
    var screenData = this.data.screenData;
		this.setData({
		  screenData: screenData.substring(0,this.data.screenData.length-1),
		});
	},


  // 将字符串评估为数学表达式
  addbitdiv(s) {
    console.log("s")
    console.log(s)
    return  (s.replace(/s/g, '').match(/[+\-\*\/]?([0-9\.]+)/g) || [] )
    .reduce(function(sum, value) {
        return parseFloat(sum) / parseFloat(value);
    });
  },

  addbitmultiply(s) {
    console.log("s")
    console.log(s)
    return  (s.replace(/s/g, '').match(/[+\-\*\/]?([0-9\.]+)/g) || [] )
    .reduce(function(sum, value) {
        return parseFloat(sum) * parseFloat(value);
    });
  },

  addbitadd(s) {
    console.log("s")
    console.log(s)
    return  (s.replace(/s/g, '').match(/[+\-\*\/]?([0-9\.]+)/g) || [] )
    .reduce(function(sum, value) {
        return parseFloat(sum) + parseFloat(value);
    });
  },

});
