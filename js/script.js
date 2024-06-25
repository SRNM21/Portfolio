var win = $(window) 
var doc = $(document)

const scrollTop = $('.scroll-on-top-wrapper')

const sections = $('.sec')
const skills = $('.skill-card')
const projects = $('.project-card')

const config = {
    root: null,
    rootMargin: '-40% 0% -40% 0%',
    threshold: 0
}

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) 
        {
            $(entry.target).addClass('anim')

            observer.unobserve(entry.target)
        }
    })
}, config)

observer.observe($('.projects-title').get(0))
observer.observe($('.skills-title').get(0))

sections.each(function() 
{
    observer.observe(this)
})

skills.each(function() 
{
    observer.observe(this)
})

projects.each(function() 
{
    observer.observe(this)
})

doc.on('scroll', function () 
{  
    let winScroll = win.scrollTop()
    let height = doc.height() - win.height()

    const scrolled = (winScroll / height) * 100

    $('.scroll-progress').width(scrolled + '%')
    $('.nav-wrapper').css('background-color', scrolled > 0 ? '#0C1014' : '#16181B')
})

$('.hamburger-wrapper').click(function()
{
    let width = $('.side-bar').outerWidth()

    if ($('.side-bar').css('right') == '-' + width + 'px')
    {
        $('.side-bar').css('right', '0px')
        $('.hamburger-wrapper').addClass('open')

        if (win.width() <= 425)
        {
            $('body').css('overflow-y', 'hidden')
        }
        
        $(document).mouseup(function (e) 
        { 
            if ((!$('.side-bar').is(e.target) && $('.side-bar').has(e.target).length === 0) 
                || $('.mob-nav').is(e.target)) 
            {
                $(document).off('mouseup')
                $('.hamburger-wrapper').removeClass('open')
                $('.side-bar').css('right', '-' + width + 'px')

                if (win.width() <= 425)
                {
                    $('body').css('overflow-y', 'scroll')
                }
            }
        })
    }
    else
    {
        $(document).removeAttr('click')
        $('.hamburger-wrapper').removeClass('open')
        $('.side-bar').css('right', '-' + width + 'px')

        if (win.width() <= 425)
        {
            $('body').css('overflow-y', 'scroll')
        }
    }
})