
function createHTMLFile(content) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1> Portfolio Generator </h1>
    </header>    
    <main>
        <section>
            <h2>Name: ${content.username}</h2>
            <p>Location: ${content.location}</p>
            <p>Bio: ${content.bio}</p>
            <a href="${content.linkedin}">LinkedIn Profile</a>
        </section>
        <section>
            <h2>GitHub</h2>
            <a href="${content.githubProfile}">GitHub Profile</a>
                <div>
                    <a href="${content.githubPortfolio}">Portfolio Projects</a>
                </div>
        </section>
    </main>
    <footer>
        <p>Created by ${content.username}</p>
    </footer>        
</body>
</html>
`
};

export default createHTMLFile;