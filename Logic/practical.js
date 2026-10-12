// =========================================================
  //   C WEBASSEMBLY RUNNER
//========================================================= -->

let cCompiler = null;

const runBtn = document.getElementById("runBtn");
const copyBtn = document.getElementById("copyBtn");
const clearOutput = document.getElementById("clearOutput");

const programCode = document.getElementById("programCode");
const programInput = document.getElementById("programInput");
const programOutput = document.getElementById("programOutput");
const compileStatus = document.getElementById("compileStatus");


/* =========================================================
   CREATE C COMPILER
========================================================= */

async function getCCompiler() {

    if (cCompiler) {
        return cCompiler;
    }

    compileStatus.textContent = "Loading compiler...";

    programOutput.className = "program-output running";

    programOutput.textContent =
        "Loading C compiler...\n\n" +
        "First time loading may take a little while.\n" +
        "Please wait...";


    try {

        cCompiler = await clangWasm.createCompiler("c", {

            baseUrl:
                "https://cdn.jsdelivr.net/npm/@live-codes/clang-wasm@0.2.0/",

            std: "gnu17",

            onProgress: function (value) {

                const percent =
                    Math.round(value * 100);

                compileStatus.textContent =
                    "Loading " + percent + "%";

                programOutput.textContent =
                    "Loading C compiler...\n\n" +
                    percent +
                    "%";
            }

        });


        compileStatus.textContent = "Ready";

        return cCompiler;

    } catch (error) {

        compileStatus.textContent = "Compiler Error";

        throw error;
    }
}



/* =========================================================
// Java Program Copy Button
========================================================= */
document.getElementById("copyBtn").addEventListener("click", async function () {

    const code = document.getElementById("programCode");
    const button = this;
    const span = button.querySelector("span");

    try {
        await navigator.clipboard.writeText(code.value);

        span.textContent = "Copied!";

        setTimeout(() => {
            span.textContent = "Copy Code";
        }, 1500);

    } catch (error) {
        console.error("Code copy failed:", error);
    }

});
/* =========================================================
// Java Program Output Copy Button
========================================================= */

document.getElementById("copyOutputBtn").addEventListener("click", async function () {

    const output = document.getElementById("programOutput");
    const button = this;
    const span = button.querySelector("span");

    try {
        await navigator.clipboard.writeText(output.value);

        span.textContent = "Copied!";

        setTimeout(() => {
            span.textContent = "Copy Output";
        }, 1500);

    } catch (error) {
        console.error("Output copy failed:", error);
    }

});