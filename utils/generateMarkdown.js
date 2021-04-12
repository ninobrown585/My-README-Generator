// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license=== "MIT"){
    return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  } if(license=== "BOOST"){
    return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg';
  } if(license=== "APACHE 2.0") {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  } if(license=== "BSD 2") {
    return 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg';
  } else{
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license=== "MIT"){
    return 'https://opensource.org/licenses/MIT';
  } if(license=== "BOOST"){
    return 'https://www.boost.org/LICENSE_1_0.txt';
  } if(license=== "APACHE 2.0") {
    return 'https://opensource.org/licenses/Apache-2.0';
  } if(license=== "BSD 2") {
    return 'https://opensource.org/licenses/BSD-2-Clause';
  } else{
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license=== "MIT"){
    return license
  } if(license=== "BOOST"){
    return license
  } if(license=== "APACHE 2.0") {
    return license
  } if(license=== "BSD 2") {
    return license
  } else{
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  
      
       ${data.License}

      # description:
      ${data.Description}

      # TABLE OF CONTENTS:
      * [Description](#description)
      * [Installation](#installation)
      * [Usage](#usage)
      * [Tests](#tests)
      * [License](#license)
      * [Contributors](#contributing)
      * [Questions](#questions)
     
      # installation:
       \n Here is the info for my installation  ${data.Installation}
      # usage:
        \n To use app:  ${data.Usage}
      # tests:
        \n ${data.Tests}
      # license:
        \n ${renderLicenseSection(data.License)}${renderLicenseBadge(data.License)}${renderLicenseLink(data.license)}
      # contributors:
       \n Contributor to this project is ${data.Contributing}
      # questions:
        ${data.Questions}
        \n Feel free to Contact the me at ${data.Email}
        \n This Project can also be viewed in my GitHub at: [GitHub](http://github.com/${data.Url})
        
     
      
    `;
    }
    
    module.exports = generateMarkdown;




