// Generated by CoffeeScript 1.6.2
$(function() {
  var hasNextPage, iosocket, loadOnScroll;

  iosocket = io.connect();
  filepicker.setKey('AvovSWfJJQCaOl9IhtTofz');
  $('#fpicker').click(function() {
    filepicker.pickAndStore({
      mimetype: 'image/*',
      maxSize: 2097152
    }, {}, function(fpfile) {
      return iosocket.emit('upload', fpfile[0]);
    }, function(fpfile) {
      return console.log("ERROR");
    });
    return false;
  });
  hasNextPage = true;
  return loadOnScroll = function() {
    if ($(window).scrollTop() > $(document).height() - ($(window).height() * 2)) {
      $(window).unbind();
      return loadItems();
    }
  };
});
