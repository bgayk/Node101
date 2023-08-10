
const inquirer = require(`inquirer`);
const fs = require(`fs`);

inquirer
  .prompt([
    {
      type: `input`,
      message: `What is your name?`,
      name: `username`,
    },
    {
      type: `input`,
      message: `What is your location?`,
      name: `location`,
    },
    {
      type: `input`,
      message: `What is your bio?`,
      name: `bio`,
    },
    {
        type: `input`,
        message: `What is your LinkedIn URL?`,
        name: `linkedinURL`,
      },
      {
        type: `input`,
        message: `What is your GitHubURL?`,
        name: `githubURL`,
      }
      ])
  .then((response) =>
    {  // Create an index.html file containing the data collected from the user
        fs.writeFile(`index.html`, 
            `<!DOCTYPE html>` + `\n` +
            `<html lang="en">` + `\n` +
            `<head>` + `\n` +
            `    <meta charset="UTF-8">` + `\n` +
            `    <meta name="viewport" content="width=device-width, initial-scale=1.0">` + `\n` +
            `    <meta http-equiv="X-UA-Compatible" content="ie=edge">` + `\n` +
            `    <title>This is about you: ${response.username} </title>` + `\n` +
            `</head>` + `\n` +
            `<body>` + `\n` +
            `    <h1>UserName: ${response.username}</h1>` + `\n` +
            `    <h2>Location: ${response.location}</h2>` + `\n` +
            `    <h3>     Bio: ${response.bio}</h3>` + `\n` +
            `    <h3>LinkedIn: ${response.linkedinURL}</h3>` + `\n` +
            `    <h3>  GitHub: ${response.githubURL}</h3>` + `\n` +
            `</body>` + `\n` +
            `</html>`, (err) => err ? console.error(err) : console.log(`Commit logged!`)
        );        
    }
  );
