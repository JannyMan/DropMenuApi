function DropMenuApi() {

    /*接口-----------------------------------------------*/
    objDropMenu = {
        show:function (args) {
            message(args);
        },
        /*下滑菜单*/
        on_crDropMenu:function (selector, callback) {
            crDropMenu(selector, callback);
        }
        /*下滑菜单  结束*/
    };
    /*接口--------------------------------------------end*/

    /*初始化---------------------------------------------*/
    (function () {
        //拿到一级菜单的名称
        var firstLi = $('#menu li');
        var firstMenu = [];
        for(var i = 0; i<firstLi.length; i++){
            firstMenu.push(firstLi.attr('data-title'));
        }
        console.log(firstMenu);
        /*拿到二级菜单的名称
            {
                menu0:['二级菜单一','二级菜单一'],
                menu1:['二级菜单一','二级菜单一'],
                menu2:['二级菜单一','二级菜单一']
            }
        */
        var json = {};
        
        var bool = true;
        firstLi.each(function (index, value) {
            console.log(value);
        });

    })();
    /*初始化------------------------------------------end*/


    /*功能函数-------------------------------------------*/
    function message(args) {
        console.log(args);
    }

    //点击事件
    function crDropMenu(selector, callback) {    //元素对象，点击后的回调函数

        //实现效果 '#menu>ul>li'
        $(selector).mousedown(function (e) {
            //阻止事件冒泡
            var e = window.event || e;
            e.stopPropagation();
            var state = $(this).find('ul').css('display');
            console.log(state);
            if (state == 'block') {
                $(this).find('ul').css({
                    'display': 'none'
                });
            } else {
                $(selector).find('ul').css({
                    'display': 'none'
                });
                $(this).find('ul').css({
                    'display': 'block'
                });
            }
        });

        //点击事件并回调
        $(selector + ' li').mousedown(function (ev) {
            var ev = ev || window.event;
            ev.stopPropagation();
            callback(this);
        });
    }
    /*功能函数----------------------------------------end*/

    return objDropMenu;
}
