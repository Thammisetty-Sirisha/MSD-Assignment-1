document.addEventListener('DOMContentLoaded', () => {
    fetch('http://127.0.0.1:3000/api/data')
    .then(response => response.json())
    .then(data => {
        
        const userData = data.map(user => `
            <tr>
            <td>${user.UserName}</td>
            <td>${user.Name}</td>
            <td>${user.Branch}</td>
            <td>${user.QuestionsSolved}</td>
            <td>${user.Score}</td>
            <td>${user.Platform}</td>
            </tr>
        `).join('' );

        document.getElementById('json-data-holder').innerHTML = userData;
    })
});