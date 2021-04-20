---
title: cpp-菜鸟回炉-内存分布之普通类
categories:
  - Cpp
  - memory
tags: memory
abbrlink: 202723234
date: 2021-03-28 15:14:20
---

​	本文记录一下CPP关于类的内存存储的情况，根据自己目前的水平写的文章，不当之处请指正。后期会根据自己的所学以及在实际的应用中来不断的更新自己的认识。目前自己使用的平台是Ubuntu18, g++7.4

### 空类，空结构体，空联合体

​	在CPP中，对于空类（class），空结构体（struct），空联合体（union）来说，其 内存大小为`1`。在C语言中，对空结构体，空联合体，其内存大小为0（c语言中没有类）。原因是：CPP中规定，不同的对象必须拥有不同的地址，如果为0为导致两个类的地址一样，在内存地址上就不能区分该类实例化的实例了。所以为了实现这个标准，编译器往往会给一个空类隐含的加一个字节，这样空类字实例化后字内存得到了一个独一无二的地址。如果不是空类，那么一个占位符就会失效，内存空间直接就是这些占内存的总和。参考我[内存对齐文章](https://www.helioswei.top/article/734109955.html#more)

~~~cpp
#include <iostream>
#define PR(x) std::cout << #x << ":" << x << std::endl;

struct A {};
class C
{
    static int a;
};
union B {};
int main()
{
    PR(sizeof(A));
    PR(sizeof(B));
    PR(sizeof(C));
    return 0;
}                                                                                                                                           
~~~

### 加入函数

#### 加入普通函数

​	如果我们往空类中加入函数（普通函数，构造函数，析构函数，静态函数，const函数），那么其内存大小会有变化吗？其内存大小`sizeof(C)`还是为1，因为其没有成员变量，成员函数是不占用这个类的内存空间的。

~~~cpp
class C                                                                                                                                     
{
public:
    C()
    {   
        PR("构造函数");
    }
    ~C()
    {   
        PR("析构函数");
    }
    int sum()
    {   
        int a = 10;
        return a ;
    }
    static void add()
    {   
        int a = 10; 
        int b = 20;
    }
    
    const int  getA()
    {   
        return 10;
    }
};
~~~

#### 加入虚函数

​	如果我们往这个类里面加入虚函数，其结果内存空间的大小会是多少呢？其内存大小`sizeof(c)`为8，这是因为虚函数会有一个`虚表指针`，其大小为`一个指针`的占有的内存大小，布局在`类的开头`。编译器是在构造函数中创建这个虚表指针以及虚表的。类定义时只是在类的开头加了一个指向虚函数表的指针，而不是在类里加入虚函数数组。虚函数表也不是定义在类中的，这个类在产生多个对象是，会共用同样的虚函数表。纯虚函数同理。

~~~cpp
class C
{
public:
    C() 
    {   
        PR("构造函数");
    }   
    ~C()
    {   
        PR("析构函数");
    }                                                                                                                                       
    virtual void test();
};

~~~

### 继承类的内存大小

#### 普通继承

​	没有虚函数的基础，我们子类的空间大小会包含父类成员变量的大小以及自身定义的成员变量大小。内存分布是基类的在前面，子类的在后面。

~~~cpp
  1 #include <iostream>                                                                                                                     
  2 #define PR(x) std::cout << #x << ":" << x << std::endl;
  3 
  4 class Base
  5 {
  6 public :
  7     int a;
  8 private:
  9     int b;
 10 };
 11 class Son : public Base
 12 {
 13 public:
 14     int c;
 15 };
 16 int main()
 17 {
 18     PR(sizeof(Base));//sizeof(Base) 8
 19     PR(sizeof(Son));//sizeof(Son) 12
 20     return 0;
 21 }

~~~

#### 有虚函数的继承

​	子类会继承父类的虚函数指针。

~~~cpp
  6 public :
  1 #include <iostream>
  2 #define PR(x) std::cout << #x << ":" << x << std::endl;
  3 
  4 class Base
  5 {
  6 public :
  7     int a;
  8 private:
  9     int b;
 10     virtual void print()
 11     {
 12         PR("Base")
 13     };
 14 };
 15 
 16 class Son : public Base
 17 {
 18 public:
 19     int c;
 20     void print()
 21     {
 22 
 23         PR("Son");
 24     }
 25 };
 26 
 27 int main()
 28 {
 29     Son son;
 30     son.print();
 31     PR(sizeof(Base));//sizeof(Base) 8 + 4 + 4 = 16,内存对齐
 32     //            vptr a  b   c  xx
 33     //sizeof(Son) 8 + 4 + 4 + 4 +4 = 24
 34     PR(sizeof(Son));
 35     return 0;
 36 }  
~~~



### 参考

https://blog.nowcoder.net/n/cc17d398f41a4beb82b663ca0a72f35c



