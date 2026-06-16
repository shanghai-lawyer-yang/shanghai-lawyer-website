// 网站主JavaScript文件

document.addEventListener('DOMContentLoaded', function() {
    // 初始化函数
    init();
});

function init() {
    // 初始化所有组件
    initMobileMenu();
    initSmoothScroll();
    initFormValidation();
    initAnimations();
    initContactForm();
}

// 移动端菜单切换
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // 点击菜单项后关闭菜单
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

// 平滑滚动
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 表单验证
function initFormValidation() {
    const form = document.getElementById('consultationForm');
    if (!form) return;
    
    // 表单提交处理
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    // 实时验证
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearError(this);
        });
    });
}

// 验证单个字段
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    const formGroup = field.closest('.form-group');
    
    // 清除之前的错误
    clearError(field);
    
    // 必填字段验证
    if (field.required && !value) {
        showError(field, '此字段为必填项');
        return false;
    }
    
    // 邮箱验证
    if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(field, '请输入有效的邮箱地址');
            return false;
        }
    }
    
    // 电话验证
    if (fieldName === 'phone' && value) {
        const phoneRegex = /^1[3-9]\d{9}$/;
        if (!phoneRegex.test(value)) {
            showError(field, '请输入有效的手机号码');
            return false;
        }
    }
    
    return true;
}

// 显示错误信息
function showError(field, message) {
    const formGroup = field.closest('.form-group');
    formGroup.classList.add('error');
    
    let errorElement = formGroup.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
}

// 清除错误信息
function clearError(field) {
    const formGroup = field.closest('.form-group');
    formGroup.classList.remove('error');
    
    const errorElement = formGroup.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = '';
    }
}

// 验证整个表单
function validateForm() {
    const form = document.getElementById('consultationForm');
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// 提交表单
function submitForm() {
    const form = document.getElementById('consultationForm');
    const submitButton = form.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    
    // 显示加载状态
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="loading"></span> 提交中...';
    
    // 模拟表单提交
    setTimeout(() => {
        // 在实际应用中，这里应该是真实的AJAX请求
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        console.log('表单数据:', data);
        
        // 显示成功消息
        showSuccessMessage(form, '咨询提交成功！我会尽快与您联系。');
        
        // 重置表单
        form.reset();
        
        // 恢复按钮状态
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }, 1500);
}

// 显示成功消息
function showSuccessMessage(form, message) {
    // 移除之前的成功消息
    const oldMessage = form.querySelector('.success-message');
    if (oldMessage) {
        oldMessage.remove();
    }
    
    // 创建新的成功消息
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message fade-in';
    successMessage.textContent = message;
    
    // 插入到表单顶部
    form.insertBefore(successMessage, form.firstChild);
    
    // 3秒后自动移除
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

// 初始化动画
function initAnimations() {
    // 滚动时显示元素
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.service-card, .contact-item, .case-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
}

// 联系表单处理
function initContactForm() {
    // 这里可以添加联系表单的特定逻辑
}

// 服务案例切换
function initCaseTabs() {
    const caseTabs = document.querySelectorAll('.case-tab');
    const caseContents = document.querySelectorAll('.case-content');
    
    if (caseTabs.length === 0) return;
    
    caseTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const caseType = this.getAttribute('data-case');
            
            // 更新激活的标签
            caseTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 显示对应的内容
            caseContents.forEach(content => {
                if (content.getAttribute('data-case') === caseType) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
}

// 添加移动端菜单按钮
function addMobileMenuButton() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    if (!navbar || !navLinks) return;
    
    if (!document.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        
        navbar.appendChild(menuToggle);
        
        initMobileMenu();
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        addMobileMenuButton();
    }
});

window.addEventListener('load', function() {
    if (window.innerWidth <= 768) {
        addMobileMenuButton();
    }
    
    initCaseTabs();
});

// 添加键盘导航支持
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        }
    }
    
    if (e.key === 'Tab') {
        const focusedElement = document.activeElement;
        
        if (focusedElement.closest('.nav-links')) {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks && !navLinks.classList.contains('active')) {
                navLinks.classList.add('active');
            }
        }
    }
});

// 添加打印样式
function addPrintStyles() {
    const printStyle = document.createElement('style');
    printStyle.textContent = `
        @media print {
            header, footer, .cta-button, .contact-form, .menu-toggle {
                display: none !important;
            }
            
            body {
                font-size: 12pt;
                line-height: 1.5;
            }
            
            .container {
                max-width: 100%;
                padding: 0;
            }
            
            .hero {
                background: none !important;
                color: black !important;
                padding: 20px 0 !important;
                margin-top: 0 !important;
            }
            
            .services, .about, .contact, .consultation {
                padding: 20px 0 !important;
                page-break-inside: avoid;
            }
            
            a {
                color: black !important;
                text-decoration: none !important;
            }
            
            .service-card, .contact-item {
                box-shadow: none !important;
                border: 1px solid #ddd !important;
            }
        }
    `;
    
    document.head.appendChild(printStyle);
}

addPrintStyles();

// 添加页面性能监控
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;
                
                console.log('页面性能数据:');
                console.log('页面加载时间:', pageLoadTime + 'ms');
                console.log('DOM准备时间:', domReadyTime + 'ms');
            }, 0);
        });
    }
}

monitorPerformance();