class RestaurantItemComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <section id="hero-section" class="hero-section">
        <p class="hero-title font-bold" tabindex="0">Temukan <span class="text-primary">Sensasi Pedas</span> dan <span
            class="text-primary">Lezat</span> di Geprek Teross</p>
        <p class="description" tabindex="0">Temukan nikmatnya geprek pedas dengan bumbu spesial di Geprek Teross. Kami
          menggunakan
          bahan-bahan berkualitas tinggi untuk menciptakan rasa pedas yang khas
        </p>
        <div class="scroll-downs">
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>
      </section>`;
  }
}

customElements.define('restaurant-item-component', RestaurantItemComponent);
