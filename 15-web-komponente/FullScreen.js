class FullScreen extends HTMLElement {
  constructor() {
    super()
    this.addEventListener('click', this.toggleFullScreen)
    this.innerHTML = `
      <style>
        #punekran {
          top: 10px;
          left: 10px;
          background: white;
          padding: 4px;
          cursor: pointer;
          opacity: 0.75;
          position: absolute;
          width: 32px;
          z-index: 1;
        }
      </style>

      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/OOjs_UI_icon_fullScreen.svg" width="32" id="punekran" alt="pun ekran" title="Full screen">
    `
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.body.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

}

customElements.define('pun-ekran', FullScreen)
