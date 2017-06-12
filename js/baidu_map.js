/**
 * Created by Administrator on 2016/11/20.
 */
var sContent =
    "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>深圳大利来酒店观澜店</h4>" +
    "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>地址：深圳市龙华新区观澜街道下湖社区安澜大道218号</p>" +
    "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>电话：(0755)0000000</p>"+
    "</div>";
var map = new BMap.Map("container");          // 创建地图实例
var point = new BMap.Point(114.084725,22.691601);  // 创建点坐标
map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
var marker = new BMap.Marker(point);        // 创建标注
map.addOverlay(marker);
var label = new BMap.Label("大利来酒店",{offset:new BMap.Size(20,-10)});
marker.setLabel(label);
var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
marker.addEventListener("click", function() {
    this.openInfoWindow(infoWindow);
    //图片加载完毕重绘infowindow
    document.getElementById('imgDemo').onload = function () {
        infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
    }
});
//    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());