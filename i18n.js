// 多语言支持配置
const translations = {
    zh: {
        meta: {
            title: "张开发 - Python Developer | 作品集",
            description: "Python开发者作品集 - 专注消息中间件、实时数据处理、高可用架构设计",
            keywords: "Python开发, 消息中间件, 实时数据处理, 高可用架构, MongoDB, ElasticSearch, Rust, 分布式系统"
        },
        nav: {
            home: "首页",
            about: "关于我",
            projects: "我的项目",
            contact: "联系我"
        },
        hero: {
            title: "张开发",
            subtitle: "Python开发者 | 专注消息中间件与实时数据处理",
            cta: "查看我的作品"
        },
        about: {
            title: "关于我",
            description1: "我是一名经验丰富的Python开发者，专注于构建高性能、高可用的分布式系统。拥有5年以上的后端开发经验，擅长消息中间件、实时数据处理和大规模系统架构设计。",
            description2: "我热爱技术创新，追求代码质量，致力于用技术解决复杂业务问题。在多个大型项目中担任核心开发角色，积累了丰富的实战经验。",
            experience: "专业经历"
        },
        experience: {
            openai: {
                title: "OpenAI - 软件工程师",
                desc: "负责GPT模型的后端服务开发，优化API性能，处理大规模并发请求"
            },
            google: {
                title: "Google - 软件工程师",
                desc: "参与广告系统的实时数据处理平台开发，提升数据处理效率40%"
            },
            stanford: {
                title: "斯坦福大学 - 计算机科学硕士",
                desc: "专攻分布式系统与机器学习，GPA 3.9/4.0"
            },
            tsinghua: {
                title: "清华大学 - 计算机科学学士",
                desc: "计算机科学与技术专业，获得优秀毕业生称号"
            }
        },
        achievements: {
            title: "个人成就",
            tsinghua: "清华大学优秀毕业生",
            mvp: "Google年度MVP开发者",
            huawei: "华为技术专家认证"
        },
        skills: {
            title: "技能",
            python: "Python",
            mongodb: "MongoDB",
            nextjs: "Next.js",
            elasticsearch: "ElasticSearch",
            middleware: "消息中间件",
            data_processing: "实时数据处理",
            rust: "Rust",
            architecture: "高可用架构"
        },
        projects: {
            title: "我的项目",
            project1: {
                title: "分布式消息中间件系统",
                desc: "基于Python开发的高性能消息队列系统，支持百万级消息并发处理，具备消息持久化、重试机制、死信队列等特性。已在生产环境稳定运行2年。"
            },
            project2: {
                title: "实时数据流处理平台",
                desc: "使用Python和Kafka构建的实时数据处理平台，支持每秒处理10万条数据，提供数据清洗、转换、聚合等功能。"
            },
            project3: {
                title: "MongoDB数据管理工具",
                desc: "可视化的MongoDB管理工具，支持数据导入导出、性能监控、索引优化等功能，提升数据库管理效率。"
            },
            demo: "查看演示",
            source: "源代码"
        },
        contact: {
            title: "联系我",
            info: "联系方式",
            email: "邮箱",
            phone: "电话",
            wechat: "微信",
            github: "GitHub",
            linkedin: "LinkedIn",
            zhihu: "知乎",
            juejin: "掘金",
            form: {
                name: "姓名",
                email: "邮箱",
                message: "留言",
                submit: "发送消息"
            }
        },
        footer: {
            text: "? 2024 张开发 - Python Developer. 保留所有权利 | 用心编码，创造价值"
        }
    },
    en: {
        meta: {
            title: "Zhang Kaifa - Python Developer | Portfolio",
            description: "Python Developer Portfolio - Focused on Message Middleware, Real-time Data Processing, High Availability Architecture",
            keywords: "Python Development, Message Middleware, Real-time Data Processing, High Availability Architecture, MongoDB, ElasticSearch, Rust, Distributed Systems"
        },
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            title: "Zhang Kaifa",
            subtitle: "Python Developer | Focused on Message Middleware & Real-time Data Processing",
            cta: "View My Work"
        },
        about: {
            title: "About Me",
            description1: "I am an experienced Python developer focused on building high-performance, highly available distributed systems. With 5+ years of backend development experience, I specialize in message middleware, real-time data processing, and large-scale system architecture design.",
            description2: "I am passionate about technological innovation, pursue code quality, and am committed to solving complex business problems with technology. I have served as a core developer in multiple large projects and accumulated rich practical experience.",
            experience: "Professional Experience"
        },
        experience: {
            openai: {
                title: "OpenAI - Software Engineer",
                desc: "Responsible for backend service development of GPT models, optimizing API performance, handling large-scale concurrent requests"
            },
            google: {
                title: "Google - Software Engineer",
                desc: "Participated in the development of real-time data processing platform for advertising systems, improving data processing efficiency by 40%"
            },
            stanford: {
                title: "Stanford University - Master of Computer Science",
                desc: "Specialized in Distributed Systems and Machine Learning, GPA 3.9/4.0"
            },
            tsinghua: {
                title: "Tsinghua University - Bachelor of Computer Science",
                desc: "Computer Science and Technology, awarded Outstanding Graduate"
            }
        },
        achievements: {
            title: "Personal Achievements",
            tsinghua: "Tsinghua University Outstanding Graduate",
            mvp: "Google Annual MVP Developer",
            huawei: "Huawei Technical Expert Certification"
        },
        skills: {
            title: "Skills",
            python: "Python",
            mongodb: "MongoDB",
            nextjs: "Next.js",
            elasticsearch: "ElasticSearch",
            middleware: "Message Middleware",
            data_processing: "Real-time Data Processing",
            rust: "Rust",
            architecture: "High Availability Architecture"
        },
        projects: {
            title: "My Projects",
            project1: {
                title: "Distributed Message Middleware System",
                desc: "High-performance message queue system based on Python, supporting million-level message concurrent processing, with message persistence, retry mechanism, dead letter queue and other features. Has been stably running in production for 2 years."
            },
            project2: {
                title: "Real-time Data Stream Processing Platform",
                desc: "Real-time data processing platform built with Python and Kafka, supporting processing 100,000 data per second, providing data cleaning, transformation, aggregation and other functions."
            },
            project3: {
                title: "MongoDB Data Management Tool",
                desc: "Visual MongoDB management tool, supporting data import and export, performance monitoring, index optimization and other functions, improving database management efficiency."
            },
            demo: "View Demo",
            source: "Source Code"
        },
        contact: {
            title: "Contact Me",
            info: "Contact Information",
            email: "Email",
            phone: "Phone",
            wechat: "WeChat",
            github: "GitHub",
            linkedin: "LinkedIn",
            zhihu: "Zhihu",
            juejin: "Juejin",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                submit: "Send Message"
            }
        },
        footer: {
            text: "© 2024 Zhang Kaifa - Python Developer. All rights reserved | Code with heart, create value"
        }
    }
};

// 当前语言设置
let currentLanguage = 'zh';

// 切换语言函数
function switchLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        applyTranslations();
        localStorage.setItem('preferredLanguage', lang);
    }
}

// 应用翻译
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(key);

        if (translation) {
            // 特殊处理不同类型的元素
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'META') {
                element.content = translation;
            } else if (element.tagName === 'TITLE') {
                document.title = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // 更新语言切换按钮的激活状态
    updateLanguageButtons();
}

// 获取嵌套翻译值
function getNestedTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];

    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            return null;
        }
    }

    return value;
}

// 更新语言切换按钮状态
function updateLanguageButtons() {
    const buttons = document.querySelectorAll('.language-btn');
    buttons.forEach(button => {
        if (button.getAttribute('data-lang') === currentLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// 初始化语言设置
function initLanguage() {
    // 从本地存储获取用户偏好语言
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
    } else {
        // 根据浏览器语言设置默认语言
        const browserLang = navigator.language.substring(0, 2);
        if (translations[browserLang]) {
            currentLanguage = browserLang;
        }
    }

    applyTranslations();
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}

// 暴露全局函数供HTML调用
window.switchLanguage = switchLanguage;