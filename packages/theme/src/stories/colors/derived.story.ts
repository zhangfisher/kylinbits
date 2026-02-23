import { html } from "lit";
import { themeSelector } from "../_components";

export const renderDerivedVarsStory = () => {
    return html`
            <style>
                .interactive-item {
                    cursor: pointer;
                    transition: all 0.2s ease;
                    user-select: none;
                }
                .interactive-item:hover {
                    color: var(--auto-hover-color) !important;
                    background-color: var(--auto-hover-bgcolor) !important;
                }
                .interactive-item:active {
                    color: var(--auto-active-color) !important;
                    background-color: var(--auto-active-bgcolor) !important;
                }
            </style>
            <div style="padding: 1em;">${themeSelector()}</div>
            <!-- 活动状态颜色 -->
            <div class="auto-card">
                <div class="auto-card-header">活动状态颜色 (鼠标悬停/点击体验)</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item" style="border:var(--auto-selected-border); color:var(--auto-selected-color);background-color:var(--auto-selected-bgcolor)">
                        选中: color(--auto-selected-color) / bg(--auto-selected-bgcolor)
                    </div>
                    <div class="auto-card-body-item interactive-item" style="color:var(--auto-color);background-color:var(--auto-bgcolor);border:var(--auto-border)">
                        交互项: 鼠标悬停查看 hover 效果，点击查看 active 效果
                    </div>
                    <div class="auto-card-body-item" style="color:var(--auto-disable-color);background-color:var(--auto-disable-bgcolor)">
                        禁用: color(--auto-disable-color) / bg(--auto-disable-bgcolor)
                    </div>
                </div>
            </div>

            <!-- 语义色调 -->
            <div class="auto-card">
                <div class="auto-card-header">语义色调</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item center" style="border:none;color:white;background-color:var(--auto-primary-color)">
                        --auto-primary-color
                    </div>
                    <div class="auto-card-body-item center" style="border:none;color:white;background-color:var(--auto-success-color)">
                        --auto-success-color
                    </div>
                    <div class="auto-card-body-item center" style="border:none;color:white;background-color:var(--auto-danger-color)">
                        --auto-danger-color
                    </div>
                    <div class="auto-card-body-item center" style="border:none;color:white;background-color:var(--auto-warning-color)">
                        --auto-warning-color
                    </div>
                    <div class="auto-card-body-item center" style="border:none;color:white;background-color:var(--auto-info-color)">
                        --auto-info-color
                    </div>
                    <div class="auto-card-body-item center" style="border:none;color:white;background-color:var(--auto-theme-color)">
                        --auto-theme-color
                    </div>
                </div>
            </div>
            <!-- 字体颜色 -->
            <div class="auto-card">
                <div class="auto-card-header">字体颜色</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item" style="color:var(--auto-color);background-color:var(--auto-bgcolor)">
                        主要文字: var(--auto-color)
                    </div>
                    <div class="auto-card-body-item" style="color:var(--auto-secondary-color);background-color:var(--auto-bgcolor)">
                        次要文字: var(--auto-secondary-color)
                    </div>
                </div>
            </div>

            <!-- 背景颜色 -->
            <div class="auto-card">
                <div class="auto-card-header">背景颜色</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item" style="background-color:var(--auto-bgcolor);border:var(--auto-border)">
                        面板背景: var(--auto-bgcolor)
                    </div>
                    <div class="auto-card-body-item" style="background-color:var(--auto-workspace-bgcolor);border:var(--auto-border)">
                        工作区背景: var(--auto-workspace-bgcolor)
                    </div>
                    <div class="auto-card-body-item" style="background-color:var(--auto-panel-header-bgcolor);border:var(--auto-border)">
                        面板头部背景: var(--auto-panel-header-bgcolor)
                    </div>
                    <div class="auto-card-body-item" style="background-color:var(--auto-input-bgcolor);border:var(--auto-input-border)">
                        输入框背景: var(--auto-input-bgcolor)
                    </div>
                </div>
            </div>

            <!-- 边框样式 -->
            <div class="auto-card">
                <div class="auto-card-header">边框样式</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item" style="border:var(--auto-border);background-color:var(--auto-bgcolor)">
                        默认边框: var(--auto-border)
                    </div>
                    <div class="auto-card-body-item" style="border:var(--auto-selected-border);background-color:var(--auto-bgcolor)">
                        选中边框: var(--auto-selected-border)
                    </div> 
                    <div class="auto-card-body-item" style="border:var(--auto-active-border);background-color:var(--auto-bgcolor)">
                        激活边框: var(--auto-active-border)
                    </div>
                    <div class="auto-card-body-item" style="border:var(--auto-disable-border);background-color:var(--auto-bgcolor)">
                        禁用边框: var(--auto-disable-border)
                    </div> 
                </div>
            </div>

            <!-- 排版样式 -->
            <div class="auto-card">
                <div class="auto-card-header">排版样式</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item" style="font:var(--auto-font);background-color:var(--auto-bgcolor);border:var(--auto-border)">
                        默认字体: var(--auto-font)
                    </div>
                    <div class="auto-card-body-item" style="font:var(--auto-title-font);background-color:var(--auto-bgcolor);border:var(--auto-border)">
                        标题字体: var(--auto-title-font)
                    </div>
                </div>
            </div>

            <!-- 面板样式 -->
            <div class="auto-card">
                <div class="auto-card-header">面板样式</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item" style="background-color:var(--auto-panel-bgcolor);border:var(--auto-border)">
                        面板背景: var(--auto-panel-bgcolor)
                    </div>
                    <div class="auto-card-body-item" style="background-color:var(--auto-panel-header-bgcolor);color:var(--auto-panel-header-color)">
                        面板头部: bg(--auto-panel-header-bgcolor) / color(--auto-panel-header-color)
                    </div>
                </div>
            </div>

            <!-- 间距与阴影 -->
            <div class="auto-card">
                <div class="auto-card-header">间距与阴影</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item" style="padding:var(--auto-padding);margin:var(--auto-margin);background-color:var(--auto-bgcolor);border:var(--auto-border)">
                        padding/margin: var(--auto-padding) / var(--auto-margin)
                    </div>
                    <div class="auto-card-body-item" style="border-radius:var(--auto-border-radius);background-color:var(--auto-bgcolor);border:var(--auto-border)">
                        圆角: var(--auto-border-radius)
                    </div>
                    <div class="auto-card-body-item" style="box-shadow:var(--auto-shadow);background-color:var(--auto-bgcolor);border:var(--auto-border)">
                        阴影: var(--auto-shadow)
                    </div>
                </div>
            </div>
        `;
};
