/**
 *
 *
 *  区域主题
 *
 *
 *  const scope = ThemeManager.scope()
 *
 *
 *
 */
import { presetThemes } from "./presets";
import type { DynamicThemeOptions, ThemeOptions, ThemeSize } from "./types";
import { getId, toRGBString } from "./utils";
import { generateThemeColorVars } from "./utils/generateThemeColorVars";
import { getVarsStyles } from "./utils/getVarsStyles";
import { injectStylesheet } from "./utils/injectStylesheet";
import { toVarStyles } from "./utils/toVarStyles";
import {
    baseVars,
    radiusVars,
    derivedVars,
    shadowVars,
    spacingVars,
    sizeVars,
    lightColorVars,
    lightColorizedColorVars,
    darkColorVars,
    darkColorizedColorVars,
} from "./vars";
export class ThemeScope {
    options: Required<ThemeOptions>;
    private _selectors: string[] = [];
    stylesheets: string[] = []; //
    connected: boolean = false;
    elements: WeakRef<HTMLElement>[] = [];
    constructor(options?: ThemeOptions) {
        this.options = Object.assign(
            {
                id: getId(),
                themeColor: "blue",
                defaultThemeColor: "blue",
                cssSelector: [],
                size: "medium",
                dark: false,
                colorized: false,
                radius: "medium",
                spacing: "medium",
                shadow: "medium",
                border: "1px",
                primary: "var(--auto-theme-color)",
                success: "#22c55e",
                warning: "#f59e0b",
                danger: "#ef4444",
                info: "#71717a",
                autoConnect: true,
                autoAttach: true,
                docRoot: globalThis.document ? document?.documentElement : undefined,
            },
            options,
        ) as Required<ThemeOptions>;
        this._selectors = this.options.cssSelector;
        if (this.options.cssSelector && this.options.cssSelector.length === 0) {
            this.options.cssSelector.push(`[data-theme-scope='${this.id}']`);
        }
        if (this.options.autoConnect) this.connect();
        if (this.options.autoAttach) this.autoAttach();
    }
    get id() {
        return this.options.id;
    }
    get docRoot() {
        return this.options.docRoot as HTMLElement;
    }
    get size() {
        return this.options.size as ThemeSize;
    }
    set size(value: ThemeSize) {
        this.options.size = value;
        if (value === "medium") {
            this._forEachElements((el) => {
                el.removeAttribute("data-size");
            });
        } else {
            this._forEachElements((el) => {
                el.dataset.size = value;
            });
        }
    }
    get dark() {
        return this.options.dark;
    }
    set dark(value: boolean) {
        this.options.dark = value;
        if (value === false) {
            this._forEachElements((el) => {
                el.removeAttribute("dark");
            });
        } else {
            this._forEachElements((el) => {
                el.setAttribute("dark", "");
            });
        }
    }
    get spacing(): ThemeSize {
        return this.options.spacing;
    }
    set spacing(value: ThemeSize) {
        this.options.spacing = value;
        if (value === "medium") {
            this._forEachElements((el) => {
                el.removeAttribute("data-spacing");
            });
        } else {
            this._forEachElements((el) => {
                el.dataset.spacing = value;
            });
        }
    }
    get shadow() {
        return this.options.shadow as ThemeSize;
    }
    set shadow(value: ThemeSize) {
        this.options.shadow = value;
        if (value === "medium") {
            this._forEachElements((el) => {
                el.removeAttribute("data-shadow");
            });
        } else {
            this._forEachElements((el) => {
                el.dataset.shadow = value;
            });
        }
    }
    get colorized() {
        return this.options.colorized;
    }
    set colorized(value: boolean) {
        this.options.colorized = value;
        if (value === false) {
            this._forEachElements((el) => {
                el.removeAttribute("colorized");
            });
        } else {
            this._forEachElements((el) => {
                el.setAttribute("colorized", "");
            });
        }
    }
    get radius(): ThemeSize {
        return (this.options.radius || "medium") as ThemeSize;
    }
    set radius(value: ThemeSize) {
        this.options.radius = value;
        if (value === "medium") {
            this._forEachElements((el) => {
                el.removeAttribute("data-radius");
            });
        } else {
            this._forEachElements((el) => {
                el.dataset.radius = value;
            });
        }
    }
    get themeColor(): string {
        return this.options.themeColor || "light";
    }
    set themeColor(value: string) {
        if (value === "light") {
            this._forEachElements((el) => {
                el.removeAttribute("data-theme");
            });
        } else {
            this._forEachElements((el) => {
                el.dataset.theme =
                    value in presetThemes ? presetThemes[value].color : toRGBString(value);
            });
        }
        this.options.themeColor = value;
        this.update({ themeColor: value });
    }

    private _forEachElements(callback: (el: HTMLElement) => void) {
        this.elements.forEach((elRef) => {
            const el = elRef.deref();
            if (el) {
                callback(el);
            }
        });
        // 清除已失效的元素引用
        this.elements = this.elements.filter((elRef) => elRef.deref());
    }
    /**
     * 生成主题颜色的CSS样式字符串
     * @returns {string} 包含主题颜色变量的CSS样式字符串，支持亮色和暗色模式
     */
    protected _generateThemeColorStyles() {
        const themeColor = this.options.themeColor;
        const defaultThemeSelector =
            this.options.themeColor === this.options.defaultThemeColor ? `,:root` : "";

        return `${this._selectors.join(",")}[data-theme='${themeColor}']${defaultThemeSelector}{\n    color-scheme: light;\n${toVarStyles(this._createThemeColorVars(themeColor))};\n}\n${this._selectors.join(",")}[data-theme='${themeColor}'][dark]{\n    color-scheme: dark;\n${toVarStyles(this._createThemeColorVars(themeColor, true))};\n} `;
    }

    protected _injectThemeColorStyles() {
        if (this.options.themeColor === "light") return;
        const css = this._generateThemeColorStyles();
        const styleId: string = `kylinbits-${this.id}-colors`;
        injectStylesheet(css, {
            id: styleId,
        });
        this._addStyleheetId(styleId);
        return css;
    }
    /**
     * 创建语义化颜色样式并注入到页面中
     * @param {boolean} [inject=true] - 是否立即将样式注入到页面
     * @returns {string|undefined} 生成的CSS样式字符串，如果未覆盖默认颜色则返回undefined
     * @private
     */
    protected _injectSemanticColorStyles() {
        const styleId = `kylinbits-${this.id}-semantics`;
        const css = this._generateSemanticColorStyles();
        if (css) {
            injectStylesheet(css, {
                id: styleId,
            });
            this._addStyleheetId(styleId);
        }
        return css;
    }
    /**
     * 创建语义化颜色样式并注入到页面中
     * @returns {string|undefined} 生成的CSS样式字符串，如果未覆盖默认颜色则返回undefined
     * @private
     */
    protected _generateSemanticColorStyles() {
        const vars: Record<string, string> = {
            "--k-color-primary": this.options.primary,
            "--k-color-success": this.options.success,
            "--k-color-warning": this.options.warning,
            "--k-color-danger": this.options.danger,
            "--k-color-info": this.options.info,
        };
        const isOverride = !!(
            this.options.primary ||
            this.options.success ||
            this.options.warning ||
            this.options.danger ||
            this.options.info
        );
        if (!isOverride) return;
        return `${this._selectors.join(",")}{\n${toVarStyles(vars)}\n}\n`;
    }

    /**
     * 生成主题颜色相关的CSS变量
     * @param {string} [color=this.themeColor] - 主题颜色值，可以是预设主题名或自定义颜色值
     * @param {boolean} [reverse=false] - 是否反转渐变颜色顺序
     * @returns {Record<string, string>} 包含主题颜色CSS变量的对象
     */
    protected _createThemeColorVars(
        color: string = this.options.themeColor,
        reverse: boolean = false,
    ) {
        const themeColor = color in presetThemes ? presetThemes[color].color : color;
        const vars: Record<string, string> = generateThemeColorVars(themeColor, {
            prefix: "--k-color-theme-",
            reverse,
        });
        return vars;
    }
    protected _addStyleheetId(id: string) {
        if (!this.stylesheets.includes(id)) {
            this.stylesheets.push(id);
        }
    }
    protected _generateBaseStyles() {
        const baseStyles = `${this._selectors.join(",")}{\n${toVarStyles(baseVars)}\n${toVarStyles(lightColorVars)}\n${toVarStyles(lightColorizedColorVars)}\n${toVarStyles(derivedVars)}}}\n`;
        const sizeStyles = getVarsStyles(sizeVars, this._selectors, "data-size");
        const radiusStyles = getVarsStyles(radiusVars, this._selectors, "data-radius");
        const spacingStyles = getVarsStyles(spacingVars, this._selectors, "data-spacing");
        const shadowStyles = getVarsStyles(shadowVars, this._selectors, "data-shadow");
        return `${baseStyles}\n${sizeStyles}\n${radiusStyles}\n${spacingStyles}\n${shadowStyles}\n`;
    }

    /**
     * 注入主题基础样式到页面中
     * @param {boolean} [inject=true] - 是否立即将样式注入到页面中
     * @returns {string} 生成的CSS样式字符串
     * @private
     */
    private _injectBaseStyles() {
        const styleId = `kylinbits-${this.id}-vars`;
        const css = this._generateBaseStyles();
        injectStylesheet(css, { id: styleId });
        this._addStyleheetId(styleId);
        return css;
    }
    /**
     * 更新主题
     */
    update(options: Partial<DynamicThemeOptions>) {
        const { themeColor } = options;
        if (themeColor) {
            this.options.themeColor =
                themeColor in presetThemes
                    ? presetThemes[themeColor].color
                    : toRGBString(themeColor);
            this._injectThemeColorStyles();
        } else if (
            options.primary ||
            options.success ||
            options.warning ||
            options.danger ||
            options.info
        ) {
            Object.assign(this.options, options);
            this._injectSemanticColorStyles();
        }
    }
    connect() {
        if (this.connected) return;
        this._injectBaseStyles();
        this._injectThemeColorStyles();
        this._injectSemanticColorStyles();
        this._applyToElements();
        this.connected = true;
    }
    /**
     * 将主题样式应用到匹配选择器的所有元素
     * @private
     * @throws {TypeError} 如果元素不是HTMLElement实例
     */
    private _applyToElements() {
        const selectors = this.options.elements || [];
        selectors.forEach((selector) => {
            const els = this.docRoot.querySelectorAll(selector);
            for (let i = 0; i < els.length; i++) {
                const el = els[i];
                if (el && el instanceof HTMLElement) this.attach(el);
            }
        });
    }
    disconnect() {
        this.stylesheets.forEach((id) => {
            const style = document.getElementById(id);
            if (style) {
                style.remove();
            }
        });
        this.connected = false;
    }
    isConnected() {
        const styleIds: string[] = [
            `kylinbits-${this.id}-vars`,
            `kylinbits-${this.id}-semantics`,
            `kylinbits-${this.id}-colors`,
            `kylinbits-${this.id}-mode`,
        ];
        return styleIds.some((id) => this.docRoot.ownerDocument.getElementById(id) !== null);
    }
    /**
     * 生成所有需要注入的css样式
     */
    toStyles() {
        return `${this._generateBaseStyles()}${this._generateSemanticColorStyles()}${this._generateThemeColorStyles()}`;
    }
    download() {
        // 创建 Blob 对象
        const blob = new Blob([this.toStyles()], { type: "text/plain" });
        // 创建临时 URL
        const url = URL.createObjectURL(blob);
        // 创建隐藏的下载链接
        const a = document.createElement("a");
        a.href = url;
        a.download = `kylinbits_${this.id}.css`;
        a.style.display = "none";
        // 添加到文档并触发点击
        document.body.appendChild(a);
        a.click();
        // 清理资源
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    autoAttach() {
        const scopeEls = this.docRoot.querySelectorAll(`[data-theme-scope='${this.id}']`);
        for (const el of scopeEls) {
            if (!(el instanceof HTMLElement)) continue;
            this.attach(el);
        }
    }
    /**
     * 将主题作用域应用到指定的DOM元素上
     * @param {string | HTMLElement} selector - CSS选择器字符串或HTMLElement元素
     */
    attach(selector: string | HTMLElement) {
        const els = typeof selector === "string" ? document.querySelectorAll(selector) : [selector];
        for (const el of els) {
            if (el && el instanceof HTMLElement) {
                if (el !== document.documentElement) {
                    el.setAttribute("data-theme-scope", this.id);
                }
                if (
                    this.elements.length === 0 ||
                    !this.elements.every((elRef) => elRef.deref() === el)
                ) {
                    this.elements.push(new WeakRef(el));
                }
            }
        }
    }
    /**
     * 从主题作用域中分离指定的元素
     * @param {string|HTMLElement} selector - CSS选择器字符串或HTMLElement元素
     * @returns {void}
     */
    detach(selector: string | HTMLElement) {
        const els = typeof selector === "string" ? document.querySelectorAll(selector) : [selector];
        for (const el of els) {
            if (el && el instanceof HTMLElement) {
                el.removeAttribute("data-theme-scope");
                this.elements = this.elements.filter((ref) => ref.deref() !== el);
            }
        }
    }
    generate() {
        return `${this._generateBaseStyles()}\n/* colors */\n ${this._generateThemeColorStyles()}\n/*  Semantic Colors */\n${this._generateSemanticColorStyles()}`;
    }
}
