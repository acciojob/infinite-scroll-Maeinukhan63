//your code here!
document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('infi-list');
    
    // Function to create and append new list items
    function addItems(count) {
        for (let i = 0; i < count; i++) {
            const li = document.createElement('li');
            li.textContent = `Item ${list.children.length + 1}`;
            list.appendChild(li);
        }
    }

    // Initial load of 10 items
    addItems(10);

    // Function to check if the user has scrolled to the bottom
    function isScrolledToBottom() {
        const scrollTop = list.scrollTop;
        const scrollHeight = list.scrollHeight;
        const clientHeight = list.clientHeight;
        return scrollTop + clientHeight >= scrollHeight - 1;
    }

    // Event listener for scroll events
    list.addEventListener('scroll', () => {
        if (isScrolledToBottom()) {
            addItems(2); // Add 2 more items when scrolled to bottom
        }
    });
});

