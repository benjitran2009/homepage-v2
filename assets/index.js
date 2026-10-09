// do it in a iife
(() => {
    class Terminal {
        /**@type {(HTMLDivElement) => void} */
        constructor(element) {
            /**@type {HTMLDivElement} */
            this.element = element;
            return this
        }
        /**@type {(color: string|number, text: string, bold?: boolean) => void} */
        advLog(color, text, bold) {
            const logElement = document.createElement("span");
            logElement.style.color = color;
            logElement.innerText = text;
            if (bold) logElement.style.fontWeight = "bold";
            this.element.append(logElement);
        }
        log() {
            this.advLog("white", arguments.join(" "));
        }
        warn() {
            this.advLog("orange", arguments.join(" "), true);
        }
        error() {
            this.advLog("red", arguments.join(" "), true);
        }
    }
    
    const $ = document.querySelector;
    const terminal = new Terminal($("#terminal"));
    
    

})();