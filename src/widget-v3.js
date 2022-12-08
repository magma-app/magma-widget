"use strict";

const HELPEE_SIGN_UP_BASE_URL = "https://v3.magma.app";

const moreCss = {
  ifria: `
        button.magma-contact {
            background: #d2eeee;
            color: #0a6e77;
            z-index: 1;
            border-radius: 45px;
            height: 36px;
            position: relative;
        }
    `,
  magma: `
        button.magma-contact {
            background: #d2eeee;
            color: #0a6e77;
            z-index: 10000;
            border-radius: 2px;
            height: 90px;
            position: relative;
        }
    `,
  openClassrooms: `
        button.magma-contact {
            margin-bottom: 10px;
            padding: 8px 16px;
            border-radius: 4px;
            line-height: 20px;
            text-transform: uppercase;
            color: #7451eb;
            background-color: transparent;
            box-shadow: none;
            max-width: fit-content;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            margin: auto;
        }
        button.magma-contact:hover {
            background-color: transparent;
            color: #7451eb;
        }
    `,
};

class MagmaWidget extends HTMLElement {
  static get tag() {
    return "magma-widget";
  }

  constructor() {
    super();
    this.$shadow = this.attachShadow({ mode: "open" });
    this.font();
    this.style();
  }

  connectedCallback() {
    this.modal();
    this.button();
  }

  modal() {
    this.$modal = document.createElement("div");
    this.$modal.className = "magma-modal";

    this.iframe();
    this.closeModalButton();

    this.$shadow.appendChild(this.$modal);
  }

  // get where the user come from
  getOrigin() {
    return window.location.origin;
  }

  getReferrer() {
    return document.referrer;
  }

  iframe() {
    const identifierOrganization = this.getAttribute("identifier-organization") || this.getAttribute("identifier") || "";
    const identifierCampaign = this.getAttribute("identifier-campaign") || "";
    const source = this.getAttribute("source") || "";

    console.log('referrer', this.getReferrer());
    console.log('origin', this.getOrigin());

    this.$iframe = document.createElement("iframe");
    this.$iframe.src = identifierCampaign ?
      `${HELPEE_SIGN_UP_BASE_URL}/helpee-signup/${identifierCampaign}?widget=true${source ? `&source=${source}` : ""}`
      : `${HELPEE_SIGN_UP_BASE_URL}/helpee-campaigns/${identifierOrganization}?widget=true${source ? `&source=${source}` : ""}`;
    this.$iframe.loading = "lazy";
    this.$modal.appendChild(this.$iframe);
  }

  closeModalButton() {
    let $closeModalButton = document.createElement("button");
    $closeModalButton.className = "magma-close";
    $closeModalButton.onclick = (event) => this.$modal.classList.remove("show");
    $closeModalButton.innerHTML = '<div class="magma-close-text">&times;</div>';

    this.$modal.appendChild($closeModalButton);
  }

  button() {
    this.$button = document.createElement("button");
    this.$button.className = "magma-contact";
    if (this.hasAttribute("fab")) {
      this.$button.classList.add("fab");
    }
    this.$button.onclick = (event) => {
      this.$iframe.contentWindow.postMessage(
        "onClickButtonWidgetMagma",
        HELPEE_SIGN_UP_BASE_URL
      );
      return this.$modal.classList.add("show");
    };

    if (!this.hasAttribute("hide-img")) {
      let $img1 = document.createElement("img");

      $img1.loading = "lazy";
      $img1.src =
        "data:image/png;base64,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";

      let $img2 = document.createElement("img");
      $img2.loading = "lazy";
      $img2.src =
        "data:image/png;base64,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";

      this.$button.appendChild($img1);
      this.$button.appendChild($img2);
    }

    let $span = document.createElement("span");

    if (this.hasAttribute("name")) {
      $span.innerText = this.getAttribute("name");
    } else if (
      this.hasAttribute("name-fr") &&
      navigator.language.includes("fr")
    ) {
      $span.innerText = this.getAttribute("name-fr");
    } else if (this.hasAttribute("name-en")) {
      $span.innerText = this.getAttribute("name-en");
    } else {
      $span.innerText = navigator.language.includes("fr")
        ? "Parle à un étudiant"
        : "Talk with a student";
    }
    if (this.getAttribute("custom-css-name")) {
      this.style(moreCss[this.getAttribute("custom-css-name")]);
    }

    this.$button.appendChild($span);

    this.$shadow.appendChild(this.$button);
  }

  font() {
    this.$link = document.createElement("link");
    this.$link.rel = "stylesheet";
    this.$link.href = "https://fonts.cdnfonts.com/css/sofia-pro";
    this.head = document.getElementsByTagName("head");
    this.head[0].appendChild(this.$link);
  }

  style(cssToAdd) {
    let $style = document.createElement("style");

    $style.textContent = `
            button.magma-contact {
				font-family: "Sofia Pro";
				font-style: normal;
				font-weight: 900;
                font-size: 12px;
                line-height: 12px;
                letter-spacing: 0.1em;
                --magma-ripple-color: rgba(2, 52, 54, .3);
                background-color: #D2EEEE;
                border: none;
                color: #0A6E77;
                text-transform: uppercase;
                border-radius: 9999px;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0 12px 0 7px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05), 0px 2px 4px rgba(0, 0, 0, 0.07), 0px 1px 2px rgba(0, 0, 0, 0.1);
                cursor: pointer;
            }

            button.magma-contact:hover {
                background-color: #0A6E77;
                color: #F8F9F8;
            }

            button.fab {
                position: fixed;
                bottom: 3rem;
                right: 3rem;
            }

            button.magma-contact img {
                border-radius: 50%;

            }

            button.magma-contact img:nth-child(1) {
                margin-left: -14px;
                z-index: 3;
                height: 28px;
                border: 4px solid #0A6E77;
            }


            button.magma-contact img:nth-child(2) {
                margin-left: -7px;
                margin-right: 10px;
                height: 20px;
                z-index: 2;
                border: 3px solid #0A6E77;
            }

            div.magma-modal {
                position: fixed;
                z-index: 9999;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #16222299;
                display: none;
                flex-direction: column;

                --magma-modal-padding-x: 1rem;
                --magma-modal-padding-y: 1rem;
                padding: var(--magma-modal-padding-x) var(--magma-modal-padding-y);
            }

            div.magma-modal.show {
                display: flex;
            }

            @media screen and (min-width: 968px) {
                div.magma-modal {
                    --magma-modal-padding-x: 2rem;
                    --magma-modal-padding-y: 4rem;
                }
            }

            div.magma-modal > iframe {
                flex: 1;
                border-radius: 2rem;
                border: none;
            }

            div.magma-modal button.magma-close {
                position: absolute;
                top: calc(var(--magma-modal-padding-x) + 2rem);
                right: calc(var(--magma-modal-padding-y) + 2rem);
                border-radius: 100%;
                background-color: #F8F9F8;
                color: #D8DEDE;
                border: none;
                outline: none;
                height: 3rem;
                width: 3rem;
                cursor: pointer;
                padding-left: 3px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            div.magma-modal button.magma-close:hover,
            div.magma-modal button.magma-close:active,
            div.magma-modal button.magma-close:focus {
                background-color: #D8DEDE;
                color: #617F80;
            }

            div.magma-modal button.magma-close .magma-close-text {
                font-size: 2rem;
                font-family: Arial;
                align-self: center;
                padding-top: 3px;
                padding-left: 1px;
            }

            @keyframes ripple {
                0% {
                  box-shadow: -0px 0 0 0 var(--magma-ripple-color),
                    -0px 0 0 0px var(--magma-ripple-color),
                    -0px 0 0 .5px var(--magma-ripple-color),
                    -0px 0 0 1px var(--magma-ripple-color);
                }
                100% {
                  box-shadow: -0px 0 0 0 var(--magma-ripple-color),
                    -0px 0 0 3px var(--magma-ripple-color),
                    -0px 0 0 6px var(--magma-ripple-color),
                    -0px 0 0 9px var(--magma-ripple-color);
                }
            }
        ${cssToAdd || ""}
            `;
    this.$shadow.appendChild($style);
  }
}

customElements.define(MagmaWidget.tag, MagmaWidget);
