# GitHub Actions CI/CD Exercises - Complete Learning Path

## 🎯 Tổng quan

Đây là một hệ thống bài tập hoàn chỉnh để học GitHub Actions CI/CD từ cơ bản đến nâng cao. Mỗi bài tập được thiết kế để xây dựng kiến thức tích lũy, từ các concepts đơn giản đến enterprise-level implementations.

## 📚 Cấu trúc bài học

### 🟢 **Cơ bản (Exercises 1-4)**
Học các concepts fundamentals và setup cơ bản của GitHub Actions.

### 🟡 **Trung cấp (Exercises 5-7)**  
Nắm vững advanced features và optimization techniques.

### 🔴 **Nâng cao (Exercises 8-10)**
Xây dựng production-ready pipelines với enterprise practices.

---

## 📋 Danh sách bài tập chi tiết

### 🟢 **Exercise 01: Hello World**
**📁 Folder:** `exercise-01-hello-world/`  
**⏱️ Thời gian:** 15-60 phút  
**📖 Nội dung:** 
- **Basic:** Workflow đầu tiên, cú pháp YAML cơ bản, echo commands
- **Advanced:** Multiple triggers, context variables, job dependencies, outputs

**🎓 Học được:**
- GitHub Actions workflow structure
- Events và triggers  
- Jobs, steps, runners
- Context variables (`github`, `env`, `runner`)
- Job outputs và dependencies

---

### 🟢 **Exercise 02: Basic Testing**  
**📁 Folder:** `exercise-02-basic-testing/`  
**⏱️ Thời gian:** 60-180 phút  
**📖 Nội dung:**
- **Basic:** Node.js app với Jest testing, setup environment
- **Advanced:** Matrix builds, caching, coverage reporting, multiple test types

**🎓 Học được:**
- Testing automation trong CI/CD
- Node.js environment setup
- Caching strategies
- Matrix builds
- Artifacts và coverage reporting

---

### 🟢 **Exercise 03: Build & Deploy**
**📁 Folder:** `exercise-03-build-deploy/`  
**⏱️ Thời gian:** 90-360 phút  
**📖 Nội dung:**
- **Basic:** Static website deployment lên GitHub Pages
- **Advanced:** React/Vite với multi-environment, versioning, optimizations

**🎓 Học được:**
- Static site deployment
- GitHub Pages integration
- Multi-environment deployments
- Build optimization
- Automated versioning và releases

---

### 🟢 **Exercise 04: Environment Variables**
**📁 Folder:** `exercise-04-environment-variables/`  
**⏱️ Thời gian:** 90-480 phút  
**📖 Nội dung:**
- **Basic:** Node.js app với secrets và variables
- **Advanced:** Multi-env setup, encrypted secrets, external integrations

**🎓 Học được:**
- Repository secrets vs variables
- Environment-specific configurations
- Security best practices
- External secret management (Vault, AWS Secrets Manager)
- Secret rotation strategies

---

### 🟡 **Exercise 05: Matrix Strategy**
**📁 Folder:** `exercise-05-matrix-strategy/`  
**⏱️ Thời gian:** 90-360 phút  
**📖 Nội dung:**
- **Basic:** Multi-OS, multi-version testing với include/exclude rules
- **Advanced:** Dynamic matrix generation, conditional execution, result aggregation

**🎓 Học được:**
- Matrix build strategies
- Cross-platform testing
- Performance optimization với parallelism
- Dynamic matrix từ configuration
- Matrix result handling

---

### 🟡 **Exercise 06: Secrets Management**
**📁 Folder:** `exercise-06-secrets-management/`  
**⏱️ Thời gian:** 120-480 phút  
**📖 Nội dung:**
- **Basic:** Repository secrets, environment secrets, security practices
- **Advanced:** External secret stores, rotation, encryption, zero-trust

**🎓 Học được:**
- Enterprise secret management
- Automated secret rotation
- Compliance và governance
- Zero-trust security models
- Secret scanning và validation

---

### 🟡 **Exercise 07: Conditional Execution**
**📁 Folder:** `exercise-07-conditional-execution/`  
**⏱️ Thời gian:** 75-240 phút  
**📖 Nội dung:**
- **Basic:** Branch-based conditions, path filtering, job dependencies
- **Advanced:** Complex conditional logic, dynamic workflows, feature flags

**🎓 Học được:**
- Conditional workflow execution
- Path-based filtering
- Complex boolean logic
- Performance optimization với conditional execution
- Dynamic workflow generation

---

### 🔴 **Exercise 08: Custom Actions**
**📁 Folder:** `exercise-08-custom-actions/`  
**⏱️ Thời gian:** 180-480 phút  
**📖 Nội dung:**
- **Basic:** JavaScript, Docker, và Composite actions
- **Advanced:** Marketplace publication, complex logic, TypeScript actions

**🎓 Học được:**
- Custom action development
- JavaScript vs Docker vs Composite actions
- Action packaging và distribution
- GitHub Actions Toolkit
- Marketplace best practices

---

### 🔴 **Exercise 09: Reusable Workflows**
**📁 Folder:** `exercise-09-reusable-workflows/`  
**⏱️ Thời gian:** 180-360 phút  
**📖 Nội dung:**
- **Basic:** Organization-wide workflow templates, input/output parameters
- **Advanced:** Complex workflow orchestration, enterprise governance

**🎓 Học được:**
- Workflow reusability patterns
- Organization-wide standards
- Input/output parameter design
- Versioning strategies
- Enterprise governance

---

### 🔴 **Exercise 10: Advanced Pipeline**
**📁 Folder:** `exercise-10-advanced-pipeline/`  
**⏱️ Thời gian:** 480-720 phút  
**📖 Nội dung:**
- **Advanced Only:** Enterprise-grade pipeline với microservices, blue-green deployment, comprehensive security, monitoring

**🎓 Học được:**
- Microservices CI/CD architecture
- Advanced deployment strategies (blue-green, canary)
- Comprehensive security pipeline
- Performance testing automation
- Production monitoring integration
- Disaster recovery mechanisms

---

## 🚀 Lộ trình học tập được đề xuất

### 📅 **Week 1: Foundations (Exercises 1-2)**
- Làm quen với GitHub Actions basics
- Setup môi trường development
- Học cú pháp YAML và workflow structure
- Implement basic testing automation

### 📅 **Week 2: Building & Deployment (Exercises 3-4)**  
- Master build và deployment processes
- Learn environment management
- Security best practices cho secrets
- Multi-environment deployment strategies

### 📅 **Week 3: Advanced Features (Exercises 5-7)**
- Advanced workflow patterns
- Performance optimization techniques  
- Complex conditional logic
- Cross-platform considerations

### 📅 **Week 4: Enterprise Practices (Exercises 8-10)**
- Custom action development
- Organization-wide standards
- Production-ready pipeline implementation
- Enterprise security và compliance

---

## 🛠️ Prerequisites

### **Technical Requirements:**
- ✅ GitHub account với repository access
- ✅ Basic Git knowledge
- ✅ YAML syntax familiarity
- ✅ Command line experience
- ✅ One programming language (Node.js, Python, hoặc Java)

### **Optional but Helpful:**
- 🔧 Docker basics
- 🔧 Cloud platform experience (AWS, Azure, GCP)  
- 🔧 Kubernetes fundamentals
- 🔧 Infrastructure as Code (Terraform)

---

## 📊 Skill Progression

```
Beginner → Intermediate → Advanced → Expert
   ↓           ↓           ↓         ↓
Ex 1-2      Ex 3-4      Ex 5-7    Ex 8-10
15hrs       20hrs       25hrs     40hrs
```

**Total Learning Time:** ~100 hours (có thể chia thành 2-3 tháng)

---

## 🏆 Learning Outcomes

Sau khi hoàn thành tất cả bài tập, bạn sẽ có khả năng:

### ✅ **Technical Skills**
- Thiết kế và implement comprehensive CI/CD pipelines
- Tối ưu workflow performance và security
- Tạo reusable components cho organization
- Debug và troubleshoot complex pipeline issues
- Integrate với external services và tools

### ✅ **Professional Skills**  
- Apply DevOps best practices trong production
- Implement enterprise-grade security standards
- Design scalable automation solutions
- Lead CI/CD initiatives trong teams
- Mentor others trong GitHub Actions development

---

## 📝 Completion Strategy

### **For Each Exercise:**
1. 📖 **Read requirements** thoroughly
2. 🏗️ **Plan implementation** approach  
3. 💻 **Code incrementally** với testing
4. 🧪 **Test thoroughly** với edge cases
5. 📚 **Review solutions** và compare approaches
6. 📋 **Document learnings** và challenges

### **Progress Tracking:**
- ✅ Complete basic version first
- ✅ Attempt advanced version
- ✅ Compare with provided solutions
- ✅ Experiment với variations
- ✅ Apply learnings to real projects

---

## 🆘 Getting Help

### **Resources:**
- 📖 [GitHub Actions Documentation](https://docs.github.com/actions)
- 💬 [GitHub Community Discussions](https://github.community/)
- 🎓 [GitHub Learning Lab](https://lab.github.com/)
- 📺 [GitHub Actions YouTube Channel](https://youtube.com/github)

### **Support Channels:**
- 🐛 **Issues:** Report problems trong này repository
- 💡 **Discussions:** Share solutions và ask questions
- 👥 **Community:** Join GitHub Actions communities

---

## 📈 Next Steps After Completion

### **Advanced Topics to Explore:**
- 🔐 Advanced security practices (OIDC, workload identity)
- ☁️ Multi-cloud deployment strategies  
- 📊 Advanced monitoring và observability
- 🔄 GitOps workflows với ArgoCD/Flux
- 🤖 AI/ML pipeline automation
- 🏢 Enterprise governance và compliance

### **Career Paths:**
- 🚀 **DevOps Engineer**: Platform engineering roles
- ☁️ **Cloud Architect**: Multi-cloud solutions  
- 🔒 **DevSecOps**: Security-focused automation
- 👨‍💼 **Technical Lead**: Team leadership với CI/CD expertise

---

## 🎉 Conclusion

Chúc bạn học tập hiệu quả với GitHub Actions! Hệ thống bài tập này được thiết kế để đưa bạn từ beginner đến expert level trong CI/CD automation. 

**Remember:** Practice makes perfect - hãy experiment với variations và áp dụng vào real projects để consolidate kiến thức của mình.

**Happy Learning! 🚀**