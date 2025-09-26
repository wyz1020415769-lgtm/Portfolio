// DOM 操作示例和交互功能

// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM 已加载完成');

    // 初始化所有功能
    initMobileMenu();
    initScrollEffects();
    initFormValidation();
    initProjectInteractions();
    initAvatarEffects();
});

// 移动端菜单功能
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            console.log('移动端菜单切换');
        });

        // 点击导航链接时关闭菜单
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// 滚动效果
function initScrollEffects() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // 滚动到指定部分
    window.scrollToSection = function (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            console.log(`滚动到 ${sectionId} 部分`);
        }
    };

    // 滚动时添加导航高亮
    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 添加滚动时的动画效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                console.log(`元素进入视图: ${entry.target.className}`);
            }
        });
    }, observerOptions);

    // 观察所有项目卡片
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// 表单验证和处理
function initFormValidation() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        // 实时验证
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function () {
                validateField(this);
            });

            input.addEventListener('input', function () {
                clearError(this);
            });
        });
    }
}

// 处理表单提交
window.handleSubmit = function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // 验证所有字段
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    if (isValid) {
        // 模拟提交过程
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;

        submitButton.textContent = '发送中...';
        submitButton.disabled = true;

        console.log('表单数据:', data);

        // 模拟异步提交
        setTimeout(() => {
            submitButton.textContent = '发送成功!';
            submitButton.style.background = '#27ae60';

            // 重置表单
            setTimeout(() => {
                form.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.background = '#3498db';
            }, 2000);

            // 显示成功消息
            showNotification('消息发送成功！我会尽快回复您。', 'success');
        }, 1500);
    }
};

// 验证单个字段
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    switch (fieldName) {
        case 'name':
            if (value.length < 2) {
                errorMessage = '姓名至少需要2个字符';
                isValid = false;
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = '请输入有效的邮箱地址';
                isValid = false;
            }
            break;
        case 'message':
            if (value.length < 10) {
                errorMessage = '留言至少需要10个字符';
                isValid = false;
            }
            break;
    }

    if (!isValid) {
        showError(field, errorMessage);
    }

    return isValid;
}

// 显示错误信息
function showError(field, message) {
    clearError(field);

    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.9rem';
    errorElement.style.marginTop = '0.25rem';

    field.parentNode.appendChild(errorElement);
    field.style.borderColor = '#e74c3c';
}

// 清除错误信息
function clearError(field) {
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
    field.style.borderColor = '#ddd';
}

// 项目交互功能
function initProjectInteractions() {
    const projectCards = document.querySelectorAll('.project-card');
    let currentTooltip = null;

    // 源代码数据
    const sourceCodeData = {
        'task-manager': {
            title: '智能任务管理系统 - 核心代码',
            code: `// 任务管理器核心组件
const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  
  const addTask = (task) => {
    setTasks([...tasks, {
      id: Date.now(),
      ...task,
      completed: false,
      createdAt: new Date()
    }]);
  };
  
  return (
    <div className="task-manager">
      <TaskForm onAdd={addTask} />
      <TaskFilter filter={filter} onFilterChange={setFilter} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};`
        },
        'fitness-tracker': {
            title: '移动健身追踪器 - AI算法',
            code: `// AI运动推荐算法
class FitnessAI {
  constructor(userData) {
    this.userProfile = userData;
    this.exerciseHistory = [];
  }
  
  generateRecommendation() {
    const fitnessLevel = this.calculateFitnessLevel();
    const goals = this.userProfile.fitnessGoals;
    
    return {
      exercises: this.selectExercises(fitnessLevel, goals),
      duration: this.optimizeDuration(),
      intensity: this.calculateIntensity(),
      nutrition: this.generateMealPlan()
    };
  }
  
  calculateFitnessLevel() {
    // 基于历史数据计算健身水平
    return Math.min(10, this.exerciseHistory.length * 0.5);
  }
}`
        },
        'data-analytics': {
            title: '数据可视化分析平台 - 数据处理',
            code: `// 数据分析引擎
class DataAnalyticsEngine {
  constructor(config) {
    this.config = config;
    this.dataSource = new DataSource(config.database);
    this.visualizer = new DataVisualizer();
  }
  
  async processLargeDataset(dataset) {
    const chunks = this.chunkData(dataset, 1000);
    const results = [];
    
    for (const chunk of chunks) {
      const processed = await this.processChunk(chunk);
      results.push(processed);
    }
    
    return this.aggregateResults(results);
  }
  
  generateRealTimeDashboard(metrics) {
    return {
      charts: this.createInteractiveCharts(metrics),
      kpis: this.calculateKPIs(metrics),
      predictions: this.runPredictiveAnalysis(metrics)
    };
  }
}`
        }
    };

    // 创建悬浮提示框
    function createTooltip(content, title) {
        const tooltip = document.createElement('div');
        tooltip.className = 'source-code-tooltip';
        tooltip.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 0.5rem; color: #3498db;">${title}</div>
            <pre style="margin: 0; font-family: 'Courier New', monospace; font-size: 0.75rem; white-space: pre-wrap; background: #1e1e1e; padding: 0.5rem; border-radius: 4px; overflow-x: auto;"><code>${content}</code></pre>
        `;
        document.body.appendChild(tooltip);
        return tooltip;
    }

    // 显示源代码悬浮框
    function showSourceCodeTooltip(element, sourceKey) {
        const sourceData = sourceCodeData[sourceKey];
        if (!sourceData) return;

        // 移除现有的提示框
        if (currentTooltip) {
            currentTooltip.remove();
        }

        // 创建新的提示框
        currentTooltip = createTooltip(sourceData.code, sourceData.title);

        // 计算位置
        const rect = element.getBoundingClientRect();
        const tooltipRect = currentTooltip.getBoundingClientRect();

        let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        let top = rect.top - tooltipRect.height - 15;

        // 边界检查
        if (left < 10) left = 10;
        if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
        }
        if (top < 10) {
            top = rect.bottom + 15;
            // 调整箭头方向
            currentTooltip.style.setProperty('--arrow-top', '-8px');
            currentTooltip.style.setProperty('--arrow-bottom', 'auto');
            currentTooltip.style.setProperty('--arrow-border', '8px solid transparent; border-bottom: 8px solid #2c3e50;');
        }

        currentTooltip.style.left = left + 'px';
        currentTooltip.style.top = top + 'px';

        // 显示动画
        setTimeout(() => {
            currentTooltip.classList.add('show');
        }, 10);
    }

    // 隐藏源代码悬浮框
    function hideSourceCodeTooltip() {
        if (currentTooltip) {
            currentTooltip.classList.remove('show');
            setTimeout(() => {
                if (currentTooltip) {
                    currentTooltip.remove();
                    currentTooltip = null;
                }
            }, 300);
        }
    }

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            console.log('鼠标进入项目卡片');
        });

        card.addEventListener('mouseleave', function () {
            console.log('鼠标离开项目卡片');
        });

        // 项目链接点击事件
        const projectLinks = card.querySelectorAll('.project-link');
        projectLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const projectTitle = card.querySelector('h3').textContent;
                const href = this.getAttribute('href');

                if (href === '#source-code') {
                    // 源代码按钮点击事件
                    const sourceKey = this.getAttribute('data-source');
                    if (sourceKey) {
                        showSourceCodeTooltip(this, sourceKey);
                    }
                } else if (href.startsWith('demo/')) {
                    // 演示链接点击事件
                    console.log(`打开演示: ${projectTitle}`);
                    showNotification(`正在打开 ${projectTitle} 的演示页面...`, 'info');
                    // 允许默认行为（打开新页面）
                    window.open(href, '_blank');
                } else {
                    console.log(`点击了项目链接: ${projectTitle} - ${this.textContent}`);
                    showNotification(`正在打开 ${projectTitle} 的${this.textContent}...`, 'info');
                }
            });

            // 鼠标离开源代码按钮时隐藏提示框
            if (link.getAttribute('href') === '#source-code') {
                link.addEventListener('mouseleave', function () {
                    setTimeout(() => {
                        hideSourceCodeTooltip();
                    }, 200);
                });
            }
        });
    });

    // 点击其他地方隐藏提示框
    document.addEventListener('click', function (e) {
        if (currentTooltip && !e.target.closest('.source-code-tooltip') && !e.target.closest('[href="#source-code"]')) {
            hideSourceCodeTooltip();
        }
    });
}

// 显示通知消息
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // 添加样式类
    notification.className = `notification ${type}`;
    notification.style.cssText = 'transform: translateX(100%);';

    document.body.appendChild(notification);

    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// 技能标签动画
function animateSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// 页面加载完成后执行技能标签动画
window.addEventListener('load', function () {
    setTimeout(animateSkillTags, 500);
});

// 添加一些实用的工具函数
const Utils = {
    // 防抖函数
    debounce: function (func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // 节流函数
    throttle: function (func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // 平滑滚动到顶部
    scrollToTop: function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};

// 头像动态效果
function initAvatarEffects() {
    const avatar = document.querySelector('.profile-img');
    if (!avatar) return;

    // 鼠标跟随效果
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    // 获取头像位置
    const avatarRect = avatar.getBoundingClientRect();
    const avatarCenterX = avatarRect.left + avatarRect.width / 2;
    const avatarCenterY = avatarRect.top + avatarRect.height / 2;

    // 鼠标移动事件
    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (isHovering) {
            // 计算鼠标相对于头像中心的位置
            const deltaX = (mouseX - avatarCenterX) / 30;
            const deltaY = (mouseY - avatarCenterY) / 30;

            // 限制旋转角度
            const rotateX = Math.max(-15, Math.min(15, -deltaY));
            const rotateY = Math.max(-15, Math.min(15, deltaX));

            avatar.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
        }
    });

    // 鼠标进入头像
    avatar.addEventListener('mouseenter', function () {
        isHovering = true;
        avatar.style.transition = 'none';

        // 创建粒子效果
        createAvatarParticles(this);
    });

    // 鼠标离开头像
    avatar.addEventListener('mouseleave', function () {
        isHovering = false;
        avatar.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        avatar.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });

    // 点击头像效果
    avatar.addEventListener('click', function () {
        // 创建波纹效果
        createRippleEffect(this);

        // 临时添加震动效果
        this.style.animation = 'none';
        this.style.transform = 'scale(0.9)';

        setTimeout(() => {
            this.style.transform = 'scale(1)';
            this.style.animation = 'avatarFadeIn 1.2s ease-out, breathe 4s ease-in-out infinite 1.2s';
        }, 150);
    });

    // 视差滚动效果
    window.addEventListener('scroll', Utils.throttle(function () {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.1;

        if (!isHovering) {
            avatar.style.transform = `translateY(${parallax}px)`;
        }
    }, 16));

    console.log('头像动态效果已初始化');
}

// 创建头像粒子效果
function createAvatarParticles(avatar) {
    // 使用CSS变量获取主题颜色
    const rootStyles = getComputedStyle(document.documentElement);
    const linkColor = rootStyles.getPropertyValue('--link-color').trim();
    const buttonBg = rootStyles.getPropertyValue('--button-bg').trim();
    
    const colors = [linkColor, buttonBg, '#f39c12', '#e74c3c', '#9b59b6'];
    const particleCount = 12;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'avatar-particle';

        // 随机颜色
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            box-shadow: 0 0 6px ${color};
        `;

        // 设置初始位置（头像边缘）
        const angle = (i / particleCount) * Math.PI * 2;
        const radius = 150; // 头像半径
        const startX = avatar.offsetWidth / 2 + Math.cos(angle) * radius;
        const startY = avatar.offsetHeight / 2 + Math.sin(angle) * radius;

        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';

        avatar.parentElement.appendChild(particle);

        // 动画
        const animationDuration = 1000 + Math.random() * 500;
        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * 100}px, ${Math.sin(angle) * 100}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: animationDuration,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    }
}

// 创建点击波纹效果
function createRippleEffect(avatar) {
    const ripple = document.createElement('div');
    ripple.className = 'avatar-ripple';
    
    // 使用CSS变量获取主题颜色
    const rootStyles = getComputedStyle(document.documentElement);
    const linkColor = rootStyles.getPropertyValue('--link-color').trim();
    
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: ${linkColor}30;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 1;
    `;

    avatar.parentElement.appendChild(ripple);

    // 波纹扩散动画
    ripple.animate([
        {
            width: '0px',
            height: '0px',
            opacity: 0.6
        },
        {
            width: '400px',
            height: '400px',
            opacity: 0
        }
    ], {
        duration: 800,
        easing: 'ease-out'
    }).onfinish = () => ripple.remove();
}

// 将工具函数添加到全局作用域
window.Utils = Utils;

// 监听页面可见性变化
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        console.log('页面隐藏');
    } else {
        console.log('页面显示');
    }
});

// 监听窗口大小变化
window.addEventListener('resize', Utils.debounce(function () {
    console.log(`窗口大小改变: ${window.innerWidth}x${window.innerHeight}`);
}, 250));

console.log('JavaScript 文件加载完成，所有功能已初始化');