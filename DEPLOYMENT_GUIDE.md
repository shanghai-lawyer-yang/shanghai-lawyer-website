# 杨律师网站部署指南

## 网站概况
- **网站名称**：杨淑倩律师 - 上海辉岩律师事务所
- **网站类型**：静态网站（HTML + CSS + JavaScript）
- **文件大小**：约25MB（主要包含PDF文件）
- **页面数量**：2个主要页面

## 文件结构
```
杨律师民商事诉讼网站/
├── index.html          # 主页（33KB）
├── cases.html          # 成功案例页面（20KB）
├── css/
│   └── style.css      # 样式文件（9KB）
├── js/
│   └── main.js        # 交互脚本（13KB）
├── 杨律师照片.JPG      # 律师照片（15MB）
├── 公众号二维码.png    # 公众号二维码（78KB）
├── 微信二维码.png      # 微信二维码（59KB）
└── 法律研究-*.pdf     # 法律研究PDF文件（多个）
```

## 部署步骤

### 第一步：购买域名（必需）
**推荐域名**：
1. `yangshuqianlawyer.com` - 最专业（约68元/年）
2. `yangshuqian.cn` - 国内域名（约55元/年）
3. `shanghailawyer.cn` - 行业定位（约88元/年）

**购买平台**：
- 阿里云（https://wanwang.aliyun.com）
- 腾讯云（https://dnspod.cloud.tencent.com）
- Godaddy（https://www.godaddy.com）

### 第二步：注册GitHub账号（必需）
1. 访问 https://github.com
2. 点击右上角"Sign up"
3. 使用邮箱注册
4. 用户名建议：`yangshuqian-lawyer`

### 第三步：创建GitHub仓库
1. 登录GitHub后，点击右上角"+" → "New repository"
2. 仓库名称：`yang-lawyer-website`
3. 描述："杨淑倩律师专业网站"
4. 选择"Public"（公开）
5. 不要勾选"Initialize this repository with a README"
6. 点击"Create repository"

### 第四步：上传网站文件
**方法A：使用GitHub Desktop（推荐）**
1. 下载GitHub Desktop：https://desktop.github.com
2. 登录您的GitHub账号
3. 克隆仓库到本地
4. 将`杨律师民商事诉讼网站`文件夹中的所有文件复制到仓库文件夹
5. 提交并推送更改

**方法B：使用网页上传**
1. 在仓库页面点击"Add file" → "Upload files"
2. 拖拽所有网站文件到上传区域
3. 填写提交信息："Initial website deployment"
4. 点击"Commit changes"

### 第五步：启用GitHub Pages
1. 进入仓库的"Settings"页面
2. 左侧菜单选择"Pages"
3. 在"Source"部分选择"Deploy from a branch"
4. 分支选择"main"，文件夹选择"/ (root)"
5. 点击"Save"
6. 等待几分钟，GitHub会生成网站地址

### 第六步：配置自定义域名
1. 在GitHub Pages设置页面找到"Custom domain"
2. 输入您购买的域名（如`yangshuqianlawyer.com`）
3. 点击"Save"
4. 在域名注册商处添加DNS记录：
   - 类型：CNAME
   - 主机：www
   - 值：`您的GitHub用户名.github.io`
   - TTL：3600

### 第七步：等待DNS生效
DNS更改通常需要：
- 立即生效：部分地区
- 完全生效：24-48小时

## SEO优化（已内置）

### 页面优化
1. **主页** (`index.html`)：
   - 标题：杨淑倩律师 | 上海辉岩律师事务所
   - 描述：上海专业民商事诉讼律师，专注合同纠纷、公司法律事务、金融借款纠纷
   - 关键词：上海律师, 民商事诉讼, 合同纠纷, 公司法律事务

2. **成功案例** (`cases.html`)：
   - 标题：成功案例 - 杨淑倩律师
   - 描述：杨律师代理的民商事诉讼成功案例展示
   - 关键词：成功案例, 买卖合同纠纷, 房屋买卖纠纷, 不正当竞争

### 技术优化
1. **网站地图**：已准备`sitemap.xml`
2. **robots.txt**：已准备
3. **响应式设计**：支持手机和电脑
4. **页面速度**：已优化图片和代码

## 提交搜索引擎

### 百度站长平台
1. 访问：https://ziyuan.baidu.com
2. 注册并验证网站所有权
3. 提交网站地图：`https://您的域名/sitemap.xml`

### Google Search Console
1. 访问：https://search.google.com/search-console
2. 添加网站并验证
3. 提交网站地图

## 后续维护

### 内容更新
1. **添加新案例**：编辑`cases.html`文件
2. **更新个人信息**：编辑`index.html`文件
3. **发布新文章**：创建新的HTML页面

### 网站监控
1. **访问统计**：使用Google Analytics或百度统计
2. **表单通知**：咨询表单需要后端支持（可选升级）
3. **定期备份**：GitHub自动保存所有版本

## 技术支持
如有任何技术问题，请联系：
- **苗苗律助**：您的专属技术助理
- **支持范围**：网站部署、SEO优化、技术问题解决

## 成本明细
| 项目 | 费用 | 频率 | 备注 |
|------|------|------|------|
| 域名注册 | 50-150元 | 每年 | 必需 |
| 网站托管 | 0元 | 永久免费 | GitHub Pages |
| SEO优化 | 0元 | 一次性 | 已包含 |
| 技术支持 | 0元 | 长期 | 苗苗律助提供 |

**总成本：50-150元/年**

## 紧急联系方式
如遇部署问题，请通过OpenClaw联系苗苗律助，我会实时协助您完成每一步。