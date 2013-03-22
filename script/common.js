/**
 * Created with JetBrains PhpStorm.
 * User: misa.guo
 * Date: 13-1-16
 * Time: 下午5:39
 * To change this template use File | Settings | File Templates.
 */
(function($){

    $(document).ready(function(){

        dragObj = $('.drag');
        dragObj.bind({
            'mousedown': function(e){
                var pageX = e.pageX;
                var position = parseInt(dragObj.css('margin-left'));
                $(document).bind('mousemove', function(e){
                    var offset = e.pageX - pageX;
                    var margin = position + offset;
                    if (margin < 0) margin = 0;
                    if (margin > 880) margin = 880;
                    dragObj.css('margin-left', margin);
                });
            },
            'mouseup mouseout': function(){
                $(document).unbind('mousemove');
            }

        });

    });

})(jQuery);