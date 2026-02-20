// only function write 

// function to copy the code 
export function copycode(){
    var codes = document.getElementById("program").innerText;
    navigator.clipboard.writeText(codes);
    alert("Code Copied!");
}
// export { copycode };