$(function () {
    var dropMenu = new DropMenuApi();
    dropMenu.show('调用接口成功！');
    dropMenu.on_Click('#menu li',function (th) {
        var url = $(th).find('a').attr('href');
        console.log(url);
        window.location = url;

    });
    dropMenu.on_showTitle(1,1);
});