function getUserData(){
    // Fetch user data from the API
    return fetch('/api/user')
        .then(response => response.json())
        .then(data => {
            // Update the UI with user data
            document.getElementById('username').innerText = data.username;
            document.getElementById('email').innerText = data.email;
            document.getElementById('profilePicture').src = data.profilePicture;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}  