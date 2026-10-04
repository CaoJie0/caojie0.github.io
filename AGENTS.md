# Agent Guidelines for Academic Pages (academicpages.github.io, v.0.9.x)

**This file contains important information for coding agents working in this repo.**

`academicpages.github.io` is a Jekyll theme for academic, professional, and personal portfolio-oriented websites. The the typical use pattern is to "Use this template" to "Create a new repository" (see [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)) where the user will then make their own edits to customize the template to create their own personal GitHub pages website. 

If a user has created a personal website, there is **no need** to create a pull request back to the `academicpages.github.io` repository.

## 铁律：保持非目标页面布局

- 修改某个页面或区块时，主页和其他页面的布局必须保持原样；不要顺手调整它们的宽度、边距、侧栏、导航或响应式断点。
- 页面专属样式应限定在该页面的 class 下。确需修改共享布局、样式或脚本时，只做解决当前问题所必需的最小改动，并检查主页与其他代表性页面在桌面端和移动端的布局。
- 不要覆盖或回退用户已有的未提交改动；遇到无法确定的原布局，先核对再修改。
