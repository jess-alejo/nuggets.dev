import { Controller } from "@hotwired/stimulus"
import hljs from "highlight.js"

// Connects to data-controller="code-highlight"
export default class extends Controller {
  connect() {
    console.log("code highlight")
    // $('pre code').each(function(i, block) {
    //   hljs.highlightBlock(block);
    // });

    hljs.highlightAll()
  }
}
