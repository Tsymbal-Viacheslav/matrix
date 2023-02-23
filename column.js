// const CHARACTERS = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン";
const CHARACTERS = "01";

export class Column {
  constructor(x, fontSize, context, canvasHeight) {
    this.x = x;
    this.y = 0;
    this.fontSize = fontSize;
    this.context = context;
    this.canvasHeight = canvasHeight;
  }
  
  drawSymbol() {
    if (this.y === 0 && Math.random() < 0.98) {
      return
    }
    
    const charIndex = Math.floor(Math.random() * CHARACTERS.length);
    const symbol = CHARACTERS[charIndex];
    
    this.context.fillText(symbol, this.x, this.y);
    
    if (this.y > this.canvasHeight) {
      this.y = 0
    } else {
      this.y += this.fontSize;
    }
  }
}