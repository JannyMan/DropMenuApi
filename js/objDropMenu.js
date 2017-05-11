
//创建对象
function FunFrame() {
    this._init();
}

//给对象添加默认属性
FunFrame.prototype = {
    //改变对象this为FunFrame
    constructor: FunFrame,
    //初始化对象
    _init:function () {
        console.log('对象初始化!');
        $('#menu .fir>li>ul').css({
            'display':'none'
        });
    },

    /*下滑菜单-------------------*/
    on_crDropMenu:function (selector, callback) {
        crDropMenu(selector, callback);
    }
    /*下滑菜单  结束 --------------------*/
};

// 给对象实例化方法
function crDropMenu(selector, callback) {    //元素对象，点击后的回调函数

    //实现效果 '#menu>ul>li'
    $(selector).mousedown(function (e) {
        //阻止事件冒泡
        var e = window.event || e;
        e.stopPropagation();
        var state = $(this).find('ul').css('display');
        console.log(state);
        if(state == 'block'){
            $(this).find('ul').css({
                'display':'none'
            });
        }else {
            $(selector).find('ul').css({
                'display':'none'
            });
            $(this).find('ul').css({
                'display':'block'
            });
        }
    });

    //点击事件并回调
    $(selector +' li').mousedown(function (ev) {
        var ev = ev || window.event;
        ev.stopPropagation();
        callback(this);
    });
}












