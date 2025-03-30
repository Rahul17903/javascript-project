/*
let output = document.getElementById('output');

let htmlCodeBox = document.getElementById('code-editor-html')
let cssCodeBox = document.getElementById('code-editor-css')
let javascriptBox = document.getElementById('code-editor-javascript')

// let htmlEditor = CodeMirror.fromTextArea(htmlCodeBox, {
//     mode: 'css',
//     theme: 'darcula',
//     lineNumbers: true,
//     matchBrackets: true
// })

// let cssEditor = CodeMirror.fromTextArea(cssCodeBox, {
//     mode: 'css',
//     theme: 'darcula',
//     lineNumbers: true,
//     matchBrackets: true
// })

// let javaScriptEditor = CodeMirror.fromTextArea(javascriptBox, {
//     mode: "javascript",
//     theme: "darcula",
//     lineNumbers: true,
//     matchBrackets: true
// });



let allInputs = [htmlCodeBox, cssCodeBox, javascriptBox]

let htmlCode, cssCode, javascriptCode = ''

allInputs.forEach((element, index) => {
    element.addEventListener('keyup', () => {
        if(index == 0) {
            htmlCode = element.value;
        }
        if(index == 1){
            cssCode = element.value;
        }
        if(index == 2){
            javascriptCode = element.value;
        }

        output.contentDocument.body.innerHTML = htmlCode;
        output.contentDocument.head.innerHTML = `<style>${cssCode}</style>`
        output.contentWindow.eval(javascriptCode)
    })
})

*/

/*
// Initialize CodeMirror Editors
const htmlEditor = CodeMirror.fromTextArea(document.getElementById("code-editor-html"), {
    mode: "htmlmixed",
    theme: "dracula",
    lineNumbers: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    tabSize: 4,
    extraKeys: { "Tab": cm => cm.replaceSelection("    ") } // Replace tab with 4 spaces
});

const cssEditor = CodeMirror.fromTextArea(document.getElementById("code-editor-css"), {
    mode: "css",
    theme: "dracula",
    lineNumbers: true,
    autoCloseBrackets: true,
    tabSize: 4,
    extraKeys: { "Tab": cm => cm.replaceSelection("    ") }
});

const jsEditor = CodeMirror.fromTextArea(document.getElementById("code-editor-javascript"), {
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
    autoCloseBrackets: true,
    tabSize: 4,
    extraKeys: { "Tab": cm => cm.replaceSelection("    ") }
});

// Function to update iframe output
function updateOutput() {
    const htmlCode = htmlEditor.getValue();
    const cssCode = `<style>${cssEditor.getValue()}</style>`;
    const jsCode = `<script>${jsEditor.getValue()}<\/script>`;

    const outputFrame = document.getElementById("output").contentWindow.document;
    outputFrame.open();
    outputFrame.write(htmlCode + cssCode + jsCode);
    outputFrame.close();
}

// Add event listeners for live updates
htmlEditor.on("change", updateOutput);
cssEditor.on("change", updateOutput);
jsEditor.on("change", updateOutput);
*/

// Initialize CodeMirror Editors
const htmlEditor = CodeMirror.fromTextArea(document.getElementById("code-editor-html"), {
    mode: "htmlmixed",
    theme: "dracula",
    lineNumbers: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    tabSize: 4,
    extraKeys: { "Tab": cm => cm.replaceSelection("    ") }
});

const cssEditor = CodeMirror.fromTextArea(document.getElementById("code-editor-css"), {
    mode: "css",
    theme: "dracula",
    lineNumbers: true,
    autoCloseBrackets: true,
    tabSize: 4,
    extraKeys: { "Tab": cm => cm.replaceSelection("    ") }
});

const jsEditor = CodeMirror.fromTextArea(document.getElementById("code-editor-javascript"), {
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
    autoCloseBrackets: true,
    tabSize: 4,
    extraKeys: { "Tab": cm => cm.replaceSelection("    ") }
});

// Update Output
function updateOutput() {
    const htmlCode = htmlEditor.getValue();
    const cssCode = `<style>${cssEditor.getValue()}</style>`;
    const jsCode = `<script>${jsEditor.getValue()}<\/script>`;

    const outputFrame = document.getElementById("output").contentWindow.document;
    outputFrame.open();
    outputFrame.write(htmlCode + cssCode + jsCode);
    outputFrame.close();
}

htmlEditor.on("change", updateOutput);
cssEditor.on("change", updateOutput);
jsEditor.on("change", updateOutput);

// Dark/Light Mode Toggle
document.querySelector(".theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});

// Custom Theme Selector
document.querySelector(".theme-select").addEventListener("change", (event) => {
    const selectedTheme = event.target.value;
    htmlEditor.setOption("theme", selectedTheme);
    cssEditor.setOption("theme", selectedTheme);
    jsEditor.setOption("theme", selectedTheme);
});

// Download Code
document.querySelector(".download-btn").addEventListener("click", () => {
    const code = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <style>${cssEditor.getValue()}</style>
    </head>
    <body>
        ${htmlEditor.getValue()}
        <script>${jsEditor.getValue()}<\/script>
    </body>
    </html>
    `;

    const blob = new Blob([code], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "code.html";
    a.click();
});

// Fullscreen Mode
document.querySelector(".fullscreen-btn").addEventListener("click", () => {
    document.documentElement.requestFullscreen();
});
