# Claude Code 中接入 Kimi K2 大模型

## 前言

Claude Code 是 Anthropic 推出的 AI 编程助手，具备强大的代码生成与理解能力。然而，受限于国内网络环境，Claude Sonnet 4、Claude Opus 4 等模型的使用门槛较高。为此，本文介绍如何将 Claude Code 切换为月之暗面最新发布的 Kimi K2 大模型，实现无缝对接与高效开发。

![image-20250717161529431](./assets//image-20250717161529431.png)

---

## 环境准备

1. **安装最新版 Node.js**
   - 请前往 [Node.js 官网](https://nodejs.org/) 下载并安装。
2. **安装 Claude Code**

   - 终端执行：
     ```bash
     npm install -g @anthropic-ai/claude-code
     ```

3. **注册 Kimi API 平台账号并获取 API Key**
   - 打开 [Kimi API 平台](https://kimi.moonshot.cn/)，注册账号。
   - 登录后，新建 API Key。

![新建 API 示意图](./assets//image-20250717155709394.png)

4. **充值升级账号（强烈建议）**
   - 免费版 Kimi API 限制较多，建议充值 50 元升级至 Tier1，解锁更高额度和更稳定的调用权限。

![充值后用量示意图](./assets//image-20250717155753583.png)

---

## API Key 配置

修改 Claude Code 的默认配置，使用自定义的模型能力。

### Windows

在命令提示符中执行：

```cmd
setx ANTHROPIC_AUTH_TOKEN "你的 API 密钥"
setx ANTHROPIC_BASE_URL "https://api.moonshot.cn/anthropic"
```

### macOS / Linux

根据所用终端类型，编辑对应配置文件：

- Bash 用户：`~/.bashrc`
- Zsh 用户：`~/.zshrc`

添加如下内容：

```bash
export ANTHROPIC_AUTH_TOKEN=你的API密钥
export ANTHROPIC_BASE_URL=https://api.moonshot.cn/anthropic
```

保存后，执行 `source ~/.zshrc` 或重启终端使配置生效。

---

## 启动与模型切换验证

1. 进入项目目录，运行：
   ```bash
   claude
   ```
2. 启动后，界面下方 Overrides 区域应显示 API Key 和 API Base 信息。

![image-20250717155925831](./assets//image-20250717155925831.png)

3. 随便输入点啥（友情提示：每次输入都要花钱），只要 tokens 在跳动，恭喜你，模型已上线。

![image-20250717160008829](./assets//image-20250717160008829.png)

![image-20250717161127189](./assets//image-20250717161127189.png)

> 虽然界面写着 claude，其实背后已经是 kimi-k2-0711-preview 在默默搬砖。

---

## 常见问题与排查

- **API Key 配置无效**：
  - 检查密钥是否有误，或是否已生效（重启终端/重新加载配置文件）。
  - 免费额度用尽或账号未充值也会导致调用失败。
- **无法切换模型**：
  - 确认 ANTHROPIC_BASE_URL 是否正确填写为 `https://api.moonshot.cn/anthropic`。
- **调用费用过高**：
  - 每次输入均计费，建议合理规划调用频率。

---

## Kimi K2 大模型的"真香"时刻

1. **代码能力爆表**：
   - 各种榜单吊打 GPT-4.1、DeepSeek-V3，自动化、企业开发都不在话下。
2. **超大上下文，记忆力惊人**：
   - 128k tokens，几十万字随便塞，长文档、老项目都能 hold 住。
3. **价格感人，合规省心**：
   - 输入 1 美元/百万 tokens，输出 3 美元/百万 tokens，省下的钱可以多喝几杯咖啡。
4. **生态丰富，接口友好**：
   - 兼容 Anthropic 协议，CLI、GUI、VSCode 插件全都能用。

---

## 注意事项

- API Key 属于敏感信息，请妥善保管，避免泄露。
- 免费额度有限，建议及时充值以保证服务稳定。
- 若需切换回 Claude 原生模型，只需恢复默认 ANTHROPIC_BASE_URL。
- 费用按 tokens 计费，注意控制调用频率。

---

## 总结

通过上述配置，即可在 Claude Code 中无缝接入 Kimi K2 大模型，享受高效、低成本的智能编程体验。Kimi K2 在代码生成、上下文处理、工程兼容性等方面均表现优异，是国内开发者的理想选择。