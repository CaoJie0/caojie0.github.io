---
title: "低温锂电解液的电导率：Hubble 2022 精读笔记 01"
layout: textbook
permalink: /posts/hubble-2022-electrolyte-conductivity/
date: 2026-10-14
blog_category: "锂电"
author_profile: false
share: true
comments: true
tags:
  - 电解液
  - 电导率
  - 低温锂电
  - 文献精读
excerpt: "从锂盐解离、EC/EMC 配方、黏度和离子相关运动出发，理解电导率的温度依赖，以及高电导率为何不一定带来更好的低温电池性能。"
---

电导率衡量电解液传输电荷的能力。本文围绕 Hubble 等人的低温锂离子电池电解液综述，解释锂盐解离、EC/EMC 配方和黏度怎样影响电导率，并讨论这一体相性质为什么不能单独预测完整电池的低温性能。
{: .textbook-lead}

**阅读基础**　离子与电子、氧化还原反应、欧姆定律，以及扩散的基本概念。
{: .textbook-prerequisite}

> **精读来源**　Hubble, D. et al. *Liquid electrolyte development for low-temperature lithium-ion batteries*. **Energy & Environmental Science**, 2022, 15, 550–578。DOI：[10.1039/D1EE01789F](https://doi.org/10.1039/D1EE01789F)。
>
> **原文位置**　第 552 页，*Challenges in low-temperature LIB performance → Bulk electrolyte considerations → Conductivity*；延伸图为第 553 页 Fig. 2。
>
> 图 1–5 和标注为教学假设的数值用于帮助理解，不属于论文的原始实验数据。图 6 保留原综述与其引用研究的来源说明。

## 1 阅读这一节需要解决什么问题？

Hubble 的 Conductivity 小节虽然很短，实际上串联了四个问题：

1. 为什么 LiPF₆ 加入 EC/EMC 混合溶剂后，电解液能够传导电流？
2. 为什么 EC 的高介电常数有利于锂盐解离，但提高 EC 含量不一定持续增加电导率？
3. 为什么温度降低会导致电解液电导率下降？Stokes–Einstein 和 Nernst–Einstein 关系分别解释什么？
4. 为什么高电导率不一定对应更好的低温放电容量？

作者在这一节的核心判断是：**低温下电解液电导率通常下降，但体相欧姆电阻往往并非总电池阻抗中最大的部分。因此，不能单凭电导率预测实际低温性能。** <a href="#ref-1">[1]</a>

## 2 基本概念：电解液究竟怎样导电？

### 2.1 放电时，电子和离子分别在哪里运动？

以石墨负极、含锂过渡金属氧化物正极的锂离子电池为例，放电时 Li⁺ 从负极向正极输运，电子则通过外电路流向正极。电解液承担的是**离子电流**，外电路主要承担**电子电流**。

常用锂盐 LiPF₆ 溶解后，最简单的示意为：

$$
\ce{LiPF6 <=> Li+ + PF6-}
$$

必须注意：这是理想化表示。实际碳酸酯电解液中可能同时存在自由溶剂化离子、离子对及更复杂的聚集体，不能认为所有 LiPF₆ 始终完全独立解离。

<figure id="fig-1" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-conductivity/fig01-ion-electron-transport.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 1 的原图">
    <img src="{{ '/images/posts/hubble-2022-conductivity/fig01-ion-electron-transport.png' | relative_url }}" alt="图 1 放电时的离子与电子传输" loading="lazy" decoding="async" width="1721" height="846">
  </a>
  <figcaption>图 1｜教学示意。放电时 Li⁺ 和 PF₆⁻ 在电场下具有相反的平均迁移方向，二者都能对电解液中的常规电流作出贡献。实际体系还存在随机热运动、浓度梯度、溶剂化及离子相关运动。</figcaption>
</figure>

**为什么负离子朝相反方向移动，也能贡献电流？**

常规电流方向按正电荷的移动方向定义。负电荷沿左边移动，从电流方向看相当于正电荷向右移动。因此，在同一电场驱动下，正负离子的迁移都参与电解液的传导。

这建立了一个非常重要的区别：

- **电导率**衡量整个电解液传输电荷的能力。
- **Li⁺ 扩散系数**衡量 Li⁺ 因随机热运动而扩散的能力。
- **Li⁺ 迁移数**衡量在特定条件和参考系下，Li⁺ 承担的离子迁移电流份额。

上述三个量相互关联，但不能混为一谈。迁移数需要结合测量条件和参考系另行讨论。

### 2.2 什么是电导率（Ionic Conductivity）？

电导率通常用 \\(\kappa\\) 表示，国际单位为 \\(\mathrm{S\,m^{-1}}\\)，在电解液研究中常用 \\(\mathrm{mS\,cm^{-1}}\\)。

在简单的均匀导电层中：

$$
\begin{equation}
R_{\mathrm{bulk}}=\frac{L}{\kappa A}
\label{eq:bulk}
\end{equation}
$$

式 \\(\eqref{eq:bulk}\\) 中：

**表 1**　电导率与欧姆电阻关系中的符号。
{: .textbook-caption}

<div class="textbook-table" markdown="1">

| 符号 | 含义 | 常用单位 |
|---|---|---|
| \\(R_{\mathrm{bulk}}\\) | 电解液体相欧姆电阻 | \\(\Omega\\) |
| \\(L\\) | 电流通过液体的有效距离 | \\(\mathrm{m}\\) 或 \\(\mathrm{cm}\\) |
| \\(A\\) | 垂直于电流方向的横截面积 | \\(\mathrm{m^2}\\) 或 \\(\mathrm{cm^2}\\) |
| \\(\kappa\\) | 电解液电导率 | \\(\mathrm{S\,m^{-1}}\\) 或 \\(\mathrm{S\,cm^{-1}}\\) |

</div>
假设某一均匀液层的厚度为 \\(100\ \mu\mathrm{m}=0.01\ \mathrm{cm}\\)，面积为 \\(1\ \mathrm{cm^2}\\)：

对于 A 电解液，\\(\kappa_A=10\ \mathrm{mS\,cm^{-1}}=0.010\ \mathrm{S\,cm^{-1}}\\)，有：

$$
R_A=\frac{0.01}{0.010\times1}=1\ \Omega
$$

对于 B 电解液，\\(\kappa_B=5\ \mathrm{mS\,cm^{-1}}=0.005\ \mathrm{S\,cm^{-1}}\\)，有：

$$
R_B=\frac{0.01}{0.005\times1}=2\ \Omega
$$

<figure id="fig-2" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-conductivity/fig02-conductivity-ohmic-resistance.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 2 的原图">
    <img src="{{ '/images/posts/hubble-2022-conductivity/fig02-conductivity-ohmic-resistance.png' | relative_url }}" alt="图 2 电导率与欧姆电阻" loading="lazy" decoding="async" width="1536" height="741">
  </a>
  <figcaption>图 2｜教学计算：当长度和面积保持不变，电导率减半，计算得到的液体欧姆电阻增大一倍。此图不是实验数据。</figcaption>
</figure>

由欧姆定律可得：

$$
\begin{equation}
\Delta V_{\mathrm{ohmic}}=IR_{\mathrm{bulk}}
\label{eq:ohmic}
\end{equation}
$$

这里 \\(I\\) 为电流，\\(\Delta V_{\mathrm{ohmic}}\\) 为欧姆电压损失。相同电流下，体相电阻增加会带来更大的欧姆电压损失，可能让放电端电压更早碰到截止电压，造成可用容量下降。

**重要限制**：真实多孔电极内部的电解液并非简单平板形状，孔隙率、曲折度、局部浓度和温度也会影响有效传输。因此，\\(L/(\kappa A)\\) 适用于理解最基本的几何关系，不能直接代表整个电池的总阻抗。

### 2.3 离子浓度与离子运动能力

可以把导电想成运输货物：运输能力与运输车辆数量、每辆车行驶速度都有关。电解液中的对应因素是：

1. **有效参与电荷传输的离子数量**：如果自由离子更多，通常有利于导电。
2. **离子迁移能力**：即离子在外电场作用下产生平均定向运动的能力。
3. **离子间相关运动**：高浓度电解液中离子并不总是独立运动，离子对及聚集体会改变实际电流。

所以，锂盐加得多不一定总能提高电导率。锂盐浓度升高可以增加载流离子，同时也可能提高黏度、改变解离情况和离子相关运动。

---

## 3 为什么 Hubble 重点讨论 EC？

### 3.1 EC 是什么？

**EC（Ethylene Carbonate，碳酸乙烯酯）**是常见环状碳酸酯溶剂。Hubble 指出，传统锂离子电池电解液常含 \\(0.8\\)–\\(1.5\ \mathrm{M}\\) 的 LiPF₆，并混合使用 EC 与链状碳酸酯，例如：

- **DMC（Dimethyl Carbonate，碳酸二甲酯）**；
- **DEC（Diethyl Carbonate，碳酸二乙酯）**；
- **EMC（Ethyl Methyl Carbonate，碳酸甲乙酯）**。

EC 的两个重要优点是：它能够帮助锂盐解离，而且能够在石墨负极表面参与形成保护性 SEI。

### 3.2 介电常数为什么影响锂盐解离？

**相对介电常数（Relative Dielectric Permittivity，\\(\varepsilon_r\\)）**描述介质对电场的响应。对于简单点电荷模型，两个电荷相距 \\(r\\) 时，其静电作用力大小可以表示为：

$$
\begin{equation}
|F_e|=\frac{|q_1q_2|}{4\pi\varepsilon_0\varepsilon_r r^2}
\label{eq:dielectric}
\end{equation}
$$

其中 \\(q_1,q_2\\) 为电荷量，\\(\varepsilon_0\\) 为真空介电常数，\\(\varepsilon_r\\) 为相对介电常数。

在其他条件不变的简化模型中，\\(\varepsilon_r\\) 越大，正负离子之间的静电吸引通常越弱。Hubble 引用 Payne 与 Theodorou 的物性研究指出，EC 在 \\(40\ ^\circ\mathrm C\\) 时的介电常数约为 **90**。<a href="#ref-1">[1]</a>、<a href="#ref-4">[4]</a>

因此，EC 的高介电常数有利于 LiPF₆ 的解离，使电解液中出现可移动离子。

不过，**高介电常数并不能单独预测实际电导率**。实际离子解离还与盐、混合溶剂组成、温度、浓度和离子缔合有关。

### 3.3 Li⁺ 的溶剂化是什么？

**溶剂化（Solvation）**指溶剂分子围绕离子排列、通过配位和静电等相互作用稳定离子的过程。

在 EC/EMC 混合电解液中，EC 或 EMC 的羰基氧都可能与 Li⁺ 发生配位作用，形成**溶剂化壳层（Solvation Shell）**，也就是围绕 Li⁺ 的配位溶剂分子区域。

你可以想象 Li⁺ 行走时携带着周围的“随行分子”。这一比喻有助于理解运动阻力，但现实中溶剂化分子会不断交换，不能把整个壳层当成永久不变的刚性球。

应当区分：

- **介电常数**：描述溶剂整体响应电场、影响电荷相互作用的性质。
- **溶剂化强度及结构**：描述具体溶剂分子怎样与 Li⁺ 相互作用、配位数和分子排列如何。

二者有联系，却不能简单等同。

### 3.4 EC 为什么对石墨负极很重要？

**SEI（Solid Electrolyte Interphase，固体电解质界面膜）**是电解液在低电位负极表面反应形成的界面层。适当的 SEI 能允许 Li⁺ 通过，并显著抑制电子持续进入电解液，使进一步的电解液分解受到限制。

EC 被传统石墨电池广泛使用，一个关键原因就是其还原分解有利于建立合适的 SEI。这是 Hubble 引用的 Xu（2004）综述重点讨论的内容。<a href="#ref-1">[1]</a>、<a href="#ref-3">[3]</a>

因此，降低 EC 含量虽然可能改善低温液相传输，却可能导致石墨负极界面稳定性变差。电导率和长期循环寿命未必同时得到改善。

---

## 4 为什么增加 EC 含量，电导率不一定提高？

假设保持 LiPF₆ 浓度和温度不变，只改变 EC/EMC 的混合比例。

EC 增加可能同时引发两种相反的影响。

**影响 A：** 混合溶剂的介电性质变化，锂盐解离可能更充分，有效参与电流传输的离子数可能增加，对电导率有利。

**影响 B：** 混合溶剂黏度通常增加，Li⁺ 与 PF₆⁻ 的运动可能变慢，对电导率不利。

<figure id="fig-3" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-conductivity/fig03-ec-competing-effects.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 3 的原图">
    <img src="{{ '/images/posts/hubble-2022-conductivity/fig03-ec-competing-effects.png' | relative_url }}" alt="图 3 EC 含量的两种相反影响" loading="lazy" decoding="async" width="1773" height="781">
  </a>
  <figcaption>图 3｜作用路径的教学示意。增加 EC 后电导率的实际变化，需要测量，不能只从其中一种作用推断。</figcaption>
</figure>

### 4.1 黏度是什么？为什么会变化？

**黏度（Viscosity，\\(\eta\\)）**描述流体抵抗相对流动的程度。日常生活中，蜂蜜比水难流动，可以作为直观类比。

EC 与链状碳酸酯的分子结构和分子间相互作用不同。EC 比例变化会改变混合物的相互作用与流动阻力，因此改变黏度。通常在这些常见配方中，EC 比例较高与更大的黏度有关。

不过，黏度与 EC 比例的关系需要限定温度、盐浓度和具体溶剂。不能从纯 EC 的单一物性直接精确计算混合液黏度。

### 4.2 Ding 等人（2001）怎样实验验证？

Hubble 在电导率小节引用的 **文献 [18]** 是：

Ding, M. S. et al. (2001), *Change of Conductivity with Salt Content, Solvent Composition, and Temperature for Electrolytes of LiPF₆ in Ethylene Carbonate–Ethyl Methyl Carbonate*, *Journal of The Electrochemical Society*, **148**, A1196–A1204。<a href="#ref-2">[2]</a>

他们研究了 LiPF₆/EC/EMC 电解液，系统改变：

**表 2**　Ding 等人研究涉及的配方与温度范围。
{: .textbook-caption}

<div class="textbook-table" markdown="1">

| 变量 | 原始研究涉及的范围 |
|---|---|
| LiPF₆ 盐浓度 | 约 \\(0.4\\)–\\(1.8\ \mathrm{mol\,kg^{-1}}\\) 溶剂 |
| EC 摩尔分数 | 约 \\(0.23\\)–\\(0.54\\) |
| 温度 | 约 \\(-40\\) 至 \\(60\ ^\circ\mathrm C\\) |

</div>
> **单位提醒**：论文中的 \\(\mathrm{mol\,kg^{-1}}\\) 为质量摩尔浓度，和 \\(\mathrm{M=mol\,L^{-1}}\\) 不能直接混用，需要溶液密度及其定义条件才能换算。

实验给出两个重要现象。

#### 现象一：锂盐增加时，电导率可能先升后降

在较低盐浓度区间，增加 LiPF₆ 通常意味着更多带电粒子参与传输，因此电导率可能上升。

再继续增加盐时，黏度升高、离子相关运动或离子缔合改变等不利因素可能增强，最终出现电导率最大值。

<figure id="fig-4" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-conductivity/fig04-salt-concentration-conductivity.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 4 的原图">
    <img src="{{ '/images/posts/hubble-2022-conductivity/fig04-salt-concentration-conductivity.png' | relative_url }}" alt="图 4 盐浓度与电导率关系的教学示意" loading="lazy" decoding="async" width="2021" height="1056">
  </a>
  <figcaption>图 4｜仅展示“先升后降”可能出现的趋势，不是 Ding 等人的原始曲线，峰值所在横坐标没有实验意义。</figcaption>
</figure>

#### 现象二：EC 含量也存在相互竞争的影响

Ding 等人在其研究范围内，报告了不同温度下电导率与盐浓度、EC 摩尔分数之间的复杂关系。

在 \\(30\ ^\circ\mathrm C\\)、研究范围内，最高电导率约为 \\(10.5\ \mathrm{mS\,cm^{-1}}\\)，对应约 \\(0.92\ \mathrm{mol\,kg^{-1}}\\) 的盐浓度和 EC 摩尔分数 \\(0.54\\)。**这里的 \\(0.54\\) 位于实验 EC 比例范围的边界，不能据此声称它是所有可能配方的全局最佳 EC 含量。**

当温度降低时，高电导率所对应的盐浓度及 EC 比例也会发生变化。这说明室温下的最佳配方不能直接认定为低温最佳配方。<a href="#ref-2">[2]</a>

**学习这一节最应记住的结果**：高介电常数有利于锂盐解离，低黏度有利于离子运动。两种作用可能互相竞争，因此 EC 含量需要结合实际电导率实验判断。

---

## 5 为什么降低温度会导致电导率下降？

Hubble 在原文中指出：对常见锂离子电池液态电解液，在相关工作温度范围内，电导率随温度降低而下降，作者主要用黏度效应解释这一趋势。<a href="#ref-1">[1]</a>

要理解这句话，需要两个经典关系。

### 5.1 先区分扩散与迁移

**扩散（Diffusion）**：由热运动产生、在浓度差等条件下表现为净物质输运的过程。扩散系数 \\(D\\) 描述这一过程的快慢。

**迁移（Migration）**：离子在电场作用下产生的定向输运，其平均速度与离子迁移率有关。

在某些近似条件下，粒子的随机扩散能力与电场下的运动能力可以建立联系。

### 5.2 Stokes–Einstein 关系：黏度如何影响扩散？

**斯托克斯–爱因斯坦关系（Stokes–Einstein Relation）**在连续流体中的球形粒子等理想条件下写为：

$$
\begin{equation}
\boxed{D=\frac{k_{\mathrm B}T}{6\pi\eta r_{\mathrm h}}}
\label{eq:stokes-einstein}
\end{equation}
$$

其中：

**表 3**　Stokes–Einstein 关系中的参数。
{: .textbook-caption}

<div class="textbook-table" markdown="1">

| 量 | 含义 |
|---|---|
| \\(D\\) | 扩散系数，\\(\mathrm{m^2\,s^{-1}}\\) |
| \\(k_{\mathrm B}\\) | 玻尔兹曼常数 |
| \\(T\\) | 绝对温度，K |
| \\(\eta\\) | 动力黏度，\\(\mathrm{Pa\,s}\\) |
| \\(r_{\mathrm h}\\) | 流体动力学半径，即与流动阻力相关的有效尺寸 |

</div>
由式 \\(\eqref{eq:stokes-einstein}\\) 可见，若暂时假定 \\(r_{\mathrm h}\\) 不变，则 \\(D\\) 随 \\(T\\) 增大而增大，随 \\(\eta\\) 增大而降低。

降温常伴随黏度上升，因此溶剂化离子的扩散往往减慢。

**但真实 LiPF₆/EC/EMC 体系不满足所有理想条件。** 溶剂化结构会变化；溶剂分子不断交换；离子不完全是刚性球；浓电解液中还存在较强的相关运动。该关系帮助判断物理趋势，不能无条件直接预测准确的 \\(D\\) 值。

### 5.3 Nernst–Einstein 关系：扩散能力与电导率

**能斯特–爱因斯坦关系（Nernst–Einstein Relation）**在离子运动相互独立的近似下，将各离子的扩散与电导率联系起来：

$$
\begin{equation}
\boxed{\kappa_{\mathrm{NE}}=\frac{F^2}{RT}\sum_i z_i^2c_iD_i}
\label{eq:nernst-einstein}
\end{equation}
$$

其中：

- \\(F\\) 为法拉第常数；\\(R\\) 为气体常数；\\(T\\) 为绝对温度；
- \\(z_i\\) 是第 \\(i\\) 种离子的电荷数；
- \\(c_i\\) 为摩尔浓度，单位 \\(\mathrm{mol\,m^{-3}}\\)；
- \\(D_i\\) 为扩散系数；
- \\(\kappa_{\mathrm{NE}}\\) 是这种独立离子近似给出的计算电导率，不保证与真实浓电解液中的实测 \\(\kappa\\) 一致。

对理想的 1:1 电解质 LiPF₆，若正负离子浓度均为 \\(c\\)，式 \\(\eqref{eq:nernst-einstein}\\) 可写为：

$$
\begin{equation}
\kappa_{\mathrm{NE}}=\frac{F^2c}{RT}(D_++D_-)
\label{eq:binary-electrolyte}
\end{equation}
$$

因此，**Li⁺ 和 PF₆⁻ 都对电导率作出贡献**。它不是单纯由 Li⁺ 的扩散系数决定。

### 5.4 两个关系式合起来告诉我们什么？

如果再采用有效粒子大小近似固定、离子之间近似独立等条件，将 Stokes–Einstein 关系代入 Nernst–Einstein 关系，则温度 \\(T\\) 的显式因子可以在代数上抵消，出现近似的关系：

$$
\begin{equation}
\kappa\propto\frac{c_{\mathrm{effective}}}{\eta}
\label{eq:viscosity-scaling}
\end{equation}
$$

这里 \\(c_{\mathrm{effective}}\\) 仅用于概括有效参与传导的带电粒子浓度，**并不是可以在浓电解液中随意精确定义和独立测量的通用常数**。

该近似关系说明，黏度变大通常不利于导电。

同时，它也提醒我们：不能把电导率的全部温度依赖都归结于公式中一个简单的 \\(1/T\\) 或 \\(T\\) 项，因为真实温度变化还会改变黏度、溶剂化、盐缔合及其他传输参数。

<figure id="fig-5" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-conductivity/fig05-low-temperature-conductivity.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 5 的原图">
    <img src="{{ '/images/posts/hubble-2022-conductivity/fig05-low-temperature-conductivity.png' | relative_url }}" alt="图 5 降温使电导率下降的常见路径" loading="lazy" decoding="async" width="1642" height="768">
  </a>
  <figcaption>图 5｜教学示意。黏度变化是 Hubble 强调的主要解释之一；离子缔合等因素是否显著变化取决于具体配方。</figcaption>
</figure>

### 5.5 为什么实际电导率会偏离 Nernst–Einstein 关系？

Nernst–Einstein 的简单形式默认各种离子扩散贡献可以独立相加。真实电解液中正负离子的运动可能发生相关，例如离子对一起运动，带电聚集体整体移动，甚至出现有方向关联的离子运动。

这会使根据单离子自扩散系数估算的电导率与实测值不同。关于相关运动对 Nernst–Einstein 估算的影响，可以参考 France-Lanord & Grossman（2019）的研究。<a href="#ref-5">[5]</a>

理解这些局限后，再读 Hubble 的“降温 → 黏度增加 → 电导率下降”就会更加准确：**这是获得实验支持的常见趋势和物理解释，不能直接用来排除所有其他机制。**

---

## 6 为什么低温下想减少 EC，实际上却很困难？

Hubble 同时讨论了三个问题：

1. EC 的高介电常数有利于锂盐解离。
2. 较高 EC 含量通常与较大黏度及高熔点带来的低温限制有关。
3. EC 在石墨负极参与形成合适的 SEI，对稳定循环非常重要。

因此，减少 EC 可能改善低温液体传输，也可能使石墨表面的界面膜不够稳定，影响库伦效率（Coulombic Efficiency）和循环寿命。<a href="#ref-1">[1]</a>、<a href="#ref-3">[3]</a>

库伦效率通常写为：

$$
\begin{equation}
\mathrm{CE}=\frac{Q_{\mathrm{discharge}}}{Q_{\mathrm{charge}}}\times100\%
\label{eq:coulombic-efficiency}
\end{equation}
$$

其中 \\(Q_{\mathrm{charge}}\\)、\\(Q_{\mathrm{discharge}}\\) 分别为同一个循环的充、放电电量（具体计算方向取决于研究对象及其测试约定）。持续的电解液副反应会消耗可循环锂与电解液，可能影响库伦效率。

这一点解释了为什么研究人员会考虑采用低 EC 溶剂配方，同时通过成膜添加剂、其他锂盐或溶剂帮助维持电极界面稳定性。

**与下一节的联系**：Hubble 紧接着提醒读者，低温减少 EC 的一个尤其重要的原因其实是其结晶倾向。EC 的纯物质熔点约 \\(36\ ^\circ\mathrm C\\)；加入其他溶剂可以降低混合物的液相线温度，但实际是否产生晶体还取决于混合配方。液相线温度与结晶行为需要进一步讨论。

---

## 7 为什么电导率高，低温电池性能仍可能很差？

这一点是 Hubble **Conductivity** 小节的落脚点。

### 7.1 从电解液到电极，Li⁺ 还要经过许多步骤

完整电池中，Li⁺ 从电解液到达电极活性材料，至少可能涉及：

1. **体相电解液传输**：Li⁺ 在液体中迁移与扩散。
2. **界面去溶剂化（Desolvation）**：接近电极表面时，配位溶剂分子部分脱离或重新排列。
3. **界面膜离子传输及电荷转移**：Li⁺ 穿过 SEI 或 CEI，参与电化学反应。
4. **固相扩散**：Li 进一步进入石墨等活性材料内部。

<figure id="fig-6" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-conductivity/fig06-hubble-ion-transport.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 6 的原图">
    <img src="{{ '/images/posts/hubble-2022-conductivity/fig06-hubble-ion-transport.png' | relative_url }}" alt="图 6 Hubble 2022 Fig. 2：锂离子在全电池内部的传输步骤" loading="lazy" decoding="async" width="1551" height="408">
  </a>
  <figcaption>图 6｜来源：Hubble 等（2022）综述第 553 页 Fig. 2；该综述注明转载自其文献 [15]，即 Li 等（2017，本文参考文献 <a href="#ref-6">[6]</a>）。阅读时关注不同温度下的限速步骤可能发生变化。</figcaption>
</figure>

即使电解液体相具有很高的电导率，如果电极界面上的 Li⁺ 去溶剂化或电荷转移十分缓慢，低温放电容量仍可能明显下降。

### 7.2 用一个简化的电阻例子理解

为便于理解，假设某一条件下可以把总体阻力粗略拆为：

$$
\begin{equation}
R_{\mathrm{total}}\approx R_{\mathrm{bulk}}+R_{\mathrm{interface}}+R_{\mathrm{other}}
\label{eq:total-resistance}
\end{equation}
$$

**表 4**　用于比较体相与界面贡献的教学假设。
{: .textbook-caption}

<div class="textbook-table" markdown="1">

| 假设的电阻贡献 | 电解液 A 对应电池 | 电解液 B 对应电池 |
|---|---:|---:|
| 体相电阻 | \\(2\ \Omega\\) | \\(4\ \Omega\\) |
| 界面电阻 | \\(40\ \Omega\\) | \\(10\ \Omega\\) |
| 简单加和 | \\(42\ \Omega\\) | \\(14\ \Omega\\) |

</div>
**全部数值均为教学假设。** 电解液 A 的体相电阻较低，但对应电池的界面电阻更高，因此简单加和反而更大。

真实的电池阻抗还具有频率依赖性和传质效应，不能把所有过程都在所有条件下化为几个固定电阻。这个例子只为了帮助理解 Hubble 的判断：单看 \\(\kappa\\) 不够。

### 7.3 有哪些原始实验支持界面过程的重要性？

Hubble 引用 **Li 等（2017），文献 [15]**，研究不同电解液组成与低温全电池性能的关系。研究中采用预先形成界面膜的电极重新组装电池，尽可能区分成膜历史与当前电解液组成的影响。<a href="#ref-6">[6]</a>

他们发现，在预成膜电极相同的情况下，不同电解液依旧能够使低温放电容量表现出明显差异。

- **直接实验观察**：不同电解液导致低温放电容量出现差别。
- **进一步的机理解释**：溶剂化结构变化可能改变去溶剂化难度和电荷转移阻力，因此影响低温性能。

该结果支持界面过程的重要性，但不意味着所有电池都由同一个微观步骤限速。

### 7.4 电导率什么时候特别重要？

Hubble 在本节脚注中也指出一个例外：**大尺寸电池以较高倍率放电时**，如果 Li⁺ 的扩散能力较差，局部高浓度或低浓度区域可能积累并主导电池行为。<a href="#ref-1">[1]</a>

因此，“电导率通常不能准确预测低温电池性能”也不是在说电导率不重要。它强调的是：**材料配方设计需要同时考虑体相传输与界面传输，而且不同电池尺寸和工作电流会改变各限制因素的相对重要性。**

---

## 8 区分实验现象与机理解释

**表 5**　实验现象、机理解释与适用条件。
{: .textbook-caption}

<div class="textbook-table" markdown="1">

| 说法 | 证据地位 | 阅读时需要保留的限定 |
|---|---|---|
| 常见 LiPF₆/EC/EMC 配方的室温电导率约为 \\(5\\)–\\(10\ \mathrm{mS\,cm^{-1}}\\) | Hubble 依据实验文献 [18] 总结 | “典型配方”，不能推广到所有配方 |
| 电导率随常见操作范围内的温度降低而下降 | 电导率测量直接支持 | 讨论的是文献覆盖的液态电解液范围 |
| 降温时黏度增加是电导率下降的重要原因 | 传输理论与物性关联支持 | 还需要排查离子缔合等其他影响 |
| 继续增加 LiPF₆ 浓度，电导率可能先升后降 | Ding 等人实验支持 | 峰值位置依赖温度与溶剂组成 |
| EC 高介电常数有利于锂盐解离 | 理论及物性研究支持 | 不代表更高 EC 比例一定让 \\(\kappa\\) 更高 |
| 减少 EC 有时有利于低温离子传输 | 配方实验与物性变化支持 | 需要同时检查结晶和 SEI 形成 |
| 低 EC 电解液经常面临循环稳定性和库伦效率问题 | Hubble 的文献总结 | 不能推断所有低 EC 体系都无法稳定循环 |
| 较高电导率一定产生更大低温放电容量 | **不能成立** | 界面反应、固相扩散、析晶和电池结构仍有影响 |

</div>
---

## 9 回到 Hubble 第 552 页：按作者的行文顺序复述

你可以在阅读原文时逐句对应以下内容：

**第一步：引入典型配方。** 常见锂电池电解液含有约 \\(0.8\\)–\\(1.5\ \mathrm M\\) LiPF₆，溶剂中含 EC。EC 高介电常数有利于锂盐解离，更关键的是它能够参与石墨负极保护性 SEI 的形成。

**第二步：说明配方矛盾。** EC 的熔点高，且与黏度相关。因此通常与约 50%–70% 的链状碳酸酯混合，以扩大使用温度范围并改善液体传输。作者介绍 LiPF₆/EC/EMC 的典型室温电导率约为 \\(5\\)–\\(10\ \mathrm{mS\,cm^{-1}}\\)。

**第三步：解释降温。** 在相关工作范围内，降温通常使黏度变大、电导率下降、电池体相电阻增加。因此低温电解液配方常尝试减少 EC。

**第四步：指出无法回避的问题。** EC 含量过低可能不利于稳定 SEI，影响循环稳定性和库伦效率。

**第五步：给出本节最重要的限定。** 体相欧姆电阻通常不是整个电池阻抗中最大的一部分，因而仅凭电导率不能准确预测电池低温性能。

阅读完整段落以后，应该能够回答：**为什么一种电解液即使在 \\(-20\ ^\circ\mathrm C\\) 保持较高 \\(\kappa\\)，电池实际放电容量仍可能很低？**

---

## 10 理解检查：三个问题

**问题 1｜介电常数与黏度**

在相同温度及 LiPF₆ 浓度下，逐渐增加 EC/EMC 中的 EC 比例。为什么电导率可能先升高、之后下降？请分别考虑锂盐解离和离子运动。

**问题 2｜降温与扩散**

把电解液从 \\(25\ ^\circ\mathrm C\\) 降至 \\(-20\ ^\circ\mathrm C\\)，并假定没有结晶，盐的配制浓度不变。为什么电导率仍可能下降？Stokes–Einstein 关系能解释什么、有哪些局限？

**问题 3｜怎样判断实验结论？**

在 \\(-20\ ^\circ\mathrm C\\) 测得 A 电解液的电导率为 \\(6\ \mathrm{mS\,cm^{-1}}\\)，B 为 \\(4\ \mathrm{mS\,cm^{-1}}\\)，但 B 电池具有更高的放电容量。你能提出哪些合理原因？还需要哪些测试，才能判断是否是去溶剂化过程在主导？

---

## 11 参考文献与进一步阅读

<a id="ref-1"></a>

[1] **Hubble, D. et al. (2022).** *Liquid electrolyte development for low-temperature lithium-ion batteries*. **Energy & Environmental Science**, 15, 550–578. DOI：[10.1039/D1EE01789F](https://doi.org/10.1039/D1EE01789F)。**本节主要依据**：第 552 页 Conductivity；第 553 页 Fig. 2；第 573 页总结。

<a id="ref-2"></a>

[2] **Ding, M. S.; Xu, K.; Zhang, S. S.; Amine, K.; Henriksen, G. L.; Jow, T. R. (2001).** *Change of Conductivity with Salt Content, Solvent Composition, and Temperature for Electrolytes of LiPF₆ in Ethylene Carbonate–Ethyl Methyl Carbonate*. **Journal of The Electrochemical Society**, 148, A1196–A1204. DOI：[10.1149/1.1403730](https://doi.org/10.1149/1.1403730)。**用途**：理解浓度、EC/EMC 比例、温度对电导率的共同影响。

<a id="ref-3"></a>

[3] **Xu, K. (2004).** *Nonaqueous Liquid Electrolytes for Lithium-Based Rechargeable Batteries*. **Chemical Reviews**, 104, 4303–4417. DOI：[10.1021/cr030203g](https://doi.org/10.1021/cr030203g)。**用途**：理解 EC、锂盐解离、溶剂化与石墨负极 SEI。

<a id="ref-4"></a>

[4] **Payne, R.; Theodorou, I. E. (1972).** **Journal of Physical Chemistry**, 76, 2892–2900。Hubble 参考文献 [16]。**用途**：EC 等有机溶剂的介电性质。此处保留 Hubble 原文书目信息，不额外猜测未核对的题名。

<a id="ref-5"></a>

[5] **France-Lanord, A.; Grossman, J. C. (2019).** *Correlations from Ion Pairing and the Nernst–Einstein Equation*. **Physical Review Letters**, 122, 136001. DOI：[10.1103/PhysRevLett.122.136001](https://doi.org/10.1103/PhysRevLett.122.136001)。**用途**：理解离子相关运动为何会让简单的 Nernst–Einstein 估算偏离实测电导率。

<a id="ref-6"></a>

[6] **Li, Q. et al. (2017).** *Li⁺-Desolvation Dictating Lithium-Ion Battery's Low-Temperature Performances*. **ACS Applied Materials & Interfaces**, 9, 42761–42768. DOI：[10.1021/acsami.7b13887](https://doi.org/10.1021/acsami.7b13887)。**用途**：理解溶剂化和界面去溶剂化为什么可能决定低温放电表现。

---
