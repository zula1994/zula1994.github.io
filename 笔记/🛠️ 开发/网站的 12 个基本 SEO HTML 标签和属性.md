---
uid: 20240815134610
cdate: 2024-08-15
mdate: 2024-08-15 星期四 13:46:09
cssclasses:
  - max
comment: true
tags:
  - seo
---
****
## 1. 标题标签

标题标签是用于指定网页标题的 HTML 元素。它作为可点击的链接显示在搜索引擎结果页面 (SERP) 上。

标题标签对于用户体验和 SEO 很重要。它们提供页面的简洁描述。因此搜索者知道当他们点击时会发生什么。**并帮助搜索引擎理解内容**。

以下是标题标签在 SERP 中作为可点击链接的样子：

![](https://pic4.zhimg.com/80/v2-8b1ff7b84d397033826ad2ae4867a59b_1440w.webp)

该标签还会显示在用户的浏览器选项卡中。

![](https://pic4.zhimg.com/80/v2-b68610ce778884981dff6c2743adcfcf_1440w.webp)

要添加标题标签，请在 HTML 构建器中使用属性 `<title>`。

在要显示为标题的文本之前添加一个开始 `<title>` 标记。其末尾有一个结束 `</title> `标记。

![](https://pic4.zhimg.com/80/v2-9a6db007a64cfc23c91f8b68a3034c5f_1440w.webp)

在您向网页添加标题后，您的内容管理系统 (CMS)（例如 WordPress 或 HubSpot）可能会自动创建 `<title>` 标记。

### 标题标签最佳实践

- **保持简洁**：目标是 50-60 个字符。如果您的标题超出此范围，它可能会在搜索结果中被删除。由于 Google 最多只能显示 600 像素（或大约 60 个字符）。
- **不要重复标题标签**：使每个标题都是唯一的，以帮助搜索引擎确定页面的用途
- **使用主要关键字：**包括您的主要关键字（您为该页面定位的主要术语）来指示内容的主题
- **分析 SERP：**通过 Google 搜索您的内容主题。查看排名较高的页面显示的标题以及这些标题使用的关键字。这将使您了解还应该使用哪些关键字来帮助您的内容排名。
- **保持一致：**标题标签应与页面的 H1 相同或相似。这两个元素都有助于搜索引擎理解主题。
- **前置关键术语：**在标题开头使用最重要的单词。因此，搜索者可以轻松找到他们想要的内容。

## 2. 元描述<元描述>

元描述是 SEO 的另一个 HTML 元标记。这是可以在搜索引擎上显示的网页的简短描述。以及一些社交媒体预览。

元描述是提供页面内容简要说明的标签。它们通常出现在 SERP 上的标题标签下方。

虽然元描述不是排名因素，但它们会影响您的点击率 (CTR)。并将人们带到您的网站。有吸引力的元描述可以增加用户点击您的链接的可能性。

Yoast 和 Rank Math 等工具可以轻松添加元描述，而无需更新 HTML。

元描述代码片段在 HTML 中如下所示：

`<meta name="description" content="Learn how to develop a tone of voice for your brand and use our template to get started.">`

name _=”description”_元素表示您提供的元数据的类型（描述）。

content _=”_元素是您添加网页内容描述的位置（在第二对引号内）。

这是搜索引擎上的元描述的样子：

![](https://pic2.zhimg.com/80/v2-057155e0a281e885606c468ab5f6cd3d_1440w.webp)

### 元描述最佳实践

通过编写引起搜索者兴趣的元描述，您可能会获得更多页面流量。提高点击率。

以下是一些最佳实践：

- 描述您的内容是关于什么的。因此，搜索者知道当他们点击进入您的网站时会发生什么。
- 力求简洁描述不超过 155 个字符。较长的元描述可能会在 SERP 中被切断。如果您针对移动设备进行优化，请坚持在 105 左右。
- 包含您的主要关键字
- 使用 Yoast 或 Rank Math 等插件来帮助您遵循字符长度的最佳实践。以及关键词的使用。

Yoast 的插件如下所示：

![](https://pic1.zhimg.com/80/v2-b13529c88ae490035d19f4aea4be64c0_1440w.webp)

## 3. 标头标签 `<h1>` 至 `<h6>`

标题标签（例如 `<h1>`、`<h2>` 和 `<h3>`）可帮助您定义页面上的每个标题和副标题。并帮助您构建所有类型页面上的内容。包括您的主页、服务页面、产品页面、博客文章等。为了让访客更容易阅读和理解。

它们还帮助搜索引擎理解内容的层次结构和上下文。

标题大小 (H1 > H2) 越大，包含关键字或描述性短语就越重要。

由于标题可能比纯文本更重要（它们有助于指示页面结构），因此您应该尽可能使用关键字对其进行优化。

在 HTML 标记中，以下标头标记很常见：

- **标题 1 `<h1>`**：页面的主标题/标题
- **标题 2 `<h2>`**：二级标题
- **标题 3 `<h3>`：**` <h2>` 的副标题
- **标题 4 `<h4>`：** `<h3>`的副标题
- **标题 5 `<h5>`：** `<h4>` 的副标题
- **标题 6 `<h6>`：** `<h5>` 的副标题

![](https://pic4.zhimg.com/80/v2-a26d8c2f52cf29e971a382c67f9b4b9f_1440w.webp)

例如，H1 标签告诉搜索引擎页面的主要主题是什么。并把内容组织清楚。他们还向访问者表明该页面包含他们正在寻找的信息。

HTML 中的 H1 如下所示：

![](https://pic2.zhimg.com/80/v2-4184ae8943a235ecf672279ce589342d_1440w.webp)

对于访客来说，它是这样的：

![](https://pic3.zhimg.com/80/v2-8ae542e03ab74b39520d80a9a1158172_1440w.webp)

要在 HTML 中添加标题 1 标记，您可以在标题前面使用开头的 `<h1>`。最后还有一个结束语`</h1>`。

许多 CMS 会自动根据您的网页标题创建 H1。并允许您从编辑器轻松选择标头（如 H2、H3 和 H4），而无需更新 HTML。

H2 介绍网页或博客文章上的每个主要部分。

![](https://pic4.zhimg.com/80/v2-b3bc88b303ec774a1480ef04e2e0a1fb_1440w.webp)

H3 在 H2 之后。使用它们在 H2 下组织内容。并提高可读性。

H3 的文本尺寸显得较小。指示 H2 中的小节。

![](https://pic4.zhimg.com/80/v2-22cc9ae57039629687ad5f2f3a3fe747_1440w.webp)

在 WordPress 等 CMS 中，使用编辑器选择标头标签。

![](https://pic2.zhimg.com/80/v2-3ccdb2e9c6bc27ce2c3ed813cc33d981_1440w.webp)

## 4. 图像替代文本 `<img>`

Alt 文本或替代文本是与图像相对应的描述。如果图像无法加载，则会显示文本来代替图像。该文本对于使用屏幕阅读器的人也很有帮助。

以下是图像 HTML 标记的示例：

`<img src="https://example.com/.pixel-7-pro-camera-barjpg" alt="The back of the Pixel 7 Pro showing the aluminum camera bar">`

“img src”表示图像来源。 (alt) 表示图像的替代文本。

当图像加载失败时，替代文本如下所示：

![](https://pic2.zhimg.com/80/v2-2462c7781366e83fd0e414a640d10f2d_1440w.webp)

图像替代文本对于 SEO 很重要，因为它为搜索引擎提供有关图像内容的信息。这可以帮助提高页面的相关性。

优化您的图片还可以增加流量并提高排名的机会。

您添加到网站的每张图片都是一个战略性添加关键字和短语的机会。进一步优化搜索引擎的内容。

在许多 CMS 中，您无需使用 HTML 编辑器即可应用替代文本。



## 5. 规范标签 `<canonical>`

当同一页面存在多个版本时，规范标签允许您指定页面的首选版本。

例如，假设您经营一个电子商务网站。同一产品的每种颜色变体都有一个唯一的 URL。但每一页的内容都是一样的。使用规范标签来指示您希望 Google 将哪个 URL 编入索引。

规范标签对于 SEO 很重要，因为它们有助于防止重复内容问题。这可能会对排名产生负面影响。搜索引擎可以了解要索引并在搜索结果中显示的页面版本。

这些标签告诉搜索引擎应该索引哪个页面版本（称为“规范 URL ”）。因此，重复的内容不会显示在搜索结果中。任何页面权限都会转到您指定的规范 URL。

![](https://pic3.zhimg.com/80/v2-f7b3db1ee75b9d5c59fcf73112abcd72_1440w.webp)

要添加规范标签，请使用代码片段：

`<link rel="canonical" href="https://example.com/preferred-url-here/" />`

规范标签有几个属性：

- **“link”**：定义一个 URL 与另一个 URL 之间的关系
- **rel="canonical"**：表示关系类型
- **href="URL"**：确认原始内容的具体URL

在某些 CMS（如下面所示的 Versoly）中，您可以添加规范 URL，而无需访问 HTML 编辑器。

![](https://pic2.zhimg.com/80/v2-7711c19002b5c02eab3a6a074a880865_1440w.webp)

如果您不使用规范标签，搜索引擎可能会索引错误的页面。这意味着您的首选页面的排名可能不会那么高。

## 6. 机器人元标签 `<meta robots>`

您可能不希望搜索引擎对您网站的每个页面建立索引。将机器人元标记与“noindex”或“nofollow”等指令相结合，有助于搜索引擎以最佳方式抓取您的网站并为其建立索引。

机器人元标记是页面级标记，告诉搜索引擎和网站爬虫如何爬行您的网站。

使用 robots 元标记指定搜索引擎是否应将页面编入索引。以及是否应该遵循页面上的链接。

您可能包含此标签的常见页面包括：

- 管理或登录页面
- 确认页面。例如感谢页面。
- 内部搜索结果页面
- 来自暂存站点的页面
- 具有重复内容的页面
- 按点击付费 (PPC) 着陆页

例如，如果您不希望搜索引擎对页面建立索引，则可以在 HTML 标头中包含以下代码片段：

`<meta name="robots" content="noindex">`

这两个属性是“名称”和“内容”。

- **名称**：指示正在定义的元数据的类型（机器人）
- **内容**：给出的说明（无索引）

您还可以在内容属性中使用多个指令。例如 noindex、nofollow 和 noimageindex 等。使用逗号分隔每一项。

下面是使用多条指令的示例：

`<meta name="robots" content="noindex, nofollow">`

noindex 指令告诉搜索引擎不要将该页面包含在搜索结果中。 nofollow 指令告诉爬虫不要跟踪页面上的链接。

## 7. 模式标记

架构标记是一种结构化数据，您可以将其添加到页面源中以帮助搜索引擎理解内容。

网站所有者经常使用此数据来提供有关页面的附加信息。例如产品详细信息、评论、评级等等。

以下是 Semrush 主页上的标记示例：

![](https://pic4.zhimg.com/80/v2-0ab469e0033dc4099babc9dbd3dfce5b_1440w.webp)

虽然模式标记从技术上讲并不是 HTML 标记，但它仍然很有价值。它可以帮助提高页面在搜索结果中的可见性和相关性。所以它以丰富的片段脱颖而出。

常见的丰富摘要格式包括但不限于：

- 产品标记
- 常见问题解答
- 评论
- 食谱
- 电影
- 活动

无论您的业务类型如何，使用标记都可以增强内容在 SERP 中的外观并提高点击率。人们更有可能注意到并点击列表。

假设您经营一家面包店，并且您的网站有一个食谱部分。通过为菜谱页面添加架构标记，菜谱页面的搜索结果可以以与标准有机列表不同的方式显示。在标记中，您可以包含配料、准备时间和烹饪时间等详细信息。

以下是食谱的丰富片段：

![](https://pic2.zhimg.com/80/v2-330146c669846119d65110da246227b9_1440w.webp)

使用 Google 的结构化数据标记助手添加架构标记。

打开工具。选择您要创建的代码片段类型，然后输入您的页面 URL。然后，单击“**开始 标记**”。

对于此示例，我们将创建产品结构化数据标记。

![](https://pic4.zhimg.com/80/v2-8f9dd9e97356be3a9bb36995c5a7595f_1440w.webp)

该工具会将网页的 URL 填充到“标签数据”视图中：

![](https://pic3.zhimg.com/80/v2-f4d6deb30f7ff551ae14c97801563a7a_1440w.webp)

此示例是 MacBook Pro 的产品片段。因此，我们将包含产品名称、价格、图像、品牌、徽标等元素。

选择或突出显示页面元素，该工具将要求您标记它们。

例如，要添加产品名称，请将其突出显示并用“**名称**”标记。

![](https://pic1.zhimg.com/80/v2-28761982b5374a3d0374558cc0de3ef0_1440w.webp)

如果您想添加价格，您可以突出显示并选择“**价格**”标签：

![](https://pic2.zhimg.com/80/v2-45a4fc080c7533dda7de913619473a99_1440w.webp)

当您工作时，该工具会将所有信息添加到右侧面板中。

标记尽可能多的元素。

然后，单击屏幕右上角的 红色“**创建 HTML ”按钮。**

![](https://pic1.zhimg.com/80/v2-a03595bc71a282aaee4d415c3297d394_1440w.webp)

该工具将在侧面板中创建结构化数据标记代码。

![](https://pic1.zhimg.com/80/v2-cd4d625a38ca0af3140c2f1a6f8981b8_1440w.webp)

最后，复制或下载代码并将其添加到页面的 `<head>` 部分。

就是这样。您已成功添加架构标记。

## 8.表`<表>`

表格标签是用于在网页上创建表格的 HTML 元素。

虽然向内容添加表格听起来不像典型的 SEO 策略，但您可以使用它们以结构化格式组织和显示数据。这可以增强内容的外观和感觉。使其更易于阅读。

使用表格标签在内容中创建行和列（表格），以结构化且具有视觉吸引力的方式呈现数据。

例如，此Sizely 表按国家/地区显示夹克尺寸。这对购物者有帮助。

![](https://pic3.zhimg.com/80/v2-7f32557e6aaaededdec4b9bcec4b5856_1440w.webp)

表格也有可能在 Google 中显示为特色片段。这可以引起注意。并产生更多的网站点击量。

![](https://pic4.zhimg.com/80/v2-4fea96a9deb299786106ccd67931981f_1440w.webp)

如果您的 CMS 支持从 Google Docs 或 Microsoft Word 等其他软件复制和粘贴表格，您可能无需担心在副本周围创建特定标签。

需要注意的关键表标签是：

- **`<table>`**：表示表的开始
- **`<tr>`**：定义表格行
- **`<td>`**：定义表格中的单元格
- **`<th>`**：定义表格标题单元格
- **`<td>`**：定义第一行的数据单元格

一个例子可能如下所示：

```
<table>
	<tr>
	<th>Header 1</th>
	<th>Header 2</th>
	</tr>
	<tr>
	<td>Data 1</td>
	<td>Data 2</td>
	</tr>
</table>
```

在上面的示例中，我们执行了以下操作：

- 使用 `<table>` 启动一个表
- 使用 `<tr>` 定义一行
- 在标题 1 周围使用 `<th>` 添加了表标题
- 在标题 2 周围使用`<th>` 添加了表标题
- 在我们的 CMS 中的数据周围添加了数据单元格
- 使用 `<tr>` 定义行
- 使用 `<table>` 结束表格

每个 CMS 的输出看起来会有所不同。取决于您是否应用主题或自定义格式。

## 9. iframe `<iframe>`

iframe（或内联框架）是一种 HTML 元素，可让您将 HTML 文档嵌入页面内。它就像页面上的一个小窗口，显示来自其他地方的内容。

您可能使用 iframe 的场景包括：

- 嵌入多媒体元素。例如来自 YouTube 或 SoundCloud 等平台的视频、音频文件和动画。
- 嵌入文档。就像 PDF 一样。
- 集成第三方应用程序。例如 Google 地图小部件。
- 从外部源加载内容。包括来自 Twitter、Facebook 和 Instagram 的社交媒体帖子。

您的基本代码片段如下所示：

`<iframe src="https://example.com"></iframe>`

例如，使用 iframe 嵌入 YouTube 视频将显示如下媒体：

![](https://pic2.zhimg.com/80/v2-e38f8eab97d87057691f23c1333f97ed_1440w.webp)

在 WordPress 等 CMS 中，您将有一个嵌入/导入按钮，允许您使用 URL 添加外部组件。而不是获取和创建代码。

例如，您可以添加 YouTube 视频 URL，而不是创建 iframe 代码。

虽然 iframe 可以改善用户体验，但对于 SEO 也有缺点：

- 加载 iframe 意味着同时加载两个站点。这会减慢您的页面速度。页面速度是 Google 排名因素。
- 如果嵌入的内容来自不受信任的来源，则 iframe 可能会存在安全风险。恶意 iframe 可能会在您的网站上注入有害代码。
- 搜索引擎将 iframe 内容视为属于另一个网站。这意味着它不会直接有利于您的排名。

我们建议采用以下集成外部内容的最佳实践：

- 仅将 iframe 用于支持内容的特定目的。例如在您的位置页面上嵌入地图。
- 确保嵌入的内容是相关的。并增强用户体验。
- 通过避免不必要的 iframe 来优化页面加载时间。当您_确实_使用 iframe 时，请优化页面速度，以抵消 iframe 造成的任何加载时拖动。
- 仅集成来自可信来源的内容，以最大程度地降低安全风险

_**笔记**_

_iframe 内的内容不会被搜索引擎索引。_

## 10. 列表标签 `<li>`

您发现这篇博文中使用的列表数量了吗？

列表标签将文本转换为列表。使用这些标签来组织信息。

当读者浏览您的内容时，他们不太可能阅读每个单词。列表使要点易于浏览。并且更容易阅读。

格式良好的列表也可能有助于搜索引擎优化。

当谷歌认为它提供了最佳的用户体验时，就会显示 [特色片段](https://link.zhihu.com/?target=https%3A//www.semrush.com/blog/featured-snippets/)。一种类型的特色片段是列表。如果 Google 认为您拥有支持搜索者查询的最佳列表，则可能会从您的内容中提取这些内容。

![](https://pic3.zhimg.com/80/v2-01b32063ed3ffd4e8004ef6edb1c488a_1440w.webp)

HTML 中的列表如下所示：

![](https://pic3.zhimg.com/80/v2-d5228e3f9311c822b00fa739f5c69286_1440w.webp)

对于访客来说，它是这样的：

![](https://pic4.zhimg.com/80/v2-28e2d835c87a4d2ea70a302a3b9a0e43_1440w.webp)

如果您的 CMS 支持从文档创建工具（Word、Google Docs、Notion 等）复制和粘贴，则会自动应用标签。

在使用 HTML 创建列表之前，请选择是否要对列表进行排序或无序。

- **已订购**：显示相应编号的商品
- **无序**：以任意顺序显示的项目

在编写说明或菜谱时，请选择_“有序”_，因为用户需要按特定顺序执行列表项。

如果列表项不需要连续执行，则列表可以是无序的。一个例子是食谱成分列表。

对于有序列表，请在列表标签​​之前使用标签` <ol>`，在列表标签​​之后使用标签 `</ol>`。

在 `<ol>` 标记内，包含您的列表项，并在 HTML 编辑器中用 `<li>` 标记将它们包围起来。

您的列表在 HTML 中将如下所示：
```
<ol>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ol>
```
当在您的网站上发布时，您的列表将如下所示：

1. 第一项
2. 第二项
3. 第三项

对于无序，请在列表标签​​之前和之后使用标签 `<ul>` ，并在 HTML 编辑器中用 `<li>` 标签将它们括起来。

您的列表在 HTML 中将如下所示：

```
<ul>
<li>Oranges</li>
<li>Sugar</li>
<li>Water</li>
</ul>
```
发布后，您的列表将如下所示：

- 橙子
- 糖
- 水

## 11. 超链接`<a>`

超链接通常简称为“链接”，是将一个页面链接到另一页面的 HTML 元素。您可以使用超链接来帮助用户在同一网站的页面之间导航。或者您可以链接到其他网站。

超链接对于 SEO 很重要，因为它们可以帮助搜索引擎发现并索引您的内容。它们还帮助搜索引擎理解不同页面之间的关系。

超链接 HTML 代码由以下部分组成：

- **`<a>`**：锚标记，表示重定向的开始
- **href= "[https://www.exampleurl.com](https://link.zhihu.com/?target=https%3A//www.exampleurl.com)">**：将文本或图像重定向到的位置
- **锚文本**：添加向访问者显示的文本（通常是现有副本）
- **`</a>`**：关闭标签

组合后，您的超链接 HTML 代码将如下所示：

![](https://pic3.zhimg.com/80/v2-0b901d1bdd065dea112f6f18ff2fecca_1440w.webp)

在您发布的页面上，超链接如下所示：

![](https://pic4.zhimg.com/80/v2-394e8d23a311006d20e1cfe9ab7d32cf_1440w.webp)

_**笔记**_

_您的网站将根据其主题和格式显示超链接。它们的下划线、粗体或颜色可能与文本的其余部分不同。_

例如，如果您从 Google Docs 或 Word 复制链接文本，则当您将其粘贴到其他位置时，该链接可能会伴随该文本。

您还可以使用超链接进行 内部链接。内部链接是一种超链接，可将网站访问者引导至您网站上的另一个页面。

添加内部链接到您的任何页面。就像你的“钱页”一样。包括联系表格、免费试用和演示请求。

添加号召性用语 (CTA) 以鼓励用户进一步参与。就像“在这里注册免费试用”。

![](https://pic1.zhimg.com/80/v2-3c5752b6822168dff5f289a1e507dddc_1440w.webp)

## 12.开放图谱标签和 Twitter 卡

针对不同受众的个性化对于从搜索引擎以外的平台产生参与度至关重要。

开放图标签控制您在社交媒体上呈现网页的方式。

您撰写的每篇博客文章都可能会在社交媒体上分享。为什么不提高其性能，使其更有可能获得点击呢？

添加新的图像、标题或描述，以鼓励不同的社交平台受众点击您的内容。

您可能希望网页在搜索引擎上的显示方式与在 Twitter、Facebook 或 LinkedIn 上的显示方式不同，以获得特定受众的更多点击。

因此，虽然您的网页在搜索引擎和您的网站上可能看起来像这样：

![](https://pic2.zhimg.com/80/v2-4c877d5b8dd0bd347e8faf6f8ce2e2d9_1440w.webp)

在社交媒体上它也可以是这样的。 （注意不同的标题。）

![](https://pic1.zhimg.com/80/v2-6773e7336fd059cdab74d81ff338594c_1440w.webp)

您的 CMS 可能可以选择添加开放图谱标题，而无需编辑 HTML 代码。

![](https://pic1.zhimg.com/80/v2-94cb68cbec6278cc6d2e39a2df3cab4c_1440w.webp)

如果没有，请添加以下示例 HTML 代码，以便在社交媒体上共享内容时创建替代标题、图像和描述。

`<meta property="og:title" content="Insert Your Title Here">`

这里起作用的主要属性是：

- **og:title**：显示与原始内容不同的标题
- **og:image**：显示与原始内容不同的图像
- **og:description**：显示与原始内容不同的预览描述
