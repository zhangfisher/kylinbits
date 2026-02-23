import { html } from 'lit'
import { sizeSelector, themeSelector } from '../_components'

export const renderCardStory = () => {
    return html`
        <div style="padding: 20px;">${themeSelector()}</div>

        <!-- 基础卡片 -->
        <div class="auto-card">
            <div class="auto-card-header">基础卡片</div>
            <div class="auto-card-body">
                这是一个基础的卡片组件，包含头部和主体内容区域。卡片采用 Flexbox 布局，支持自适应内容高度。
            </div>
        </div>

        <!-- 带边框的卡片 -->
        <div class="auto-card border">
            <div class="auto-card-header">带边框的卡片</div>
            <div class="auto-card-body">
                此卡片添加了 <code>border</code> 类，显示边框效果。
            </div>
        </div>

        <!-- 完整结构卡片（header + body + footer） -->
        <div class="auto-card">
            <div class="auto-card-header">完整结构卡片</div>
            <div class="auto-card-body">
                这是一个包含完整结构的卡片，展示了头部、主体和底部区域的组合效果。
            </div>
            <div class="auto-card-footer">
                <div class="auto-btn small">取消</div>
                <div class="auto-btn primary small">确定</div>
            </div>
        </div>

        <!-- 可关闭卡片 -->
        <div class="auto-card">
            <div class="auto-card-header">
                <span class="auto-card-title">可关闭卡片</span>
                <span class="closeable">×</span>
            </div>
            <div class="auto-card-body">
                通过在 header 中添加 <code>closeable</code> 类，可以创建带有关闭按钮的卡片头部。
            </div>
        </div>

        <!-- 内容丰富的卡片 -->
        <div class="auto-card">
            <div class="auto-card-header">内容丰富的卡片</div>
            <div class="auto-card-body col">
                <div style="margin-bottom: 1rem;">
                    <strong>标题示例</strong>
                    <p style="color: var(--auto-color-secondary); margin-top: 0.5rem;">
                        这是卡片中的文本内容。卡片主体区域使用 Flexbox 布局，
                        支持垂直排列多个内容块。
                    </p>
                </div>
                <div style="margin-bottom: 1rem;">
                    <strong>列表示例</strong>
                    <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
                        <li>列表项一</li>
                        <li>列表项二</li>
                        <li>列表项三</li>
                    </ul>
                </div>
                <div>
                    <strong>状态提示</strong>
                    <div class="auto-alert success" style="margin-top: 0.5rem;">
                        操作成功完成！
                    </div>
                </div>
            </div>
        </div>

        <!-- 仅主体的卡片 -->
        <div class="auto-card">
            <div class="auto-card-body">
                这是一个没有头部的卡片，仅包含主体内容。适用于简单的信息展示场景。
            </div>
        </div>

        <!-- 多按钮底部卡片 -->
        <div class="auto-card">
            <div class="auto-card-header">多操作按钮卡片</div>
            <div class="auto-card-body">
                当需要在底部放置多个按钮时，可以使用此布局。主要按钮会自动右对齐。
            </div>
            <div class="auto-card-footer">
                <div class="auto-btn small">辅助操作</div>
                <div class="auto-btn small">次要操作</div>
                <div class="auto-btn primary small">主要操作</div>
            </div>
        </div>

        <!-- 尺寸控制 -->
        <div style="padding: 20px;">${sizeSelector('size')}</div>
        <div style="padding: 20px;">${sizeSelector('radius')}</div>

        <!-- 响应式卡片示例 -->
        <div class="auto-card">
            <div class="auto-card-header">CSS 变量说明</div>
            <div class="auto-card-body col">
                <div>
                    <strong>卡片背景色：</strong>
                    <code>var(--auto-card-bgcolor)</code>
                </div>
                <div>
                    <strong>头部颜色：</strong>
                    <code>var(--auto-card-header-color)</code>
                </div>
                <div>
                    <strong>头部背景：</strong>
                    <code>var(--auto-card-header-bgcolor)</code>
                </div>
                <div>
                    <strong>边框圆角：</strong>
                    <code>var(--auto-border-radius)</code>
                </div>
                <div>
                    <strong>阴影：</strong>
                    <code>var(--auto-shadow)</code>
                </div>
                <div>
                    <strong>间距：</strong>
                    <code>var(--auto-spacing)</code>
                </div>
                <div>
                    <strong>边框：</strong>
                    <code>var(--auto-border)</code>
                </div>
            </div>
        </div>

        <!-- 组合使用示例 -->
        <div class="auto-card border">
            <div class="auto-card-header">
                <span class="auto-card-title">卡片组合示例</span>
                <div class="auto-btn small">编辑</div>
                <span class="closeable">×</span>
            </div>
            <div class="auto-card-body col">
                <p>这个示例展示了多种特性的组合使用：</p>
                <ul>
                    <li>带边框的卡片（<code>border</code> 类）</li>
                    <li>自定义头部内容（标题 + 按钮 + 关闭）</li>
                    <li>垂直布局的主体内容（<code>col</code> 类）</li>
                </ul>
                <div class="auto-alert primary" style="margin-top: 1rem;">
                    可以在卡片中嵌入其他组件，如 Alert、Button 等
                </div>
            </div>
            <div class="auto-card-footer">
                <div class="auto-btn small">保存</div>
                <div class="auto-btn primary small">提交</div>
            </div>
        </div>
    `
}
