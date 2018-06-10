---
title: git常用命令
date: 2018-06-09
tag: 
  - git
categories:
  - 项目
---
![](/imgs/project/git/git.jpg)

# `git`常用命令

1. `git init`: git初始化，并生成.git文件；
2. `git clone url(你的项目地址)`: 克隆项目
  例： git clone git@github.com:Iwouldliketobeapig/hexo-dt.git
3. `git remote add origin(源名) url(项目地址)`: 添加远程仓库
  例： git remote add origin git@github.com:Iwouldliketobeapig/hexo-dt.git
4. `git remote set-url origin(源名) url(项目地址)`: 为以为源添加或者修改远程仓库抵制
5. `git remote -v`: 查看源名及远程仓库地址
6. `git checkout name(分支名)`: 切换分支
  例： git checkout master
7. `git checkout -b name(分支名)`: 创建并切换到创建分支
  例： git checkout -b dev
8. `git branch`: 查看当前分支及所有分支
9. `git add .`: 暂存所有文件
10. `git add file(文件路径 + 文件名)`: 暂存某个文件
  例： git add package.json
11. `git commit -m '备注'`: 添加备注信息等
  例： git commit -m 'feat: 添加了某个备注'
12. `git push origin(源名) name(分支名)`: 向远程仓库推送更改资源
13. `git push origin(源名) name(分支名) --force`: 强制更新远程仓库
  例： git push origin master
14. `git stash`: 缓存所有更改
15. `git stash pop`: 放出缓存且删除缓存记录
16. `git merge name(分支名)`: 合并分支
17. 例: git merge test
18. `git rebase name`: 合并分支
例: git rebase test
`merge与rebase的区别`
  1.merge不会保存merge分支的commit
  2.处理冲突时
    ① git add . => git commit -m 'fix: 一些信息'会保存一条commit信息
    ② git add . => git rebase --continue 不产生额外的附加信息，当需要处理多个commit冲突时，需要重复处理多次
  3.git pull 默认未git pull --merge,设置为git pull --rebase即按照rebase处理冲突
