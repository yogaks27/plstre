// Custom JS to hide loader
window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
    }, 1000); // Adjust this delay as needed
});

// Disable text selection and context menu
document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('copy', function (e) {
        e.preventDefault();
    });

    document.body.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    document.body.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });
});

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (error) {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}
