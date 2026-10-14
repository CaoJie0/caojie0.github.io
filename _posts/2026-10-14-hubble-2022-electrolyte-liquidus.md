---
title: "低温锂电解液的液相线温度：Hubble 2022 精读笔记 02"
layout: textbook
textbook_style: openstax
textbook_series: "低温锂电解液 · Hubble 2022 文献精读"
permalink: /posts/hubble-2022-electrolyte-liquidus/
date: 2026-10-14T00:01:00+00:00
blog_category: "锂电"
author_profile: false
share: true
comments: true
tags:
  - 电解液
  - 液相线温度
  - 相图
  - 低温锂电
  - 文献精读
excerpt: "从液相线与固相线、混合自由能和 EC/EMC、EC/PC 相图出发，理解锂盐与溶剂配比怎样改变结晶边界，以及少量析晶为何可能损害低温电池的有效传输和可用容量。"
---

<div class="textbook-objectives" markdown="1">

## 1 学习目标
{: #learning-objectives}

完成本节后，你应能够：

- 区分熔点、液相线、固相线、共晶、结晶与过冷。
- 从混合自由能、化学势和活度出发，解释混合溶剂及锂盐为何可能改变液相线。
- 读懂 Hubble Fig. 3 的相区、实测点、拟合实线与估计虚线。
- 比较 EC/EMC 与 EC/PC 的相图，并保留具体组成和过冷条件的限制。
- 解释少量析晶为何可能阻碍多孔电极中的离子传输，影响低温可用容量。

</div>

低温下，电解液可能尚未完全凝固，却已经析出晶体并影响电池工作。本文围绕 Hubble 2022 综述的 Liquidus point 小节，从相平衡、混合物热力学和相图读法出发，理解液相线温度为什么构成不同于电导率下降的低温限制。
{: .textbook-lead}

**阅读基础**　温度与相变、物质的量和摩尔分数、离子传输。可先阅读[第一篇：电导率]({{ '/posts/hubble-2022-electrolyte-conductivity/' | relative_url }})。
{: .textbook-prerequisite}

<details class="textbook-source" markdown="1">
<summary>精读来源与图像说明</summary>

**精读来源**　Hubble, D. et al. *Liquid electrolyte development for low-temperature lithium-ion batteries*. **Energy & Environmental Science**, 2022, **15**, 550–578。DOI：[10.1039/D1EE01789F](https://doi.org/10.1039/D1EE01789F)。

**原文位置**　第 552–553 页，*Bulk electrolyte considerations → Liquidus point*，重点阅读 Fig. 3。

图 1、2、4、6 为教学示意；图 5 为原图标记的近似读数；图 3 保留 Hubble 原综述及其来源文献的说明。教学假设与近似读数不能替代原始实验数据。

本文区分 Hubble 的综述判断、Ding 等人的实验观察，以及原笔记用于帮助理解的推导和教学示意。文献 [19]、[20]、[21] 沿用 Hubble 的编号。

</details>

作者特别指出，对于低温锂离子电池，减少 EC 含量的一个重要理由是降低结晶倾向。黏度也是需要考虑的因素，但液相线温度会带来另一类限制。

## 2 先把最容易混淆的五个概念弄清楚

### 2.1 熔点（Melting Point）与结晶（Crystallization）

先从纯水想起。在标准大气压下，纯水的平衡熔点约为 \\(0\ ^\circ\mathrm C\\)。在这个温度，冰和水可以稳定共存。

如果在水中加入一定量的盐，盐水的开始结冰温度通常就会下降。锂离子电池的有机电解液也存在类似的现象。

EC（Ethylene Carbonate，碳酸乙烯酯）的纯物质熔点约为：

$$
T_{m,\mathrm{EC}}\approx36\ ^\circ\mathrm C
$$

这个数值表明：对于纯 EC，在常压且低于其平衡熔点时，固态 EC 往往是热力学上更稳定的状态。

但常见锂电池电解液由多种组分混合而成，例如：

$$
\mathrm{LiPF_6+EC+EMC}
$$

这里的 EMC 是碳酸甲乙酯（Ethyl Methyl Carbonate）。当 EC 与 EMC 混合之后，液体与晶体之间的平衡条件会发生变化。因此，**纯 EC 的熔点不能直接当作 EC/EMC 混合电解液的开始结晶温度。**

**结晶（Crystallization）** 是分子从液态等无序状态转变为具有一定有序结构的固态晶体的过程。对于混合电解液，一个组分先结晶，不意味着其他组分也同步结晶。

### 2.2 液相线温度（Liquidus Temperature）

这是本节的核心概念。

**液相线温度：** 对于给定配比、压力的体系，在接近平衡的条件下，冷却到某个温度时开始可以出现稳定固相的上边界；反过来升温时，它对应最后一部分固体完全消失的温度。

<div id="example-liquidus" class="textbook-example" markdown="1">
<p class="textbook-example__label">例题 1</p>
<div class="textbook-example__body" markdown="1">

#### 液相线以下是否已经完全凝固？

比如，一款假设电解液的液相线温度为 \\(-10\ ^\circ\mathrm C\\)：

#### 解答

<div class="textbook-table" markdown="1">

| 温度 | 接近平衡时的判断 |
|---|---|
| \\(0\ ^\circ\mathrm C\\) | 位于液相线之上，通常可以完全液态存在 |
| \\(-10\ ^\circ\mathrm C\\) | 处在固液共存的起始边界 |
| \\(-20\ ^\circ\mathrm C\\) | 可能已经出现固相，并与剩余液体共存 |

</div>

**表 1**　假设液相线为 −10 °C 时的平衡相态判断。
{: .textbook-caption}

**液相线为 \\(-10\ ^\circ\mathrm C\\)，不意味着降到 \\(-10\ ^\circ\mathrm C\\) 时所有电解液立即全部凝固。**

<figure id="fig-1" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-liquidus/fig01-liquid-solid-coexistence.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 1 的原图">
    <img src="{{ '/images/posts/hubble-2022-liquidus/fig01-liquid-solid-coexistence.png' | relative_url }}" alt="图 1：降温时从液态进入固液共存状态的教学示意" loading="lazy" decoding="async" width="1518" height="538">
  </a>
  <figcaption><strong>图 1</strong>　教学示意。蓝色小点代表溶液中的粒子，蓝色多边形代表析出的固体。真实晶体的数量、形状和分布取决于体系。</figcaption>
</figure>

</div>
</div>

### 2.3 固相线温度（Solidus Temperature）

**固相线温度：** 从完全固态升温时，首次可能出现稳定液相的下边界。对某些简单的二元共晶体系，液相线与固相线之间就是固体、液体共存的区域。

假设：

$$
T_{\mathrm{liquidus}}=-10\ ^\circ\mathrm C
$$

$$
T_{\mathrm{solidus}}=-50\ ^\circ\mathrm C
$$

那么在 \\(-30\ ^\circ\mathrm C\\)，该体系在平衡条件下可能仍有一部分液体；继续降温至固相线以下，才进入没有平衡液相的完全固态区域。

<figure id="fig-2" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-liquidus/fig02-liquidus-solidus.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 2 的原图">
    <img src="{{ '/images/posts/hubble-2022-liquidus/fig02-liquidus-solidus.png' | relative_url }}" alt="图 2：液相线温度与固相线温度的差别" loading="lazy" decoding="async" width="1267" height="579">
  </a>
  <figcaption><strong>图 2</strong>　教学示意。\(-10\ ^\circ\mathrm C\) 与 \(-50\ ^\circ\mathrm C\) 只是为解释概念而设定的数值，并非 Hubble 或 Ding 报告的具体电解液数据。</figcaption>
</figure>

这里需要补充一个限制：真实 LiPF₆/EC/EMC 电解液有不止两个化学组分，还可能形成其他固相，未必始终服从最简单的二元共晶相图。

### 2.4 共晶（Eutectic）是什么？

**共晶**是指混合物在某一特定组成和温度下，液相与两种不同固相能够处于平衡共存的状态。对简单的 EC/EMC 二元体系，可以用下面的示意过程理解：

$$
\mathrm{Liquid\rightleftharpoons EC(s)+EMC(s)}
$$

其中，\\(\mathrm{EC(s)}\\) 表示固体 EC，\\(\mathrm{EMC(s)}\\) 表示固体 EMC。

在共晶温度以下，两种固相可以共存；在共晶温度与液相线之间，通常是一种固相与剩余液体共存。你在 Fig. 3a 中看到的 `Liquid + EC(s)`，就是这样的相区。

Ding、Xu 和 Jow 在 2000 年研究的七组二元碳酸酯体系，均呈现简单共晶型相图的特征。<a href="#ref-19">[19]</a>

### 2.5 过冷（Supercooling）是什么？

假设某款液体的平衡液相线温度是 \\(-10\ ^\circ\mathrm C\\)，但是实验中降到 \\(-20\ ^\circ\mathrm C\\) 时，肉眼甚至仪器都尚未观察到结晶。

一个可能原因是**过冷（Supercooling）**：液体虽然已经低于平衡结晶温度，却因晶体形成过程存在动力学障碍，暂时没有结晶。

结晶往往需要先经历**成核（Nucleation）**：少量分子首先形成足够稳定的小晶核，随后晶核继续生长成晶体。

因此，实验中能否观察到结晶，还可能受以下因素影响：

- 降温速率：降温太快，成核与晶体生长可能来不及完成。
- 观察时间：长时间停留在低温可能给成核更多机会。
- 容器与接触表面：杂质、容器壁和电极表面可能提供成核位置。
- 电解液配方：不同分子相互作用会改变成核和晶体生长难度。

**热力学液相线温度和一次降温实验中实际观察到晶体的温度，是两件不同的事。** 这也是 Fig. 3b 部分曲线只能估计的原因，我们后面会讲到。

---

## 3 为什么混合 EC 与 EMC，就能降低液相线温度？

接下来需要一点热力学基础。我们会用公式解释，但重点是理解每一项代表什么。

### 3.1 混合为什么影响结晶？

对于一个纯物质，固体和液体的稳定程度由温度、压力及分子间相互作用决定。

对于混合物，还需要考虑不同分子混合以后形成的热力学状态。

**吉布斯自由能（Gibbs Free Energy，\\(G\\)）** 是判断恒温、恒压下哪种平衡状态更稳定的热力学量。在相同条件下，系统倾向于使自由能较低。

混合自由能变化可以写为：

$$
\begin{equation}
\Delta G_{\mathrm{mix}}=\Delta H_{\mathrm{mix}}-T\Delta S_{\mathrm{mix}}
\label{eq:mix-free-energy}
\end{equation}
$$

<div class="textbook-table" markdown="1">

| 符号 | 含义 |
|---|---|
| \\(\Delta G_{\mathrm{mix}}\\) | 混合前后吉布斯自由能的变化 |
| \\(\Delta H_{\mathrm{mix}}\\) | 混合焓变，与组分间相互作用及能量变化有关 |
| \\(\Delta S_{\mathrm{mix}}\\) | 混合熵变，涉及分子排列方式等的变化 |
| \\(T\\) | 绝对温度，单位 K |

</div>

**表 2**　混合自由能关系中的符号。
{: .textbook-caption}

当 EC 与 EMC 混合时，液体的自由能会受到混合焓和混合熵共同影响。对于很多配方，混合使液相在较低温度范围内仍较稳定，于是 EC 晶体开始与液体平衡共存的温度下降。

日常生活中，往水里加入盐以后更不容易在 \\(0\ ^\circ\mathrm C\\) 结冰，就是一种帮助理解混合与相变的例子。

但这里不能只说“EMC 打乱了 EC 分子排列，所以温度下降”。这可以作为形象解释，**真正决定液相线的是液体和固体的热力学平衡**。

### 3.2 从化学势进一步解释

**化学势（Chemical Potential，\\(\mu\\)）** 描述某一组分在给定环境中的热力学状态。一个组分在固相与液相平衡时，它在两相中的化学势相等。

对于平衡时会形成近似纯 EC 固体的区域：

$$
\begin{equation}
\mu_{\mathrm{EC}}^{(l)}=\mu_{\mathrm{EC}}^{(s)}
\label{eq:phase-equilibrium}
\end{equation}
$$

上标 \\((l)\\) 表示液体，上标 \\((s)\\) 表示固体。

将 EC 与 EMC 混合后，液相中 EC 的化学势会随组成而改变。于是要让液相 EC 与固体 EC 再次达到平衡，就可能需要降低温度。

进一步地，对于近似为纯 EC 固相、忽略热容差异且熔化焓近似不变等条件，可以得到常用的液相线近似关系：

$$
\begin{equation}
\ln a_{\mathrm{EC}}\approx
-\frac{\Delta H_{\mathrm{fus,EC}}}{R}
\left(
\frac{1}{T_{\mathrm{liq}}}-\frac{1}{T_{m,\mathrm{EC}}}
\right)
\label{eq:liquidus-activity}
\end{equation}
$$

其中：

- \\(a_{\mathrm{EC}}\\)：EC 的**活度（Activity）**，描述 EC 在混合物中的有效热力学浓度。
- \\(\Delta H_{\mathrm{fus,EC}}\\)：EC 的熔化焓，即每摩尔 EC 熔化时需要吸收的热量。
- \\(T_{\mathrm{liq}}\\)：发生 EC 固相与液相平衡的液相线温度，必须用 K。
- \\(T_{m,\mathrm{EC}}\\)：纯 EC 的熔点，必须用 K。
- \\(R\\)：气体常数。

对理想混合液，EC 活度近似等于它的摩尔分数：

$$
\begin{equation}
a_{\mathrm{EC}}\approx x_{\mathrm{EC}}
\label{eq:ideal-activity}
\end{equation}
$$

在这些近似条件下，**EC 在液体中的活度降低，会使对应 EC 晶体的液相线温度降低。**

这就解释了为什么不能仅凭两种纯溶剂的熔点，就准确判断它们混合后的相图。混合物中的化学势和活度同样重要。

**公式的使用边界：** 上述方程只是理想化推导，真实 EC/EMC/盐体系存在非理想混合、溶剂化和可能的不同固相。这个方程有助于解释方向，不应直接替代实测相图。

---

## 4 逐点看懂 Hubble 原文 Fig. 3

这是整节最重要的图片。首先建议完整观察原图，再阅读下面的读图过程。

<figure id="fig-3" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-liquidus/fig03-hubble-carbonate-phase-diagrams.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 3 的原图">
    <img src="{{ '/images/posts/hubble-2022-liquidus/fig03-hubble-carbonate-phase-diagrams.png' | relative_url }}" alt="图 3：Hubble 2022 Fig. 3，EC/EMC 与 EC/PC 液固相图" loading="lazy" decoding="async" width="1576" height="993">
  </a>
  <figcaption><strong>图 3</strong>　Hubble et al. (2022)，Fig. 3。原始相图来自 Ding, Xu & Jow (2000)，文献 <a href="#ref-19">[19]</a>。左图为 EC/EMC，右图为 EC/PC。保留了原论文中的点、实线、虚线和英文图注。</figcaption>
</figure>

### 4.1 横坐标和纵坐标表示什么？

横坐标：EC 的摩尔分数（Mole Fraction）。例如 EC/EMC 二元体系：

$$
\begin{equation}
x_{\mathrm{EC}}=\frac{n_{\mathrm{EC}}}{n_{\mathrm{EC}}+n_{\mathrm{EMC}}}
\label{eq:ec-mole-fraction}
\end{equation}
$$

- \\(x_{\mathrm{EC}}=0\\)：纯 EMC。
- \\(x_{\mathrm{EC}}=0.5\\)：EC 和 EMC 的物质的量相同。
- \\(x_{\mathrm{EC}}=1\\)：纯 EC。

纵坐标：温度 \\(T\\)，单位 \\(^\circ\mathrm C\\)。

**注意摩尔分数与体积分数、质量分数的区别。** 两种分子摩尔数相同，并不代表它们体积或质量相同。

在 Fig. 3b 中，分母应将 EMC 改为 PC：

$$
x_{\mathrm{EC}}=\frac{n_{\mathrm{EC}}}{n_{\mathrm{EC}}+n_{\mathrm{PC}}}
$$

### 4.2 Fig. 3a：EC/EMC 混合溶剂，如何区分三个相区？

原图左侧包含三个区域：

<div class="textbook-table" markdown="1">

| 区域英文 | 中文理解 | 相态 |
|---|---|---|
| `Liquid` | 完全液态区域 | 只有液相 |
| `Liquid + EC(s)` | 液体与 EC 晶体共存 | 固液共存 |
| `EMC(s) + EC(s)` | 固态 EMC 与固态 EC 共存 | 两种固体 |

</div>

**表 3**　EC/EMC 二元体系中的相区。
{: .textbook-caption}

请注意：Fig. 3a 的无盐二元相图，可以理解为高于曲线是液体，低于液相线但高于固相线通常是固液共存，而进一步降温到固相线以下后是两种固体共存。

下面做一道具体的读图练习。

### 4.3 等摩尔 EC/EMC 溶剂会怎样降温？

<div id="example-phase-diagram" class="textbook-example" markdown="1">
<p class="textbook-example__label">例题 2</p>
<div class="textbook-example__body" markdown="1">

#### 从相图判断等摩尔混合溶剂的降温过程

选择 \\(x_{\mathrm{EC}}=0.5\\)，也就是 EC 和 EMC 物质的量相同，**暂时不加入 LiPF₆**。

#### 解答

从横坐标的 0.5 位置向上看，液相线大约在 \\(12\\)–\\(13\ ^\circ\mathrm C\\)。

那么：

- 在 \\(20\ ^\circ\mathrm C\\)：位于液相线以上，平衡时完全液态。
- 在约 \\(13\ ^\circ\mathrm C\\)：接近固体开始出现的平衡边界。
- 在 \\(-20\ ^\circ\mathrm C\\)：进入 EC 晶体与液相共存区，仍可能有大量液体。
- 接近 \\(-54.4\ ^\circ\mathrm C\\) 的水平固相线：液相趋于消失，进入两种固相共存区。

<figure id="fig-4" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-liquidus/fig04-ec-emc-phase-reading.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 4 的原图">
    <img src="{{ '/images/posts/hubble-2022-liquidus/fig04-ec-emc-phase-reading.png' | relative_url }}" alt="图 4：EC/EMC 相区教学读图示例" loading="lazy" decoding="async" width="1882" height="964">
  </a>
  <figcaption><strong>图 4</strong>　根据 Fig. 3a 的相区形状重新描画的教学近似图，只用于帮助识别相区，不是 Ding 原论文测量数据，也不要从这张图读取高精度参数。</figcaption>
</figure>

这是第一处最需要牢记的结果：

**一款电解液可以在 \\(-20\ ^\circ\mathrm C\\) 时仍有液体，同时已经出现 EC 晶体。**

</div>
</div>

### 4.4 为什么 Fig. 3a 的液相线从左下方向右上方升高？

原图中，随着 EC 摩尔分数增加，液相线总体向上升高。右端纯 EC 的熔点约为 \\(35.5\ ^\circ\mathrm C\\)（按图中的实验标注）。

这说明含更多 EC 的 EC/EMC 二元混合物，在相同温度下往往更接近 EC 结晶的平衡条件。

Hubble 对此给出了一个直观判断：无盐 EC/EMC 二元体系中，当 EC 含量超过约 30 mol% 时，液相线可能高于 \\(0\ ^\circ\mathrm C\\)。<a href="#ref-19">[19]</a>

但这里有一个很重要的限定：**这是 Fig. 3a 中二元溶剂的结果，不能直接当作所有含 1 M LiPF₆ 电解液的结果。** 加入锂盐以后，相图会改变。

### 4.5 Fig. 3a：空心点、实心点、实线和虚线是什么？

这决定了你如何区分实验数据与作者推断。

<div class="textbook-table" markdown="1">

| 图中标记 | 原图含义 | 能说明什么？ |
|---|---|---|
| 空心圆点 `○` | 无盐二元溶剂的相变测量数据 | 直接实验结果 |
| 实线 | 根据数据拟合得到的相边界 | 实验支持下的曲线拟合 |
| 左端虚线 | 数据不足区域的估计延伸 | 估计，不等于逐点测量 |
| 实心菱形、圆点、方形 | EC/EMC 中不同 LiPF₆ 浓度的相变测量值 | 加盐引起的变化 |

</div>

**表 4**　Hubble Fig. 3a 中的标记与证据类型。
{: .textbook-caption}

研究生阅读相图时，一定要先看图注中的 `measured`、`fitting`、`estimated` 等词。

原图的曲线是为解释整个组成区间绘制的。实线上的每一点，并不都对应一次独立测量；虚线区域的结论要比直接测量点更加谨慎。

### 4.6 Fig. 3b：EC/PC 相图又告诉我们什么？

右图的横坐标同样为 EC 摩尔分数，但另一组分换成 PC（Propylene Carbonate，碳酸丙烯酯）。

原图保留了 `Liquid`、`Liquid + EC(s)`、`PC(s) + EC(s)` 区域。

**与 EC/EMC 相比，PC 在某些组成区间更有利于抑制 EC 结晶。** Hubble 特别指出，当 PC 在混合物中占比超过约 20 mol% 时，这种差异更加明显。

但是 Fig. 3b 的许多边界用虚线表示，这是因为 PC 较多的混合物易发生过冷，研究人员不能在该区间准确测出所有平衡相变温度。图中虚线不能与左图空心实验点具有同等证据强度。<a href="#ref-19">[19]</a>

---

## 5 为什么加入 LiPF₆，液相线会进一步下降？

现在把注意力重新放在 Fig. 3a 中约 \\(x_{\mathrm{EC}}=0.5\\) 的几个实心符号上。

它们对应三个盐浓度：

- \\(0.61\ \mathrm M\\) LiPF₆；
- \\(0.77\ \mathrm M\\) LiPF₆；
- \\(0.98\ \mathrm M\\) LiPF₆。

它们的无盐溶剂比例接近相同，主要改变了锂盐浓度。

### 5.1 原始相图显示了什么？

根据 Fig. 3a 近似读数：

<div class="textbook-table" markdown="1">

| 体系（EC 摩尔分数约 0.5） | 液相线温度，约 |
|---|---:|
| 不加盐的 EC/EMC 溶剂 | \\(12\\)–\\(13\ ^\circ\mathrm C\\) |
| 加入 \\(0.61\ \mathrm M\\) LiPF₆ | \\(2\ ^\circ\mathrm C\\) |
| 加入 \\(0.77\ \mathrm M\\) LiPF₆ | \\(-1\ ^\circ\mathrm C\\) |
| 加入 \\(0.98\ \mathrm M\\) LiPF₆ | \\(-5\ ^\circ\mathrm C\\) |

</div>

**表 5**　不同 LiPF₆ 浓度对应的液相线近似读数。
{: .textbook-caption}

这些数值是根据 Hubble Fig. 3a 的近似读数，读数精度有限，不能替代原文实验数据表。

<figure id="fig-5" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-liquidus/fig05-salt-liquidus-approximate-readings.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 5 的原图">
    <img src="{{ '/images/posts/hubble-2022-liquidus/fig05-salt-liquidus-approximate-readings.png' | relative_url }}" alt="图 5：加入 LiPF₆ 后 EC/EMC 液相线温度的近似变化" loading="lazy" decoding="async" width="1672" height="870">
  </a>
  <figcaption><strong>图 5</strong>　从 Hubble Fig. 3a 的实心标记近似读取后绘制。用于帮助理解趋势；正式报告请使用原始论文可核实的测量数据。</figcaption>
</figure>

你可以看到：**对这里研究的配方，加入锂盐会将液相线移到更低温度。**

### 5.2 锂盐为什么会产生这种影响？

你可以先回忆冬天道路撒盐防止结冰的现象。

将 LiPF₆ 加入 EC/EMC 后，LiPF₆ 会与溶剂分子产生离子–溶剂相互作用。它既改变了液体的化学组成，也改变了各组分的化学势、活度和相平衡条件。

对于发生 EC 结晶的平衡条件，式 \\(\eqref{eq:phase-equilibrium}\\) 仍然成立：

$$
\mu_{\mathrm{EC}}^{(l)}=\mu_{\mathrm{EC}}^{(s)}
$$

加入锂盐以后，要再次满足这个条件，平衡温度可能降低。

在满足近似理想稀溶液条件时，人们常用**凝固点降低（Freezing-point Depression）**解释溶质引起的平衡熔点变化。其常见教学形式为：

$$
\begin{equation}
\Delta T_f\approx K_fm_{\mathrm{eff}}
\label{eq:freezing-point-depression}
\end{equation}
$$

其中 \\(K_f\\) 是溶剂的凝固点降低常数，\\(m_{\mathrm{eff}}\\) 表示对粒子数效应的近似有效质量摩尔浓度。

**但这条简式不能直接用来精确计算 LiPF₆/EC/EMC 的液相线。** 原因包括：

- 真实 EC/EMC 不是单一纯溶剂；
- LiPF₆ 的离子会发生溶剂化、缔合和相关运动；
- 体系可能明显偏离理想稀溶液；
- 不同组成下可能形成不同的固相。

因此，Ding 等人采用了实际热分析实验，而非仅依靠简式估计。

### 5.3 为什么不通过无限增加 LiPF₆ 解决低温结晶问题？

因为增加锂盐还会改变其他重要性质：

- 电解液黏度可能增加；
- 离子扩散和电导率可能出现不利变化；
- 过高盐浓度下，盐的溶解与其他析出过程也可能带来问题；
- 电极界面反应和成膜行为可能发生改变。

[上一篇电导率精读笔记]({{ '/posts/hubble-2022-electrolyte-conductivity/' | relative_url }})讨论过：

**最佳电导率的盐浓度与最低液相线对应的盐浓度，不一定是同一个值。**

### 5.4 为什么 Hubble 又提到 −20 至 −30 °C？

Hubble 指出，一些实用的约 \\(1\ \mathrm M\\) LiPF₆ 电解液，液相线可被进一步降低到约 \\(-20\\) 至 \\(-30\ ^\circ\mathrm C\\)，并据此讨论低温容量损失可能出现的温度范围。<a href="#ref-19">[19]</a>、<a href="#ref-20">[20]</a>、<a href="#ref-21">[21]</a>

但请不要把不同配方的数据混为一谈：

- Fig. 3a 中 \\(x_{\mathrm{EC}}\approx0.5\\)、\\(0.98\ \mathrm M\\) LiPF₆ 的那个测量点，约为 \\(-5\ ^\circ\mathrm C\\)。
- 文中概括的 \\(-20\\) 至 \\(-30\ ^\circ\mathrm C\\) 对应其他实用配方或文献条件。
- 不同 EC/EMC/DMC/DEC 比例、不同盐浓度，都会改变相图。

**不能说“只要加了 1 M LiPF₆，液相线就一定是 \\(-20\\) 至 \\(-30\ ^\circ\mathrm C\\)”。**

Hubble 同时引用了 Plichta 与 Behl (2000) <a href="#ref-21">[21]</a>，他们报告 1 M LiPF₆/EC/DMC/EMC（1:1:1）电解液可以支持电池在低至 \\(-40\ ^\circ\mathrm C\\) 工作。

但应注意：**电池在某温度还能工作，与该配方平衡液相线到底在哪里，是不同的实验问题。** 电池能放电不能作为液相线数值的直接测量证据。

---

## 6 为什么 PC 比 EMC 更能抑制 EC 结晶？

这是理解 Fig. 3b 的重点。

先比较三种纯溶剂：

<div class="textbook-table" markdown="1">

| 溶剂 | 中文名称 | 纯物质熔点，约 | 类型 |
|---|---|---:|---|
| EC | 碳酸乙烯酯 | \\(+36\ ^\circ\mathrm C\\) | 环状碳酸酯 |
| EMC | 碳酸甲乙酯 | \\(-53\ ^\circ\mathrm C\\) | 链状碳酸酯 |
| PC | 碳酸丙烯酯 | \\(-49\ ^\circ\mathrm C\\) | 环状碳酸酯 |

</div>

**表 6**　三种碳酸酯溶剂的纯物质熔点与类型。
{: .textbook-caption}

你可能会觉得：EMC 比 PC 的熔点更低，所以加入 EMC 应该更能降低 EC 混合物的液相线。

但 Hubble 的 Fig. 3b 告诉我们，事情没有这么简单。在一定组成范围，EC/PC 的液相线低于 EC/EMC。

### 6.1 纯物质熔点低，不保证混合物液相线就低

Ding、Xu 和 Jow（2000）绘制了七种二元碳酸酯的相图，包括：

- EC/DMC；
- EC/EMC；
- EC/PC；
- 其他不同碳酸酯组合。

他们指出一个值得注意的现象：纯 EMC 的熔点明显低于纯 DMC，但 **EC/EMC 的液相线在所研究的大部分组成范围内反而可能高于 EC/DMC**。<a href="#ref-19">[19]</a>

这说明**混合物的液固平衡不能只由其中一种组分的纯物质熔点预测**。

### 6.2 PC 和 EC 的相互作用为什么重要？

EC 和 PC 都是环状碳酸酯，分子结构具有相似之处。Ding 等人用混合液相的热力学相容性解释 EC/PC 与 EC/EMC 相图差异。

这里的**热力学相容性**，可以理解为两种分子在一起混合时，所形成的液相是否在自由能上较稳定，以及分子间相互作用如何影响各组分的活度。

简单来说，EC 与 PC 混合后，在某些比例下能够使含 EC 的液相在更低温度下保持稳定，从而抑制 EC 结晶。

在相应配比下可以概括为：

$$
T_{\mathrm{liq}}(\mathrm{EC/PC})<T_{\mathrm{liq}}(\mathrm{EC/EMC})
$$

**但这只是特定组成区间的比较，不能推广为 PC 在一切条件下都优于 EMC。**

### 6.3 Fig. 3b 中虚线为什么这么多？

因为富含 PC 的混合溶剂容易过冷。某些样品降温时难以形成晶体，导致研究者不能轻易找到平衡液相线和固相线。

原论文于是将右图中的部分液相线及固相线表示为估计线。

我们要把三个层次分清楚：

1. **直接测到的相变温度**：对应原始实验点。
2. **根据实验点进行的拟合或估计**：可以帮助判断趋势，但并非逐点测量。
3. **从分子相容性出发的机理解释**：是一种有热力学依据的解释，需要更多研究才能精确对应到分子作用方式。

如果以后你看到一款 PC 较多的电解液在一次快速降温实验中没有结晶，也不能马上断言其平衡液相线已经低于该温度。它可能处于过冷状态。

### 6.4 补充：既然 PC 有利于低温，为什么传统石墨电解液仍经常使用 EC？

PC 有较宽液相温度范围，但石墨电极还需要稳定的界面膜。传统 PC 含量较高的电解液，可能发生溶剂与 Li⁺ 共嵌入石墨并破坏石墨结构等问题。

因此，是否能够将 PC 用作主要溶剂，还要考察添加剂、盐和成膜条件。Hubble 在后续 *Solvents → Propylene carbonate* 一节会专门讨论这一点。

这也是我们前两节反复强调的事实：**一项体相性质改善，不保证整个电池的性能就一定改善。**

---

## 7 为什么只析出一部分 EC 晶体，就可能导致电池容量下降？

Hubble 在 *Liquidus point* 这节末尾提出了两个影响：<a href="#ref-1">[1]</a>

**第一，结晶可能改变剩余液相的导电能力。**

**第二，形成的晶体可能堵塞电极孔道，使一部分活性材料暂时难以得到离子供应。**

### 7.1 析晶会改变剩余液体的组成

假设开始时有一份均匀的 EC/EMC/LiPF₆ 电解液，随着温度降低，部分 EC 形成晶体：

- 一部分 EC 离开液相，进入固相；
- 剩余液相中 EC/EMC 的实际比例改变；
- 锂盐在剩余液相中的浓度、溶剂化环境也可能改变；
- 黏度、电导率和离子相互作用会受到共同影响。

Hubble 认为结晶通常会损害剩余电解液的传导表现。

但需要特别谨慎：**EC 结晶后，剩余液相中 EC 比例降低，并不能单独证明剩余液体本征电导率一定下降。** 低 EC 比例有时反而有助于降低黏度。具体变化还涉及盐浓度、溶剂比例与温度，必须通过实验确定。

我们能够明确判断的是：结晶会减少可供自由传输的液相体积，并可能改变通道连通性，这对多孔电极中的有效离子传输是不利的。

### 7.2 为什么电极孔道会被影响？

石墨负极和常见正极均具有多孔结构。电解液需要浸润电极颗粒之间的孔隙，Li⁺ 才能到达活性材料表面。

可以把多孔电极想成一座城市的道路网络。雪堵住一部分关键道路时，即使城市里并没有全部被雪覆盖，车辆也可能无法到达某些地方。

相似地，电解液中的晶体可能占据局部孔隙，使离子被迫绕行、传输路径变窄甚至暂时中断。

<figure id="fig-6" class="textbook-figure">
  <a href="{{ '/images/posts/hubble-2022-liquidus/fig06-crystals-pore-transport.png' | relative_url }}" target="_blank" rel="noopener" aria-label="查看图 6 的原图">
    <img src="{{ '/images/posts/hubble-2022-liquidus/fig06-crystals-pore-transport.png' | relative_url }}" alt="图 6：电解液析晶后可能影响多孔电极内部的离子传输" loading="lazy" decoding="async" width="1674" height="867">
  </a>
  <figcaption><strong>图 6</strong>　教学示意。灰色区域代表活性材料颗粒，浅蓝代表液相，蓝色多边形代表可能析出的晶体，虚线表示离子可以通过的液相路径。图片不是显微镜实测结果。</figcaption>
</figure>

具体可能产生以下影响：

1. 可连通的液相孔道减少。
2. 局部离子传输通路变长或者变窄。
3. 反应位置附近的浓度梯度可能增加。
4. 部分活性材料可能暂时得不到足够的 Li⁺，难以充分参与反应。
5. 电池在放电时更容易发生电压下降，提前达到截止电压。

这里涉及**浓差极化（Concentration Polarization）**：通电过程中，电极附近与电解液内部出现浓度差，产生额外的电压损失。

由于电极孔道内部的传输能力不仅取决于液体本身的电导率，还取决于液体能否连成连续通路，因此在多孔电极模型中常使用**有效电导率（Effective Conductivity）**。

在简化的孔道模型中可以写成：

$$
\begin{equation}
\kappa_{\mathrm{eff}}\approx\kappa\frac{\varepsilon}{\tau}
\label{eq:effective-conductivity}
\end{equation}
$$

其中：

- \\(\kappa\\)：未受孔道影响时的液相本征电导率。
- \\(\varepsilon\\)：可供液相贯通的孔隙体积分数。
- \\(\tau\\)：与通道弯曲、连通性有关的曲折度因子；定义因模型而异。
- \\(\kappa_{\mathrm{eff}}\\)：多孔结构中的有效电导率。

式 \\(\eqref{eq:effective-conductivity}\\) 只是帮助理解的近似形式。真实电极中的曲折度定义、堵孔形态与有效电导率之间可能呈现非线性关系。

它揭示了一个关键事实：**就算没有发生整个电解液的完全凝固，局部析晶也可能使电池内部的有效传输能力明显恶化。**

### 7.3 为什么最终观察到的是容量下降？

锂离子电池通常具有预先设定的放电截止电压。当内部传输受限、极化增大时，电池端电压会更早降至这一阈值。

此时电池内部可能还剩余一部分尚未充分利用的活性物质，但测试已经需要停止放电，于是测得的**可用容量（Available Capacity）**下降。

如果升温后电解液重新变成均匀液态，一部分由析晶造成的传输限制可能消失，容量因而恢复。但如果低温充电期间发生了析锂和副反应，则还可能出现不可逆损失。

所以观察低温容量下降时，不能仅凭容量曲线就确定是结晶造成的。需要对照相变和电化学测试。

---

## 8 原始研究如何证明相变？为什么要使用 DSC？

### 8.1 DSC 是什么？

Ding 等人 <a href="#ref-19">[19]</a> 使用的是**差示扫描量热法（Differential Scanning Calorimetry，DSC）**。

这是在程序设定的升温或降温过程中，测量样品与参比之间热流差异的方法。

当样品熔化时需要吸收热量；当样品结晶时通常释放热量。DSC 可以在温度扫描曲线上记录这些热事件，从而帮助识别相变温度。

原始研究对密封的小体积样品进行热分析，并结合升温曲线判定相边界。实验报告中常用约 2 °C/min 的升温速率，部分测量采用不同速率，需要查看具体实验条件。<a href="#ref-19">[19]</a>

### 8.2 为什么升温曲线很重要？

由于过冷可能使降温时的结晶温度偏离平衡相界，直接把“第一次看到放热峰”的温度作为液相线往往不可靠。

研究人员可以先让样品进入相应低温状态，再通过控制升温分析熔化行为，以帮助判断固相线和液相线。

但即便如此，某些体系仍可能因为成核不足、玻璃化或相变很缓慢而难以精确测定。例如，Fig. 3b 的 PC-rich 组成就存在这样的实验困难。

### 8.3 如果要验证某种低温电解液，应该测量哪些量？（阅读方法补充）

为了判断析晶是否真的引起电池低温容量下降，研究人员至少可以比较：

<div class="textbook-table" markdown="1">

| 研究问题 | 相应实验 | 可获得的信息 |
|---|---|---|
| 在什么温度出现相变？ | DSC 升降温曲线 | 热事件与相变温度，是否存在明显过冷 |
| 低温下是否仍有晶体？ | 低温显微观察、结构表征等 | 固相形态及其出现位置；需要对应的适用技术 |
| 液相导电性能如何？ | 不同温度下电导率测量 | 液体体相传导变化 |
| 电池内部阻抗如何变化？ | 电化学阻抗谱（EIS） | 总阻抗及在适当模型下的不同过程贡献 |
| 最终容量和工作电压如何变化？ | 低温恒流放电测试 | 实际可用容量、极化和电压变化 |

</div>

**表 7**　验证低温相变与电池性能的实验方法。
{: .textbook-caption}

这里的 EIS（Electrochemical Impedance Spectroscopy，电化学阻抗谱）是向电池施加小幅交流信号，观察不同频率下电压和电流响应的方法。它有助于分析电池内部阻抗，但不能仅靠一条阻抗曲线就自动判断结晶位置或晶体数量。

这张表是为了指导以后阅读和设计实验而添加的内容，并非 Ding 2000 已经在同一篇文章中完成了全部测试。

---

## 9 作者说的哪些是实验事实，哪些是机理解释？

<div class="textbook-table" markdown="1">

| 说法 | 证据类型 | 阅读时的正确认识 |
|---|---|---|
| EC/EMC 与 EC/PC 具有不同的液固相图 | Ding 2000 的 DSC 实验 | 有直接实验基础 |
| EC/EMC 中增加 EC 含量，液相线总体上升 | Fig. 3a 实验与拟合 | 限定于研究的组成及相图条件 |
| 在 Fig. 3a 对应配方中，加入 LiPF₆ 可降低液相线 | 实心数据点支持 | 已观察到该趋势；不能随意推广到所有盐浓度 |
| PC 在一定组成下比 EMC 更有效抑制 EC 结晶 | Fig. 3b 部分测量与估计 | 富 PC 区域存在过冷与相图估计的限制 |
| PC/EC 的液相相容性有利于降低液相线 | 基于热力学的机理解释 | 合理解释，并非直接观察到分子作用方式 |
| 晶体可能堵塞电极孔道 | 物理机制判断 | 需要具体电池中的结构或传输证据核实程度 |
| 析晶可能降低低温可用容量 | Hubble 结合相图与电池行为的判断 | 相图不能单独给出容量损失大小 |
| 所有 1 M LiPF₆ 电解液的液相线都是 \\(-20\\) 至 \\(-30\ ^\circ\mathrm C\\) | 不成立 | 具体取决于配方；Fig. 3a 有明显不同的数据点 |
| 电池能在 \\(-40\ ^\circ\mathrm C\\) 放电，证明液相线低于 \\(-40\ ^\circ\mathrm C\\) | 不成立 | 工作温度与平衡相变温度需要分别测量 |

</div>

**表 8**　实验事实、机理解释与适用条件。
{: .textbook-caption}

### 9.1 本节的四个核心判断

**第一层：纯组分与混合物不同。** EC 纯物质熔点约 \\(36\ ^\circ\mathrm C\\)，不能直接判断配成溶液后的液相线。

**第二层：开始结晶与全部凝固不同。** 液相线以下可能仍有大量液体，这些液体与晶体可以共同存在。

**第三层：盐和溶剂配比都会改变相图。** EC/EMC、EC/PC、加入 LiPF₆ 的体系，必须分别讨论，不能拿一种配方的液相线替代另一种。

**第四层：相图与电池表现相互关联，但测量的是不同问题。** 相图表明是否能形成固相，电化学测试才告诉我们容量和极化受到多大影响。

## 10 检查理解

请尝试用自己的话作答，最好解释推理过程，而不只是说一个结论。

<div class="textbook-check" markdown="1">

#### 问题 1　液相线与完全凝固

假设某种电解液的液相线温度为 \\(-15\ ^\circ\mathrm C\\)，固相线温度为 \\(-55\ ^\circ\mathrm C\\)。

当温度降到 \\(-30\ ^\circ\mathrm C\\) 时，你认为电解液一定完全凝固了吗？为什么？

#### 问题 2　混合物为什么可能有更低的液相线？

纯 EC 的熔点约为 \\(36\ ^\circ\mathrm C\\)，但 EC/EMC 混合溶剂能够在更低的温度保持液态。

请尝试从液体混合、吉布斯自由能和固液相平衡的角度解释原因。

#### 问题 3　怎么判断哪款低温电解液更合适？

假设两种电解液在 \\(-20\ ^\circ\mathrm C\\) 时：

- A 的电导率为 \\(6\ \mathrm{mS/cm}\\)，液相线为 \\(-10\ ^\circ\mathrm C\\)；
- B 的电导率为 \\(4\ \mathrm{mS/cm}\\)，液相线为 \\(-40\ ^\circ\mathrm C\\)。

你会优先担心哪种电解液的低温表现？还有哪些实验可以帮助你确认？

</div>

**本节最重要的结论是：液相线以下仍可能存在液体；即使电解液没有完全凝固，少量晶体也可能通过改变剩余液相组成和阻碍多孔电极中的离子传输，使低温电池性能下降。**

**与原文下一节的联系：** 后续主题是 **Transference Number（锂离子迁移数）**，讨论“电解液能够导电，但有多少迁移电流由 Li⁺ 承担”。

## 11 参考文献与进一步阅读

<a id="ref-1"></a>

#### [1] Hubble, D. et al. (2022)

*Liquid electrolyte development for low-temperature lithium-ion batteries*. **Energy & Environmental Science**, **15**, 550–578。DOI：[10.1039/D1EE01789F](https://doi.org/10.1039/D1EE01789F)。本节主要依据：第 552–553 页 *Bulk electrolyte considerations → Liquidus point* 和 Fig. 3。

文献 [19]、[20]、[21] 保留 Hubble 原论文中的编号，便于对照阅读。

<a id="ref-19"></a>

#### [19] Ding, M. S.; Xu, K.; Jow, T. R. (2000)

**题目：** *Liquid–Solid Phase Diagrams of Binary Carbonates for Lithium Batteries.*

**期刊：** *Journal of The Electrochemical Society*, **147**(5), 1688–1694。

**DOI：** [10.1149/1.1393419](https://doi.org/10.1149/1.1393419)

**这篇最值得精读。** Hubble 的 Fig. 3 直接使用它的相图。原始研究以 DSC 测量七组二元碳酸酯的液固相变，讨论了 EC/EMC、EC/PC 的相图特征，也分析了组分间的热力学相容性。

建议重点阅读：摘要、实验方法、EC/EMC 和 EC/PC 相图、图注中对实测点和估计边界的说明。

<a id="ref-20"></a>

#### [20] Tarascon, J. M.; Guyomard, D. (1994)

**题目：** *New Electrolyte Compositions Stable over the 0 to 5 V Voltage Range and Compatible with the Li₁₊ₓMn₂O₄/Carbon Li-ion Cells.*

**期刊：** *Solid State Ionics*, **69**, 293–305。

**DOI：** [10.1016/0167-2738(94)90418-9](https://doi.org/10.1016/0167-2738(94)90418-9)

这篇研究将溶剂、锂盐选择与电池实际要求联系起来，包括宽温度范围电导率和电化学稳定性。公开摘要支持这些研究范围。**不能把该论文关于电池能工作或电解液导电的结果直接当作平衡液相线测量。**

<a id="ref-21"></a>

#### [21] Plichta, E. J.; Behl, W. K. (2000)

**题目：** *A Low-Temperature Electrolyte for Lithium and Lithium-Ion Batteries.*

**期刊：** *Journal of Power Sources*, **88**(2), 192–196。

**DOI：** [10.1016/S0378-7753(00)00367-0](https://doi.org/10.1016/S0378-7753(00)00367-0)

论文公开摘要介绍了一种 1 M LiPF₆/EC/DMC/EMC（1:1:1）电解液，并报告相关电池可在低至 \\(-40\ ^\circ\mathrm C\\) 工作。它支持多元电解液可以提高低温可操作性的判断；**摘要未提供该配方的精确平衡液相线数值，不能据此声称其液相线为 \\(-40\ ^\circ\mathrm C\\)。**

> **资料范围：** 本文围绕 Hubble 的 Liquidus point 小节和 Fig. 3，以及原笔记所列 Ding [19] 的题录、摘要和公开论文信息展开；[20]、[21] 的解释主要依据原笔记引用的公开摘要，不将未核查的全文细节写成实验事实。
