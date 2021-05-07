---
title: cpp-使用doxygen+graphviz生成函数调用流程图
categories:
  - Cpp
  - tools
tags:
  - doxygen
  - graphviz
abbrlink: 4085864678
date: 2021-05-07 15:59:18
---

 使用函数调用图可以清晰的帮助自己分析源码。这里介绍一下cpp的函数调用图的生成方式。

## 工具准备

### graphviz

GraphViz是什么？GraphViz是一个开源的图片可视化的软件。它使用一个特定的DSL(领域特定语言)dot作为脚本语言，然后使用布局引擎来解析此脚本，并完成自动布局。GraphViz提供丰富的导出格式，如常用的图片格式，SVG，PDF格式等。

#### 下载

[graphviz的下载地址](http://www.graphviz.org/download/)

### doxygen

Doxygen是一款文档生成工具，它可以从代码中提取出相应的文档，并组织，输出成各种漂亮的文档（如HTML，PDF，RTF等）

有了Doxygen工具，程序员便可以在写代码的时候，直接内嵌文档，再也不需要为某个功能代码单独写文档，从而最大程度的保持了文档和代码的统一性

另外，Doxygen 1.8.x版本中增加对markdown的支持，也支持内嵌部分HTML标签，从而极大的简化了文档编写难度，甚至，您可以用Doxygen生成一个静态的网站。

目前Doxygen支持C/C++，Objective-C, C#，PHP等语言，支持多平台(Mac OS, Linux, Windows)，更多信息，请参考[Doxygen官方介绍](http://www.stack.nl/~dimitri/doxygen/index.html)

#### 下载

[doxygen下载地址](https://www.doxygen.nl/download.html)

#### 使用

[这篇文章](https://cedar-renjun.github.io/2014/03/21/learn-doxygen-in-10-minutes/)介绍一些doxygen为代码生成文档的方法，可以学习。

## 函数调用图

### 安装

将上面的两个工具安装在电脑上，直接下载windows平台的exe文件进行安装既可。

### 使用

#### 运行DoxyWizard，弹出Doxygen配置界面

#### 配置Wizard页面

##### 配置Wizard->Project

![project.png](/images/doxygen/project.png)

**选择Scan recursively则递归分析源代码目录中的子目录内的源代码。**

##### 配置Wizard->Mode

![model.png](/images/doxygen/model.png)

##### 配置Wizard->Output

![output.png](/images/doxygen/output.png)

##### 配置Wizard->Diagrams

![dia.png](/images/doxygen/dia.png)

#### 配置Expert页面

##### 配置Expert->Project

![lang.png](/images/doxygen/lang.png)

##### 配置Expert->Build

![build.png](/images/doxygen/build.png)

##### 配置Expert->Dot

![gra.png](/images/doxygen/gra.png)

由于使用了Graphviz,所以要设置Dot的选项，勾选HAVE_DOT，并设置DOT_PATH为Graphviz的bin目录

#### 开始使用

##### 进行Run页面

点击Run doxygen按钮

![run.png](/images/doxygen/run.png)

##### 展示生成文档

![out.png](/images/doxygen/out.png)