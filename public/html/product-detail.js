function changeImage(src) {
    document.getElementById('mainImage').src = src;
}

$('#enlargeImageModal').on('show.bs.modal', function (event) {
    var image = $(event.relatedTarget);
    var src = image.attr('src');
    var modal = $(this);
    modal.find('#enlargedImage').attr('src', src);
});
