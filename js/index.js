/**
 * Created by ydz on 2016/11/3 16:28.
 */

var index = 1;
function playImage() {
    console.log(index+"...aaa");
    $(document.body).css("background", "url(images/us" + index + ".jpg) repeat");
    index++;
    if (index > 5)index = 0;
}
setInterval(playImage, 3000);