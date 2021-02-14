//ES5
const htmlContent = '<html>'+
                    '<head>'+
                    '<title>HOME</title>'+
                    '</head>'+
                    '<body>My Webpage</body>'+
                    '</html>'

console.log(htmlContent);


//ES 6

const content = "Hello "

const htmlContentNew = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HOME</title>
</head>
<body>
    ${content}
    ${5+3}
</body>
</html>
`

console.log(htmlContentNew);




