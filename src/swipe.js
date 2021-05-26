function initSwipeEvents(element) {
    element.addEventListener('touchstart', handleTouchStart, false);        
    element.addEventListener('touchmove', handleTouchMove, false);

    let xDown = null;                                                        
    let yDown = null;

    function getTouches(evt) {
        return evt.touches || evt.originalEvent.touches;
    };

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      

        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };

    function handleTouchMove(evt) {
        if (!xDown || !yDown ) return;

        let xUp = evt.touches[0].clientX;                                    
        let yUp = evt.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                let event = new CustomEvent('swipeleft', {
                    detail: {
                        x: xDiff,
                        y: yDiff
                    }
                });

                element.dispatchEvent(event);
            } else {
                let event = new CustomEvent('swiperight', {
                    detail: {
                        x: xDiff,
                        y: yDiff
                    }
                });

                element.dispatchEvent(event);
            }                       
        } else {
            if (yDiff > 0) {
                let event = new CustomEvent('swipeup', {
                    x: xUp,
                    y: yUp
                });

                element.dispatchEvent(event);
            } else {
                let event = new CustomEvent('swipedown', {
                    x: xDown,
                    y: yDown
                });

                element.dispatchEvent(event);
            }
        }

        xDown = null;
        yDown = null;                                             
    };
}