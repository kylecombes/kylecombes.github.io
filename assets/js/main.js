function initPhotoSwipeFromDOM(projectSelector) {

    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    let parseThumbnailElements = function(projectElem) {
        let figureElems = projectElem.querySelectorAll('FIGURE'),
            numNodes = figureElems.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for (let i = 0; i < numNodes; i++) {

            figureEl = figureElems[i]; // <figure> element

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
    let closest = function closest(elem, selectorName, selectorValue, maxHeight=-1, currHeight=0) {
        if (!elem || maxHeight >= 0 && currHeight > maxHeight)
            return null; // Exceeded search height
        return elem[selectorName] === selectorValue
            ?  elem
            : closest(elem.parentNode, selectorName, selectorValue, maxHeight, currHeight+1);
    };

    // triggers when user clicks on thumbnail
    let onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        let clickedItem = e.target || e.srcElement;

        // find root element of slide
        let figureElem = closest(clickedItem, 'tagName', 'FIGURE', 5);
        let projectElem = closest(clickedItem, 'className', 'project', 5);
        let featuredElem = projectElem.querySelector('.featured-image');
        let featuredClicked = featuredElem && figureElem === featuredElem.children[0];

        if(!projectElem) {
            console.error('Could not find gallery parent <project> elem');
            return;
        }

        let index = 0;
        
        if (!featuredClicked) {
            index = -1;
            let gallery = projectElem.querySelector('.gallery');
            let nodeIndex = 0;
            for (let i = 0; i < gallery.childElementCount; ++i) {
                if (gallery.children[i] === figureElem) {
                    index = nodeIndex + !!featuredElem; // Add one for the featured image, if one exists
                    break;
                } else {
                    ++nodeIndex;
                }
            }

        }

        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, projectElem );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    let photoswipeParseHash = function() {
        let hash = window.location.hash.substring(1),
            params = {};

        if(hash.length < 5) {
            return params;
        }

        let lets = hash.split('&');
        for (let i = 0; i < lets.length; i++) {
            if(!lets[i]) {
                continue;
            }
            let pair = lets[i].split('=');
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

    let openPhotoSwipe = function(index, projectElem, disableAnimation) {
        let pswpElement = document.querySelector('.pswp'),
            gallery,
            options,
            items;

        items = parseThumbnailElements(projectElem);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: projectElem.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                let thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        options.index = index;

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
    let projectElements = document.querySelectorAll( projectSelector );

    for (let i = 0, l = projectElements.length; i < l; i++) {
        const featuredElem = projectElements[i].querySelector('.featured-image');
        if (featuredElem) {
            featuredElem.setAttribute('data-pswp-uid', i+1);
            featuredElem.onclick = onThumbnailsClick;
        }
        const galleryElem = projectElements[i].querySelector('.gallery');
        if (galleryElem) {
            galleryElem.setAttribute('data-pswp-uid', i + 1);
            galleryElem.onclick = onThumbnailsClick;
        }
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    let hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  projectElements[ hashData.gid - 1 ], true, true );
    }
}

var emailDisplay = "kcombes"
  + "@"
  + "olin.edu";
var emailLink = "mailto:<Kyle Combes> " + emailDisplay;
var phoneDisplay = "(808) " + "989-" + "4355";
var phoneLink = "tel:808" + "989" + "4355";