---
title: linux-生成ssh key
categories: Linux
tags: ssh
abbrlink: 2022323734
date: 2021-03-04 13:37:04
---



​	我们在使用git的时候经常需要用到ssh的连接，本文记录一下自己在使用的时候怎么生成的ssh key的过程。

### 平台

​	我使用的平台是Ubuntu16，查看的命令

~~~shell
cat /etc/lsb-release
~~~

### ssh key的生成

#### 检测本地是否有SSH Key的存在

​	使用下面的命令

~~~shell
ls -la ~/.ssh
~~~

​	如果输出的是下面的内容，则表示没有，我们需要生成。

~~~
ls: cannot access '/home/weiyang/.ssh': No such file or directory
~~~

​	如果存在则就会显示下面的内容，我们直接使用就好了。

~~~shell
total 8
drwx------ 2 weiyang weiyang   38 Mar  4 13:43 .
drwxr-xr-x 4 weiyang weiyang  123 Mar  4 13:42 ..
-rw------- 1 weiyang weiyang 1766 Mar  4 13:43 id_rsa
-rw-r--r-- 1 weiyang weiyang  405 Mar  4 13:43 id_rsa.pub

~~~

#### 生成

​	使用下面的命令生成，按照操作来就行。

~~~shell
ssh-keygen
~~~

​	提示设置 passphrase，每次与 Git 通信都会要求输入 passphrase，以避免某些错误的操作所导致的问题，建议设置一下。成功后在终端输入下面命令，此时会要求输入上面步骤里所填的 passphrase。

~~~shell
ssh-add ~/.ssh/id_rsa
~~~

​	使用下面命令获取公钥，然后拷贝到自己的git上就行

~~~
cat .ssh/id_rsa.pub
~~~

​	如果你在使用时不想用passphrase,则使用下面的命令删除

~~~
ssh-keygen -p [-P old_passphrase] [-N new_passphrase] [-f keyfile]

ssh-keygen -p -P 123456 -N '' -f ~/.ssh/id_rsa
~~~

