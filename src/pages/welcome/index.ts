class WelcomePage extends Element {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <my-jugada jugada="piedra">
      <my-jugada jugada="papel">
      
      <jugada-piedra>
      <jugada-papel>
      <jugada-tijeras>
    `;
  }
}
