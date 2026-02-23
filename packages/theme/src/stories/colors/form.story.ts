import { html } from "lit";
import { themeSelector } from "../_components";

export const renderFormStory = () => {
    return html`
            <style>
                .form-element {
                    width: 100%;
                    box-sizing: border-box;
                    transition: all 0.2s ease;
                }
                .form-element:disabled {
                    background-color: var(--auto-disable-bgcolor) !important;
                    color: var(--auto-disable-color) !important;
                    border-color: var(--auto-disable-border) !important;
                    cursor: not-allowed;
                }
                .checkbox-wrapper, .radio-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: var(--auto-input-padding);
                }
                .checkbox-wrapper input, .radio-wrapper input {
                    width: auto;
                    cursor: pointer;
                }
                .form-label {
                    display: inline-block;
                    width: 200px;
                    margin-bottom: 0.5em;
                    font: var(--auto-font);
                    color: var(--auto-color);
                    font-weight: var(--auto-font-weight);
                    font-size: calc(var(--auto-font-size) * 1.1);
                    letter-spacing: var(--auto-letter-spacing);
                }
                .input-addon {
                    padding: 0 0.5rem;
                    color: var(--auto-secondary-color);
                    font: var(--auto-font);
                    display: flex;
                    align-items: center;
                    white-space: nowrap;
                }
            </style>
            <div style="padding: 1em;">${themeSelector()}</div>

            <!-- 用法一：直接使用 .auto-input 类 -->
            <div class="auto-card">
                <div class="auto-card-header">用法一：直接使用 .auto-input 类</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            默认状态
                        </label>
                        <input
                            type="text"
                            class="auto-input"
                            value="领先的主题解决方案"
                        />
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            占位符状态
                        </label>
                        <input
                            type="text"
                            class="auto-input"
                            placeholder="请输入主题名称解决方案"
                        />
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            禁用状态
                        </label>
                        <input
                            type="text"
                            class="auto-input"
                            value="禁用的输入框"
                            disabled
                        />
                    </div>
                </div>
            </div>

            <!-- 用法二：使用 .auto-input-wrapper 包裹 -->
            <div class="auto-card">
                <div class="auto-card-header">用法二：使用 .auto-input-wrapper 包裹（支持前缀/后缀）</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            基础用法
                        </label>
                        <div class="auto-input-wrapper">
                            <input
                                type="text"
                                placeholder="请输入内容"
                            />
                        </div>
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            带前缀
                        </label>
                        <div class="auto-input-wrapper">
                            <span class="input-addon">https://</span>
                            <input
                                type="text"
                                placeholder="example.com"
                            />
                        </div>
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            带后缀
                        </label>
                        <div class="auto-input-wrapper">
                            <input
                                type="text"
                                placeholder="用户名"
                            />
                            <span class="input-addon">@kylinbits.com</span>
                        </div>
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            带前后缀
                        </label>
                        <div class="auto-input-wrapper">
                            <span class="input-addon">¥</span>
                            <input
                                type="text"
                                placeholder="0.00"
                            />
                            <span class="input-addon">CNY</span>
                        </div>
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            搜索框
                        </label>
                        <div class="auto-input-wrapper">
                            <span class="input-addon">🔍</span>
                            <input
                                type="search"
                                placeholder="搜索..."
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- 多行文本框 -->
            <div class="auto-card">
                <div class="auto-card-header">多行文本框 (使用 .auto-input 类)</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            默认状态
                        </label>
                        <textarea
                            class="auto-input"
                            rows="3"
                        >领先的主题解决方案</textarea>
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            占位符状态
                        </label>
                        <textarea
                            class="auto-input"
                            rows="3"
                            placeholder="请输入主题名称解决方案"
                        ></textarea>
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            禁用状态
                        </label>
                        <textarea
                            class="auto-input"
                            rows="3"
                            disabled
                            placeholder="禁用的文本区域"
                        ></textarea>
                    </div>
                </div>
            </div>

            <!-- 选择框 -->
            <div class="auto-card">
                <div class="auto-card-header">选择框 (使用 .auto-input 类)</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            单选下拉框
                        </label>
                        <select class="auto-input">
                            <option>选项一</option>
                            <option>选项二</option>
                            <option>选项三</option>
                        </select>
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            复选框组
                        </label>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" id="check1" checked class="auto-input" />
                            <label for="check1">选项一</label>
                        </div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" id="check2" class="auto-input" />
                            <label for="check2">选项二</label>
                        </div>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" id="check3" disabled class="auto-input" />
                            <label for="check3">禁用选项</label>
                        </div>
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            单选框组
                        </label>
                        <div class="radio-wrapper">
                            <input type="radio" id="radio1" name="radiogroup" checked class="auto-input" />
                            <label for="radio1">选项一</label>
                        </div>
                        <div class="radio-wrapper">
                            <input type="radio" id="radio2" name="radiogroup" class="auto-input" />
                            <label for="radio2">选项二</label>
                        </div>
                        <div class="radio-wrapper">
                            <input type="radio" id="radio3" name="radiogroup" disabled class="auto-input" />
                            <label for="radio3">禁用选项</label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 数字和日期输入 -->
            <div class="auto-card">
                <div class="auto-card-header">数字和日期输入 (使用 .auto-input 类)</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            数字输入
                        </label>
                        <input
                            type="number"
                            class="auto-input"
                            value="42"
                            min="0"
                            max="100"
                        />
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            日期选择
                        </label>
                        <input
                            type="date"
                            class="auto-input"
                        />
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            时间选择
                        </label>
                        <input
                            type="time"
                            class="auto-input"
                        />
                    </div>
                </div>
            </div>

            <!-- 密码输入 -->
            <div class="auto-card">
                <div class="auto-card-header">密码输入 (使用 .auto-input-wrapper 包裹)</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            密码输入框
                        </label>
                        <div class="auto-input-wrapper">
                            <span class="input-addon">🔒</span>
                            <input
                                type="password"
                                value="password123"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- 文件上传 -->
            <div class="auto-card">
                <div class="auto-card-header">文件上传 (使用 .auto-input 类)</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            文件选择器
                        </label>
                        <input
                            type="file"
                            class="auto-input"
                        />
                    </div>
                </div>
            </div>

            <!-- 颜色选择器 -->
            <div class="auto-card">
                <div class="auto-card-header">颜色选择器 (使用 .auto-input 类)</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item" style="flex-direction: row; align-items: center; gap: 1rem;">
                        <input
                            type="color"
                            class="auto-input"
                            value="#3b82f6"
                            style="width: 60px; height: 40px; padding: 2px; cursor: pointer;"
                        />
                        <label style="font: var(--auto-font); color: var(--auto-secondary-color);">
                            点击色块选择颜色
                        </label>
                    </div>
                </div>
            </div>

            <!-- 搜索输入框 -->
            <div class="auto-card">
                <div class="auto-card-header">搜索输入框 (使用 .auto-input-wrapper 包裹)</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            搜索框
                        </label>
                        <div class="auto-input-wrapper">
                            <span class="input-addon">🔍</span>
                            <input
                                type="search"
                                placeholder="搜索..."
                            />
                            <button class="auto-btn" style="margin-left: 0.5rem;">搜索</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- URL 和 Email 输入 -->
            <div class="auto-card">
                <div class="auto-card-header">URL 和 Email 输入 (使用 .auto-input-wrapper 包裹)</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            URL 输入
                        </label>
                        <div class="auto-input-wrapper">
                            <span class="input-addon">🌐</span>
                            <input
                                type="url"
                                value="https://example.com"
                                placeholder="https://example.com"
                            />
                        </div>
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            Email 输入
                        </label>
                        <div class="auto-input-wrapper">
                            <span class="input-addon">✉️</span>
                            <input
                                type="email"
                                value="user@example.com"
                                placeholder="user@example.com"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- 滑块和范围 -->
            <div class="auto-card">
                <div class="auto-card-header">滑块 (使用 .auto-input 类)</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            范围滑块
                        </label>
                        <input
                            type="range"
                            class="auto-input"
                            min="0"
                            max="100"
                            value="50"
                            style="width: 100%;"
                        />
                    </div>
                </div>
            </div>

            <!-- 复杂组合示例 -->
            <div class="auto-card">
                <div class="auto-card-header">复杂组合示例</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            登录表单
                        </label>
                        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                            <div class="auto-input-wrapper">
                                <span class="input-addon">👤</span>
                                <input
                                    type="text"
                                    placeholder="用户名/邮箱"
                                />
                            </div>
                            <div class="auto-input-wrapper">
                                <span class="input-addon">🔒</span>
                                <input
                                    type="password"
                                    placeholder="密码"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            数量选择器
                        </label>
                        <div class="auto-input-wrapper">
                            <button class="auto-btn">-</button>
                            <input
                                type="number"
                                value="1"
                                min="0"
                                style="text-align: center;"
                            />
                            <button class="auto-btn">+</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 使用 .auto-input-wrapper 的复选框和单选框（带 label 联动） -->
            <div class="auto-card">
                <div class="auto-card-header">使用 .auto-input-wrapper 的复选框和单选框（带 label 联动效果）</div>
                <div class="auto-card-body col">
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            复选框组（label 联动）
                        </label>
                        <div class="auto-input-wrapper" style="width: fit-content;">
                            <input type="checkbox" id="wrapperCheck1" checked />
                            <label for="wrapperCheck1">启用自动保存</label>
                        </div>
                        <div class="auto-input-wrapper" style="width: fit-content;">
                            <input type="checkbox" id="wrapperCheck2" />
                            <label for="wrapperCheck2">接收通知</label>
                        </div>
                        <div class="auto-input-wrapper" style="width: fit-content;">
                            <input type="checkbox" id="wrapperCheck3" disabled />
                            <label for="wrapperCheck3">禁用选项</label>
                        </div>
                    </div>
                    <div class="auto-card-body-item">
                        <label class="form-label">
                            单选框组（label 联动）
                        </label>
                        <div class="auto-input-wrapper" style="width: fit-content;">
                            <input type="radio" id="wrapperRadio1" name="wrapperRadiogroup" checked />
                            <label for="wrapperRadio1">浅色模式</label>
                        </div>
                        <div class="auto-input-wrapper" style="width: fit-content;">
                            <input type="radio" id="wrapperRadio2" name="wrapperRadiogroup" />
                            <label for="wrapperRadio2">深色模式</label>
                        </div>
                        <div class="auto-input-wrapper" style="width: fit-content;">
                            <input type="radio" id="wrapperRadio3" name="wrapperRadiogroup" disabled />
                            <label for="wrapperRadio3">跟随系统（禁用）</label>
                        </div>
                    </div>
                </div>
            </div>
        `;
};
