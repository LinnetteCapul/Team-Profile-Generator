const generateManagerCard = (manager) => {
    return `
        <div class="card">
            <h3>${manager.getName}<h3>
            <p><i class="fa-solid fa-mug=hot"></i>${manager.getRole()}</p>
            <div class="card-body>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    `
};

const generateEngineerCard = (engineer) => {
    return `
        <div class="card">
            <h3>${engineer.getName}<h3>
            <p><i class="fa-solid fa-glasses"></i>${engineer.getRole()}</p>
            <div class="card-body>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
    `
};

const generateInternCard = (intern) => {
    return `
        <div class="card">
            <h3>${intern.getName}<h3>
            <p><i class="fa-solid fa-user-graduate"></i>${intern.getRole()}</p>
            <div class="card-body>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    `
};