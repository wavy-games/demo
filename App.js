
export const App = new PIXI.Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});

export function setupApp() {
    App.renderer.backgroundColor = 0x23395D;

    App.renderer.resize(window.innerWidth, window.innerHeight);
    
    App.renderer.view.style.position = 'absolute';
    
    // The PIXI application creates a canvas element that you
    // can insert into the DOM
    document.body.appendChild(App.view)
}

export function hello() {
    console.log("Hello!");
}