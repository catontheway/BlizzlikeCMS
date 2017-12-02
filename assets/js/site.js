function confirmDelete(deleteId) {
    var conf = confirm("Are you sure you want to delete this post?");
    if (conf == true) {
        window.location="admin.php?page=edit_posts&action=delete&id=" + deleteId;
    } else {
        return false;
    }
}

function confirmDeleteImage(deleteId) {
    var conf = confirm("Are you sure you want to delete this image?");
    if (conf == true) {
        window.location="admin.php?page=edit_gallery&action=del&id=" + deleteId;
    } else {
        return false;
    }
}

function scrollToBottom() {
    $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
}

$(document).ready(function() {
    $("#toggleNavigation").click(function(){
        $("#toggledMenuUl").toggle();
    });
});

$(document).ready(function(){
    $('.slick-gal').slick({
        arrows: true,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        dots: true});
});