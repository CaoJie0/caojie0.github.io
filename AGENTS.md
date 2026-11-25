# Agent Guidelines for Academic Pages (academicpages.github.io, v.0.9.x)

**This file contains important information for coding agents working in this repo.**

`academicpages.github.io` is a Jekyll theme for academic, professional, and personal portfolio-oriented websites. The the typical use pattern is to "Use this template" to "Create a new repository" (see [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)) where the user will then make their own edits to customize the template to create their own personal GitHub pages website. 

If a user has created a personal website, there is **no need** to create a pull request back to the `academicpages.github.io` repository.

## 铁律：保持非目标页面布局

- 修改某个页面或区块时，主页和其他页面的布局必须保持原样；不要顺手调整它们的宽度、边距、侧栏、导航或响应式断点。
- 页面专属样式应限定在该页面的 class 下。确需修改共享布局、样式或脚本时，只做解决当前问题所必需的最小改动，并检查主页与其他代表性页面在桌面端和移动端的布局。
- 不要覆盖或回退用户已有的未提交改动；遇到无法确定的原布局，先核对再修改。

## 铁律：锁定已上线的书籍页布局

- 以当前已上线的[书籍列表](https://caojie0.github.io/books/)和[《把自己作为方法》详情页](https://caojie0.github.io/books/the-self-as-method/)为布局基准。除非用户明确要求改版，书目维护也必须遵守此约束。
- 列表固定沿用按年分组的纵向卡片，左侧放封面，右侧依次放书名、作者、阅读日期或状态、摘要和笔记入口。详情页固定沿用左侧封面、右侧书目信息，下方依次放「内容简介」「我的阅读笔记」和返回链接。
- 录入书目时沿用 `_books/` 的条目结构。排序、日期和文案可以按需求更新。卡片和详情页的容器层级、布局类名，以及 `_sass/layout/_books.scss` 和共享样式中的栏宽、间距、对齐、页眉、页脚与响应式规则均须保持已上线的布局。
- 发布前将本地预览与上线页在相同的浏览器缩放和视口尺寸下对照，核对桌面端和移动端的列表及同一本书的详情页。检查卡片尺寸、封面栏和间距，并实测导航、页面标题、首张卡片和页脚内容的横坐标。新增书目引入纵向滚动条时，桌面宽屏的居中内容仍须与上线版横向对齐，出现整体偏移即为验收不通过。
- 滚动到列表底部时，最后一张卡片及其笔记入口必须完整可见且可点击。修正滚动条引发的对齐或遮挡问题时，样式限定在书籍列表页，保留原有卡片尺寸、页脚固定方式和移动端排版。
