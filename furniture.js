var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
        if(changeIcon === false){
          $('html').css("overflow-y", "hidden")
          $('#hamburger').css("box-shadow", "unset")
        }
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
        if(changeIcon === true){
          $('html').css("overflow-y", "unset")
          $('#hamburger').css("box-shadow", "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)")
        }
    }
});

$("nav ul li a").click(function(){
  console.log("o");
  var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");
 
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    changeIcon = true;
    if(changeIcon === true){
      $('html').css("overflow-y", "unset")
      $('#hamburger').css("box-shadow", "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)")
    }

})

// End of Navbar 





var animation;

gsap.from(".about-flower",
 { yPercent: 0,
   x: 200, 
   ease: "none",
   scrollTrigger: {
        trigger: ".about-title", 
        start: "top center", 
        end:"top 20%",
        markers:false,
        scrub: true }});

    gsap.from(".about-content",
        { yPercent: 0,
          y: 200, 
          ease: "none",
          scrollTrigger: {
               trigger: ".about-title", 
               start: "top center", 
               end:"top 20%",
               markers:false,
               scrub: true }});


gsap.from(".service-frame-1",
{ yPercent: 0,
    y: 300, 
    duration:6,
    ease: "none",
    scrollTrigger: {
        trigger: ".service-title", 
        start: "top center", 
        end:"top 20%",
        markers:false,
        scrub: true }})

gsap.from(".service-frame-2",
{ yPercent: 0,
    y: 150, 
    duration:3,
    ease: "none",
    scrollTrigger: {
        trigger: ".service-title", 
        start: "top center", 
        end:"top 20%",
        markers:false,
        scrub: true }})

gsap.from(".service-frame-3",
{ yPercent: 0,
    y: 450, 
    duration:3,
    ease: "none",
    scrollTrigger: {
        trigger: ".service-title", 
        start: "top center", 
        end:"top 20%",
        markers:false,
        scrub: true }})


        gsap.from(".service-frame-4",
        { yPercent: 0,
            y: 300, 
            duration:6,
            ease: "none",
            scrollTrigger: {
                trigger: ".service-content", 
                start: "top 40%", 
                end:"top 5%",
                markers:!1,
                scrub: true }})
        
                gsap.from(".service-frame-5",
                { yPercent: 0,
                    y: 150, 
                    duration:6,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".service-content", 
                        start: "top 40%", 
                        end:"top 5%",
                        markers:!1,
                        scrub: true }})

                        gsap.from(".service-frame-6",
                        { yPercent: 0,
                            y: 400, 
                            duration:6,
                            ease: "none",
                            scrollTrigger: {
                                trigger: ".service-content", 
                                start: "top 40%", 
                                end:"top 5%",
                                markers:!1,
                                scrub: true }})
        

gsap.to(".why-us-flower",
{
    x: 200,
}
)
gsap.from(".why-us-flower",
{
    x: 200,
    scrollTrigger: {
        trigger: ".why-us", 
        start: "top 10%", 
        end:"20% top",
        markers:!1,
        scrub: true }
}
)

gsap.from(".why-us-content",
{ yPercent: 0,
    y: 250, 
    duration:3,
    ease: "none",
    scrollTrigger: {
        trigger: ".why-us", 
        start: "top 25%", 
        end:"10% 10%",
        markers:!1,
        scrub: true }})

gsap.to(".vas",
{
   y: 300,
})

gsap.to(".candle",
{
    y: 200,
})

gsap.from(".vas",
{ y:300,
    scrollTrigger: {
        trigger: ".why-us-content", 
        start: "-250 25%", 
        end:"-250 10%",
        markers:!1,
        scrub: true }})

gsap.from(".candle",
{ y:200,
    scrollTrigger: {
        trigger: ".why-us-content", 
        start: "-250 25%", 
        end:"-250 10%",
        markers:!1,
        scrub: true }})


        gsap.utils.toArray(".comparisonSection").forEach(section => {
            let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "center center",
                // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                        end: () => "+=" + section.offsetWidth, 
                        scrub: true,
                        pin: true,
                        anticipatePin: 1,
                    },
                    defaults: {ease: "none"}
                });
            // animate the container one way...
            tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
              // ...and the image the opposite way (at the same time)
              .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
        });


        

// Photoswipe
          

          var initPhotoSwipeFromDOM = function(gallerySelector) {

            // parse slide data (url, title, size ...) from DOM elements 
            // (children of gallerySelector)
            var parseThumbnailElements = function(el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    figureEl,
                    linkEl,
                    size,
                    item;
        
                for(var i = 0; i < numNodes; i++) {
        
                    figureEl = thumbElements[i]; // <figure> element
        
                    // include only element nodes 
                    if(figureEl.nodeType !== 1) {
                        continue;
                    }
        
                    linkEl = figureEl.children[0]; // <a> element
        
                    size = linkEl.getAttribute('data-size').split('x');
        
                    // create slide object
                    item = {
                        src: linkEl.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10)
                    };
        
        
        
                    if(figureEl.children.length > 1) {
                        // <figcaption> content
                        item.title = figureEl.children[1].innerHTML; 
                    }
        
                    if(linkEl.children.length > 0) {
                        // <img> thumbnail element, retrieving thumbnail url
                        item.msrc = linkEl.children[0].getAttribute('src');
                    } 
        
                    item.el = figureEl; // save link to element for getThumbBoundsFn
                    items.push(item);
                }
        
                return items;
            };
        
            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && ( fn(el) ? el : closest(el.parentNode, fn) );
            };
        
            // triggers when user clicks on thumbnail
            var onThumbnailsClick = function(e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
        
                var eTarget = e.target || e.srcElement;
        
                // find root element of slide
                var clickedListItem = closest(eTarget, function(el) {
                    return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
                });
        
                if(!clickedListItem) {
                    return;
                }
        
                // find index of clicked item by looping through all child nodes
                // alternatively, you may define index via data- attribute
                var clickedGallery = clickedListItem.parentNode,
                    childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;
        
                for (var i = 0; i < numChildNodes; i++) {
                    if(childNodes[i].nodeType !== 1) { 
                        continue; 
                    }
        
                    if(childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }
        
        
        
                if(index >= 0) {
                    // open PhotoSwipe if valid index found
                    openPhotoSwipe( index, clickedGallery );
                }
                return false;
            };
        
            // parse picture index and gallery index from URL (#&pid=1&gid=2)
            var photoswipeParseHash = function() {
                var hash = window.location.hash.substring(1),
                params = {};
        
                if(hash.length < 5) {
                    return params;
                }
        
                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if(!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');  
                    if(pair.length < 2) {
                        continue;
                    }           
                    params[pair[0]] = pair[1];
                }
        
                if(params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }
        
                return params;
            };
        
            var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;
        
                items = parseThumbnailElements(galleryElement);
        
                // define options (if needed)
                options = {
        
                    // define gallery index (for URL)
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),
        
                    getThumbBoundsFn: function(index) {
                        // See Options -> getThumbBoundsFn section of documentation for more info
                        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect(); 
        
                        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                    }
        
                };
        
                // PhotoSwipe opened from URL
                if(fromURL) {
                    if(options.galleryPIDs) {
                        // parse real index when custom PIDs are used 
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for(var j = 0; j < items.length; j++) {
                            if(items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        // in URL indexes start from 1
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }
        
                // exit if index not found
                if( isNaN(options.index) ) {
                    return;
                }
        
                if(disableAnimation) {
                    options.showAnimationDuration = 0;
                }
        
                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        
        
                gallery.init();
            };
        
            // loop through all gallery elements and bind events
            var galleryElements = document.querySelectorAll( gallerySelector );
        
            for(var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i+1);
                galleryElements[i].onclick = onThumbnailsClick;
            }
        
            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if(hashData.pid && hashData.gid) {
                openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
            }
        };
        
        // execute above function
        initPhotoSwipeFromDOM('.my-gallery');