import { ThemeScope } from '../src/scope';
 
const scope = new ThemeScope({
    id:"x",
    autoConnect: false,
    autoAttach: false,
})


 
const css = scope.generate()
Bun.write("scope.css", css)