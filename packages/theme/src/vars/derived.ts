export const derivedVars = {
    /* 语义色调 */
    "--auto-primary-color": "var(--k-color-primary)",
    "--auto-success-color": "var(--k-color-success)",
    "--auto-danger-color": "var(--k-color-danger)",
    "--auto-warning-color": "var(--k-color-warning)",
    "--auto-info-color": "var(--k-color-info)",
    "--auto-theme-color": "var(--k-color-theme-5)",

    /** 活动颜色 */
    "--auto-selected-color": "var(--k-color-theme-8)!important",
    "--auto-selected-bgcolor":
        "color-mix(in srgb, var(--k-theme-bgcolor-1), transparent 15%)!important",

    "--auto-hover-color": "var(--k-color-theme-6)!important",
    "--auto-hover-bgcolor":
        "color-mix(in srgb, var(--k-theme-bgcolor-1) 50%, transparent 5%)!important",

    "--auto-disable-color": "color-mix(in srgb, var(--k-color-theme-3), transparent 50%)!important",
    "--auto-disable-bgcolor":
        "color-mix(in srgb, var(--auto-selected-bgcolor), transparent 60%)!important",

    "--auto-active-color": "var(--auto-color)!important",
    "--auto-active-bgcolor": "var(--k-color-theme-2)!important",

    /* 字体颜色 */
    "--auto-color": "var(--k-color-2)",
    "--auto-secondary-color": "var(--k-color-5)",

    /* 背景颜色: 用于面板/对话框/组件的背景 */
    "--auto-bgcolor": "var(--k-bgcolor-2)",
    "--auto-workspace-bgcolor": "var(--k-bgcolor-5)",

    /* 边框 */
    "--auto-border-size": "1px",
    "--auto-border-color": "var(--k-color-1)",
    "--auto-border": "var(--auto-border-size) solid var(--auto-border-color)",
    "--auto-selected-border": "1px solid var(--k-color-3)",
    "--auto-border-active-color": "var(--k-color-6)",
    "--auto-active-border": "1px solid var(-auto-border-active-color)",
    "--auto-disable-border": "1px solid var(--auto-disable-color)",

    /* 排版/字体 */
    "--auto-font": "var(--auto-font-weight) var(--auto-font-size)/1.5 var(--auto-font-family)",
    "--auto-font-family":
        "Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif",
    "--auto-font-size": "var(--k-font-size-medium)",
    "--auto-font-weight": "var(--k-font-weight-medium)",
    "--auto-letter-spacing": "var(--k-letter-spacing-medium)",
    "--auto-line-height": "var(--k-line-height-medium)",
    "--auto-title-font":
        "calc(var(--auto-font-weight) + 200) calc(var(--auto-font-size) * 1.1)/1.5 var(--auto-font-family)",
    /* 面板: 用于导航/标题栏/标签页标题 */
    "--auto-panel-header-color": "var(--k-color-theme-8)",
    /** 标题背景颜色：用于标题/标题栏的背景颜色*/
    "--auto-panel-header-bgcolor": "color-mix(in hsl, var(--auto-bgcolor), black 3%)",
    /* 面板背景颜色：用于面板/区块/Drawer等背景颜色*/
    "--auto-panel-bgcolor": "var(--auto-bgcolor)",

    /* 边框/间距 */
    "--auto-border-radius": "var(--k-border-radius-medium)",
    "--auto-spacing": "var(--k-spacing-medium)",
    "--auto-padding": "var(--k-spacing-medium)",
    "--auto-margin": "var(--k-spacing-medium)",
    "--auto-shadow": "var(--k-shadow-medium)",

    /* 输入框 */
    /** 输入框背景颜色：用于输入框背景颜色*/
    "--auto-input-border": "1px solid var(--k-theme-color-3)",
    "--auto-input-bgcolor": "var(--k-theme-bgcolor)",
    "--auto-input-padding": "calc(0.5 * var(--auto-padding))",
    "--auto-input-radius": "var(--auto-border-radius)",
    "--auto-input-height": "var(--k-line-height-medium)",
    /** 其他 */
    "--auto-icon-size": "var(--k-icon-size-medium)",
};
export const derivedColorizedVars = {};
