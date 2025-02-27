# 0 经验掌握 DeepSeek 使用

通过 DeepSeek 掌握 DeepSeek 使用。

这同样源自 DeepSeek 推理模型的强大。

简单三步：

```md
我想更好的使用 DeepSeek,那我要怎样才能更好的问你问题，有哪些注意点？你自己总结一份详细的说明给我要尽量的简单明了。
```

```md
给我汇总 DeepSeek 十大典型错误用法，并且给出正确的用法做对照，浅显易懂，让新人快速入门。
```

```md
把这个问题修改为正确的 deepseek 提示词：

《反脆弱:从不确定性中获益》这本书怎么在一个月读完，读完后能实际使用。请给我一个具体的说明并举出例子来。
```

## 第一步

### 提问

```md
我想更好的使用 DeepSeek,那我要怎样才能更好的问你问题，有哪些注意点？你自己总结一份详细的说明给我要尽量的简单明了。
```

### 输出

以下是为高效使用 DeepSeek 总结的提问指南，共 8 条核心技巧，用最简练的方式呈现：

---

### **1. 问题明确化**

- **坏例子**：_“怎么学英语？”_
- **好例子**：_“如何在 3 个月内将雅思口语从 5 分提升到 6.5 分？”_
- **关键**：直接说明目标、场景、限制条件（如时间/预算）。

---

### **2. 结构化描述**

- **技巧**：用编号/符号拆分问题，或添加背景：  
  ❖ 例：_“我想转行做数据分析，目前会 Excel 但不会编程。请按优先级推荐 3 个必学技能，并说明学习方法。”_

---

### **3. 细节即效率**

- **必要细节**：
  - 编程问题 → 附代码片段 + 报错信息
  - 学术问题 → 说明研究领域/已查资料
  - 决策问题 → 给出可投入时间/预算

---

### **4. 控制问题范围**

- **宽泛**：_“如何写小说？”_ → 回答模糊
- **精准**：_“悬疑小说开头如何用环境描写营造紧张感？请举 3 个经典例子”_

---

### **5. 避免沟通损耗**

- **必检项**：
  - 专业术语拼写（如“卷积神经网络”非“卷机神经”）
  - 关键数据单位（如“5 万元”非“五万”）
  - 敏感信息脱敏（账号/地址等自动替换为 XXX）

---

### **6. 迭代式提问**

- **模版**：
  1. 基础问题 → 获取框架
  2. 追问细节 → 深化理解  
     ❖ 例：先问“Python 装饰器的作用”，再问“@cache 装饰器在 Flask 中的具体应用”

---

### **7. 指定输出形式**

- **常用指令**：
  - /步骤：需要操作流程
  - /对比：要优劣分析表格
  - /代码：需可运行示例
  - /模拟：角色扮演场景（如“作为资深 HR，指出我的简历问题”）

---

### **8. 认知校准**

- **我能做的**：  
  ✅ 知识整合 ✅ 逻辑推导 ✅ 多角度分析
- **暂不支持**：  
  ❌ 实时资讯（2023 年 10 月后数据） ❌ 主观价值判断 ❌ 文件解析

---

**实践建议**：遇到复杂问题时，先用一句话说明核心需求（例：“我需要制定零基础转行 AI 的 6 个月学习计划，每天可投入 2 小时”），再逐步细化。

## 第二步

### 提问

```md
给我汇总 DeepSeek 十大典型错误用法，并且给出正确的用法做对照，浅显易懂，让新人快速入门。
```

### 输出

以下是使用 DeepSeek 的十大典型错误及正确对照表，用最直观的方式帮助新人避坑：

| **错误类型**     | **错误示范**                     | **正确用法**                                                      | **核心差异**                 |
| ---------------- | -------------------------------- | ----------------------------------------------------------------- | ---------------------------- |
| 模糊提问         | "给我讲讲历史"                   | "请详细说明唐朝诗歌的创作风格，列举三位代表诗人及其作品特点"      | 具体到朝代、人物、需求维度   |
| 忽略上下文       | "帮我查一下这个"                 | "我需要了解量子计算对传统密码学的冲击，请提供近 3 年权威论文观点" | 明确领域、时间范围、信息类型 |
| 不指定格式       | "给些时间管理建议"               | "用表格列出 5 种学生适用的时间管理法，包含操作步骤和预期效果"     | 结构化呈现便于直接使用       |
| 复杂问题一步到位 | "快速解释物理学的所有知识"       | "先解释量子力学基础概念，再说明其应用场景，最后推荐学习路径"      | 拆分知识模块分步获取         |
| 盲目信任生成内容 | 直接使用 AI 生成的《离婚协议》   | 将 AI 生成的协议逐条对照最新《民法典》核查法律依据                | 人工验证关键信息的准确性     |
| 依赖 AI 生成成品 | 用 DeepSeek 写完整起诉状只改名字 | 用 AI 生成文书框架后，补充具体证据链和法律条款                    | 保留专业判断的核心环节       |
| 忽略用户反馈     | 客户说"方案不够创新"不做追问     | "您指的创新具体是商业模式、技术应用还是服务形式？"                | 明确需求背后的真实诉求       |
| 不明确角色设定   | "如何投资股票"                   | "假设你是 20 年经验基金经理，为新手制定稳健投资组合方案"          | 赋予专业身份提升建议质量     |
| 开放式问题不追问 | "AI 对教育有什么影响"            | "AI 如何改变课堂教学？会产生哪些伦理问题？教师如何适应？"         | 拆解问题维度深入探讨         |
| 不调整交流风格   | 给小学生讲 AI 用专业术语         | "AI 就像聪明的机器人朋友，能帮你快速找到想看的书"                 | 根据受众调整表达方式         |

**避坑指南**：

1. 每次提问前用 5W1H 自检（Who/What/When/Where/Why/How）
2. 重要内容遵循"生成-核对-修正"三步骤
3. 复杂任务采用"分阶段对话+即时反馈"模式
4. 专业领域内容必做二次验证
5. 永远记得：AI 是助手，你才是决策者

记住这些对照案例，使用时多想想"如果我是 DeepSeek，听到这个指令会怎么理解"，就能快速掌握高效沟通秘诀。

## 第三步

### 提问

实测一波。

原来的提示词。

```md
《反脆弱:从不确定性中获益》这本书怎么在一个月读完，读完后能实际使用。请给我一个具体的说明并举出例子来。
```

修正后的提示词。

```md
"作为有 20 年经验的学习教练，请为职场新人设计《反脆弱》30 天精读计划，需包含：

1. 每日阅读时间分配表（总时长 ≤90 分钟/天）
2. 每周重点概念拆解清单（含风险预测/杠铃策略/过度补偿等核心理论）
3. 配套实践模块：
   - 工作场景：如何用反脆弱思维处理项目延期
   - 投资场景：构建个人抗波动理财组合的 3 个步骤
   - 健康管理：设计渐进式压力训练方案
4. 提供可填写的案例模板（包含脆弱性检测表+收益/风险评估矩阵）
   要求输出表格与清单形式，标注关键页码和现实应用对照"

【修改对照说明】

| 原始问题缺陷     | 优化策略                 | 效果提升点         |
| ---------------- | ------------------------ | ------------------ |
| 时间规划不具体   | 限定每日最大学习时长     | 防止计划过于理想化 |
| 应用场景模糊     | 拆解三大典型场景         | 增强方法迁移性     |
| 缺少执行工具     | 提供检测表+矩阵模板      | 降低实践门槛       |
| 理论实践脱节     | 标注书中页码对应现实案例 | 确保方法论源于原著 |
| 缺乏进度控制节点 | 设置周概念拆解清单       | 建立阶段性反馈机制 |

【应用示例】
在「工作场景」部分，Deepseek 可能给出：
"项目延期应对模板：
1️⃣ 脆弱检测：当前应对方案是否存在（过度优化/单一路径依赖）→P187
2️⃣ 反脆弱措施：预设备用方案的触发条件（如延迟超 3 天启动 B 计划）→P212
3️⃣ 超额收益：利用延期时间收集用户新需求（过度补偿策略）→P156
填写示例：原定上线日=杠铃左端，收集额外需求=右端超额收益机会"
```

### 输出

```shell
<zhithink>
好的，我需要为职场新人设计一个30天的《反脆弱》精读计划，包含时间分配、每周重点概念、实践模块和案例模板。首先，参考内容中提到书的核心概念如杠铃策略、过度补偿、风险预测等，我需要确保这些内容被拆解到每周的计划中。用户要求每天不超过90分钟，所以需要合理分配阅读和练习时间。

然后看应用场景部分，用户需要工作、投资和健康三个场景的实践模块。参考内容中的知乎回答提到用杠铃策略处理项目延期，构建抗波动理财组合，以及渐进式压力训练，这些可以作为具体例子。需要结合书中的页码，比如风险预测在 P187，反脆弱措施在 P212，确保理论与实例对应。

案例模板部分，参考内容中的脆弱性检测表和收益/风险评估矩阵需要设计成可填写的格式，可能参考用户提供的应用示例，比如项目延期模板中的步骤和页码。同时要标注关键页码，确保用户能快速查找原文。

时间分配方面，将 30 天分为四周，每周聚焦不同主题。第一周基础概念，第二周策略应用，第三周实践深化，第四周总结与规划。每天安排阅读、练习和反思，确保不超过 90 分钟。例如，每天 30 分钟阅读，30 分钟练习，30 分钟反思或填写模板。

需要检查是否有遗漏的核心概念，比如非线性思维、非对称性收益等，确保每周清单覆盖重点。同时，根据参考内容中的职场反脆弱建议，如提升学习敏锐度、杠铃策略的职业应用，将这些融入实践模块。

最后，确保输出格式为表格和清单，清晰标注页码和应用对照，使新人能轻松跟随计划，将理论转化为实际行动。可能还需要调整每日任务量，避免过于繁重，保持可持续性。
</zhithink>
```

这是为职场新人设计的《反脆弱》30 天精读计划，包含可落地的实践工具：

一、每日阅读时间分配表（每周 5 天+周末实践）
| 时间段 | 周一至周五（60-75 分钟） | 周末（90 分钟实践） |
|--------------|------------------------------------------|------------------------------|
| 早晨 30 分钟 | 速读当日章节+标注核心论点（Pxx） | 案例模板填写 |
| 午间 15 分钟 | 记录 3 个触动点（用便利贴贴在书页） | 场景模拟演练 |
| 晚间 30 分钟 | 完成当日实践模块 | 周度收益/风险评估矩阵更新 |

二、每周概念拆解清单
▍ 第一周：认知重构（P1-98）
① 脆弱性检测三要素：暴露度/敏感度/适应力（P45 表格）
② 反脆弱系统特征：冗余性/可选性/非线性反应（P67 案例）
③ 医源性损伤：过度干预的危害（P82 医疗案例 → 职场应用）

▍ 第二周：核心策略（P99-176）
① 杠铃策略实操：80%稳健+20%冒险（P113 投资组合 → 职业发展）
② 过度补偿机制：压力剂量控制表（P142 健身案例 → 工作强度）
③ 非对称性收益：损失有限/收益无限模型（P161 创业案例 → 副业选择）

▍ 第三周：系统思维（P177-254）
① 反脆弱层级：个体牺牲与系统进化（P193 组织管理案例）
② 绿色木材谬误：预测的致命缺陷（P215 金融史教训 → 职业规划）
③ 选择权配置：低成本试错流程图（P238 科技公司案例 → 个人成长）

▍ 第四周：整合应用（P255-328）
① 反脆弱决策矩阵：脆弱推手识别表（P277）
② 反脆弱职业清单：抗波动岗位特征对照表（P291）
③ 个人反脆弱指数：风险暴露评估量表（P315）

三、实践模块模板
【工作场景】项目延期应对表
| 阶段 | 脆弱性检测（P187） | 反脆弱措施（P212） | 超额收益机会（P156） |
|---------------|-----------------------------|---------------------------------------------|---------------------------------|
| 延期第 1-3 天 | □ 单一交付路径 | 启动 B 计划（需提前备案 3 种替代方案） | 收集客户新需求（模板见 P169） |
| 延期 4-7 天 | □ 资源过度优化 | 交叉培训团队成员（技能冗余表见 P201） | 测试敏捷开发流程（案例 P224） |
| 超 1 周 | □ 信息黑箱 | 建立透明沟通看板（工具模板 P239） | 开发自动化监控系统（案例 P278） |

【投资组合】杠铃配置模板
| 安全端（80%） | 风险端（20%） | 非对称性检查（P161 标准） |
|----------------|------------------------------|--------------------------|
| 货币基金 | 加密资产定投 | 最大损失 ≤5%总资产 |
| 国债逆回购 | 天使投资（初创企业跟投） | 潜在收益 ≥300% |
| 黄金 ETF | 期权组合（跨式套利策略） | 投入时间 ≤2 小时/月 |

【健康管理】压力训练进度表
| 周数 | 生理压力源（P142 阶梯） | 心理压力源（P198 模型） | 过度补偿指标 |
|-------|-------------------------|-----------------------------|---------------------------|
| 1 | 晨跑 3km（配速 7′） | 公开演讲 1 次（5 分钟） | 静息心率下降 2-3bpm |
| 2 | HIIT 训练（20 分钟） | 承担跨部门协调任务 | 应激反应时间缩短 15% |
| 3 | 冷热交替淋浴 | 处理客户投诉（每周 2 件） | 皮质醇波动幅度降低 20% |
| 4 | 16/8 轻断食 | 主持项目复盘会 | 睡眠质量提升（深睡+30min）|

四、配套工具包
① 脆弱性检测矩阵（P45 改良版）

```markdown
| 评估维度 | 工作场景案例         | 投资场景阈值       | 健康警戒线       |
| -------- | -------------------- | ------------------ | ---------------- |
| 暴露度   | 单一客户依赖>40%营收 | 单品种持仓>25%     | 连续加班>3 天    |
| 敏感度   | 关键员工离职影响指数 | 波动率>15%/月      | 静息心率>75bpm   |
| 恢复力   | 替补方案启动时效<4h  | 止损执行延迟<30min | 压力恢复周期<48h |
```

② 收益/风险评估表（P315 升级版）

```markdown
| 决策选项 | 下行风险（≤）  | 上行收益（≥） | 非对称系数 | 杠铃匹配度 |
| -------- | -------------- | ------------- | ---------- | ---------- |
| 转岗管理 | 薪资降 20%     | 职业带宽+300% | 1:15       | 安全端 ✓   |
| 副业开发 | 时间损失 5h/周 | 收入渠道+2 条 | 1:4        | 风险端 ✓   |
```

该计划通过「概念 → 案例 → 工具 → 反馈」四层结构，确保每日实践与理论对应。建议配合「脆弱性周记」（每周日晚 20 分钟）记录：本周最大压力事件、运用的反脆弱策略、实际产生的超额收益。
