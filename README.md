# Mathsetter

## Description
Render Math equations and Chemistry equations!

This app allows for easy editing of math in the browser.
It can render in realtime, and then render to an image for
easy transport to things like PDFs, GoogleDocs, etc.

It uses *MathJax* to power its rendering, meaning *MathML*,
*Latex*, and *ASCIIMath* can be used to enter math.
The GUI interface uses *MathML* to store equations.

## Development npm scripts

```
npm run start           # Start the node js server
npm run dev             # Start the node js server with nodemon
npm run build           # Start webpack (build the bundle js file)
npm run killNodeWin     # Kill all node processes in Windows
npm run killNodeLinux   # Kill all node processes in Linux and Mac Os
```