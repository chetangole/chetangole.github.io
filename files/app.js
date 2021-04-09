$(window).load(function() {
    $("body").addClass("show");;
});

// Smooth Scrolling
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top)
                }, 850, 'easeOutQuint');
                return false;
            }
        }
    });
});

$(function() {
    // TYPER
    $('[data-typer-targets]').typer();

    // DRIBBBLE
    /* $.jribbble.getShotsByPlayerId('rafaelderolez', function(playerShots) {
        var html = [];
        $.each(playerShots.shots, function(i, shot) {
            html.push('<article class="work__dribbble__shot">');
            html.push('<img class="work__dribbble__shot__image" src="' + shot.image_url + '" ');
            html.push('alt="' + shot.title + '"></article>');
        });

        $('.work__dribbble').html(html.join(''));
    }, {
        page: 1,
        per_page: 3
    }); */

    // OVERLAY FADE
    var o = $(".top"),
        n = o.find(".top__overlay");
    $(window).on("scroll", function() {
        var c = $(this).scrollTop(),
            i = .8 * o.height(),
            l = 1 - (i - c) / i;
        1 >= l && n.css({
            opacity: l
        })
    })
});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".about, .work, .coming-soon, .internship, .social").addClass("");
    } else {
        $(".about, .work, .coming-soon, .internship, .social").removeClass("");
    }
    $(".about__scroll").css("opacity", 1 - $(window).scrollTop() / 400);

});


$('a.screenshot').click(function(e) {
    // Special stuff to do when this link is clicked...

    // Cancel the default action
    e.preventDefault();
});
