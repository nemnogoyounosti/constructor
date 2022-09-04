$(() => {
    let obj = $('.rightSideBar');
    let content = $('.rightSideBar-content');

    function toggle(e) {
        let target = $(e.currentTarget);
        if (!target.is('.rightSideBar') && !target.is('[href]')) {
            target = target.parents('.rightSideBar');
        }
        let id = target.attr('id') || target.attr('href').replace('#', '');

        obj.filter('[id="' + id + '"]').toggleClass('rightSideBar_visible');
    }

    $('.js-rightSideBarCtrl').click(toggle);
    content.click((e) => {
        e.stopPropagation();
    });
    obj.click(toggle);

});