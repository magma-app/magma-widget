'use strict'

class MagmaWidget extends HTMLElement
{
    static get tag() {
        return 'magma-widget'
    }

    constructor() {
        super()
        this.$shadow = this.attachShadow({ mode: 'open' })
        this.style()
    }

    connectedCallback() {
        this.modal()
        this.button()
    }

    modal() {
        this.$modal = document.createElement('div')
        this.$modal.className = 'magma-modal'

        this.iframe()
        this.closeModalButton()

        this.$shadow.appendChild(this.$modal)
    }

    iframe() {
        const identifier = this.getAttribute('identifier')
        this.$iframe = document.createElement('iframe')
        this.$iframe.src = `https://example.com/?id=${identifier}`
        this.$iframe.loading = 'lazy'
        this.$modal.appendChild(this.$iframe)
    }

    closeModalButton() {
        let $closeModalButton = document.createElement('button')
        $closeModalButton.className = 'magma-close'
        $closeModalButton.onclick = event => this.$modal.classList.remove('show')
        $closeModalButton.innerHTML = '<i>&times;</i>'

        this.$modal.appendChild($closeModalButton)
    }

    button() {
        this.$button = document.createElement('button')
        this.$button.className = 'magma-contact'
        if (this.hasAttribute('fab')) {
            this.$button.classList.add('fab')
        }
        this.$button.onclick = event => this.$modal.classList.add('show')

        let $img1 = document.createElement('img')
        $img1.loading = 'lazy'
        $img1.src = 'data:image/jpg;base64,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'

        let $img2 = document.createElement('img')
        $img2.loading = 'lazy'
        $img2.src = 'data:image/jpg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAVABUDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+rr9sr9pvxV4d0/VPC3gDXb3w1Je+JfDPw10rWNEgiuNdvfGXjfxTpPgnT5rETSwo8OlavrKTxWqXFrBeJZTy6heDT5T5HrQo0cJgqmOrxjUnGlKpCE9YKTX7mMo3XM5ycb3eidlZps5cL7TMs1w2XUpOFKpXjTrTg2pcil+9kppScUoqSTSbb6SbUT+P740/tkfte/sJf8FNPgbJ8P8A9ov9pzVv2dvi149sNAvdB+NPxAvfGth4s0lvHEngPxX4jS0v9Q1fRkRpph4p0Sw06y0e1sBHYWUekabpUz6TF8rkueTzGtVoYmVGoqWIhywjThGcsLiZzhCVVK7hONSFWEHSlFOFKnom5c32PG/DEMh+pV8BTrYeniMFU9pzVJVKcMdhYxnVjSnKzqQqQq0Kk41YytOc0vd5FH+8b9nz4w/8Le8HyXeoRQWvijQZoLDxDbW42wTNPC0ljq1tESxht9SSK4Hksx8q7tLyNMwrEze/jMN9WqWV3Tndwb3VnrF93HTXqmup8VgMX9bpNysqlNqNRLZ3WkkuilZ6dGn0sfy//wDBdP4ieLfgf+zteajot/rmgeKdG/aC8A39j4h0ZbZrzQNY8E+ILvx54f8AEEUV/FJaXsdn4i8NaDqMcFzH9ju4CpmcRyxh+rN61H+zaSnrSxdWjh5KMknapTqSatq5W9m7pWa5d4ux2cM4at/aOOxEG4VMvw1TERmlrGpGvRUJK/uqybavo1a902fy+/tyfGX41fFXxD8APjjrvhO18O/Erwrpmt/FnW/hRD4fuo9J8N+LfD2u6l4p8Wa5pcU91qWoN4U1U29n4ruLLWdRmuLS2mmt2meHT5XX8+yLK3gc0zia9o8VXx8W1Wj76pUPaV4RirKPJTU5VKllFc07WaUb/p/HOcVc1yLIMVjJ0uWGAlKrCHKlKvVVLCSlaGzqyjCFOGrjCF21LnS/vz/4JZSfFX4ufs6+EvjD49tLLwprXxT+G3wi8b3dnoUGpaZpNvfeJ/C934lu9FtYdSuNUv3fQYtcsraaa4nXzWnEsaLG4Vf03N4qhHAqo4yq1sNHETgl/C9tGnJRbctXun5xa6H4pluHlfEShKShzRgm3ZycHNN6dNU1orp36n1p+2V+wx8F/wBtTwdp3hb4qWEhg0XW4/Elu9sbpLe91O0sHsrOTV4NN1DR73UFtFFtJBH/AGpBE5s7aG8ju7WJIF+crKpWpU6Smo+zrKvTcoKpyVFGUbqLaT+JtJtpS95JPU6M6o55WyvH4fhzPnw1mWMoqk80jlmDzfloxalOnLBY61CoqnLGLk5RkoqydtD8urb/AIIoeC/iT8ctc+I/j742Pqmg61o+uaD4v8G6J8HvCXhuXxFpuu+HrvwxOw1+21u6hsdSs9MujBp2pSeHr+ezt1axiUWU88DvDyxtPHf2liMXHF1aiq+2jPDxpqs6kHDmm6U1rH3WrRTXKopxi2n+K8EeH3iFhOJP7d4i8ZOIOKMrw1CeEhwxXyv6hlMYTpuKnSw9HOK+Ao1oVWq0a0Mu9te8Pack5X/eL4a/Dzwt8Jfh/wCDPhl4JsTpvhLwH4Z0Xwn4es2ZXkh0nQdPt9MsVmkSOJJJ/s9tGZXSKJGfPlxRR7Y13r16uJqyrVpudSVk27JJRSjGKS0UYxSSS2SP32nThSgoQVor9dW2+rb1bP/Z'

        let $span = document.createElement('span')
        $span.innerText = 'Meet a student'

        this.$button.appendChild($img1)
        this.$button.appendChild($img2)
        this.$button.appendChild($span)

        this.$shadow.appendChild(this.$button)
    }

    style() {
        let $style = document.createElement('style')
        $style.textContent = `
            button.magma-contact {
                background-color: #D2EEEE;
                border: 3px solid #D2EEEE;
                color: #0A6E77;
                text-transform: uppercase;
                border-radius: 1em;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding-right: 12px;
                font-weight: bold;
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

            button.magma-contact:hover img {
                border-color: #D2EEEE;
            }

            button.magma-contact img {
                border-radius: 50%;
                border: 3px solid;
                transform: scale(1.2);
            }

            button.magma-contact img:nth-child(1) {
                margin-left: -14px;
                z-index: 3;
                height: 28px;
            }

            button.magma-contact img:nth-child(2) {
                margin-left: -7px;
                margin-right: 10px;
                height: 20px;
                z-index: 2;
            }

            div.magma-modal {
                position: fixed;
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
                font-size: 2rem;
                cursor: pointer;
            }

            div.magma-modal button.magma-close:hover,
            div.magma-modal button.magma-close:active,
            div.magma-modal button.magma-close:focus {
                background-color: #D8DEDE;
                color: #F8F9F8;
            }
        `
        this.$shadow.appendChild($style)
    }
}

customElements.define(MagmaWidget.tag, MagmaWidget);
