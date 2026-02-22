import { html } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { themeSelector } from "../_components";
export const renderThemeStory = () => {
    return html`
            <div style="padding: 1em;">${themeSelector()}</div>
            <div class="auto-card">
                <div class="auto-card-header">主题梯度颜色</div>
                <div class="auto-card-body">                    
                      <div id="themeSelector" style="padding:1em;display: flex; gap: 0.5rem;align-items: center;" >
                        ${repeat(Array.from({ length: 10 }), (_, i) => {
                            return html`<span class="theme-color" style="text-align:center; width: 100%;height: 2em;background-color:var(--k-color-theme-${i});">${i}</span>`;
                        })}        
                    </div>   
                </div>    
            </div> 
            <div class="auto-card">
                <div class="auto-card-header">主题色</div>
                <div class="auto-card-body col">                 
                    
                    <div class="auto-card-body-item " style="color:var(--k-color-theme-0)">
                        --k-color-theme-0
                    </div>
                    <div class="auto-card-body-item " style="background-color:var(--k-color-theme-0)">
                        --k-color-theme-0
                    </div>
                    <div class="auto-card-body-item " style="background-color:var(--k-color-theme-1)">
                        --k-color-theme-1
                    </div>
                    <div class="auto-card-body-item " style="background-color:var(--k-color-theme-2)">
                        --k-color-theme-2
                    </div>
                    <div class="auto-card-body-item " style="background-color:var(--k-color-theme-3)">
                        --k-color-theme-3
                    </div>
                    <div class="auto-card-body-item " style="background-color:var(--k-color-theme-4)">
                       --k-color-theme-4
                    </div>
                    <div class="auto-card-body-item " style="background-color:var(--k-color-theme-5)">
                        --k-color-theme-5
                    </div>
                    <div class="auto-card-body-item " style="background-color:var(--k-color-theme-6)">
                        --k-color-theme-6
                    </div>
                    <div class="auto-card-body-item " style="background-color:var(--k-color-theme-7)">
                        --k-color-theme-7          
                    </div>
                    <div class="auto-card-body-item " style="background-color:var(--k-color-theme-8)">
                        --k-color-theme-8
                    </div>
                    <div class="auto-card-body-item " style="background-color:var(--k-color-theme-9)">
                        --k-color-theme-9
                    </div>
                </div>                
            </div>
        `;
};
