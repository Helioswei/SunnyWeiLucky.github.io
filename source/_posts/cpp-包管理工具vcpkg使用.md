---
title: cpp-包管理工具vcpkg使用
categories: [Cpp,vcpkg]
tags: vcpkg
abbrlink: 2441447756
date: 2021-03-03 16:37:41
---



​	体验一下cpp的包管理工具vcpkg的使用，[git地址](https://github.com/microsoft/vcpkg/blob/master/README_zh_CN.md)。vcpkg是Microsoft的跨平台开源软件包的管理器，极大的简化了在不同平台上第三方库的安装。如果项目要使用第三方库，建议通过 vcpkg 来安装它们。vcpkg 同时支持开源和专有库。微软对其的介绍可以查看[地址](https://docs.microsoft.com/zh-cn/cpp/build/vcpkg?view=msvc-160&viewFallbackFrom=vs-2019)。我们在做cpp的开发时，经常会使用到第三方的库，在编译这些时我们要做哪些考虑呢?比如：Debug还是Release、动态库还是静态库、MD还是MT、32位还是64位。光是这三种组合就有16种可能性。如果像libcurl这种还要考虑是否引用其他开源库的功能，那么编译类型的组合会更多。管理起来很麻烦。由于多样的编译类型，工程目录也必须仔细设定才能保证自己的软件项目能够正常编译。

​	使用vcpkg的优点：

- 自动下载开源库源代码
- 源码包的缓存管理和版本管理，可以升级版本
- 轻松编译
- 依赖关系检查（比如编译libcurl，会自动下载zlib、openssl进行编译）
- 无缝集成Visual Studio，不需要设置库文件、头文件的所在目录，自动集成。
- Visual Studio全平台支持，不仅支持Debug/Release、x86/x64编译，还支持UWP、ARM平台的编译。

### Ubuntu下部署

#### 依赖软件

- git
- g++ >=6

#### 依赖工具

~~~shell
sudo apt-get update
sudo apt-get install build-essential tar curl zip unzip
~~~

#### 安装

​	安装过程可以参考[地址](https://docs.microsoft.com/zh-cn/cpp/build/install-vcpkg?view=msvc-160&tabs=linux)。如果电脑中没有安装cmake，vcpkg会自动下载portable版本的cmake。但是由于各种原因，下载的网速很慢，所以建议先自行下载安装msi版本的cmake。最好是下载最新版本的cmake。

~~~shell
git clone https://github.com/microsoft/vcpkg
~~~

~~~
./vcpkg/bootstrap-vcpkg.sh
~~~

安装成功后会在当前vcpkg的目录下产生一个vcpkg的命令行的工具。

##### 目录结构

所有 vcpkg 功能和数据都自包含在实例的单独目录层次结构中。 没有注册表设置或环境变量。 可以在一台计算机上设置任意数量的 vcpkg 实例，它们彼此互不干扰。

vcpkg 实例的内容如下：

- `buildtrees` - 包含从中生成每个库的源的子文件夹。
- `docs` - 文档和示例。
- `downloads` - 所有已下载的工具或源的缓存副本。 运行安装命令时，vcpkg 会首先搜索此处。
- `installed` - 包含每个已安装库的标头和二进制文件。 与 Visual Studio 集成时，实质上是相当于告知它将此文件夹添加到其搜索路径。
- `packages` - 在不同的安装之间用于暂存的内部文件夹。
- `ports` - 用于描述每个库的目录、版本和下载位置的文件。 如有需要，可添加自己的端口。
- `scripts` - 由 vcpkg 使用的脚本（CMake、PowerShell）。
- `toolsrc` - vcpkg 和相关组件的 C++ 源代码。
- `triplets` - 包含每个受支持目标平台（如 x86-windows 或 x64-uwp）的设置。

#### 更新

​	vcpkg 包管理器在 GitHub 上定期更新。 若要将 vcpkg 的克隆更新到最新版本，请从 vcpkg 根目录运行 `git pull`。 此命令会将 vcpkg 的副本与 GitHub 上的版本同步。 下载完成后，再次运行引导程序。 引导程序会重新生成 vcpkg 程序，但保留已安装的库。

#### 卸载

​	若要卸载 vcpkg，只需删除 `vcpkg` 目录。 删除此目录会卸载 vcpkg 分发以及 vcpkg 已安装的所有库。

但是，如果已执行 `vcpkg integrate install`，则应执行 `vcpkg integrate remove` 来确保在删除文件夹之前已清理集成 。 有关详细信息，请参阅[集成 vcpkg](https://docs.microsoft.com/zh-cn/cpp/build/integrate-vcpkg?view=msvc-160)。这个是Windows下集成到IDE使用的，在Linux下开发的不用关心。

### 命令行使用

​	记录一下常用的命令行。具体的命令行的使用可以参考[地址](https://docs.microsoft.com/zh-cn/cpp/build/vcpkg-command-line-reference?view=msvc-160)

#### search

​	您也可以使用 `search` 子命令来查找vcpkg中已集成的库。

~~~shell
./vcpkg/vcpkg search [search term]
~~~

​	您也可以查看具体的某个包

~~~shell
./vcpkg/vcpkg search uuid
~~~

#### install

​	使用以下命令安装任意包。linux下默认编译生成的是静态库。

~~~
./vcpkg/vcpkg install [packages to install]
~~~

##### 指定编译某种架构的程序库

​	如果不指定安装的架构，vcpkg默认把开源库编译成x86的Windows版本的库。那vcpkg总共支持多少种架构呢？我们可以使用如下命令便知：

~~~
./vcpkg/vcpkg help triplet
~~~

​	vcpkg不仅支持x86架构，还支持arm架构。注意：这里的arm架构特指类似于surface这种运行在arm处理器上的Win10平台，而并非我们传统意义上的Linux或android的ARM平台。那如果要安装编译某一个架构的开源库，我们该怎么写呢？我们只需要在需要安装的包后面指定相应的triplet即可。例如我们需要编译64位版本的jsoncpp，那么执行如下命令即可。

~~~
./vcpkg/vcpkg  install jsoncpp:x64-linux
~~~

​	例如安装uuid,先用`search`命令查找具体的包的名字，然后在使用`install`进行安装。

~~~shell
./vcpkg/vcpkg search uuid
./vcpkg/vcpkg install libuuid
~~~

##### 动态库编译

​	Linux平台默认编译的是静态库，如果要编译动态库则可以参照[这篇文章](https://github.com/microsoft/vcpkg/blob/master/docs/examples/overlay-triplets-linux-dynamic.md)

#### list

​	查看已经安装的开源库。

~~~shell
./vcpkg/vcpkg list
~~~

#### remove

​	移除一个已经安装的库。 如果有其他库依赖它，系统会提示你使用 `--recurse` 重新运行命令；重新运行会导致下游的所有库都被删除。

~~~shell
./vcpkg/vcpkg remove libuuid
~~~

#### upgrade

​	公共目录始终与最新版本的库保持一致。 要判断哪个本地库已过期，请使用 `vcpkg update`。 准备好将端口集合更新到最新版本的公共目录后，请运行 `vcpkg upgrade` 命令。 它会自动下载并重新生成已过期的任意或所有已安装的库。

默认情况下，`vcpkg upgrade` 命令仅列出过期库，不对它们进行升级。 若要真正升级这些库，请使用 `--no-dry-run` 选项。

~~~
vcpkg upgrade --no-dry-run
~~~

升级选项：

- `--no-dry-run`：执行升级；若未指定，该命令将仅列出过期的包。
- `--keep-going`：继续安装包（即使某项失败）。
- `--triplet <t>`：为非限定的包设置默认的三元组。
- `--vcpkg-root <path>`：指定要使用的 vcpkg 目录，而不是使用当前目录或工具目录。

#### export

​	导出一个安装好的包。

~~~
./vcpkg/vcpkg export jsoncpp --zip
~~~

注意，导出时必须指定导出的包格式。vcpkg支持5种导出包格式，有：

| 参数   | 格式                   |
| :----- | :--------------------- |
| –raw   | 以不打包的目录格式导出 |
| –nuget | 以nuget包形式导出      |
| –ifw   | 我也不知道这是啥格式   |
| –zip   | 以zip压缩包形式导出    |
| –7zip  | 以7z压缩包形式导出     |

​	如果要指定输出目录和特定文件名，需使用”–output=”参数

#### import

​	导入一个包

~~~
./vcpkg/vcpkg import xxx.zip
~~~

#### cmake

​	和cmake配合使用可以通过下面的命令。这个是需要在命令行中输入。

~~~
-DCMAKE_TOOLCHAIN_FILE="/home/helios/work/source/vcpkg/scripts/buildsystems/vcpkg.cmake"
~~~

​	另一种方法是直接在项目顶层的CMakeLists.txt中设置变量，必须在project参数设置之前设置下面的参数。在需要使用的地方通过find_package既可以。

- CMAKE_TOOLCHAIN_FILE  你的vcpkg.cmake的路径;
- VCPKG_TARGET_TRIPLET  你的平台架构名字，通过`./vcpkg/vcpkg help tripl` 来查看

~~~shell
set(CMAKE_TOOLCHAIN_FILE /home/helios/work/source/vcpkg/scripts/buildsystems/vcpkg.cmake CACHE PATH "")
#set(VCPKG_TARGET_TRIPLET x64-linux CACHE PATH "")
~~~

​	对于你安装的软件，执行`install`之后会告诉你怎么在camke中使用，例如下面的：

~~~cmake
The package sqlite3:x64-linux provides CMake targets:

    find_package(unofficial-sqlite3 CONFIG REQUIRED)
    target_link_libraries(main PRIVATE unofficial::sqlite3::sqlite3))
~~~

​	最后一种方法，直接在cmake文件中添加其头文件和动态库的地址。

### 实例

​	官网介绍了一个例子，可以用于学习，[地址](https://github.com/microsoft/vcpkg/blob/master/docs/examples/installing-and-using-packages.md)。