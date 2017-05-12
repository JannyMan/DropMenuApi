function DropMenuApi() {

    /*接口-----------------------------------------------*/
    objDropMenu = {
        show:function (args) {
            message(args);
        },
        /*下滑菜单*/
        on_Click:function (selector, callback) {
            DropMenuClick(selector, callback);
        },
        /*下滑菜单  结束*/
        /* 二级菜单选中状态*/
        on_showTitle:function (firstMenuIndex, secMenuIndex) {
            showTitle(firstMenuIndex, secMenuIndex);
        }
        /* 二级菜单选中状态end*/

    };
    /*接口--------------------------------------------end*/


    /*初始化---------------------------------------------*/
    (function () {
        //拿到一级菜单的名称
        var firstLi = $('#menu li');
        var firstMenu = [];
        var secMenu = {};
        var url;
        var title;
        for(var i = 0; i<firstLi.length; i++){
            var x = i;
            firstMenu.push($(firstLi[i]).attr('data-title'));
            //获取二级菜单
            var secMenuSpan = $(firstLi[i]).children('span');
            var secMenuArr = [];
            secMenuSpan.each(function (index, val) {
                var secMenuobj = {};
                title = $(this).attr('data-title');
                url = $(this).attr('data-url');
                secMenuobj['data-title'] = title;
                secMenuobj['data-url'] = url;
                secMenuArr.push(secMenuobj);
            });

            secMenu[x + "menu"] = secMenuArr;

        }
        //console.log(secMenu);
        //菜单获取完毕，显示菜单
        $('#menu').html('');
        for(var a=0;a<firstMenu.length;a++){
            var firstMenuLi =
                '<li>' +
                '<span>'+
                firstMenu[a]+
                '</span>'+
                '<ul></ul>'+
                '</li>';
            $('#menu').append(firstMenuLi);
        }
        for(var key in secMenu){
            console.log(parseInt(key));
            var liNum = parseInt(key);
            // console.log($('#menu li:eq(liNum)'));
            for(var b = 0;b<secMenu[key].length;b++){
                console.log(secMenu[key][b]['data-url']);
                $('#menu li ul:eq(' + liNum + ')').append(
                    '<li><a href="'+secMenu[key][b]['data-url']+'">'+secMenu[key][b]['data-title']+'</a></li>'
                );
            }
        }
        //初始化显示状态
        $('#menu>li>ul').css('display','none');
    })();
    /*初始化------------------------------------------end*/


    /*功能函数-------------------------------------------*/
    function message(args) {
        console.log(args);
    }

    //点击事件
    function DropMenuClick(selector, callback) {    //元素对象，点击后的回调函数

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

    /* 二级菜单选中状态----------------------------------*/
    function showTitle(firstMenuIndex, secMenuIndex){
        $('#menu>li:eq('+firstMenuIndex+') ul').css('display','block').children('li:eq('+secMenuIndex+')').css('background','#2e2e2e')
    }
    /* 二级菜单选中状态------------------------------end*/
    
    /*功能函数----------------------------------------end*/

    return objDropMenu;
}
