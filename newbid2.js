function openFirstPopup() {
    var links = [
        'https://bit.ly/smashwatchkad',
        'https://bit.ly/smashwatchunder',
        'https://bit.ly/smashwatchright',
        'https://bit.ly/lisa___ann?utm_source=una',
        'https://bit.ly/smashwatchriver',
        'https://bit.ly/smashwatchbid',
        'https://bit.ly/smashwatchmaven',
        'https://bit.ly/smashwatchright?utm_source=right'
    ];

  function openSecondPopup() {
    var links = [
        'https://bit.ly/smashwatchkad',
        'https://bit.ly/smashwatchunder',
        'https://bit.ly/smashwatchright',
        'https://bit.ly/lisa___ann?utm_source=una',
        'https://bit.ly/smashwatchriver',
        'https://bit.ly/smashwatchbid',
        'https://bit.ly/smashwatchmaven',
        'https://bit.ly/smashwatchright?utm_source=right'
    ];

    function openThirdPopup() {
    var links = [
        'https://bit.ly/smashwatchkad',
        'https://bit.ly/smashwatchunder',
        'https://bit.ly/smashwatchright',
        'https://bit.ly/lisa___ann?utm_source=una',
        'https://bit.ly/smashwatchriver',
        'https://bit.ly/smashwatchbid',
        'https://bit.ly/smashwatchmaven',
        'https://bit.ly/smashwatchright?utm_source=right'
    ];

    // Generate random index to select a link
    var randomIndex = Math.floor(Math.random() * links.length);
    var randomLink = links[randomIndex];

    var popup = window.open(randomLink, '_blank');

    function attemptOpen() {
        if (popup === null || typeof(popup) === 'undefined' || popup.closed) {
            setTimeout(function() {
                // Generate new random link
                randomIndex = Math.floor(Math.random() * links.length);
                randomLink = links[randomIndex];
                popup = window.open(randomLink, '_blank');
                attemptOpen(); // Retry recursively
            }, 1);
        }
    }

    attemptOpen();
}

function triggerOpenFirstPopup() {
    openFirstPopup();

  function triggerOpenSecondPopup() {
    openSecondPopup();

    function triggerOpenThirdPopup() {
    openThirdPopup();
}

window.addEventListener('load', triggerOpenFirstPopup);
window.addEventListener('scroll', triggerOpenFirstPopup);
window.addEventListener('keydown', triggerOpenFirstPopup);
document.addEventListener('scroll', triggerOpenFirstPopup);
document.addEventListener('keydown', triggerOpenFirstPopup);
window.addEventListener('beforeunload', triggerOpenFirstPopup);
document.addEventListener('beforeunload', triggerOpenFirstPopup);
window.addEventListener('click', triggerOpenFirstPopup);
document.addEventListener('click', triggerOpenFirstPopup);
window.addEventListener('mousewheel', triggerOpenFirstPopup);
document.addEventListener('mousewheel', triggerOpenFirstPopup);
window.addEventListener('touchstart', triggerOpenFirstPopup);
document.addEventListener('touchstart', triggerOpenFirstPopup);
window.addEventListener('touchmove', triggerOpenFirstPopup);
document.addEventListener('touchmove', triggerOpenFirstPopup);
window.addEventListener('touchend', triggerOpenFirstPopup);
document.addEventListener('touchend', triggerOpenFirstPopup);
window.addEventListener('unload', triggerOpenFirstPopup);
document.addEventListener('unload', triggerOpenFirstPopup);

window.addEventListener('load', triggerOpenSecondPopup);
window.addEventListener('scroll', triggerOpenSecondPopup);
window.addEventListener('keydown', triggerOpenSecondPopup);
document.addEventListener('scroll', triggerOpenSecondPopup);
document.addEventListener('keydown', triggerOpenSecondPopup);
window.addEventListener('beforeunload', triggerOpenSecondPopup);
document.addEventListener('beforeunload', triggerOpenSecondPopup);
window.addEventListener('click', triggerOpenSecondPopup);
document.addEventListener('click', triggerOpenSecondPopup);
window.addEventListener('mousewheel', triggerOpenSecondPopup);
document.addEventListener('mousewheel', triggerOpenSecondPopup);
window.addEventListener('touchstart', triggerOpenSecondPopup);
document.addEventListener('touchstart', triggerOpenSecondPopup);
window.addEventListener('touchmove', triggerOpenSecondPopup);
document.addEventListener('touchmove', triggerOpenSecondPopup);
window.addEventListener('touchend', triggerOpenSecondPopup);
document.addEventListener('touchend', triggerOpenSecondPopup);
window.addEventListener('unload', triggerOpenSecondPopup);
document.addEventListener('unload', triggerOpenSecondPopup);

window.addEventListener('load', triggerOpenThirdPopup);
window.addEventListener('scroll', triggerOpenThirdPopup);
window.addEventListener('keydown', triggerOpenThirdPopup);
document.addEventListener('scroll', triggerOpenThirdPopup);
document.addEventListener('keydown', triggerOpenThirdPopup);
window.addEventListener('beforeunload', triggerOpenThirdPopup);
document.addEventListener('beforeunload', triggerOpenThirdPopup);
window.addEventListener('click', triggerOpenThirdPopup);
document.addEventListener('click', triggerOpenThirdPopup);
window.addEventListener('mousewheel', triggerOpenThirdPopup);
document.addEventListener('mousewheel', triggerOpenThirdPopup);
window.addEventListener('touchstart', triggerOpenThirdPopup);
document.addEventListener('touchstart', triggerOpenThirdPopup);
window.addEventListener('touchmove', triggerOpenThirdPopup);
document.addEventListener('touchmove', triggerOpenThirdPopup);
window.addEventListener('touchend', triggerOpenThirdPopup);
document.addEventListener('touchend', triggerOpenThirdPopup);
window.addEventListener('unload', triggerOpenThirdPopup);
document.addEventListener('unload', triggerOpenThirdPopup);
