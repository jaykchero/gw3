import $ from 'jquery'


function goAnchor(selector) {

  console.info("selector1", selector)
  console.log(selector)
  // var anchor = document.getElementById(selector); //获取元素
   var anchor =this.$el.querySelector(selector);//获取元素

  console.log("aaa"+anchor.innerHTML)
  //console.info("anchor", anchor)

  if (anchor) {

    setTimeout(() => { //页面没有渲染完成时是无法滚动的，因此设置延迟

      //anchor.scrollIntoView(); //js的内置方法，可滚动视图位置至元素位置
      var targetOffset = $(selector).offset().top-80;

      $('html,body').animate({

          scrollTop: targetOffset

        },

        1000);

    }, 500);

  }

};

//获取参数

function GetQueryString(name) {

  //var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");

  var href = window.location.href;

  var r = getSearchString(name, href);

  if (r != null) return decodeURI(r);

  return null;

}

function getSearchString(key, Url) {

  var str = Url;

  str = str.substring(1, str.length);

  if (str.indexOf("?") != -1) {

    var arr = str.split("?")[1].split("&"); // 获取？后的参数内容，并以&分隔字符串，获得类似name=xiaoli这样的元素数组

    var obj = new Object();

    // 将每一个数组元素以=分隔并赋给obj对象

    for (var i = 0; i < arr.length; i++) {

      var tmp_arr = arr[i].split("=");

      obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);

    }

    return obj[key];

  }

}

export {
  goAnchor,
  GetQueryString

}
