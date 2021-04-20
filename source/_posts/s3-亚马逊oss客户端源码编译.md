---
title: s3-亚马逊oss客户端源码编译
categories:
  - Database
  - s3
tags:
  - aws-sdk-cpp
abbrlink: 4200273252
date: 2021-04-20 14:22:17
---

​	cpp关于亚马逊S3的客户端源码编译，aws-sdk-cpp的记录。因为项目中使用了亚马逊的oss的存储，所以需要客户端去请求，进行一些文件的上传下载等工作。

### 源码下载

​	我们直接在GitHub上下载[aws-sdk-cpp](https://github.com/aws/aws-sdk-cpp.git)。我们的服务器环境

~~~shell
git clone https://github.com/aws/aws-sdk-cpp.git
~~~

- Ubuntu 16.04.6 LTS
- git version 2.7.4
- cmake version 3.19.3
- g++ (GCC) 7.4.0

### 编译

​	编译需要先参考官方文档，有一个基本的了解

- [linux下编译](https://docs.aws.amazon.com/sdk-for-cpp/v1/developer-guide/setup-linux.html)
- [cmake编译参数](https://docs.aws.amazon.com/sdk-for-cpp/v1/developer-guide/cmake-params.html#cmake-target-arch)

#### 依赖

​	我们在编译的时候需要依赖一些库：

- zlib;
- openssl;
- curl;

#### 编译

​	进入源码目录`aws-sdk-cpp`

~~~shell
cd aws-sdk-cpp
mkdir build
~~~

编译静态库

~~~shell
cmake -DCMAKE_BUILD_TYPE=Release -DTARGET_ARCH=LINUX -DBUILD_SHARED_LIBS=OFF -DBUILD_ONLY="s3" -DCMAKE_INSTALL_PREFIX=/usr/local/awssta ..
~~~

编译动态库

~~~shell
cmake -DCMAKE_BUILD_TYPE=Release -DTARGET_ARCH=LINUX -DBUILD_ONLY="s3" -DCMAKE_INSTALL_PREFIX=/usr/local/aws ..
~~~

~~~sh
make -j5
make install
~~~

#### 使用

使用时先学习[官网的例子](https://docs.aws.amazon.com/sdk-for-cpp/v1/developer-guide/programming-general.html)

- 自己封装[的使用](https://gitee.com/helioswei/testcode/tree/master/s3/aws)