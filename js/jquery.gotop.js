(function($) {
   $.fn.gotop = function(options) {
      options = options || {};
      var defaults = {

      };
      var opts = $.extend({}, defaults, options);
      return this.each(function() {
         $this = $(this);
         $this.click(function(event) {
            $('html,body').animate({
               scrollTop: 0
            }, 100);
            return false;
         });


      });
   };
})(jQuery);