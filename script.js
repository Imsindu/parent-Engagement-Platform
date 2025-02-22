// Function to add an announcement
function addAnnouncement() {
    const input = document.getElementById('announcementInput');
    const announcementList = document.getElementById('announcementList');
    if (input.value.trim() === '') {
        alert('Please enter an announcement.');
        return;
    }
    const newAnnouncement = document.createElement('div');
    newAnnouncement.textContent = input.value;
    announcementList.appendChild(newAnnouncement);
    input.value = ''; // Clear the input field
}

// Function to add an event
function addEvent() {
    const input = document.getElementById('eventInput');
    const eventList = document.getElementById('eventList');
    if (input.value.trim() === '') {
        alert('Please enter an event.');
        return;
    }
    const newEvent = document.createElement('div');
    newEvent.textContent = input.value;
    eventList.appendChild(newEvent);
    input.value = ''; // Clear the input field
}

// Function to send a message
function sendMessage() {
    const input = document.getElementById('messageInput');
    const messageList = document.getElementById('messageList');
    if (input.value.trim() === '') {
        alert('Please enter a message.');
        return;
    }
    const newMessage = document.createElement('div');
    newMessage.textContent = input.value;
    messageList.appendChild(newMessage);
    input.value = ''; // Clear the input field
}

// Function to add a resource
function addResource() {
    const input = document.getElementById('resourceInput');
    const resourceList = document.getElementById('resourceList');
    if (input.value.trim() === '') {
        alert('Please enter a resource link.');
        return;
    }
    const newResource = document.createElement('div');
    newResource.textContent = input.value;
    resourceList.appendChild(newResource);
    input.value = ''; // Clear the input field
}

// Function to submit feedback
function submitFeedback() {
    const input = document.getElementById('feedbackInput');
    const feedbackList = document.getElementById('feedbackList');
    if (input.value.trim() === '') {
        alert('Please enter your feedback.');
        return;
    }
    const newFeedback = document.createElement('div');
    newFeedback.textContent = input.value;
    feedbackList.appendChild(newFeedback);
    input.value = ''; // Clear the input field
}