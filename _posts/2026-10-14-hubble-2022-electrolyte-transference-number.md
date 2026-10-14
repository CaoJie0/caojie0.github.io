---
title: "低温锂电解液的迁移数：Hubble 2022 精读笔记 03"
layout: textbook
textbook_style: openstax
textbook_series: "低温锂电解液 · Hubble 2022 文献精读"
permalink: /posts/hubble-2022-electrolyte-transference-number/
date: 2026-10-14T00:02:00+00:00
blog_category: "锂电"
author_profile: false
share: true
comments: true
tags:
  - 电解液
  - 迁移数
  - 浓差极化
  - 低温锂电
  - 文献精读
excerpt: "区分电导率、锂离子迁移数与盐扩散系数，从阴离子通量推导浓度梯度，结合低温实测结果和联合测量方法，理解迁移数、参考系及浓差极化的关系。"
---

<div class="textbook-objectives" markdown="1">

## 1 学习目标
{: #learning-objectives}

完成本节后，你应能够：

- 解释 Li⁺ 与 PF₆⁻ 为何朝相反方向迁移，却共同形成常规电流。
- 说明迁移数 0.3 的含义，区分迁移电流份额与电极的嵌锂电量。
- 区分电导率、迁移数、盐扩散系数，并说明参考系为何重要。
- 在明确的边界条件下，从阴离子通量推导浓度梯度，解释低迁移数为何可能加重浓差极化。
- 阅读温度与迁移数数据，区分实测值、拟合值、低温不确定性与离子聚集的机理解释。
- 理解联合测量迁移数与热力学因子的思路，说明单一指标为何不能决定低温电池性能。

</div>

电解液能够很好地导电，Li⁺ 的传输仍可能受到限制。本文围绕 Hubble 2022 综述的 Transference number 小节，讨论迁移电流由谁承担、低温如何可能改变这种分配，以及它与浓差极化、截止电压和析锂风险的联系。
{: .textbook-lead}

**阅读基础**　离子与电子、摩尔通量、扩散与电场迁移。可先阅读[第一篇：电导率]({{ '/posts/hubble-2022-electrolyte-conductivity/' | relative_url }})与[第二篇：液相线温度]({{ '/posts/hubble-2022-electrolyte-liquidus/' | relative_url }})。
{: .textbook-prerequisite}

<details class="textbook-source" markdown="1">
<summary>精读来源与图像说明</summary>

**精读来源**　Hubble, D. et al. *Liquid electrolyte development for low-temperature lithium-ion batteries*. **Energy & Environmental Science**, 2022, 15, 550–578。DOI：[10.1039/D1EE01789F](https://doi.org/10.1039/D1EE01789F)。

**原文位置**　第 553–554 页，*Bulk electrolyte considerations → Transference number*；延伸图为 Fig. 2。

图 1、2、3、5 为教学示意；图 4 根据 Landesfeind & Gasteiger（2019）正文的两个数值重新制图，限定为指定配方；图 6 保留 Hubble 原综述及其来源研究的说明。教学示意和假设数字不能替代实验数据。

文献 [23]、[27]、[29] 沿用 Hubble 的编号。正文保留参考系、浓溶液模型、边界条件与低温误差等限制。

</details>

## 2 先建立一个重要认识：电流在电解液中怎样传输？

### 2.1 为什么锂离子电池电解液能够导电？

常见的锂离子电池液态电解液含有锂盐 LiPF₆ 和 EC/EMC、EC/DMC 等混合有机溶剂。这里的 EC 是碳酸乙烯酯，EMC 是碳酸甲乙酯，DMC 是碳酸二甲酯。为了理解基本过程，可将锂盐的解离写为：

$$
\mathrm{LiPF_6\rightleftharpoons Li^++PF_6^-}
$$

这个式子是**理想化表示**：真实非水电解液中可能存在自由溶剂化离子、离子对和更复杂的离子聚集体，不能默认所有锂盐完全解离。

在均匀的电解液中施加电场：

- 带正电的 Li⁺ 倾向于沿电场方向迁移；
- 带负电的 PF₆⁻ 倾向于沿与电场相反的方向迁移。

<figure id="fig-1" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-transference-number/fig01-ion-migration-directions.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 1 的原图">
    <img src="{{ '/images/posts/hubble-2022-transference-number/fig01-ion-migration-directions.png' | relative_url }}" alt="图 1：Li⁺ 和 PF₆⁻ 的迁移方向" loading="lazy" decoding="async" width="1349" height="674">
  </a>
  <figcaption><strong>图 1</strong>　教学示意。箭头只表示外加电场造成的平均定向迁移，没有画出随机热运动、浓度梯度驱动的扩散及相关离子运动。</figcaption>
</figure>

你可能会问：**两种离子明明往相反方向运动，为什么都可以对同一方向的电流作贡献？**

原因是“常规电流方向”按正电荷移动的方向定义。负电荷向左移动，对常规电流的贡献等效于正电荷向右移动。

在一维、单价离子体系中，可以写成：

$$
\begin{equation}
i=F\left(N_+-N_-\right)
\label{eq:ionic-current}
\end{equation}
$$

其中：

<div class="textbook-table" markdown="1">

| 符号 | 含义 | 常用单位 |
|---|---|---|
| \\(i\\) | 电解液的电流密度 | A/m² |
| \\(F\\) | 法拉第常数，约 \\(96485\\) | C/mol |
| \\(N_+\\) | Li⁺ 的摩尔通量 | mol/(m²·s) |
| \\(N_-\\) | PF₆⁻ 的摩尔通量 | mol/(m²·s) |

</div>

**表 1**　电流密度与正、负离子通量中的符号。
{: .textbook-caption}

**摩尔通量（Molar Flux）**是单位时间内穿过单位面积的净物质的量。这里的两个通量必须采用相同的坐标正方向。式子中的减号来自阴离子的负电荷，绝对不能理解为阴离子“抵消了电流”。

### 2.2 Li⁺ 到达电极，为什么还要考虑阴离子？

以锂离子电池充电为例，石墨负极需要 Li⁺ 完成嵌入过程：

$$
\mathrm{Li^++e^-+C_6\rightarrow LiC_6}
$$

阴离子 PF₆⁻ 通常不参加这个石墨嵌入反应；但它在电解液内部的迁移，会影响盐浓度如何重新分布。电极反应、离子迁移和盐扩散必须同时协调，电池才能持续工作。

这就引出了下一个概念：**在电解液内部传导的电流中，有多少份额可以归因于 Li⁺ 的迁移？**

---

## 3 什么是锂离子迁移数？

### 3.1 迁移数的直观定义

**锂离子迁移数（Lithium-ion Transference Number，\\(t_+\\)）**是描述 Li⁺ 在电解液中承担迁移电流份额的传输参数。对于二元、稀溶液近似和固定溶剂参考系，可以用下面的式子理解：

$$
\begin{equation}
t_+=\frac{i_+}{i_++i_-}
\label{eq:transference-definition}
\end{equation}
$$

其中 \\(i_+\\) 和 \\(i_-\\) 表示两种离子按同一常规电流方向计算的迁移电流贡献。在这一简化情形下：

$$
t_++t_-=1
$$

假设：

$$
t_+=0.30
$$

那么在上述模型条件下，约 30% 的**迁移电流**由 Li⁺ 承担，其余约 70% 由阴离子承担。

<figure id="fig-2" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-transference-number/fig02-migration-current-shares.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 2 的原图">
    <img src="{{ '/images/posts/hubble-2022-transference-number/fig02-migration-current-shares.png' | relative_url }}" alt="图 2：30% 的迁移电流由 Li⁺ 承担" loading="lazy" decoding="async" width="1349" height="530">
  </a>
  <figcaption><strong>图 2</strong>　教学示意。假设总迁移电流为 100 mA 且 \(t_+=0.30\)，则 Li⁺ 与 PF₆⁻ 分别贡献约 30 mA 和 70 mA。此图仅适用于解释简单的离子迁移电流分配。</figcaption>
</figure>

### 3.2 迁移数 0.3，是否意味着只有 30% 的 Li⁺ 能进入石墨？

**不能这样理解。**

迁移数描述电解液内部的迁移电流份额；石墨表面嵌锂反应所消耗的 Li⁺ 则由电场迁移、浓度梯度引起的扩散，以及必要时的对流共同补充。

在真实电池中，Li⁺ 的局部摩尔通量可以理解为不同传输作用的组合。反应发生的电极界面需要满足物质守恒，因此不应把 \\(t_+=0.3\\) 等同于“只有 30% 的充电电荷能存入石墨”。

举个具体例子：石墨负极每秒要消耗一定数量的 Li⁺，电解液中的 PF₆⁻ 虽然不嵌入石墨，但其迁移会促使电解液形成盐浓度梯度；这个浓度梯度又驱动盐扩散，使石墨附近的 Li⁺ 得到补充。如果补充仍跟不上反应消耗，就会出现明显的浓差极化。

### 3.3 专业补充：迁移数与参考系有关

严格讨论浓电解液时，不能忽略“相对于谁运动”。

在固定的实验室坐标、固定溶剂坐标或液体质量平均速度坐标下，定义的物种迁移通量可能不同。Newman 浓溶液理论常使用**相对于溶剂速度定义的迁移数**，记为：

$$
t_+^0
$$

上标 \\(0\\) 提醒我们它对应特定参考系。在多孔电极模型中，后面浓差极化方程中的 \\(t_+^0\\) 必须与该模型的其他变量采用一致定义。

**重要提醒：** 对浓电解液，实际测得的迁移数不能直接当成正负离子独立扩散贡献的简单比例，更不能不检查方法就将不同论文里的迁移数进行排序。

---

## 4 迁移数与电导率、扩散系数究竟有什么区别？

### 4.1 电导率研究的是总体导电能力

电导率（Ionic Conductivity，\\(\kappa\\)）衡量电解液在电场下传导电流的能力。

在前一节的均匀导体近似下：

$$
\begin{equation}
R_{\mathrm{bulk}}=\frac{L}{\kappa A}
\label{eq:bulk-resistance}
\end{equation}
$$

电导率越高，其他条件相同的情况下体相欧姆电阻越低。

这里 \\(L\\) 为电流通过液体的距离，\\(A\\) 为横截面积；这仍是均匀导电层的近似，不能直接代表整节电池的总阻抗。

### 4.2 迁移数研究的是电流由谁承担

在简化的离子独立迁移模型中，可以定义 Li⁺ 的部分电导率：

$$
\begin{equation}
\kappa_+=t_+\kappa
\label{eq:partial-conductivity}
\end{equation}
$$

但这种分拆需要清楚模型前提。对于存在明显离子相关运动的浓电解液，不能把它无条件理解为一个可以独立测量并直接决定电池性能的量。

<div id="example-partial-conductivity" class="textbook-example" markdown="1">
<p class="textbook-example__label">例题 1</p>
<div class="textbook-example__body" markdown="1">

#### 总电导率较高，Li⁺ 的部分电导率也较高吗？

例如，我们比较两种电解液：

<div class="textbook-table" markdown="1">

| 指标 | 电解液 A | 电解液 B |
|---|---:|---:|
| 总电导率 \\(\kappa\\) | 10 mS/cm | 8 mS/cm |
| Li⁺ 迁移数 \\(t_+\\) | 0.20 | 0.50 |
| 理想模型下 \\(\kappa_+=t_+\kappa\\) | 2 mS/cm | 4 mS/cm |

</div>

**表 2**　理想独立离子模型中的部分电导率比较，数值为教学假设。
{: .textbook-caption}

#### 解答

A 的总体导电能力更强，而 B 的 Li⁺ 在该理想模型中承担了更高比例的迁移电流。由此可见，只测总电导率会遗漏离子的电流分担情况。

**注意：这组数字仅是教学假设，并非 Hubble、Nyman 或 Landesfeind 的实测配方。**

</div>
</div>

### 4.3 扩散系数研究的是浓度梯度驱动下的传输

**扩散系数（Diffusion Coefficient，\\(D\\)）**衡量粒子由于热运动及浓度不均匀而扩散的快慢。对于单一物种、简单条件，可以写出菲克第一定律：

$$
\begin{equation}
N_{\mathrm{diff}}=-D\frac{\partial c}{\partial x}
\label{eq:fick}
\end{equation}
$$

其中 \\(c\\) 为局部浓度，\\(x\\) 为空间坐标，\\(\partial c/\partial x\\) 是沿空间方向的浓度梯度。负号表示扩散净通量一般指向浓度降低的方向。

对于含有正、负离子的电解液，常用**盐扩散系数（Binary Salt Diffusion Coefficient，\\(D_{\pm}\\)）**描述耦合扩散。它与单独对 Li⁺ 或 PF₆⁻ 测得的自扩散系数不应混为一谈。

### 4.4 Nernst–Einstein 关系能够提供怎样的直观解释？

在离子运动近似独立、体系足够稀的模型中：

$$
\begin{equation}
\kappa_{\mathrm{NE}}=\frac{F^2c}{RT}\left(D_++D_-\right)
\label{eq:nernst-einstein}
\end{equation}
$$

这里 \\(c\\) 为正、负离子各自相同的摩尔浓度，\\(R\\) 为气体常数，\\(T\\) 为绝对温度。\\(D_+\\)、\\(D_-\\) 分别对应正、负离子的扩散系数。

且对一价、等浓度的正负离子：

$$
\begin{equation}
t_+\approx\frac{D_+}{D_++D_-}
\label{eq:transference-diffusion}
\end{equation}
$$

这里的 \\(D_+\\) 和 \\(D_-\\) 是在相应理想化条件下用于估计输运的扩散系数。对于实际浓电解液，不可不加限制地将 NMR（核磁共振）测量的自扩散系数带入并称所得比例为准确迁移数。自扩散系数描述粒子在均匀体系中随机运动的快慢，需要与盐的耦合扩散系数区分。

<div id="example-diffusion-ratio" class="textbook-example" markdown="1">
<p class="textbook-example__label">例题 2</p>
<div class="textbook-example__body" markdown="1">

#### 两个扩散系数都减半，迁移数会下降吗？

假设以下扩散系数采用同一任意单位，仅用于比较相对变化：

$$
D_+=1,\qquad D_-=3
$$

#### 解答

则：

$$
t_+=\frac{1}{1+3}=0.25
$$

如果降温后两个扩散系数都恰好减半：

$$
D_+=0.5,\qquad D_-=1.5
$$

那么：

$$
t_+=\frac{0.5}{0.5+1.5}=0.25
$$

迁移数没有发生改变，虽然总扩散能力明显下降。

**因此：电导率因降温下降，不能直接推出 Li⁺ 迁移数一定下降。** 要使迁移数改变，至少需要两种离子的相对运动能力发生变化，或者考虑离子相关运动、参考系等更复杂的效应。

</div>
</div>

---

## 5 为什么迁移数较低会增加浓差极化？

这是整个 Transference number 小节中最值得深入理解的过程。

### 5.1 先看充电时的锂离子供需关系

充电时，正极释放 Li⁺，负极石墨消耗 Li⁺ 并发生嵌入反应。在持续的电流下，Li⁺ 在电解液中的输运必须足够快，才能跟上负极表面的反应。

如果靠近石墨表面的 Li⁺ 消耗得比补充得更快，负极附近的锂盐浓度可能下降，正极附近的浓度则可能升高。这样就形成**浓度梯度（Concentration Gradient）**，即溶液浓度随空间位置变化。

<figure id="fig-3" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-transference-number/fig03-charge-concentration-gradients.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 3 的原图">
    <img src="{{ '/images/posts/hubble-2022-transference-number/fig03-charge-concentration-gradients.png' | relative_url }}" alt="图 3：充电时的锂盐浓度梯度和迁移数" loading="lazy" decoding="async" width="1402" height="700">
  </a>
  <figcaption><strong>图 3</strong>　教学示意。假设相同电流、盐扩散系数和几何条件，较低迁移数可能需要更陡的浓度梯度来维持阴离子边界约束。曲线不是原始电池浓度分布测量。</figcaption>
</figure>

### 5.2 从阴离子通量方程推导

对于理想化的一维二元电解液，在固定溶剂参考系、无对流、材料参数近似恒定的情况下，可将阴离子通量写为：

$$
\begin{equation}
N_-=-D_{\pm}\frac{\partial c}{\partial x}-\frac{1-t_+^0}{F}i_e
\label{eq:anion-flux}
\end{equation}
$$

这里：

- \\(N_-\\)：阴离子摩尔通量；
- \\(D_{\pm}\\)：盐的有效二元扩散系数；
- \\(c\\)：盐浓度；
- \\(t_+^0\\)：相对于溶剂定义的锂离子迁移数；
- \\(i_e\\)：电解液中的电流密度；
- \\(F\\)：法拉第常数。

第一项来自浓度梯度驱动的扩散；第二项表征电流驱动的迁移贡献。这是经过简化的模型方程，并非对所有非水电解液都准确的普适定律。

当阴离子在电极表面不发生反应且不能穿过电极，考虑简单一维稳态情况，可以采用边界约束：

$$
N_-=0
$$

将零阴离子通量约束代入式 \\(\eqref{eq:anion-flux}\\)，浓度梯度的绝对值为：

$$
\begin{equation}
\left|\frac{\partial c}{\partial x}\right|=\frac{(1-t_+^0)|i_e|}{FD_{\pm}}
\label{eq:concentration-gradient}
\end{equation}
$$

式 \\(\eqref{eq:concentration-gradient}\\) 表明：**其他参数相同时，\\(t_+^0\\) 越低，所需浓度梯度越大。**

<div id="example-concentration-gradient" class="textbook-example" markdown="1">
<p class="textbook-example__label">例题 3</p>
<div class="textbook-example__body" markdown="1">

#### 迁移数下降怎样改变所需浓度梯度？

假设迁移数从 0.40 降到 0.20：

$$
1-t_+^0:\quad 0.60\ \longrightarrow\ 0.80
$$

#### 解答

在模型的其他变量完全不变时，浓度梯度增幅为：

$$
\frac{0.80-0.60}{0.60}\times100\%\approx33.3\%
$$

这只是教学推导，不是论文报告的某一电池的实际增幅。真实低温电池的 \\(D_{\pm}\\)、电导率、热力学因子和局部孔隙结构都会同时影响结果。

</div>
</div>

### 5.3 什么是浓差极化（Concentration Polarization）？

**浓差极化**是电池通电后，不同位置的盐浓度形成差异，从而造成额外的电位变化或电压损失的现象。

可以想象石墨负极是一家不断使用 Li⁺ 的工厂。Li⁺ 从电解液运到负极，相当于送货。如果货车不能及时补货，工厂门口就会出现“缺货”；为了维持同样生产速度，电池就需要付出更大的电位代价。

在充电过程中，石墨负极的电位可能因多种极化进一步降低。若某些位置达到有利于金属锂沉积的条件，析锂风险就会增加。

但必须分清：**低迁移数不是析锂的充分条件。** 析锂还取决于充电电流、温度、石墨电位、界面反应、电极结构等因素。

### 5.4 为什么放电容量也可能受到影响？

放电时，电池必须持续输运 Li⁺ 并保持一定的端电压。当浓度梯度较大、传质速度跟不上工作电流时，电池可能产生更大的电压损失。

如果电压在可用锂完全利用之前就降到设定的截止电压，测试上看到的放电容量就会偏低。

这就是 Hubble 所说的“迁移数下降可能增加极化，促使低温放电提前发生电压下降”的物理含义。请特别留意作者使用的是**可能贡献（could contribute）**这样的表述，不能直接改写成“迁移数下降必然是低温容量损失的主要原因”。

---

## 6 回到 Hubble 原文：迁移数随温度降低会怎样？

### 6.1 Hubble 的陈述究竟有多强？

Hubble 在第 553–554 页指出：

- 对典型锂离子电池电解液，室温下 \\(t_+\\) 常见数值约为 0.3–0.5；
- 非稀溶液中迁移数难以准确测量，许多数据只在室温下获得；
- Landesfeind & Gasteiger 等研究表明，典型体系的 \\(t_+\\) **可能**随降温而下降；
- 这可能加重极化并影响低温放电电压；
- 具体的分子机理仍未完全澄清，还需要更多实验与计算研究。

原文没有声称“所有锂离子电解液的迁移数降温后必然减小”。

### 6.2 追溯 [27]：Landesfeind & Gasteiger（2019）

**论文：** *Temperature and Concentration Dependence of the Ionic Transport Properties of Lithium-Ion Battery Electrolytes*。

*Journal of The Electrochemical Society*, **166** (2019), A3079–A3097。

[DOI: 10.1149/2.0571912jes](https://doi.org/10.1149/2.0571912jes)

他们研究了以下混合溶剂体系，括号中为质量比：

<div class="textbook-table" markdown="1">

| 电解液 | 溶剂配比 |
|---|---|
| LiPF₆/EC/DMC | EC:DMC = 1:1 |
| LiPF₆/EC/EMC | EC:EMC = 3:7 |
| LiPF₆/EMC/FEC | EMC:FEC = 19:1 |

</div>

**表 3**　Landesfeind & Gasteiger（2019）研究的溶剂配比，均为质量比。
{: .textbook-caption}

FEC 是氟代碳酸乙烯酯。上述配比均为质量比。

实验的温度范围约为：

$$
-10\ ^\circ\mathrm{C}\leq T\leq50\ ^\circ\mathrm{C}
$$

锂盐浓度范围约为：

$$
0.1\ \mathrm{M}\leq c\leq3.0\ \mathrm{M}
$$

研究人员将电导率、盐扩散系数、迁移数、热力学因子等放在一起表征，而没有依赖某一种指标评价电解液。

### 6.3 温度变化的具体实验结果

以 **0.1 M LiPF₆ / EC:DMC = 1:1（质量比）** 为例，原论文报告：

<div class="textbook-table" markdown="1">

| 测试温度 | 报告的 \\(t_+\\) |
|---|---:|
| 50 °C | 0.59 |
| 0 °C | 0.38 |

</div>

**表 4**　0.1 M LiPF₆ / EC:DMC = 1:1（质量比）的温度与迁移数示例。
{: .textbook-caption}

<figure id="fig-4" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-transference-number/fig04-temperature-transference-data.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 4 的原图">
    <img src="{{ '/images/posts/hubble-2022-transference-number/fig04-temperature-transference-data.png' | relative_url }}" alt="图 4：Landesfeind 2019 的温度—迁移数示例" loading="lazy" decoding="async" width="1325" height="912">
  </a>
  <figcaption><strong>图 4</strong>　根据 Landesfeind & Gasteiger（2019）正文报告的两个数值重新制图；仅表示特定 0.1 M EC:DMC 配方，不是该研究所有温度和浓度的数据曲线。</figcaption>
</figure>

由此可以看到：在**这组指定条件**下，降温对应更低的迁移数。实验结果支持 Hubble 在综述中提出的可能趋势。

原论文还报告在 **20 °C、1 M LiPF₆** 下，得到如下示例结果：

<div class="textbook-table" markdown="1">

| 配方 | 直接报告的 \\(t_+\\) | 拟合给出的近似值 |
|---|---:|---:|
| EC:DMC = 1:1 | 0.27 | 0.28 |
| EC:EMC = 3:7 | 0.16 | 0.22 |

</div>

**表 5**　20 °C、1 M LiPF₆ 下的直接报告值与拟合近似值。
{: .textbook-caption}

这表明配方及数据处理方式也会影响所报告的迁移数。**不能把不同温度、盐浓度、溶剂比例的数值放在一起，认定差异全部来自温度。**

### 6.4 负迁移数一定意味着 Li⁺ 反向运动吗？

Landesfeind & Gasteiger 在接近 −10 °C 的部分测量中，得到了负迁移数，部分数据误差较大；例如他们还报告过 1 M EMC:FEC 配方的异常负值，但对应拟合结果与直接数值差异很大。

从更一般的传输理论看，特定参考系下出现负的有效迁移数并非完全不可能，但**这一篇研究中的负值不能直接证明锂离子团簇真的在反方向迁移**。

原作者提示了两类问题：一是低温数据存在较大实验不确定性；二是若形成复杂离子聚集体，采用简单二元电解液模型可能不足以描述所有载流结构。

需要把“负值这个测量结果”和“它由什么分子结构引起”严格分开。

---

## 7 为什么低温下 Li⁺ 迁移数可能下降？

Hubble 引述 Landesfeind & Gasteiger 的讨论，重点提出两种可能的解释。

### 7.1 溶剂化 Li⁺ 的有效运动尺寸较大

前面我们已经学过**溶剂化（Solvation）**：溶剂分子与离子发生配位或静电相互作用，在其周围形成溶剂化结构。

Li⁺ 的裸离子尺寸虽然很小，但它在 EC/EMC 等溶液中通常有溶剂分子围绕。在描述液体中的运动阻力时，需要考虑**流体动力学半径（Hydrodynamic Radius）**，即由粒子受到的黏性阻力定义的有效尺寸。

Stokes–Einstein 关系的简化形式为：

$$
\begin{equation}
D=\frac{k_{\mathrm B}T}{6\pi\eta r_h}
\label{eq:stokes-einstein}
\end{equation}
$$

其中：

- \\(k_{\mathrm B}\\)：玻尔兹曼常数；
- \\(T\\)：绝对温度；
- \\(\eta\\)：液体动力黏度；
- \\(r_h\\)：流体动力学半径。

如果溶剂化 Li⁺ 的运动受到较大阻力，其扩散能力可能较弱。PF₆⁻ 与溶剂的相互作用方式不同，对温度变化的响应可能也不同。

只要 **Li⁺ 相对于 PF₆⁻ 的运动能力发生了改变**，迁移数就可能发生变化。

但请注意：这是物理上合理的解释，不能单凭“Li⁺ 有溶剂化壳层”就证明降温一定导致 \\(t_+\\) 下降。

### 7.2 离子聚集体可能改变有效电荷输运

LiPF₆ 在非水溶剂中可能出现离子缔合：

$$
\mathrm{Li^++PF_6^-\rightleftharpoons[LiPF_6]^0}
$$

这里 \\(\mathrm{[LiPF_6]^0}\\) 表示总体不带净电荷的离子关联结构。

在一定条件下，还可以讨论更复杂的带负电聚集体：

$$
\mathrm{Li^++2PF_6^-\rightleftharpoons[Li(PF_6)_2]^-}
$$

这个聚集体虽然含锂，但整体带负电荷。如果锂作为这一类负电荷聚集体的一部分参与运动，其运动与独立自由 Li⁺ 的行为可能不同。

研究人员因此提出：离子聚集或相关运动**可能**与负迁移数、迁移数随温度变化有关。

目前应谨慎区分三个层次：

1. 离子聚集体作为一种可能结构，在化学上是有根据的。
2. 聚集体会改变电荷传输，这是合理的机理方向。
3. **Landesfeind 2019 没有凭低温迁移数数据直接确认 \\(\mathrm{[Li(PF_6)_2]^-}\\) 的含量，也不能据此证明它就是负值出现的唯一原因。**

因此，Hubble 明确写出这部分仍需要更多实验与计算工作。

---

## 8 为什么迁移数比电导率更难测量？

### 8.1 电导率测量只能得到总体响应

电导率测试测量整个电解液对电场的电流响应。它不能直接把传输贡献准确拆分成 Li⁺ 与 PF₆⁻ 两个独立部分。

迁移数测量进一步面临：

- 两种离子既可能电场迁移，也可能浓差扩散；
- 电极界面会产生其他电压损失；
- 盐浓度分布随时间变化；
- 溶剂本身可能发生运动；
- 非理想浓电解液具有与浓度有关的热力学性质；
- 离子相关运动使简单的独立离子图像失效。

因此，不同实验方法、所选模型和参考系可能得到不同的结果。

### 8.2 [27] 的组合测量思路

Landesfeind & Gasteiger 将多种电化学测量联系起来，其中包括电导率测量、盐扩散相关的极化和弛豫测试，以及浓差电池的电势信息。

<figure id="fig-5" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-transference-number/fig05-combined-transport-measurements.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 5 的原图">
    <img src="{{ '/images/posts/hubble-2022-transference-number/fig05-combined-transport-measurements.png' | relative_url }}" alt="图 5：联合测量迁移数的逻辑" loading="lazy" decoding="async" width="1402" height="870">
  </a>
  <figcaption><strong>图 5</strong>　教学示意，概括通过几类独立测量约束浓溶液传输参数的思路，不代表论文逐台设备的真实连线。</figcaption>
</figure>

**浓差电池（Concentration Cell）**：利用两个位置的电解液浓度差形成电势响应，从中得到与热力学性质、迁移参数相关的信息。

**恒电流极化（Galvanostatic Polarization）**：给电池施加固定电流，观察电压随时间变化。

**电位弛豫（Potential Relaxation）**：停止通电后，观察浓度梯度及其他极化逐渐消退所引起的电压恢复。

原文采用可以由不同实验分析获得的参数组合，并结合浓溶液传输模型估计迁移数和热力学因子。为了理解原理，可把部分关系写成：

$$
\begin{equation}
a=\chi(1-t_+)
\label{eq:transport-factor-a}
\end{equation}
$$

$$
\begin{equation}
b=\chi(1-t_+)^2
\label{eq:transport-factor-b}
\end{equation}
$$

其中 \\(\chi\\) 是**热力学因子（Thermodynamic Factor）**，用于描述电解液中有效热力学浓度（活度）如何随盐浓度变化。例如，在一个常见约定下可用平均离子活度系数 \\(f_{\pm}\\) 表示为：

$$
\begin{equation}
\chi=1+\frac{\partial\ln f_{\pm}}{\partial\ln c}
\label{eq:thermodynamic-factor}
\end{equation}
$$

于是，对于定义一致且下式分母不为零的参数：

$$
\begin{equation}
t_+=1-\frac{b}{a}
\label{eq:transference-from-factors}
\end{equation}
$$

以及：

$$
\begin{equation}
\chi=\frac{a^2}{b}
\label{eq:factor-from-measurements}
\end{equation}
$$

请注意，**\\(a\\)、\\(b\\) 的具体定义和它们如何由实验观测量得到，依赖原论文采用的模型约定**。这里展示代数关系，不能把它当成无需浓差电池或极化实验、直接从任意两项读数就能计算迁移数的公式。

### 8.3 回看 [29]：Nyman、Behm 与 Lindbergh（2008）

**论文：** *Electrochemical characterisation and modelling of the mass transport phenomena in LiPF₆–EC–EMC electrolyte.*

*Electrochimica Acta*, **53** (2008), 6356–6365。

[DOI: 10.1016/j.electacta.2008.04.023](https://doi.org/10.1016/j.electacta.2008.04.023)

这篇论文对 **EC:EMC = 3:7、25 °C、盐浓度 0.2–2.0 mol/dm³** 的电解液进行了联合表征。其报告包括：

- 电导率在研究范围内于约 1.0 mol/dm³ 时达到最大值 **9.5 mS/cm**；
- 在其所采用的测量参考系和方法下，Li⁺ 迁移数随盐浓度增加而降低；
- 在 0.2 mol/dm³ 时，报告的迁移数约为 **0.37**，是该研究浓度范围内的最大值；
- 与盐输运有关的扩散系数和热力学因子也显著依赖浓度。

特别注意：Nyman 讨论过**相对于实验室参考系**的迁移数，而其他模型常采用相对于溶剂的定义。引用具体数字时需要检查原论文定义。不能直接把“室温典型值 0.3–0.5”当成所有测量方法都应满足的固定区间。

这篇文章的价值在于：**它没有只测迁移数，而是通过多项实验同时刻画盐传输。** 这对于解释低温电池中浓差极化非常重要。

---

## 9 怎样将迁移数联系到实际低温电池性能？

### 9.1 三个参数需要放在一起看

- **电导率 \\(\kappa\\)**：电解液总体通过电流的能力，影响体相欧姆电压损失。
- **Li⁺ 迁移数 \\(t_+\\)**：Li⁺ 在特定参考系下的迁移份额，影响浓度梯度的建立。
- **盐扩散系数 \\(D_{\pm}\\)**：浓度不均匀时盐重新分布的快慢，影响浓差极化。

在实际模型中，通常还需要热力学因子 \\(\chi\\)、温度、盐浓度以及电极孔隙率和曲折度等信息。

把低温过程连起来，可以画出：

1. **温度降低**：许多传统配方的电导率与盐扩散系数下降。
2. **某些配方迁移数下降**：相同电流下维持盐传输可能需要更大浓度梯度。
3. **浓差极化增加**：电压损失增加，电极局部表面浓度发生变化。
4. **放电可能提前达到截止电压**：测试得到的可用容量减小。
5. **充电可能提高析锂风险**：特别是在负极电位偏低、局部传质困难时。

以上是具有明确条件的物理解释链。Hubble 没有把所有低温容量下降都归因于迁移数。原文在下一节 *Interfacial considerations* 中进一步指出，低温下电极界面过程通常非常重要。

### 9.2 联系原文 Fig. 2：为什么电解液传输只是整条路径的一环？

<figure id="fig-6" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-transference-number/fig06-hubble-ion-transport.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 6 的原图">
    <img src="{{ '/images/posts/hubble-2022-transference-number/fig06-hubble-ion-transport.png' | relative_url }}" alt="图 6：Hubble 原文 Fig. 2 的完整锂输运过程" loading="lazy" decoding="async" width="1551" height="381">
  </a>
  <figcaption><strong>图 6</strong>　来源：Hubble et al. (2022)，Fig. 2 局部裁切；原综述注明此图出自其文献 [15]，即 Li et al. (2017，见<a href="{{ '/posts/hubble-2022-electrolyte-conductivity/' | relative_url }}#ref-6">第一篇参考文献 [6]</a>）。原图列出 Li⁺ 在石墨、界面膜、电解液及正极中的输运和反应步骤。</figcaption>
</figure>

图中的 SEI（固体电解质界面膜）位于负极与电解液之间，CEI（正极电解质界面膜）位于正极与电解液之间。电解液内部迁移只是 Li⁺ 通过电池的诸多过程之一。即使改善了电解液的迁移数，仍可能受去溶剂化、电荷转移、界面膜和固态扩散等限制。

因此，**“迁移数提高”与“低温容量提高”之间还隔着实际电池验证。**

### 9.3 [23] 为什么认为提高迁移数可能改善快充？

Diederichsen、McShane 和 McCloskey（2017）在综述 *Promising Routes to a High Li⁺ Transference Number Electrolyte for Lithium Ion Batteries* 中使用电池模型讨论了这个问题。

*ACS Energy Letters*, **2** (2017), 2563–2575。[DOI: 10.1021/acsenergylett.7b00792](https://doi.org/10.1021/acsenergylett.7b00792)

他们的模型说明：在特定电池结构、物性参数和电流条件下，适当提高迁移数可能减轻浓差极化、改善功率和快充能力，**即使电导率比传统电解液低一些**。

但这是基于明确假设的建模结果，不能证明所有高迁移数电解液都优于传统电解液。实际需要综合测量电导率、扩散系数、界面稳定性和循环性能。

---

## 10 明确区分：已获实验支持的结果与仍待验证的解释

<div class="textbook-table" markdown="1">

| 判断 | 证据情况 | 阅读时的正确理解 |
|---|---|---|
| Li⁺、PF₆⁻ 可以共同承担电解液迁移电流 | 电化学理论 | 需要明确电场方向、电荷符号及参考系 |
| 迁移数与总电导率描述不同性质 | 理论与实验方法支持 | 总电导率高不代表 Li⁺ 迁移数一定高 |
| LiPF₆/EC/EMC 的迁移数随盐浓度变化 | Nyman 2008 直接实验支持 | 只对报告的配方、浓度范围和方法作结论 |
| 部分电解液的迁移数随降温下降 | Landesfeind 2019 部分实测结果支持 | 低温数据有较大误差，不可推广到所有配方 |
| 降低迁移数可能增加浓度梯度 | 传输方程及模型支持 | 需要控制电流、盐扩散系数、热力学性质等条件 |
| 溶剂化 Li⁺ 尺寸较大导致降温迁移数下降 | 有物理依据的解释 | 尚不能单靠此原因解释全部温度效应 |
| \\(\mathrm{[Li(PF_6)_2]^-}\\) 导致实验中的负迁移数 | 可能机理 | 原论文没有通过负值直接确认分子聚集体及其数量 |
| 高迁移数一定得到更高低温容量 | 不成立 | 必须实际测试电池及界面反应 |

</div>

**表 6**　实验支持、教学模型与待验证的机理解释。
{: .textbook-caption}

这一节真正值得记住的是三个层次：

**第一，** \\(\kappa\\) 解决“电流在电解液中总体是否容易通过”的问题。

**第二，** \\(t_+\\) 解决“在给定参考系和传输模型中，Li⁺ 对迁移电流贡献多少”的问题。

**第三，** \\(D_{\pm}\\) 解决“出现浓度不均匀以后，盐能多快地重新分布”的问题。

三者必须一起考虑，才更有可能解释浓差极化及其对低温电池性能的影响。

---

## 11 检查理解

<div class="textbook-check" markdown="1">

#### 问题 1　基础概念

一款 LiPF₆ 电解液的 Li⁺ 迁移数为 0.3。为什么这不代表石墨负极充电时只有 30% 的电荷能够参与嵌锂？请解释 PF₆⁻ 在电解液内部的作用。

#### 问题 2　公式推理

假设降温以后，Li⁺ 和 PF₆⁻ 的扩散系数都减小到原来的一半。在理想稀溶液近似下，Li⁺ 迁移数是否必然下降？请利用公式解释。

#### 问题 3　实验判断

假设 A 电解液的电导率为 \\(10\ \mathrm{mS/cm}\\)、迁移数为 \\(0.2\\)；B 电解液的电导率为 \\(7\ \mathrm{mS/cm}\\)、迁移数为 \\(0.5\\)。哪一款更可能减轻浓差极化？为了做出可靠判断，还需要知道哪些参数？是否能仅凭这两项数值断定 B 的低温电池容量一定更高？

</div>

**本节的核心理解：** 如果你能解释三个参数 \\(\kappa\\)、\\(t_+\\)、\\(D_{\pm}\\) 各自的意义，并说明低迁移数为何可能加大浓差极化，同时说清楚这个判断需要哪些假设，就真正理解了本节的核心内容。

---

## 12 参考文献与进一步阅读

文献 [23]、[27]、[29] 沿用 Hubble 综述的编号，便于对照原文。

<a id="ref-1"></a>

#### [1] Hubble et al. (2022)

**Hubble et al. (2022).** *Liquid electrolyte development for low-temperature lithium-ion batteries*. *Energy & Environmental Science*, **15**, 550–578. [DOI: 10.1039/D1EE01789F](https://doi.org/10.1039/D1EE01789F)。请对照第 553–554 页的 *Transference number* 原文及 Fig. 2。

<a id="ref-27"></a>

#### [27] Landesfeind & Gasteiger (2019)

**Landesfeind, J. & Gasteiger, H. A. (2019).** *Temperature and Concentration Dependence of the Ionic Transport Properties of Lithium-Ion Battery Electrolytes*. *Journal of The Electrochemical Society*, **166**, A3079–A3097. [DOI: 10.1149/2.0571912jes](https://doi.org/10.1149/2.0571912jes)。重点查看 Fig. 8j–l 的迁移数与温度、浓度关系，以及其误差讨论。

可对照 [TUM 机构库中的论文全文](https://mediatum.ub.tum.de/doc/1538307/file.pdf)阅读数据与误差讨论。

<a id="ref-29"></a>

#### [29] Nyman, Behm & Lindbergh (2008)

**Nyman, A., Behm, M. & Lindbergh, G. (2008).** *Electrochemical characterisation and modelling of the mass transport phenomena in LiPF₆–EC–EMC electrolyte*. *Electrochimica Acta*, **53**, 6356–6365. [DOI: 10.1016/j.electacta.2008.04.023](https://doi.org/10.1016/j.electacta.2008.04.023)。重点看为何要联合测定电导率、盐扩散系数、迁移数与热力学因子。

<a id="ref-23"></a>

#### [23] Diederichsen, McShane & McCloskey (2017)

**Diederichsen, K. M., McShane, E. J. & McCloskey, B. D. (2017).** *Promising Routes to a High Li⁺ Transference Number Electrolyte for Lithium Ion Batteries*. *ACS Energy Letters*, **2**, 2563–2575. [DOI: 10.1021/acsenergylett.7b00792](https://doi.org/10.1021/acsenergylett.7b00792)。重点理解模型如何预测高迁移数对浓差极化和充电倍率的影响。

**资料范围**　正文区分综述判断、原研究报告的观测值与教学推导。一维稳态模型有明确的参考系和边界条件，不能作为实验直接测得的结论；低温负值也不能单独确认某一种离子聚集结构。
