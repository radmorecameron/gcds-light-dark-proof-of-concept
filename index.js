document.addEventListener('gcdsClick', (e) => {
    if (e.target.className.includes('dark-mode')) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
})
