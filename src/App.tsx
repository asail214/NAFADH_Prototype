import nafadhLogo from './assets/logos/logo-nafadh.png';
import nafadhLogoWhite from './assets/logos/nafadhLogoWhite.png';
import { useEffect, useMemo, useState } from 'react';

const BRAND = {
  primary: '#123b8b',
  dark: '#0f172a',
  cyan: '#10b3b7',
  light: '#f2f4f7',
  soft: '#d9e1ea',
};


const AR_TRANSLATIONS = {
  'Nafadh': 'نفاذ',
  'Unified Digital Platform': 'منصة رقمية موحّدة',
  'Home': 'الرئيسية',
  'Services': 'الخدمات',
  'Find Work': 'البحث عن فرص',
  'Hire Talent': 'استقطاب الكفاءات',
  'Training Opportunities': 'الفرص التدريبية',
  'About Nafadh': 'عن نفاذ',
  'Contact': 'تواصل معنا',
  'Log in': 'تسجيل الدخول',
  'Join': 'إنشاء حساب',
  'English': 'الإنجليزية',
  'Unified digital platform for work, tenders, talent, and training': 'منصة رقمية موحّدة للعمل والمناقصات والكفاءات والتدريب',
  'Nafadh connects freelancers, job seekers, companies, and individuals in one clear experience.': 'تربط منصة نفاذ المستقلين والباحثين عن عمل والشركات والأفراد ضمن تجربة رقمية واضحة وموحّدة.',
  'A smarter gateway where each user can quickly find the right journey: find work, hire talent, explore training, or access tenders.': 'بوابة ذكية تساعد كل مستخدم على الوصول سريعًا إلى المسار المناسب: البحث عن فرص، استقطاب الكفاءات، استكشاف التدريب، أو الوصول إلى المناقصات.',
  'Built for': 'صُممت من أجل',
  'Freelancers': 'المستقلين',
  'Job Seekers': 'الباحثين عن عمل',
  'Companies': 'الشركات',
  'Individuals': 'الأفراد',
  'Tenders': 'المناقصات',
  'Smart Entry': 'دخول ذكي',
  'Choose your path': 'اختر مسارك',
  'Select the journey that matches your goal.': 'اختر المسار الذي يتناسب مع هدفك.',
  'Freelancer': 'مستقل',
  'Job Seeker': 'باحث عن عمل',
  'Company': 'شركة',
  'Individual Client': 'فرد / عميل مستقل',
  'Create a profile, showcase skills, and apply to independent work opportunities.': 'أنشئ ملفك المهني، اعرض مهاراتك، وتقدم لفرص العمل المستقل.',
  'Explore future employment opportunities and build a career profile.': 'استكشف فرص التوظيف المستقبلية وابنِ ملفك المهني.',
  'Post projects, publish opportunities, request freelancers or job seekers, and manage hiring needs.': 'انشر المشاريع والفرص، واطلب مستقلين أو باحثين عن عمل، وأدر احتياجات التوظيف.',
  'For a person, trader, or shop owner who needs a freelancer or job seeker for a specific service.': 'للأفراد أو التجار أو أصحاب المحلات ممن يحتاجون إلى مستقل أو باحث عن عمل لتنفيذ خدمة محددة.',
  'Coming Soon': 'قريبًا',
  'Stay Tuned': 'ترقبوا الإطلاق',
  'Post Request': 'إرسال طلب خدمة',
  'Trusted By Leading Companies And Institutions': 'موثوقة من جهات وشركات رائدة',
  'Explore Popular Services': 'استكشف الخدمات الشائعة',
  'Explore More Services': 'استكشف المزيد من الخدمات',
  'Latest Opportunities': 'أحدث الفرص',
  'Browse All Opportunities': 'استعراض جميع الفرص',
  'Discover Job Seekers': 'استكشف الباحثين عن عمل',
  'View Job Seekers': 'عرض الباحثين عن عمل',
  'Recently joined': 'انضم مؤخرًا',
  'Top Rated Freelancers': 'أعلى المستقلين تقييمًا',
  'View Freelancers': 'عرض المستقلين',
  'Anyone can request a service through Nafadh': 'يمكن لأي شخص طلب خدمة عبر نفاذ',
  'Explore Training': 'استكشف التدريب',
  'Services / Find Work': 'الخدمات / البحث عن فرص',
  'Find Freelance Projects And Future Job Opportunities': 'ابحث عن مشاريع مستقلة وفرص وظيفية مستقبلية',
  'Search': 'بحث',
  'Audience': 'الفئة المستهدفة',
  'All Audiences': 'كل الفئات',
  'Work Type': 'نمط العمل',
  'All Types': 'كل الأنواع',
  'Category': 'التصنيف',
  'All Categories': 'كل التصنيفات',
  'Remote': 'عن بُعد',
  'Hybrid': 'هجين',
  'Onsite': 'حضوري',
  'Reset': 'إعادة ضبط',
  'Budget / Status': 'الميزانية / الحالة',
  'Posted By': 'نُشرت بواسطة',
  'Applications': 'الطلبات',
  'Deadline': 'آخر موعد',
  'View Details': 'عرض التفاصيل',
  'Apply Now': 'تقديم الآن',
  'Services / Hire Talent': 'الخدمات / استقطاب الكفاءات',
  'Browse Freelancers And Future Job Seeker Profiles': 'استعرض المستقلين وملفات الباحثين عن عمل المستقبلية',
  'Talent Type': 'نوع الملف',
  'All Talent': 'كل الملفات',
  'All Levels': 'كل المستويات',
  'Rating': 'التقييم',
  'Experience': 'الخبرة',
  'Location': 'الموقع',
  'Rate / Status': 'الأجر / الحالة',
  'View Profile': 'عرض الملف',
  'reviews': 'مراجعة',
  'Services / Training Opportunities': 'الخدمات / الفرص التدريبية',
  'Nafadh Training, Workshops, And TRA Opportunities': 'تدريبات وورش نفاذ وفرص هيئة تنظيم الاتصالات',
  'Source': 'المصدر',
  'All Sources': 'كل المصادر',
  'Format': 'الصيغة',
  'All Formats': 'كل الصيغ',
  'Training': 'تدريب',
  'Workshop': 'ورشة عمل',
  'Session': 'جلسة',
  'View Opportunity': 'عرض الفرصة',
  'A Unified Digital Platform For Work, Talent, Tenders, And Training': 'منصة رقمية موحّدة للعمل والكفاءات والمناقصات والتدريب',
  'Registered Users': 'المستخدمون المسجلون',
  'Available Opportunities': 'الفرص المتاحة',
  'Training Programs': 'البرامج التدريبية',
  'Partner Entities': 'الجهات الشريكة',
  'Who We Are': 'من نحن',
  'Our Mission': 'رسالتنا',
  'Our Vision': 'رؤيتنا',
  'Platform Direction': 'اتجاه المنصة',
  'Built to make opportunities easier to understand and access': 'مصممة لتسهيل فهم الفرص والوصول إليها',
  'Unified Experience': 'تجربة موحّدة',
  'Clear User Journeys': 'مسارات مستخدم واضحة',
  'Skill-Based Direction': 'توجه قائم على المهارات',
  'Scalable Structure': 'هيكل قابل للتوسع',
  'What Nafadh Offers': 'ماذا تقدم نفاذ',
  'For Freelancers': 'للمستقلين',
  'For Job Seekers': 'للباحثين عن عمل',
  'For Companies': 'للشركات',
  'For Individuals': 'للأفراد',
  'Training & Development': 'التدريب والتطوير',
  'Contact Nafadh': 'تواصل مع نفاذ',
  'Let’s Connect With You': 'يسعدنا التواصل معك',
  'Send Us a Message': 'أرسل لنا رسالة',
  'Full Name': 'الاسم الكامل',
  'Email Address': 'البريد الإلكتروني',
  'Phone Number': 'رقم الهاتف',
  'Subject': 'الموضوع',
  'Message Type': 'نوع الرسالة',
  'Question': 'استفسار',
  'Suggestion': 'اقتراح',
  'Bug Report': 'بلاغ عن خطأ',
  'Development Feedback': 'ملاحظة تطويرية',
  'Quick Information': 'معلومات مختصرة',
  'Chat / Message': 'الرسالة',
  'Send Message': 'إرسال الرسالة',
  'Contact Info': 'معلومات التواصل',
  'Muscat, Sultanate of Oman': 'مسقط، سلطنة عُمان',
  'Phone': 'الهاتف',
  'Welcome Back': 'مرحبًا بعودتك',
  'Role is detected automatically': 'يتم تحديد الدور تلقائيًا',
  'Password': 'كلمة المرور',
  'Remember me': 'تذكرني',
  'Forgot password?': 'هل نسيت كلمة المرور؟',
  'Login With PKI': 'الدخول باستخدام التصديق الإلكتروني',
  'New to Nafadh?': 'جديد في نفاذ؟',
  'Do not have an account?': 'ليس لديك حساب؟',
  'Join Nafadh': 'انضم إلى نفاذ',
  'Create Your Account': 'أنشئ حسابك',
  'Registration': 'التسجيل',
  'Choose your role': 'اختر نوع الحساب',
  'Account Type:': 'نوع الحساب:',
  'Next Step After Registration': 'الخطوة التالية بعد التسجيل',
  'Already have an account?': 'لديك حساب بالفعل؟',
  'Dashboard': 'لوحة التحكم',
  'Quick actions': 'إجراءات سريعة',
  'Login Required': 'تسجيل الدخول مطلوب',
  'Sign in to view this content': 'سجّل الدخول لعرض هذا المحتوى',
  'Later': 'لاحقًا',
  'Pages': 'الصفحات',
  'Tenders Platform': 'منصة المناقصات',

  'العربية': 'العربية',
  'Search opportunities, companies, or skills': 'ابحث عن الفرص أو الجهات أو المهارات',
  'Search by name, role, location, or skill': 'ابحث بالاسم أو الدور أو الموقع أو المهارة',
  'Search training, workshop, source, or audience': 'ابحث عن تدريب أو ورشة أو مصدر أو فئة مستهدفة',
  'Opportunity For': 'الفرصة موجهة إلى',
  'Target Group': 'الفئة المستهدفة',
  'All': 'الكل',
  'Job seeker opportunities': 'فرص الباحثين عن عمل',
  'Freelancer and job seeker opportunities': 'فرص للمستقلين والباحثين عن عمل',
  'Freelancers and future job seeker profiles': 'ملفات المستقلين والباحثين عن عمل مستقبلًا',
  'Nafadh workshops and TRA opportunities': 'ورش نفاذ وفرص هيئة تنظيم الاتصالات',
  'A professional directory where companies and individual clients can search for the right people. Profiles remain clearly marked as Freelancer or Job Seeker.': 'دليل مهني يتيح للشركات والعملاء الأفراد البحث عن الأشخاص المناسبين، مع إبقاء نوع الملف واضحًا كمستقل أو باحث عن عمل.',
  'A dedicated area for professional development opportunities instead of mixing training randomly with freelance projects.': 'مساحة مخصصة لفرص التطوير المهني بدلًا من خلط التدريب عشوائيًا مع مشاريع العمل المستقل.',
  'A clear service page for freelancers and job seekers. Job seeker opportunities can stay marked as coming soon until the module is activated.': 'صفحة خدمة واضحة للمستقلين والباحثين عن عمل، مع إمكانية إبقاء فرص الباحثين عن عمل مميزة بعبارة قريبًا حتى تفعيل الوحدة.',
  'Organizations that can post opportunities, support training, and participate in the Nafadh ecosystem.': 'جهات يمكنها نشر الفرص ودعم التدريب والمشاركة في منظومة نفاذ.',
  'Services are no longer only about hiring freelancers. They can support individuals, companies, job seekers, and training journeys.': 'لم تعد الخدمات مقتصرة على توظيف المستقلين فقط، بل يمكنها دعم الأفراد والشركات والباحثين عن عمل ومسارات التدريب.',
  'A mixed preview of freelance projects and future job seeker opportunities.': 'عرض مختصر يجمع بين مشاريع العمل المستقل وفرص الباحثين عن عمل المستقبلية.',
  'Recently joined job seekers who are ready to be discovered by companies and future hiring opportunities.': 'باحثون عن عمل انضموا مؤخرًا وأصبحوا جاهزين للظهور أمام الشركات وفرص التوظيف المستقبلية.',
  'Highlight experienced freelancers with strong service records, ratings, and client reviews.': 'إبراز المستقلين ذوي الخبرة والسجل القوي في تقديم الخدمات والتقييمات وآراء العملاء.',
  'The platform can support companies, traders, shop owners, and individuals who need a technical service such as cameras, networks, websites, or design.': 'يمكن للمنصة دعم الشركات والتجار وأصحاب المحلات والأفراد ممن يحتاجون إلى خدمات تقنية مثل الكاميرات أو الشبكات أو المواقع أو التصميم.',
  'Browse talent and service requests': 'استعرض الكفاءات وطلبات الخدمات',
  'Choose the journey that matches your goal.': 'اختر المسار الذي يتوافق مع هدفك.',
  'Your gateway to work and services': 'بوابتك إلى العمل والخدمات',
  'Access the right journey for finding work, hiring skilled people, requesting services, and exploring training opportunities through one trusted platform.': 'انتقل إلى المسار المناسب للبحث عن عمل، أو استقطاب أصحاب المهارات، أو طلب الخدمات، أو استكشاف الفرص التدريبية عبر منصة موثوقة واحدة.',
  'One platform, clear journeys': 'منصة واحدة ومسارات واضحة',
  'Nafadh brings multiple service paths into one professional experience, helping each user reach the correct service without confusion.': 'تجمع نفاذ عدة مسارات خدمية ضمن تجربة مهنية واحدة تساعد كل مستخدم على الوصول إلى الخدمة المناسبة دون تشتيت.',
  'Secure Sign In': 'تسجيل دخول آمن',
  'Simple access for all Nafadh users.': 'دخول مبسط لجميع مستخدمي نفاذ.',
  'Enter your credentials to access your account.': 'أدخل بيانات الدخول للوصول إلى حسابك.',
  'In the real system, the user does not choose a role during login. The email and password identify whether the account belongs to a freelancer, job seeker, company, individual client, operator, or system admin.': 'في النظام الفعلي لا يختار المستخدم نوع الحساب أثناء تسجيل الدخول؛ حيث يحدد البريد الإلكتروني وكلمة المرور دور الحساب تلقائيًا، سواء كان لمستقل أو باحث عن عمل أو شركة أو فرد أو مشغّل أو مدير نظام.',
  'Enter email address': 'أدخل البريد الإلكتروني',
  'Enter password': 'أدخل كلمة المرور',
  'Create one account, then complete your role-specific profile later.': 'أنشئ حسابًا واحدًا، ثم أكمل ملفك حسب نوع الحساب لاحقًا.',
  'Start simple now, complete your profile later.': 'ابدأ بخطوات بسيطة الآن، وأكمل ملفك لاحقًا.',
  'Choose your role first. The form changes slightly to match your type of account.': 'اختر نوع الحساب أولًا، وستتغير الحقول بما يتناسب مع نوع الحساب.',
  'Freelancer Registration': 'تسجيل مستقل',
  'Job Seeker Registration': 'تسجيل باحث عن عمل',
  'Company Registration': 'تسجيل شركة',
  'Individual Client Registration': 'تسجيل فرد / عميل',
  'Civil ID / Freelancer ID': 'الرقم المدني / رقم المستقل',
  'Civil ID': 'الرقم المدني',
  'Commercial Registration Number': 'رقم السجل التجاري',
  'Company Name': 'اسم الشركة',
  'Confirm Password': 'تأكيد كلمة المرور',
  'Enter Commercial Registration Number': 'أدخل رقم السجل التجاري',
  'Enter Company Name': 'أدخل اسم الشركة',
  'Enter Full Name': 'أدخل الاسم الكامل',
  'Enter Civil ID': 'أدخل الرقم المدني',
  'Enter Civil ID / Freelancer ID': 'أدخل الرقم المدني / رقم المستقل',
  'For independent professionals offering digital or technical services.': 'للمهنيين المستقلين الذين يقدمون خدمات رقمية أو تقنية.',
  'For graduates and job seekers looking for employment opportunities.': 'للخريجين والباحثين عن عمل الراغبين في فرص وظيفية.',
  'For institutions and companies posting opportunities, projects, or tenders. SME / Non-SME details are completed later in the company profile.': 'للمؤسسات والشركات التي تنشر الفرص أو المشاريع أو المناقصات، على أن تُستكمل تفاصيل نوع الشركة لاحقًا في ملف الشركة.',
  'For individuals who need services like installation, design, websites, or technical support.': 'للأفراد الذين يحتاجون إلى خدمات مثل التركيب أو التصميم أو المواقع أو الدعم التقني.',
  'Later in profile completion:': 'لاحقًا في استكمال الملف:',
  'Company Type will classify the account as SME, Non-SME, Government, or Other. This keeps signup simple.': 'سيتم تحديد نوع الشركة مثل صغيرة ومتوسطة أو كبيرة أو حكومية أو غير ذلك، مع الحفاظ على بساطة التسجيل.',
  'Individual Type can be Personal Request, Trader / Shop Owner, Home Service Request, or Other.': 'يمكن تحديد نوع الفرد كطلب شخصي أو تاجر / صاحب محل أو طلب خدمة منزلية أو غير ذلك.',
  'After account creation, users can complete their role-specific profile before using full platform features.': 'بعد إنشاء الحساب، يمكن للمستخدمين استكمال ملفاتهم حسب نوع الحساب قبل استخدام جميع خصائص المنصة.',
  'Welcome back': 'مرحبًا بعودتك',
  'Welcome back,': 'مرحبًا بعودتك،',
  'Home / Dashboard': 'الرئيسية / لوحة التحكم',
  'This table is a visual prototype only. Actions do not submit data.': 'هذا الجدول نموذج بصري فقط، ولا تقوم الإجراءات بإرسال بيانات فعلية.',
  'Back': 'رجوع',
  '+ Add': '+ إضافة',
  'Title': 'العنوان',
  'Details': 'التفاصيل',
  'Status': 'الحالة',
  'Actions': 'الإجراءات',
  'Active': 'نشط',
  'Explore opportunities': 'استكشاف الفرص',
  'Browse talent': 'استعراض الكفاءات',
  'View training': 'عرض التدريب',
  'Switch user type': 'تبديل نوع المستخدم',
  'Profile Strength': 'قوة الملف',
  'Published Services': 'الخدمات المنشورة',
  'Portfolio Items': 'أعمال المعرض',
  'Client Rating': 'تقييم العملاء',
  'Freelancer Dashboard': 'لوحة تحكم المستقل',
  'Job Seeker Dashboard': 'لوحة تحكم الباحث عن عمل',
  'Company Dashboard': 'لوحة تحكم الشركة',
  'Individual Client Dashboard': 'لوحة تحكم الفرد / العميل',
  'Operator Dashboard': 'لوحة تحكم المشغّل',
  'System Admin Dashboard': 'لوحة تحكم مدير النظام',
  'Manage your profile, proposals, active projects, and service portfolio.': 'إدارة ملفك الشخصي وعروضك ومشاريعك النشطة ومحفظة خدماتك.',
  'Prototype example for CV, applications, interviews, and career readiness.': 'نموذج أولي للسيرة الذاتية والطلبات والمقابلات والاستعداد المهني.',
  'Publish opportunities, manage applicants, browse talent, and access tender journeys.': 'نشر الفرص وإدارة المتقدمين واستعراض الكفاءات والوصول إلى مسارات المناقصات.',
  'Request independent services even if you are not a registered company.': 'طلب خدمات مستقلة حتى لو لم تكن شركة مسجلة.',
  'Manage submitted opportunities, tender-related requests, training records, and applicant workflows.': 'إدارة الفرص المقدمة وطلبات المناقصات وسجلات التدريب وسير عمل المتقدمين.',
  'Internal Nafadh/TRA administration area for managing system configuration, users, approvals, and reports.': 'منطقة إدارية داخلية لنفاذ / هيئة تنظيم الاتصالات لإدارة إعدادات النظام والمستخدمين والموافقات والتقارير.',
  'My Profile': 'ملفي الشخصي',
  'Proposals': 'العروض المقدمة',
  'Active Projects': 'المشاريع النشطة',
  'Portfolio': 'معرض الأعمال',
  'Payments': 'المدفوعات',
  'Support': 'الدعم',
  'My CV': 'سيرتي الذاتية',
  'Job Matches': 'الفرص المطابقة',
  'Interviews': 'المقابلات',
  'Offers': 'العروض',
  'Courses': 'الدورات',
  'Certificates': 'الشهادات',
  'Settings': 'الإعدادات',
  'Company Profile': 'ملف الشركة',
  'Post Opportunity': 'نشر فرصة',
  'Applicants': 'المتقدمون',
  'Reports': 'التقارير',
  'Individual Profile': 'ملف الفرد',
  'My Requests': 'طلباتي',
  'Messages': 'الرسائل',
  'Saved Talent': 'الكفاءات المحفوظة',
  'Invoices': 'الفواتير',
  'Opportunities': 'الفرص',
  'Evaluations': 'التقييمات',
  'System Admin': 'إدارة النظام',
  'User Management': 'إدارة المستخدمين',
  'Skills Management': 'إدارة المهارات',
  'Credential Management': 'إدارة الاعتمادات',
  'Interview Management': 'إدارة المقابلات',
  'Project Monitoring': 'متابعة المشاريع',
  'Payment Disputes': 'نزاعات المدفوعات',
  'Recommended opportunities for you': 'فرص مقترحة لك',
  'Suggested job opportunities': 'فرص وظيفية مقترحة',
  'Recent company activities': 'آخر أنشطة الشركة',
  'Your recent requests': 'طلباتك الأخيرة',
  'Operator overview': 'نظرة عامة للمشغّل',
  'Administration overview': 'نظرة عامة إدارية',
  'Records': 'السجلات',
  'Keyword': 'كلمة مفتاحية',
  'Sort': 'ترتيب',
  'Newest': 'الأحدث',
  'Highest Budget': 'أعلى ميزانية',
  'Closest Deadline': 'أقرب موعد نهائي',
  'Opportunity Type': 'نوع الفرصة',
  'Work Mode': 'نمط العمل',
  'Education': 'التعليم',
  'Years of Experience': 'سنوات الخبرة',
  'Education Level': 'المستوى التعليمي',
  'Field of Study': 'مجال الدراسة',
  'Target Applicant': 'الفئة المستهدفة للتقديم',
  'Salary Display': 'عرض الراتب',
  'Salary Min': 'الحد الأدنى للراتب',
  'Salary Max': 'الحد الأعلى للراتب',
  'Currency': 'العملة',
  'Pay Frequency': 'وتيرة الدفع',
  'Question Text': 'نص السؤال',
  'Answer Type': 'نوع الإجابة',
  'Is Required': 'إلزامي',
  'Is Disqualifying': 'مؤهل للاستبعاد',
  'Document Name': 'اسم المستند',
  'Require Upload': 'يتطلب رفع ملف',
  'Publication Date': 'تاريخ النشر',
  'Due Date': 'تاريخ الاستحقاق',
  'Description': 'الوصف',
  'Preview': 'معاينة',
  'Save Draft': 'حفظ كمسودة',
  'Submit for Publishing': 'إرسال للنشر',
  'Cancel': 'إلغاء',
  'Save / Update': 'حفظ / تحديث',
  'View / Update': 'عرض / تحديث',
  'View / Nominate / Ask to Apply': 'عرض / ترشيح / طلب التقديم',
  'Issue Offer': 'إصدار العرض',
  'Accept': 'قبول',
  'Reject': 'رفض',
  'Request Amendment': 'طلب تعديل',
  'Ask Question': 'طرح سؤال',
  'Pending Review': 'بانتظار المراجعة',
  'Under Review': 'قيد المراجعة',
  'Shortlisted': 'ضمن القائمة المختصرة',
  'Rejected': 'مرفوض',
  'Offered': 'تم إصدار عرض',
  'Open': 'مفتوح',
  'Upcoming': 'قادم',
  'Public': 'عام',
  'On-site': 'حضوري',
  'Full-Time': 'دوام كامل',
  'Part-Time': 'دوام جزئي',
  'Contract': 'عقد',
  'Internship': 'تدريب عملي',
  'Fresh Graduate': 'خريج جديد',
  'Entry': 'مبتدئ',
  'Junior': 'مستوى أولي',
  'Intermediate': 'متوسط',
  'Professional': 'محترف',
  'Expert': 'خبير',
  'Available now': 'متاح الآن',
  'Available part-time': 'متاح جزئيًا',
  'Busy': 'مشغول',
  'Open for invitations': 'متاح للدعوات',
  'Personal Request': 'طلب شخصي',
  'Trader / Shop Owner': 'تاجر / صاحب محل',
  'Home Service Request': 'طلب خدمة منزلية',
  'Other': 'أخرى',
  'Government / Semi-Government': 'حكومي / شبه حكومي',
  'Non-SME / Large Entity': 'منشأة كبيرة / غير صغيرة ومتوسطة',
  'SME': 'منشأة صغيرة ومتوسطة',
  'Verified': 'موثق',
  'Unverified': 'غير موثق',
  'Pending': 'معلق',
  'Paid': 'مدفوع',
  'Processing': 'قيد المعالجة',
  'Draft': 'مسودة',
  'Published': 'منشور',
  'Submitted': 'تم الإرسال',
  'Invited': 'دعوة',
  'Accepted': 'مقبول',
  'Completed': 'مكتمل',
  'In Progress': 'قيد التنفيذ',
  'View': 'عرض',
  'Edit': 'تعديل',
  'Manage': 'إدارة',
  'Review': 'مراجعة',
  'Apply': 'تقديم',
  'Soon': 'قريبًا',
  'New': 'جديد',
  'Top Rated': 'أعلى تقييمًا',
  'Open to opportunities': 'متاح للفرص',
  'OMR': 'ر.ع',
  'Share Your Questions, Suggestions, Or System Feedback': 'شاركنا استفساراتك أو مقترحاتك أو ملاحظاتك حول النظام',
  'Use this page to contact the Nafadh team, report errors, suggest improvements, or share development-related notes that can help improve the platform experience.': 'استخدم هذه الصفحة للتواصل مع فريق نفاذ، أو الإبلاغ عن الأخطاء، أو اقتراح التحسينات، أو مشاركة ملاحظات تطويرية تساعد في تحسين تجربة المنصة.',
  'This form is intentionally simple so visitors can quickly send questions, suggestions, bug reports, or development feedback without needing to log in first.': 'تم تصميم هذا النموذج ليكون بسيطًا حتى يتمكن الزائر من إرسال الاستفسارات أو المقترحات أو بلاغات الأخطاء أو الملاحظات التطويرية دون الحاجة إلى تسجيل الدخول أولًا.',
  'General Question': 'استفسار عام',
  'Bug / Error Report': 'بلاغ عن خطأ',
  'Partnership Inquiry': 'استفسار شراكة',
  'Enter your full name': 'أدخل الاسم الكامل',
  'Enter your email address': 'أدخل البريد الإلكتروني',
  'Write a short subject': 'اكتب موضوعًا مختصرًا',
  'Describe your question, suggestion, issue, or development note clearly. If you are reporting an error, mention where it happened and what you expected to happen.': 'اكتب استفسارك أو اقتراحك أو المشكلة التي واجهتك أو ملاحظتك التطويرية بوضوح. إذا كنت تبلغ عن خطأ، يرجى توضيح مكان حدوثه وما الذي كنت تتوقع حدوثه.',
  'Note:': 'ملاحظة:',
  'You can send feedback even if you are not registered. The team can review your message and follow up through your email.': 'يمكنك إرسال ملاحظتك حتى لو لم تكن مسجلًا. سيقوم الفريق بمراجعة رسالتك والتواصل معك عبر البريد الإلكتروني.',
  'Reach the Nafadh team for platform support, service inquiries, suggestions, and system improvement notes.': 'تواصل مع فريق نفاذ للحصول على الدعم، أو الاستفسار عن الخدمات، أو مشاركة المقترحات وملاحظات تحسين النظام.',

  'Nafadh connects skilled individuals, companies, individual clients, and opportunities through one clear and trusted digital experience across Oman.': 'تربط منصة نفاذ الأفراد المهرة والشركات والعملاء الأفراد بالفرص من خلال تجربة رقمية واضحة وموثوقة في سلطنة عُمان.',
  'Nafadh is designed as a unified service platform that brings together work opportunities, skilled freelancers, job seeker profiles, training programs, and tender-related journeys under one professional digital identity.': 'صُممت نفاذ كمنصة خدمية موحّدة تجمع فرص العمل، والمستقلين المهرة، وملفات الباحثين عن عمل، والبرامج التدريبية، والمسارات المرتبطة بالمناقصات تحت هوية رقمية مهنية واحدة.',
  'The platform supports a wider market need: companies can publish opportunities, individuals can request independent services, freelancers can find project-based work, and job seekers can prepare for future skill-based employment journeys.': 'تدعم المنصة احتياجًا أوسع في السوق؛ حيث تستطيع الشركات نشر الفرص، ويمكن للأفراد طلب الخدمات المستقلة، ويستطيع المستقلون الحصول على أعمال قائمة على المشاريع، كما يمكن للباحثين عن عمل الاستعداد لمسارات توظيف مستقبلية قائمة على المهارات.',
  'Instead of separating users across disconnected systems, Nafadh provides a clear entry point and guided experience for each user type while keeping room for future modules such as matching, applications, interviews, offers, and credentials.': 'بدلًا من توزيع المستخدمين على أنظمة منفصلة، توفر نفاذ نقطة دخول واضحة وتجربة موجهة لكل نوع من المستخدمين، مع قابلية التوسع مستقبلًا لوحدات مثل المطابقة، والطلبات، والمقابلات، والعروض، والاعتمادات.',
  'To simplify access to work opportunities and connect skilled individuals with real market needs through a trusted and easy-to-use digital platform.': 'تسهيل الوصول إلى فرص العمل وربط أصحاب المهارات باحتياجات السوق الفعلية عبر منصة رقمية موثوقة وسهلة الاستخدام.',
  'To build a national digital ecosystem that empowers freelancing, employment, training, tenders, and skill development in Oman.': 'بناء منظومة رقمية وطنية تمكّن العمل الحر، والتوظيف، والتدريب، والمناقصات، وتطوير المهارات في سلطنة عُمان.',
  'Find project-based opportunities, showcase services, and build visibility.': 'استكشاف فرص قائمة على المشاريع، وعرض الخدمات، وتعزيز الظهور المهني.',
  'Build a career profile and prepare for future skill-based job matching.': 'بناء ملف مهني والاستعداد لمطابقة وظيفية مستقبلية قائمة على المهارات.',
  'Post opportunities, browse candidates, and manage hiring journeys.': 'نشر الفرص، واستعراض المرشحين، وإدارة مسارات التوظيف.',
  'Request services from skilled freelancers for personal or business needs.': 'طلب خدمات من مستقلين مهرة للاحتياجات الشخصية أو التجارية.',
  'Access workshops, TRA programs, and learning opportunities.': 'الوصول إلى الورش، وبرامج هيئة تنظيم الاتصالات، وفرص التعلم.',
  'The value of Nafadh is not only in listing opportunities. Its strength is in organizing different journeys into one clear system: find work, hire skilled people, explore training, and connect with tender-related services.': 'لا تكمن قيمة نفاذ في عرض الفرص فقط، بل في تنظيم المسارات المختلفة ضمن نظام واضح واحد: البحث عن عمل، واستقطاب أصحاب المهارات، واستكشاف التدريب، والارتباط بالخدمات ذات الصلة بالمناقصات.',
  'One connected entry instead of separated systems.': 'نقطة دخول موحّدة بدلًا من أنظمة منفصلة.',
  'Each user type understands where to start.': 'كل نوع من المستخدمين يعرف من أين يبدأ.',
  'Future matching can rely on skills and profiles.': 'يمكن أن تعتمد المطابقة المستقبلية على المهارات والملفات المهنية.',
  'Ready to grow with applications, interviews, offers, and evaluations.': 'قابلة للتوسع مع الطلبات، والمقابلات، والعروض، والتقييمات.',
};

function translateText(value, language) {
  if (!value || !value.trim()) return value;
  const dictionary = language === 'ar'
    ? AR_TRANSLATIONS
    : Object.fromEntries(Object.entries(AR_TRANSLATIONS).map(([en, ar]) => [ar, en]));
  let next = value;
  const entries = Object.entries(dictionary).sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of entries) {
    if (next.includes(from)) next = next.split(from).join(to);
  }
  return next;
}

function applyDomTranslation(language) {
  if (typeof document === 'undefined') return;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tagName = parent.tagName.toLowerCase();
      if (['script', 'style', 'textarea'].includes(tagName)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const textNodes: Text[] = [];

  while (walker.nextNode()) {  textNodes.push(walker.currentNode as Text);}

  textNodes.forEach((node) => {
    const original = node.nodeValue || '';
    const translated = translateText(original, language);
    if (translated !== original) {
      node.nodeValue = translated;
    }
  });

  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach((element) => {
    const current = element.getAttribute('placeholder') || '';
    const translated = translateText(current, language);
    if (translated !== current) element.setAttribute('placeholder', translated);
  });
}

function NavLink({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        isActive
          ? 'border-b-2 border-[#123b8b] pb-1 font-semibold text-[#123b8b]'
          : 'text-[#1f2937] transition hover:text-[#123b8b]'
      }
    >
      {label}
    </button>
  );
}

function PrimaryButton({ children, onClick, className = '', disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl bg-gradient-to-r from-[#10b3b7] to-[#123b8b] px-5 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {children}
    </button>
  );
}

function OutlineButton({ children, onClick, className = '', disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl border border-[#123b8b]/25 bg-white px-5 py-3 font-semibold text-[#123b8b] transition hover:-translate-y-0.5 hover:bg-[#f0f7ff] disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {children}
    </button>
  );
}

function Tag({ children, tone = 'blue' }) {
  const tones = {
    blue: 'bg-[#eaf4ff] text-[#123b8b] border-[#cfe2ff]',
    cyan: 'bg-cyan-50 text-cyan-700 border-cyan-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  return <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}

function SectionHeader({ badge, title, description, centered = false }) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      {badge ? (
        <div className="mb-3 inline-flex rounded-full bg-[#d9e1ea] px-4 py-2 text-sm font-semibold text-[#123b8b]">
          {badge}
        </div>
      ) : null}
      <h2 className="text-3xl font-bold text-[#123b8b] md:text-4xl">{title}</h2>
      {description ? (
        <p className={`mt-3 text-gray-600 ${centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'}`}>{description}</p>
      ) : null}
    </div>
  );
}

function SectionHero({ badge, title, description }) {
  return (
    <section className="mb-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#123b8b] via-[#0f4f9e] to-[#10b3b7] px-6 py-14 text-white shadow-xl md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
          {badge}
        </div>
        <h1 className="mt-5 text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-white/85">{description}</p>
      </div>
    </section>
  );
}

function StatCard({ value, label, icon }) {
  return (
    <div className="rounded-[1.5rem] bg-white p-6 text-center shadow-lg">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d9e1ea] text-2xl">
        {icon}
      </div>
      <div className="mt-4 text-3xl font-bold text-[#123b8b]">{value}</div>
      <div className="mt-2 text-sm font-medium text-gray-600">{label}</div>
    </div>
  );
}

function FooterLinkButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block text-left text-sm text-slate-400 transition hover:text-white"
    >
      {label}
    </button>
  );
}

function FilterInput({ value, onChange, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">Search</label>
      <div className="flex items-center rounded-xl border border-gray-200 bg-[#f9fafb] px-4 py-3">
        <span className="mr-3 text-lg">🔍</span>
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full bg-transparent outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">{label}</label>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-[#f9fafb] px-4 py-3 outline-none focus:border-[#123b8b]"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function AuthVisualPanel({ badge, title = 'Nafadh', subtitle = 'Your gateway to work and services' }) {
  return (
    <div className="relative hidden min-h-[720px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f172a] via-[#123b8b] to-[#10b3b7] p-10 text-white shadow-2xl lg:block">
      <div className="absolute -left-12 top-20 h-72 w-72 rounded-full border border-white/25" />
      <div className="absolute left-20 top-36 h-80 w-80 rounded-full border border-cyan-300/35" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white/95">
            {badge}
          </div>
          <div className="mt-8 text-4xl font-bold leading-tight">
            Nafadh
            <div className="text-white/85">Your gateway to work and services</div>
          </div>
          <p className="mt-5 max-w-md text-base leading-7 text-white/85">
            Access the right journey for finding work, hiring skilled people, requesting services, and exploring training opportunities through one trusted platform.
          </p>
        </div>

        <div className="rounded-[2rem] border border-cyan-300/35 bg-white/10 p-8 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-3xl">🧭</div>
            <div>
              <div className="text-2xl font-bold">One platform, clear journeys</div>
              <p className="mt-3 leading-7 text-white/80">
                Nafadh brings multiple service paths into one professional experience, helping each user reach the correct service without confusion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [workSearch, setWorkSearch] = useState('');
  const [workAudience, setWorkAudience] = useState('All');
  const [workType, setWorkType] = useState('All Types');
  const [workCategory, setWorkCategory] = useState('All Categories');

  const [hireSearch, setHireSearch] = useState('');
  const [hireTalentType, setHireTalentType] = useState('All Talent');
  const [hireCategory, setHireCategory] = useState('All Categories');
  const [hireLevel, setHireLevel] = useState('All Levels');

  const [trainingSearch, setTrainingSearch] = useState('');
  const [trainingSource, setTrainingSource] = useState('All Sources');
  const [trainingFormat, setTrainingFormat] = useState('All Formats');

  const [loginRole, setLoginRole] = useState('Freelancer');
  const [registerRole, setRegisterRole] = useState('Freelancer');
  const [loginRequiredModal, setLoginRequiredModal] = useState<{ context: string } | null>(null);
  const [activeProfileTab, setActiveProfileTab] = useState('Education');
  const [activeOpportunityStep, setActiveOpportunityStep] = useState('Basic Information');

  const scrollToTop = () => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = language === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('nafadh-rtl', language === 'ar');

    let styleTag = document.getElementById('nafadh-rtl-style');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'nafadh-rtl-style';
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = `
      html[dir="rtl"] body {
        font-family: Tahoma, Arial, sans-serif;
        word-spacing: 0.04em;
      }
      html[dir="rtl"] .text-left { text-align: right !important; }
      html[dir="rtl"] .text-right { text-align: left !important; }
      html[dir="rtl"] input,
      html[dir="rtl"] textarea,
      html[dir="rtl"] select {
        direction: rtl;
        text-align: right;
        font-family: Tahoma, Arial, sans-serif;
      }
      html[dir="rtl"] p,
      html[dir="rtl"] li,
      html[dir="rtl"] td,
      html[dir="rtl"] th { line-height: 1.9; }
      html[dir="rtl"] p { text-align: justify; text-justify: inter-word; }
      html[dir="rtl"] .text-center p,
      html[dir="rtl"] p.text-center { text-align: center !important; }
      html[dir="rtl"] table { direction: rtl; }
      html[dir="rtl"] .rounded-xl,
      html[dir="rtl"] .rounded-2xl,
      html[dir="rtl"] .rounded-\[2rem\] { letter-spacing: 0; }
    `;

    const timer = window.setTimeout(() => applyDomTranslation(language), 0);
    const timer2 = window.setTimeout(() => applyDomTranslation(language), 80);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(timer2);
    };
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToPage = (page) => {
    setCurrentPage(page);
    setIsServicesMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsLanguageMenuOpen(false);
    scrollToTop();
  };

  const openLoginRequiredModal = (context = 'details') => {
    setLoginRequiredModal({ context });
  };

  const closeLoginRequiredModal = () => {
    setLoginRequiredModal(null);
  };

  const continueToLoginFromModal = () => {
    closeLoginRequiredModal();
    goToPage('login');
  };

  const userPaths = [
    {
      title: 'Freelancer',
      icon: '💼',
      description: 'Create a profile, showcase skills, and apply to independent work opportunities.',
      action: 'Find Work',
      page: 'work',
      tone: 'blue',
    },
    {
      title: 'Job Seeker',
      icon: '🎓',
      description: 'Explore future employment opportunities and build a career profile.',
      action: 'Stay Tuned',
      page: 'work',
      tone: 'amber',
      comingSoon: true,
    },
    {
      title: 'Company',
      icon: '🏢',
      description: 'Post projects, publish opportunities, request freelancers or job seekers, and manage hiring needs.',
      action: 'Hire Talent',
      page: 'hire',
      tone: 'green',
    },
    {
      title: 'Individual Client',
      icon: '🏠',
      description: 'For a person, trader, or shop owner who needs a freelancer or job seeker for a specific service.',
      action: 'Post Request',
      page: 'hire',
      tone: 'cyan',
    },
  ];

  const services = [
    { title: 'UI/UX Design', icon: '🎨', category: 'Design' },
    { title: 'Web Development', icon: '💻', category: 'Development' },
    { title: 'Mobile Apps', icon: '📱', category: 'Development' },
    { title: 'Content Writing', icon: '✍️', category: 'Writing' },
    { title: 'Network & CCTV', icon: '📡', category: 'Networks' },
    { title: 'Digital Marketing', icon: '📊', category: 'Marketing' },
    { title: 'Data Analysis', icon: '📈', category: 'Data' },
    { title: 'Business Support', icon: '📁', category: 'Operations' },
  ];

  const trustedEntities = ['GLOBCOM', 'riyadā', 'Oman Broadband', 'Omantel', 'ooredoo', 'AWASR'];

  const opportunityListings = [
    {
      title: 'Website Redesign For Telecom Services',
      company: 'Omantel',
      audience: 'Freelancer',
      category: 'Design',
      type: 'Remote',
      budget: 'OMR 600 - 1,200',
      postedBy: 'Digital Experience Team',
      applicants: 18,
      deadline: '5 Days Left',
      duration: '3 Weeks',
      location: 'Muscat',
      tags: ['UI/UX', 'Figma', 'Web'],
      icon: '🎨',
    },
    {
      title: 'Junior IT Support Specialist',
      company: 'Government Partner',
      audience: 'Job Seeker',
      category: 'IT Support',
      type: 'Onsite',
      budget: 'Coming Soon',
      postedBy: 'HR Team',
      applicants: 0,
      deadline: 'Coming Soon',
      duration: 'Full Time',
      location: 'Muscat',
      tags: ['Help Desk', 'Networking', 'Hardware'],
      icon: '🎓',
      comingSoon: true,
    },
    {
      title: 'Build Internal Dashboard For Service Operations',
      company: 'Oman Broadband',
      audience: 'Freelancer',
      category: 'Development',
      type: 'Hybrid',
      budget: 'OMR 900 - 1,500',
      postedBy: 'Technology Department',
      applicants: 26,
      deadline: '7 Days Left',
      duration: '1 Month',
      location: 'Muscat',
      tags: ['React', 'API', 'Dashboard'],
      icon: '💻',
    },
    {
      title: 'Network And CCTV Setup For New House',
      company: 'Individual Client',
      audience: 'Freelancer',
      category: 'Networks',
      type: 'Onsite',
      budget: 'OMR 180 - 320',
      postedBy: 'Home Owner',
      applicants: 8,
      deadline: '2 Days Left',
      duration: '2 Days',
      location: 'Barka',
      tags: ['CCTV', 'Installation', 'Router'],
      icon: '📡',
    },
    {
      title: 'Arabic Content For Public Awareness Campaign',
      company: 'TRA Partner Program',
      audience: 'Freelancer',
      category: 'Writing',
      type: 'Remote',
      budget: 'OMR 250 - 450',
      postedBy: 'Communications Team',
      applicants: 12,
      deadline: '3 Days Left',
      duration: '2 Weeks',
      location: 'Oman',
      tags: ['Arabic', 'Content', 'Campaign'],
      icon: '✍️',
    },
    {
      title: 'Data Analyst Graduate Opportunity',
      company: 'Private Sector Company',
      audience: 'Job Seeker',
      category: 'Data',
      type: 'Hybrid',
      budget: 'Coming Soon',
      postedBy: 'Recruitment Team',
      applicants: 0,
      deadline: 'Coming Soon',
      duration: 'Full Time',
      location: 'Sohar',
      tags: ['Excel', 'Power BI', 'Reports'],
      icon: '📈',
      comingSoon: true,
    },
  ];

  const talentProfiles = [
    {
      name: 'Aisha Al Harthi',
      role: 'Senior UI/UX Designer',
      talentType: 'Freelancer',
      rating: '4.9',
      reviews: 128,
      experience: '6 Years',
      level: 'Expert',
      category: 'Design',
      location: 'Muscat, Oman',
      completed: 64,
      skills: ['Figma', 'Wireframing', 'Design Systems'],
      image: '🎨',
      rate: 'OMR 18/hr',
    },
    {
      name: 'Mohammed Al Hinai',
      role: 'Full Stack Developer',
      talentType: 'Freelancer',
      rating: '4.8',
      reviews: 94,
      experience: '5 Years',
      level: 'Professional',
      category: 'Development',
      location: 'Sohar, Oman',
      completed: 52,
      skills: ['React', 'ASP.NET', 'SQL Server'],
      image: '💻',
      rate: 'OMR 22/hr',
    },
    {
      name: 'Fatma Al Riyami',
      role: 'Fresh Graduate in Information Systems',
      talentType: 'Job Seeker',
      rating: 'New',
      reviews: 0,
      experience: 'Entry Level',
      level: 'Entry',
      category: 'Operations',
      location: 'Nizwa, Oman',
      completed: 0,
      skills: ['Documentation', 'Office Tools', 'Coordination'],
      image: '🎓',
      rate: 'Open to opportunities',
      comingSoon: true,
    },
    {
      name: 'Salim Al Balushi',
      role: 'Network and CCTV Specialist',
      talentType: 'Freelancer',
      rating: '4.8',
      reviews: 89,
      experience: '7 Years',
      level: 'Expert',
      category: 'Networks',
      location: 'Muscat, Oman',
      completed: 70,
      skills: ['CCTV', 'Router Setup', 'Maintenance'],
      image: '📡',
      rate: 'OMR 20/hr',
    },
    {
      name: 'Maha Al Kharusi',
      role: 'Junior Data Analyst',
      talentType: 'Job Seeker',
      rating: 'New',
      reviews: 0,
      experience: 'Junior',
      level: 'Junior',
      category: 'Data',
      location: 'Ibri, Oman',
      completed: 0,
      skills: ['Power BI', 'Excel', 'Dashboards'],
      image: '📈',
      rate: 'Open to opportunities',
      comingSoon: true,
    },
    {
      name: 'Hamed Al Maamari',
      role: 'Digital Marketing Specialist',
      talentType: 'Freelancer',
      rating: '4.6',
      reviews: 53,
      experience: '3 Years',
      level: 'Intermediate',
      category: 'Marketing',
      location: 'Salalah, Oman',
      completed: 29,
      skills: ['Meta Ads', 'Analytics', 'SEO'],
      image: '📊',
      rate: 'OMR 16/hr',
    },
  ];

  const trainingOpportunities = [
    {
      title: 'Nafadh Digital Freelancing Workshop',
      source: 'Nafadh',
      format: 'Workshop',
      status: 'Open',
      audience: 'Freelancers',
      description: 'A practical workshop to help independent professionals build profiles, present services, and apply to opportunities.',
      icon: '💼',
    },
    {
      title: 'TRA Cybersecurity Awareness Training',
      source: 'TRA',
      format: 'Training',
      status: 'Open',
      audience: 'Public',
      description: 'Foundational awareness opportunity for digital safety and secure online practices.',
      icon: '🛡️',
    },
    {
      title: 'Data Analysis and Reporting Skills',
      source: 'Nafadh',
      format: 'Workshop',
      status: 'Upcoming',
      audience: 'Job Seekers',
      description: 'Hands-on learning focused on dashboards, reports, and work-ready analysis skills.',
      icon: '📈',
    },
    {
      title: 'TRA Cloud and Remote Work Tools Session',
      source: 'TRA',
      format: 'Session',
      status: 'Upcoming',
      audience: 'Public',
      description: 'An introductory session on cloud collaboration and modern remote work practices.',
      icon: '☁️',
    },
  ];

  const platformObjectives = [
    'Unify freelancers, job seekers, companies, operators, and individuals under one clear access experience.',
    'Allow users to discover opportunities, tenders, training, workshops, and future job openings without confusion.',
    'Support companies, individuals, freelancers, and job seekers by giving them fair access to service opportunities and projects.',
    'Prepare the platform for future job seeker features while keeping inactive modules clearly marked as coming soon.',
  ];

  const platformServices = [
    'Find Work: opportunities for freelancers and future job seeker roles.',
    'Hire Talent: browse freelancers and future job seeker profiles using smart filters.',
    'Training Opportunities: Nafadh workshops and TRA training programs.',
    'Tenders: clear entry point to the existing tenders platform when needed.',
  ];

  const aboutStats = [
    { value: '4+', label: 'User Groups', icon: '👥' },
    { value: '3', label: 'Core Services', icon: '🧭' },
    { value: '1', label: 'Unified Entry', icon: '🔗' },
    { value: 'Ready', label: 'For Arabic', icon: '🌐' },
  ];

  const loginRoles = ['Freelancer', 'Job Seeker', 'Company', 'Individual Client', 'Operator', 'System Admin'];
  const registerRoles = ['Freelancer', 'Job Seeker', 'Company', 'Individual Client'];

  const registerRoleMeta = {
    Freelancer: {
      title: 'Freelancer Registration',
      description: 'Create a freelancer account to offer services, build your profile, and apply to project-based work.',
      idLabel: 'Civil ID / Freelancer ID',
      nameLabel: 'Full Name',
      accountTypeNote: 'For independent professionals offering digital or technical services.',
    },
    'Job Seeker': {
      title: 'Job Seeker Registration',
      description: 'Create a future-ready career profile. This module can be shown as coming soon while keeping the flow clear.',
      idLabel: 'Civil ID',
      nameLabel: 'Full Name',
      accountTypeNote: 'For graduates and job seekers looking for employment opportunities.',
      comingSoon: true,
    },
    'Company': {
      title: 'Company Registration',
      description: 'Register your company to publish opportunities, request freelancers or job seekers, and access tender-related journeys.',
      idLabel: 'Commercial Registration Number',
      nameLabel: 'Company Name',
      accountTypeNote: 'For institutions and companies posting opportunities, projects, or tenders. SME / Non-SME details are completed later in the company profile.',
    },
    'Individual Client': {
      title: 'Individual Client Registration',
      description: 'Register as a person who wants to request independent services without being a formal company.',
      idLabel: 'Civil ID',
      nameLabel: 'Full Name',
      accountTypeNote: 'For individuals who need services like installation, design, websites, or technical support.',
    },
  };

  const selectedRoleMeta = registerRoleMeta[registerRole];

  const filteredOpportunities = useMemo(() => {
    return opportunityListings.filter((opportunity) => {
      const searchable = `${opportunity.title} ${opportunity.company} ${opportunity.category} ${opportunity.tags.join(' ')}`.toLowerCase();
      const matchesSearch = searchable.includes(workSearch.toLowerCase());
      const matchesAudience = workAudience === 'All' || opportunity.audience === workAudience;
      const matchesType = workType === 'All Types' || opportunity.type === workType;
      const matchesCategory = workCategory === 'All Categories' || opportunity.category === workCategory;
      return matchesSearch && matchesAudience && matchesType && matchesCategory;
    });
  }, [workSearch, workAudience, workType, workCategory]);

  const filteredTalent = useMemo(() => {
    return talentProfiles.filter((talent) => {
      const searchable = `${talent.name} ${talent.role} ${talent.location} ${talent.skills.join(' ')}`.toLowerCase();
      const matchesSearch = searchable.includes(hireSearch.toLowerCase());
      const matchesTalentType = hireTalentType === 'All Talent' || talent.talentType === hireTalentType;
      const matchesCategory = hireCategory === 'All Categories' || talent.category === hireCategory;
      const matchesLevel = hireLevel === 'All Levels' || talent.level === hireLevel;
      return matchesSearch && matchesTalentType && matchesCategory && matchesLevel;
    });
  }, [hireSearch, hireTalentType, hireCategory, hireLevel]);

  const filteredTrainings = useMemo(() => {
    return trainingOpportunities.filter((training) => {
      const searchable = `${training.title} ${training.source} ${training.format} ${training.audience}`.toLowerCase();
      const matchesSearch = searchable.includes(trainingSearch.toLowerCase());
      const matchesSource = trainingSource === 'All Sources' || training.source === trainingSource;
      const matchesFormat = trainingFormat === 'All Formats' || training.format === trainingFormat;
      return matchesSearch && matchesSource && matchesFormat;
    });
  }, [trainingSearch, trainingSource, trainingFormat]);

  // Home page marketing logic: the UI says "Recently Joined Job Seekers", while the future backend
  // can rank only users who recently joined and passed the required profile completion threshold.
  const recentlyJoinedJobSeekers = [
    ...talentProfiles.filter((talent) => talent.talentType === 'Job Seeker'),
    {
      name: 'Noura Al Busaidi',
      role: 'Junior Frontend Developer',
      talentType: 'Job Seeker',
      rating: 'New',
      reviews: 0,
      experience: 'Entry Level',
      level: 'Entry',
      category: 'Development',
      location: 'Muscat, Oman',
      completed: 0,
      skills: ['HTML', 'CSS', 'JavaScript'],
      image: '💻',
      rate: 'Open to opportunities',
      comingSoon: true,
    },
  ].slice(0, 3);
  const topRatedFreelancers = talentProfiles.filter((talent) => talent.talentType === 'Freelancer').slice(0, 3);

  const renderHomePage = () => (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#07152f] via-[#123b8b] to-[#10b3b7] py-20 text-white md:py-28">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              Unified digital platform for work, tenders, talent, and training
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Nafadh connects freelancers, job seekers, companies, and individuals in one clear experience.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              A smarter gateway where each user can quickly find the right journey: find work, hire talent, explore training, or access tenders.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button type="button" onClick={() => goToPage('work')} className="rounded-xl bg-white px-5 py-3 font-semibold text-[#123b8b] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">Find Work</button>
              <button type="button" onClick={() => goToPage('hire')} className="rounded-xl border border-white/35 bg-white/10 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20">Hire Talent</button>
              <button type="button" onClick={() => goToPage('training')} className="rounded-xl border border-white/35 bg-white/10 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20">Training Opportunities</button>
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/8 px-5 py-4 backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Built for</div>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/85">
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200" /> Freelancers</span>
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200" /> Job Seekers</span>
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200" /> Companies</span>
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200" /> Individuals</span>
                <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200" /> Tenders</span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/95 p-6 text-[#1f2937] shadow-2xl backdrop-blur">
            <div className="mb-5">
              <div className="text-sm font-semibold text-cyan-600">Smart Entry</div>
              <h2 className="text-2xl font-bold text-[#123b8b]">Choose your path</h2>
              <p className="mt-1 text-sm text-gray-500">Select the journey that matches your goal.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {userPaths.map((path) => (
                <button
                  key={path.title}
                  type="button"
                  onClick={() => path.comingSoon ? undefined : goToPage(path.page)}
                  disabled={path.comingSoon}
                  className={`rounded-[1.5rem] border p-5 text-left transition ${
                    path.comingSoon
                      ? 'cursor-not-allowed border-amber-200 bg-amber-50/70 opacity-80'
                      : 'border-gray-200 bg-[#f9fbff] hover:-translate-y-1 hover:bg-white hover:shadow-lg'
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d9e1ea] text-2xl">{path.icon}</div>
                    {path.comingSoon ? <Tag tone="amber">Coming Soon</Tag> : null}
                  </div>
                  <h3 className="text-lg font-bold text-[#123b8b]">{path.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{path.description}</p>
                  <div className={`mt-4 text-sm font-bold ${path.comingSoon ? 'text-amber-700' : 'text-[#123b8b]'}`}>
                    {path.comingSoon ? 'Stay Tuned' : `${path.action} →`}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e5e9f0] py-14 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-3 text-3xl font-bold text-[#123b8b]">Trusted By Leading Companies And Institutions</h2>
          <p className="mb-8 text-gray-600">
            Organizations that can post opportunities, support training, and participate in the Nafadh ecosystem.
          </p>
          <div className="flex gap-6 overflow-x-auto px-1 pb-2">
            {trustedEntities.map((item, index) => (
              <div key={`${item}-${index}`} className="min-w-[200px] rounded-xl bg-white px-8 py-6 shadow">
                <span className="text-lg font-semibold text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          centered
          badge="Services"
          title="Explore Popular Services"
          description="Services are no longer only about hiring freelancers. They can support individuals, companies, job seekers, and training journeys."
        />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {services.map((service) => (
            <button
              type="button"
              key={service.title}
              onClick={() => goToPage('hire')}
              className="rounded-2xl border border-[#dce8f7] bg-gradient-to-br from-[#f8fbff] to-[#edf6ff] p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#b8d1f0] hover:bg-white hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">{service.icon}</div>
              <div className="mt-3 font-semibold text-[#123b8b]">{service.title}</div>
              <div className="mt-1 text-xs text-gray-500">Browse talent and service requests</div>
            </button>
          ))}
        </div>
          <div className="mt-8 text-center">
            <OutlineButton onClick={() => goToPage('work')} className="px-6 py-2.5 text-sm">Explore More Services</OutlineButton>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f7faff] via-[#eef5ff] to-[#f8fbff] py-16">
        <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#123b8b]">Latest Opportunities</h2>
            <p className="mt-2 max-w-2xl text-gray-600">A mixed preview of freelance projects and future job seeker opportunities.</p>
          </div>
          <OutlineButton onClick={() => goToPage('work')}>Browse All Opportunities</OutlineButton>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {opportunityListings.slice(0, 3).map((job) => (
            <button
              type="button"
              key={job.title}
              onClick={() => goToPage('work')}
              className="rounded-2xl bg-white p-6 text-left shadow transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-3xl">{job.icon}</span>
                <Tag tone={job.comingSoon ? 'amber' : 'blue'}>{job.audience}</Tag>
              </div>
              <div className="font-bold text-[#123b8b]">{job.title}</div>
              <div className="mt-1 text-sm text-gray-500">{job.company}</div>
              <div className="mt-4 font-medium text-[#123b8b]">{job.budget}</div>
            </button>
          ))}
        </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#123b8b]">Discover Job Seekers</h2>
              <p className="mt-2 max-w-3xl text-gray-600">
                Recently joined job seekers who are ready to be discovered by companies and future hiring opportunities.
              </p>
            </div>
            <OutlineButton onClick={() => goToPage('hire')}>View Job Seekers</OutlineButton>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {recentlyJoinedJobSeekers.map((talent) => (
              <button
                key={talent.name}
                type="button"
                onClick={() => goToPage('hire')}
                className="rounded-2xl border border-[#dce8f7] bg-gradient-to-br from-white to-[#eef7ff] p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#b8d1f0] hover:shadow-lg"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">{talent.image}</div>
                  <Tag tone="blue">Job Seeker</Tag>
                </div>
                <div className="font-bold text-[#123b8b]">{talent.name}</div>
                <div className="text-sm text-gray-600">{talent.role}</div>
                <div className="mt-3 text-xs font-semibold text-[#123b8b]">Recently joined</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {talent.skills.slice(0, 3).map((skill) => <Tag key={skill} tone="cyan">{skill}</Tag>)}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f8fbff] via-[#eef7fb] to-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#123b8b]">Top Rated Freelancers</h2>
              <p className="mt-2 max-w-3xl text-gray-600">
                Highlight experienced freelancers with strong service records, ratings, and client reviews.
              </p>
            </div>
            <OutlineButton onClick={() => goToPage('hire')}>View Freelancers</OutlineButton>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {topRatedFreelancers.map((talent) => (
              <button
                key={talent.name}
                type="button"
                onClick={() => goToPage('hire')}
                className="rounded-2xl border border-blue-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d9e1ea] text-2xl">{talent.image}</div>
                  <Tag tone="blue">Freelancer</Tag>
                </div>
                <div className="font-bold text-[#123b8b]">{talent.name}</div>
                <div className="text-sm text-gray-600">{talent.role}</div>
                <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-[#f7f9fc] px-4 py-3 text-sm">
                  <span className="font-semibold text-amber-500">⭐ {talent.rating}</span>
                  <span className="text-gray-500">{talent.reviews} reviews</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {talent.skills.slice(0, 3).map((skill) => <Tag key={skill} tone="cyan">{skill}</Tag>)}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#123b8b] via-[#0f4f9e] to-[#10b3b7] p-8 text-white shadow-xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Anyone can request a service through Nafadh</h2>
              <p className="mt-4 max-w-2xl text-white/85">
                The platform can support companies, traders, shop owners, and individuals who need a technical service such as cameras, networks, websites, or design.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <button type="button" onClick={() => goToPage('hire')} className="rounded-xl bg-white px-6 py-3 font-semibold text-[#123b8b]">
                Hire Talent
              </button>
              <button type="button" onClick={() => goToPage('training')} className="rounded-xl border border-white/40 px-6 py-3 font-semibold text-white">
                Explore Training
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderFindWorkPage = () => (
    <div className="min-h-[calc(100vh-80px)] bg-[#f2f4f7] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHero
          badge="Services / Find Work"
          title="Find Freelance Projects And Future Job Opportunities"
          description="A clear service page for freelancers and job seekers. Job seeker opportunities can stay marked as coming soon until the module is activated."
        />

        <section className="mb-10 rounded-[2rem] bg-white p-6 shadow-lg md:p-8">
          <div className="grid gap-4 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr_0.5fr]">
            <FilterInput value={workSearch} onChange={setWorkSearch} placeholder="Search opportunities, companies, or skills" />
            <SelectField label="Opportunity For" value={workAudience} onChange={setWorkAudience} options={['All', 'Freelancer', 'Job Seeker']} />
            <SelectField label="Work Type" value={workType} onChange={setWorkType} options={['All Types', 'Remote', 'Hybrid', 'Onsite']} />
            <SelectField label="Category" value={workCategory} onChange={setWorkCategory} options={['All Categories', 'Design', 'Development', 'Networks', 'Writing', 'IT Support', 'Data']} />
            <div className="flex items-end">
              <button
                type="button"
                onClick={() => {
                  setWorkSearch('');
                  setWorkAudience('All');
                  setWorkType('All Types');
                  setWorkCategory('All Categories');
                }}
                className="w-full rounded-xl bg-[#123b8b] px-4 py-3 font-medium text-white"
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredOpportunities.map((opportunity) => (
            <div key={opportunity.title} className="rounded-[2rem] bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d9e1ea] text-3xl">
                    {opportunity.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#123b8b]">{opportunity.title}</h3>
                    <p className="text-sm font-medium text-gray-600">{opportunity.company}</p>
                  </div>
                </div>
                <Tag tone={opportunity.comingSoon ? 'amber' : 'blue'}>{opportunity.audience}</Tag>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-[#f7f9fc] px-4 py-3">
                  <div className="text-xs text-gray-500">Budget / Status</div>
                  <div className="mt-1 font-semibold text-[#123b8b]">{opportunity.budget}</div>
                </div>
                <div className="rounded-xl bg-[#f7f9fc] px-4 py-3">
                  <div className="text-xs text-gray-500">Posted By</div>
                  <div className="mt-1 font-semibold text-[#123b8b]">{opportunity.postedBy}</div>
                </div>
                <div className="rounded-xl bg-[#f7f9fc] px-4 py-3">
                  <div className="text-xs text-gray-500">Applications</div>
                  <div className="mt-1 font-semibold text-[#123b8b]">{opportunity.applicants}</div>
                </div>
                <div className="rounded-xl bg-[#f7f9fc] px-4 py-3">
                  <div className="text-xs text-gray-500">Deadline</div>
                  <div className="mt-1 font-semibold text-[#123b8b]">{opportunity.deadline}</div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="rounded-full bg-[#f1f5f9] px-3 py-1">📍 {opportunity.location}</span>
                <span className="rounded-full bg-[#f1f5f9] px-3 py-1">⏳ {opportunity.duration}</span>
                <span className="rounded-full bg-[#f1f5f9] px-3 py-1">📂 {opportunity.category}</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {opportunity.tags.map((tag) => (
                  <Tag key={tag} tone="cyan">{tag}</Tag>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <OutlineButton className="flex-1" onClick={() => openLoginRequiredModal('opportunity details')}>View Details</OutlineButton>
                <PrimaryButton className="flex-1" disabled={opportunity.comingSoon} onClick={() => openLoginRequiredModal('apply to this opportunity')}>{opportunity.comingSoon ? 'Coming Soon' : 'Apply Now'}</PrimaryButton>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );

  const renderHireTalentPage = () => (
    <div className="min-h-[calc(100vh-80px)] bg-[#f2f4f7] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHero
          badge="Services / Hire Talent"
          title="Browse Freelancers And Future Job Seeker Profiles"
          description="A professional directory where companies and individual clients can search for the right people. Profiles remain clearly marked as Freelancer or Job Seeker."
        />

        <section className="mb-10 rounded-[2rem] bg-white p-6 shadow-lg md:p-8">
          <div className="grid gap-4 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr_0.5fr]">
            <FilterInput value={hireSearch} onChange={setHireSearch} placeholder="Search by name, role, location, or skill" />
            <SelectField label="Talent Type" value={hireTalentType} onChange={setHireTalentType} options={['All Talent', 'Freelancer', 'Job Seeker']} />
            <SelectField label="Category" value={hireCategory} onChange={setHireCategory} options={['All Categories', 'Design', 'Development', 'Operations', 'Networks', 'Data', 'Marketing']} />
            <SelectField label="Level" value={hireLevel} onChange={setHireLevel} options={['All Levels', 'Entry', 'Junior', 'Intermediate', 'Professional', 'Expert']} />
            <div className="flex items-end">
              <button
                type="button"
                onClick={() => {
                  setHireSearch('');
                  setHireTalentType('All Talent');
                  setHireCategory('All Categories');
                  setHireLevel('All Levels');
                }}
                className="w-full rounded-xl bg-[#123b8b] px-4 py-3 font-medium text-white"
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredTalent.map((talent) => (
            <div key={talent.name} className="rounded-[2rem] bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d9e1ea] text-3xl">
                    {talent.image}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#123b8b]">{talent.name}</h3>
                    <p className="text-sm font-medium text-gray-600">{talent.role}</p>
                  </div>
                </div>
                <Tag tone={talent.talentType === 'Job Seeker' ? 'amber' : 'blue'}>{talent.talentType}</Tag>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-[#f7f9fc] px-4 py-3">
                  <div className="text-xs text-gray-500">Rating</div>
                  <div className="mt-1 font-semibold text-[#123b8b]">⭐ {talent.rating} <span className="text-xs font-medium text-gray-500">({talent.reviews} reviews)</span></div>
                </div>
                <div className="rounded-xl bg-[#f7f9fc] px-4 py-3">
                  <div className="text-xs text-gray-500">Experience</div>
                  <div className="mt-1 font-semibold text-[#123b8b]">{talent.experience}</div>
                </div>
                <div className="rounded-xl bg-[#f7f9fc] px-4 py-3">
                  <div className="text-xs text-gray-500">Location</div>
                  <div className="mt-1 font-semibold text-[#123b8b]">{talent.location}</div>
                </div>
                <div className="rounded-xl bg-[#f7f9fc] px-4 py-3">
                  <div className="text-xs text-gray-500">Rate / Status</div>
                  <div className="mt-1 font-semibold text-[#123b8b]">{talent.rate}</div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {talent.skills.map((skill) => (
                  <Tag key={skill} tone="cyan">{skill}</Tag>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <OutlineButton className="flex-1" onClick={() => openLoginRequiredModal('talent profile')}>View Profile</OutlineButton>
                <PrimaryButton className="flex-1" disabled={talent.comingSoon} onClick={() => openLoginRequiredModal('contact talent')}>{talent.comingSoon ? 'Coming Soon' : 'Contact'}</PrimaryButton>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );

  const renderTrainingPage = () => (
    <div className="min-h-[calc(100vh-80px)] bg-[#f2f4f7] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHero
          badge="Services / Training Opportunities"
          title="Nafadh Training, Workshops, And TRA Opportunities"
          description="A dedicated area for professional development opportunities instead of mixing training randomly with freelance projects."
        />

        <section className="mb-10 rounded-[2rem] bg-white p-6 shadow-lg md:p-8">
          <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.5fr]">
            <FilterInput value={trainingSearch} onChange={setTrainingSearch} placeholder="Search training, workshop, source, or audience" />
            <SelectField label="Source" value={trainingSource} onChange={setTrainingSource} options={['All Sources', 'Nafadh', 'TRA']} />
            <SelectField label="Format" value={trainingFormat} onChange={setTrainingFormat} options={['All Formats', 'Training', 'Workshop', 'Session']} />
            <div className="flex items-end">
              <button
                type="button"
                onClick={() => {
                  setTrainingSearch('');
                  setTrainingSource('All Sources');
                  setTrainingFormat('All Formats');
                }}
                className="w-full rounded-xl bg-[#123b8b] px-4 py-3 font-medium text-white"
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {filteredTrainings.map((training) => (
            <div key={training.title} className="rounded-[2rem] bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-3xl">{training.icon}</span>
                <Tag tone={training.source === 'TRA' ? 'amber' : 'blue'}>{training.source}</Tag>
                <Tag tone="cyan">{training.format}</Tag>
                <Tag tone="green">{training.status}</Tag>
              </div>
              <h3 className="text-xl font-bold text-[#123b8b]">{training.title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{training.description}</p>
              <div className="mt-4 text-sm text-gray-500">
                Target Group: <span className="font-semibold text-[#123b8b]">{training.audience}</span>
              </div>
              <div className="mt-6 flex justify-end">
                <OutlineButton onClick={() => openLoginRequiredModal('training opportunity')}>View Opportunity</OutlineButton>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );

  const renderAboutPage = () => (
    <div className="min-h-[calc(100vh-80px)] bg-[#f2f4f7] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHero
          badge="About Nafadh"
          title="A Unified Digital Platform For Work, Talent, Tenders, And Training"
          description="Nafadh connects skilled individuals, companies, individual clients, and opportunities through one clear and trusted digital experience across Oman."
        />

        <div className="mb-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['3,400+', 'Registered Users', '👥'],
            ['120+', 'Available Opportunities', '💼'],
            ['35+', 'Training Programs', '🎓'],
            ['25+', 'Partner Entities', '🤝'],
          ].map(([value, label, icon]) => (
            <div key={label} className="flex min-h-[132px] items-center justify-between gap-5 rounded-[1.5rem] border border-blue-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eaf4ff] text-2xl">{icon}</div>
              <div className="text-right">
                <div className="text-3xl font-bold leading-none text-[#123b8b]">{value}</div>
                <div className="mt-2 text-sm font-semibold text-slate-800">{label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-5">
          <div className="flex flex-col gap-8 lg:col-span-3">
            <div className="h-full rounded-[2rem] bg-white p-8 shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-[#d9e1ea] px-4 py-2 text-sm font-semibold text-[#123b8b]">Who We Are</div>
              <h2 className="text-3xl font-bold text-[#123b8b]">About Nafadh</h2>
              <div className="mt-5 space-y-4 text-[15px] leading-8 text-gray-700">
                <p>
                  Nafadh is designed as a unified service platform that brings together work opportunities, skilled freelancers, job seeker profiles, training programs, and tender-related journeys under one professional digital identity.
                </p>
                <p>
                  The platform supports a wider market need: companies can publish opportunities, individuals can request independent services, freelancers can find project-based work, and job seekers can prepare for future skill-based employment journeys.
                </p>
                <p>
                  Instead of separating users across disconnected systems, Nafadh provides a clear entry point and guided experience for each user type while keeping room for future modules such as matching, applications, interviews, offers, and credentials.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex h-full flex-col">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf4ff] text-3xl">🎯</div>
                  <h3 className="text-2xl font-bold text-[#123b8b]">Our Mission</h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    To simplify access to work opportunities and connect skilled individuals with real market needs through a trusted and easy-to-use digital platform.
                  </p>
                </div>
                <div className="flex h-full flex-col">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-3xl">🚀</div>
                  <h3 className="text-2xl font-bold text-[#123b8b]">Our Vision</h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    To build a national digital ecosystem that empowers freelancing, employment, training, tenders, and skill development in Oman.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-[2rem] bg-[#123b8b] p-8 text-white shadow-lg">
              <h2 className="text-2xl font-bold">What Nafadh Offers</h2>
              <div className="mt-6 flex flex-1 flex-col gap-4 text-sm leading-6 text-white/90">
                {[
                  ['💼', 'For Freelancers', 'Find project-based opportunities, showcase services, and build visibility.'],
                  ['🎓', 'For Job Seekers', 'Build a career profile and prepare for future skill-based job matching.'],
                  ['🏢', 'For Companies', 'Post opportunities, browse candidates, and manage hiring journeys.'],
                  ['👤', 'For Individuals', 'Request services from skilled freelancers for personal or business needs.'],
                  ['🎓', 'Training & Development', 'Access workshops, TRA programs, and learning opportunities.'],
                ].map(([icon, title, text]) => (
                  <div key={title} className="flex-1 rounded-xl bg-white/10 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">{icon}</span>
                      <div>
                        <div className="font-semibold text-white">{title}</div>
                        <div className="mt-1 text-white/78">{text}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-[#123b8b] via-[#0f4f9e] to-[#10b3b7] p-8 text-white shadow-xl md:p-10">
          <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">Platform Direction</div>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Built to make opportunities easier to understand and access</h2>
              <p className="mt-4 max-w-3xl leading-8 text-white/85">
                The value of Nafadh is not only in listing opportunities. Its strength is in organizing different journeys into one clear system: find work, hire skilled people, explore training, and connect with tender-related services.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['Unified Experience', 'One connected entry instead of separated systems.'],
                ['Clear User Journeys', 'Each user type understands where to start.'],
                ['Skill-Based Direction', 'Future matching can rely on skills and profiles.'],
                ['Scalable Structure', 'Ready to grow with applications, interviews, offers, and evaluations.'],
              ].map(([title, text]) => (
                <div key={title} className="h-full rounded-2xl border border-white/15 bg-white/10 p-4">
                  <div className="font-semibold text-white">{title}</div>
                  <div className="mt-1 text-sm leading-6 text-white/78">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="min-h-[calc(100vh-80px)] bg-[#f2f4f7] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHero
          badge="Contact Nafadh"
          title="Share Your Questions, Suggestions, Or System Feedback"
          description="Use this page to contact the Nafadh team, report errors, suggest improvements, or share development-related notes that can help improve the platform experience."
        />

        <div className="grid items-stretch gap-8 lg:grid-cols-5">
          <div className="rounded-[2rem] bg-white p-8 shadow-lg lg:col-span-3">
            <div className="mb-6">
              <div className="inline-flex rounded-full bg-[#d9e1ea] px-4 py-2 text-sm font-semibold text-[#123b8b]">Message Center</div>
              <h2 className="mt-4 text-3xl font-bold text-[#123b8b]">Send Us a Message</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                This form is intentionally simple so visitors can quickly send questions, suggestions, bug reports, or development feedback without needing to log in first.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#123b8b]"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#123b8b]"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Message Type</label>
                <select className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#123b8b]">
                  {['General Question', 'Suggestion', 'Bug / Error Report', 'Development Feedback', 'Partnership Inquiry'].map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Subject</label>
                <input
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#123b8b]"
                  placeholder="Write a short subject"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={7}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#123b8b]"
                placeholder="Describe your question, suggestion, issue, or development note clearly. If you are reporting an error, mention where it happened and what you expected to happen."
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#f7f9fc] p-5">
              <div className="max-w-xl text-sm leading-6 text-gray-600">
                <span className="font-semibold text-[#123b8b]">Note: </span>
                You can send feedback even if you are not registered. The team can review your message and follow up through your email.
              </div>
              <PrimaryButton onClick={() => {}}>Send Message</PrimaryButton>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="h-full rounded-[2rem] bg-[#123b8b] p-8 text-white shadow-lg">
              <h2 className="flex items-center gap-2 text-2xl font-bold">📍 Contact Info</h2>
              <p className="mt-3 text-sm leading-6 text-white/80">
                Reach the Nafadh team for platform support, service inquiries, suggestions, and system improvement notes.
              </p>
              <div className="mt-6 space-y-4 text-sm">
                {[
                  ['📍', 'Location', 'Muscat, Sultanate of Oman'],
                  ['✉️', 'Email', 'info@nafadh.om'],
                  ['📞', 'Phone', '22650660'],
                ].map(([icon, label, text]) => (
                  <div key={label} className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-4">
                    <span className="text-lg">{icon}</span>
                    <div>
                      <div className="font-semibold">{label}</div>
                      <div className="mt-1 text-white/85">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['❓', 'Questions', 'Ask about registration, services, opportunities, or how to use Nafadh.'],
            ['💡', 'Suggestions', 'Share ideas that can improve the platform experience or future features.'],
            ['🐞', 'Bug Reports', 'Report errors, broken flows, unclear pages, or technical issues.'],
            ['🛠️', 'Development Notes', 'Send feedback related to UI, UX, system behavior, or service workflow.'],
          ].map(([icon, title, text]) => (
            <div key={title} className="h-full rounded-[1.5rem] border border-blue-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf4ff] text-2xl">{icon}</div>
              <h3 className="mt-4 text-lg font-bold text-[#123b8b]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLoginPage = () => (
    <div className="min-h-[calc(100vh-80px)] bg-[#f2f4f7] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr]">
        <AuthVisualPanel badge="Nafadh Access" />

        <div className="rounded-[2rem] bg-white p-8 shadow-xl md:p-10">
          <div className="mb-8">
            <div className="inline-flex rounded-full bg-[#d9e1ea] px-4 py-2 text-sm font-medium text-[#123b8b]">Welcome Back</div>
            <h1 className="mt-4 text-4xl font-bold text-[#123b8b]">Log in to Nafadh</h1>
            <p className="mt-3 max-w-2xl text-gray-600">
              Enter your email and password. Nafadh will detect your account type and take you to the right dashboard.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
              <div className="flex items-center rounded-xl border border-gray-200 bg-[#f9fafb] px-4 py-3">
                <span className="mr-3 text-lg">✉️</span>
                <input className="w-full bg-transparent outline-none" placeholder="Enter email address" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
              <div className="flex items-center rounded-xl border border-gray-200 bg-[#f9fafb] px-4 py-3">
                <span className="mr-3 text-lg">🔒</span>
                <input type="password" className="w-full bg-transparent outline-none" placeholder="Enter password" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded" />
              <span>Remember me</span>
            </label>
            <button type="button" className="font-medium text-[#123b8b]">Forgot password?</button>
          </div>

          <div className="mt-8 space-y-4">
            <PrimaryButton className="w-full" onClick={() => goToDashboard(loginRole)}>Log in</PrimaryButton>
            <OutlineButton className="w-full" onClick={() => {}}>Log in with PKI</OutlineButton>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            Do not have an account?{' '}
            <button type="button" onClick={() => goToPage('join')} className="font-semibold text-[#123b8b] underline">Join Nafadh</button>
          </div>

        </div>
      </div>
    </div>
  );
  const renderJoinPage = () => {
    const roleOptions = [
      {
        role: 'Freelancer',
        icon: '💼',
        title: 'Freelancer',
        text: 'Offer services, build a profile, and apply to projects.',
      },
      {
        role: 'Job Seeker',
        icon: '🎓',
        title: 'Job Seeker',
        text: 'Create a career profile and prepare for future job matching.',
      },
      {
        role: 'Company',
        icon: '🏢',
        title: 'Company',
        text: 'Post opportunities, request skilled people, and manage hiring.',
      },
      {
        role: 'Individual Client',
        icon: '🏠',
        title: 'Individual Client',
        text: 'Request services as a person, trader, or shop owner.',
      },
    ];

    const FieldBox = ({ label, icon, placeholder = 'Enter value', type = 'text' }) => (
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">{label}</label>
        <div className="flex items-center rounded-xl border border-gray-200 bg-[#f9fafb] px-4 py-3">
          <span className="mr-3 text-lg">{icon}</span>
          <input type={type} className="w-full bg-transparent outline-none" placeholder={placeholder || "Enter value"} />
        </div>
      </div>
    );

    const SelectBox = ({ label, icon, options }) => (
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">{label}</label>
        <div className="flex items-center rounded-xl border border-gray-200 bg-[#f9fafb] px-4 py-3">
          <span className="mr-3 text-lg">{icon}</span>
          <select className="w-full bg-transparent outline-none">
            {options.map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>
      </div>
    );

    return (
      <div className="min-h-[calc(100vh-80px)] bg-[#f2f4f7] px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr]">
          <AuthVisualPanel badge="Join Nafadh" title="Start with the right path" subtitle="Select your account type and fill only the fields you need." />

          <div className="rounded-[2rem] bg-white p-8 shadow-xl md:p-10">
            <div className="mb-8">
              <div className="inline-flex rounded-full bg-[#d9e1ea] px-4 py-2 text-sm font-medium text-[#123b8b]">Create Account</div>
              <h1 className="mt-4 text-4xl font-bold text-[#123b8b]">Join Nafadh</h1>
              <p className="mt-3 max-w-2xl text-gray-600">
                Choose your account type first. The registration form updates to show only the relevant information.
              </p>
            </div>

            <div className="mb-6">
              <div className="mb-3 text-sm font-semibold text-gray-700">Choose how you want to use Nafadh</div>
              <div className="grid gap-3 md:grid-cols-2">
                {roleOptions.map((option) => (
                  <button
                    key={option.role}
                    type="button"
                    onClick={() => setRegisterRole(option.role)}
                    className={
                      registerRole === option.role
                        ? 'rounded-2xl border border-[#123b8b] bg-[#123b8b] p-4 text-left text-white shadow-lg'
                        : 'rounded-2xl border border-gray-200 bg-[#f9fbff] p-4 text-left text-gray-700 transition hover:-translate-y-0.5 hover:bg-white hover:shadow'
                    }
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-2xl">{option.icon}</span>
                      <span className="font-bold">{option.title}</span>
                    </div>
                    <p className={registerRole === option.role ? 'text-sm leading-6 text-white/85' : 'text-sm leading-6 text-gray-500'}>{option.text}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-[#f9fbff] p-5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-2xl font-bold text-[#123b8b]">{selectedRoleMeta.title}</div>
                {selectedRoleMeta.comingSoon ? <Tag tone="amber">Coming Soon</Tag> : null}
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-600">{selectedRoleMeta.description}</p>
              {registerRole === 'Company' ? (
                <div className="mt-3 rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm">
                  <span className="font-semibold text-[#123b8b]">Later in profile completion: </span>
                  Company Type will classify the account as SME, Non-SME, Government, or Other.
                </div>
              ) : null}
              {registerRole === 'Individual Client' ? (
                <div className="mt-3 rounded-xl border border-cyan-100 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm">
                  <span className="font-semibold text-[#123b8b]">Later in profile completion: </span>
                  Individual Type can be Personal Request, Trader / Shop Owner, Home Service Request, or Other.
                </div>
              ) : null}
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {registerRole === 'Company' ? (
                <>
                  <FieldBox label="Commercial Registration Number" icon="🏷️" />
                  <FieldBox label="Company Name" icon="🏢" />
                  <FieldBox label="Contact Person Name" icon="👤" />
                  <FieldBox label="Official Email Address" icon="✉️" />
                  <FieldBox label="Phone Number" icon="📞" />
                  <SelectBox label="Main Hiring Need" icon="🎯" options={['Post freelance projects', 'Find job seekers', 'Request services', 'Training collaboration', 'Tenders']} />
                </>
              ) : registerRole === 'Individual Client' ? (
                <>
                  <FieldBox label="Civil ID" icon="🪪" />
                  <FieldBox label="Full Name" icon="👤" />
                  <FieldBox label="Phone Number" icon="📞" />
                  <FieldBox label="Email Address" icon="✉️" />
                  <SelectBox label="Request Type" icon="🧭" options={['Personal request', 'Trader / Shop owner', 'Home service request', 'Technical support', 'Other']} />
                  <SelectBox label="Service Interest" icon="🛠️" options={['CCTV / Networks', 'Website', 'Design', 'Maintenance', 'Data / Reports', 'Other']} />
                </>
              ) : registerRole === 'Job Seeker' ? (
                <>
                  <FieldBox label="Civil ID" icon="🪪" />
                  <FieldBox label="Full Name" icon="👤" />
                  <FieldBox label="Email Address" icon="✉️" />
                  <FieldBox label="Phone Number" icon="📞" />
                  <SelectBox label="Highest Education" icon="🎓" options={['Diploma', 'Bachelor', 'Master', 'Other']} />
                  <SelectBox label="Career Interest" icon="🎯" options={['IT Support', 'Development', 'Data', 'Operations', 'Design', 'Marketing']} />
                </>
              ) : (
                <>
                  <FieldBox label="Civil ID / Freelancer ID" icon="🪪" />
                  <FieldBox label="Full Name" icon="👤" />
                  <FieldBox label="Email Address" icon="✉️" />
                  <FieldBox label="Phone Number" icon="📞" />
                  <SelectBox label="Primary Service Category" icon="💼" options={['Design', 'Development', 'Networks', 'Writing', 'Data', 'Marketing']} />
                  <SelectBox label="Availability" icon="⏱️" options={['Available now', 'Part-time', 'Project-based', 'Open for invitations']} />
                </>
              )}
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <FieldBox label="Password" icon="🔒" type="password" placeholder="Enter password" />
              <FieldBox label="Confirm Password" icon="🔐" type="password" placeholder="Confirm password" />
            </div>

            <div className="mt-6 rounded-2xl bg-[#f7f9fc] p-5 text-sm text-gray-600">
              <div className="font-semibold text-[#123b8b]">Next Step After Registration</div>
              <div className="mt-2">After account creation, users complete a role-specific profile before using full platform features.</div>
            </div>

            <div className="mt-8">
              <PrimaryButton className="w-full" onClick={() => goToDashboard(registerRole)}>Create {registerRole} Account</PrimaryButton>
            </div>

            <div className="mt-8 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button type="button" onClick={() => goToPage('login')} className="font-semibold text-[#123b8b] underline">Log in</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const rolePageMap = {
    Freelancer: 'dashboard-freelancer',
    'Job Seeker': 'dashboard-jobseeker',
    'Company': 'dashboard-company',
    'Individual Client': 'dashboard-individual',
    Operator: 'dashboard-operator',
    'System Admin': 'dashboard-admin',
  };

  const dashboardNavigation = {
    Freelancer: { Dashboard: 'dashboard-freelancer', 'My Profile': 'freelancer-profile', 'Find Work': 'work', Proposals: 'freelancer-proposals', 'Active Projects': 'freelancer-projects', Portfolio: 'freelancer-portfolio', Payments: 'freelancer-payments', Support: 'contact' },
    'Job Seeker': { Dashboard: 'dashboard-jobseeker', 'My CV': 'jobseeker-profile', 'Job Matches': 'jobseeker-opportunities', Applications: 'jobseeker-applications', Interviews: 'jobseeker-interviews', Offers: 'jobseeker-offers', Courses: 'jobseeker-training', Certificates: 'jobseeker-profile', Settings: 'dashboard-jobseeker' },
    'Company': { Dashboard: 'dashboard-company', 'Company Profile': 'company-profile', 'Post Opportunity': 'company-create-opportunity', Applicants: 'company-applications', 'Hire Talent': 'company-candidate-search', Interviews: 'company-interviews', Offers: 'company-offers', Tenders: 'hire', 'Training Requests': 'training', Reports: 'company-reports' },
    'Individual Client': { Dashboard: 'dashboard-individual', 'Individual Profile': 'individual-profile', 'Post Request': 'company-create-opportunity', 'My Requests': 'company-applications', Messages: 'dashboard-individual', 'Saved Talent': 'hire', Invoices: 'dashboard-individual', Support: 'contact' },
    Operator: { Dashboard: 'dashboard-operator', Opportunities: 'admin-opportunities', Tenders: 'hire', Training: 'training', Applicants: 'company-applications', Evaluations: 'admin-credentials', Reports: 'admin-reports', Settings: 'admin-config' },
    'System Admin': { Dashboard: 'dashboard-admin', 'System Admin': 'admin-config', 'User Management': 'admin-users', 'Skills Management': 'admin-skills', 'Credential Management': 'admin-credentials', 'Interview Management': 'company-interviews', 'Project Monitoring': 'admin-opportunities', 'Payment Disputes': 'admin-reports', Reports: 'admin-reports' },
  };

  const goToDashboardItem = (role, item) => {
    const target = dashboardNavigation[role]?.[item] || rolePageMap[role] || 'home';
    goToPage(target);
  };

  const roleDashboardMeta = {
    Freelancer: {
      title: 'Freelancer Dashboard',
      subtitle: 'Manage your profile, proposals, active projects, and service portfolio.',
      sidebar: ['Dashboard', 'My Profile', 'Find Work', 'Proposals', 'Active Projects', 'Portfolio', 'Payments', 'Support'],
      cards: [['Active Proposals', '8', '📨'], ['Completed Projects', '21', '✅'], ['Profile Views', '156', '👁️'], ['Pending Earnings', 'OMR 420', '💰']],
      mainTitle: 'Recommended opportunities for you',
      mainItems: [['Website redesign for SME', 'UI/UX · Remote · OMR 450 - 700', 'Apply'], ['Dashboard frontend support', 'React · Hybrid · OMR 600 - 900', 'View'], ['CCTV installation request', 'Networks · Onsite · OMR 180 - 320', 'Apply']],
      quickTitle: 'Profile completion',
      quickInfo: 'Complete skills, portfolio, and service packages to increase your visibility.',
      accent: 'from-[#123b8b] to-[#10b3b7]',
    },
    'Job Seeker': {
      title: 'Job Seeker Dashboard',
      subtitle: 'Prototype example for CV, applications, interviews, and career readiness.',
      sidebar: ['Dashboard', 'My CV', 'Job Matches', 'Applications', 'Interviews', 'Offers', 'Courses', 'Certificates', 'Settings'],
      cards: [['Job Matches', '12', '🎯'], ['Applications', '5', '📄'], ['Interviews', '2', '📅'], ['CV Strength', '78%', '⭐']],
      mainTitle: 'Suggested job opportunities',
      mainItems: [['Junior IT Support Specialist', 'Muscat · Entry Level · Onsite', 'Coming Soon'], ['Data Analyst Graduate Opportunity', 'Sohar · Hybrid · Power BI', 'Coming Soon'], ['Technical Operations Coordinator', 'Muscat · Documentation · Coordination', 'Coming Soon']],
      quickTitle: 'Career profile status',
      quickInfo: 'This module can stay marked as coming soon, while the dashboard shows the intended user journey clearly.',
      accent: 'from-[#0f4f9e] to-[#10b3b7]',
    },
    'Company': {
      title: 'Company Dashboard',
      subtitle: 'Publish opportunities, manage applicants, browse talent, and access tender journeys.',
      sidebar: ['Dashboard', 'Company Profile', 'Post Opportunity', 'Applicants', 'Hire Talent', 'Interviews', 'Offers', 'Tenders', 'Training Requests', 'Reports'],
      cards: [['Posted Opportunities', '6', '📌'], ['Applicants', '48', '👥'], ['Shortlisted', '9', '✅'], ['Open Tenders', '3', '📑']],
      mainTitle: 'Recent company activities',
      mainItems: [['Frontend developer applicants', '26 applicants · 8 shortlisted', 'Review'], ['Network maintenance tender', 'Closing in 8 days', 'Open'], ['Workshop request submitted', 'Pending Nafadh review', 'View']],
      quickTitle: 'Hiring guidance',
      quickInfo: 'Companies can post freelance projects, future job opportunities, and access existing tender systems from one account. SME / Non-SME classification belongs in profile completion, not login or signup.',
      accent: 'from-[#123b8b] to-[#0ea5a6]',
    },
    'Individual Client': {
      title: 'Individual Client Dashboard',
      subtitle: 'Request independent services even if you are not a registered company.',
      sidebar: ['Dashboard', 'Individual Profile', 'Post Request', 'My Requests', 'Messages', 'Saved Talent', 'Invoices', 'Support'],
      cards: [['Open Requests', '2', '📝'], ['Offers Received', '14', '📨'], ['Saved Talent', '7', '⭐'], ['Completed Requests', '3', '✅']],
      mainTitle: 'Your recent requests',
      mainItems: [['Install CCTV cameras for home', '8 offers received · Barka', 'Compare'], ['Personal website setup', '4 offers received · Remote', 'View'], ['Router configuration support', 'Completed last week', 'Details']],
      quickTitle: 'Simple service request',
      quickInfo: 'This account type supports personal clients, traders, shop owners, and people who need services without registering as companies.',
      accent: 'from-[#0f766e] to-[#123b8b]',
    },
    Operator: {
      title: 'Operator Dashboard',
      subtitle: 'Manage submitted opportunities, tender-related requests, training records, and applicant workflows.',
      sidebar: ['Dashboard', 'Opportunities', 'Tenders', 'Training', 'Applicants', 'Evaluations', 'Reports', 'Settings'],
      cards: [['Published Items', '18', '📣'], ['Active Programs', '4', '🎓'], ['Applicants', '320', '👥'], ['Reports', '11', '📊']],
      mainTitle: 'Operator overview',
      mainItems: [['TRA Cybersecurity Awareness Training', 'Open registration · Public', 'Manage'], ['Digital freelancing workshop', 'Nafadh program · Upcoming', 'View'], ['Tender publishing request', 'Pending approval', 'Review']],
      quickTitle: 'Operations note',
      quickInfo: 'Operator is an approved operational account. It is not the same as a public visitor account.',
      accent: 'from-[#082f74] to-[#10b3b7]',
    },
    'System Admin': {
      title: 'System Admin Dashboard',
      subtitle: 'Internal Nafadh/TRA administration area for managing system configuration, users, approvals, and reports.',
      sidebar: ['Dashboard', 'System Admin', 'User Management', 'Skills Management', 'Credential Management', 'Interview Management', 'Project Monitoring', 'Payment Disputes', 'Reports'],
      cards: [['System Users', '84', '👥'], ['Pending Approvals', '12', '⏳'], ['Active Modules', '7', '⚙️'], ['Reports', '11', '📊']],
      mainTitle: 'Administration overview',
      mainItems: [['System configuration', 'Allow user skill rating · Maintenance enabled', 'Edit'], ['Skills categories', 'Software · Data & AI · Networks', 'Manage'], ['Credential evaluations', '2 evaluations · 1 exam · 1 course', 'Review']],
      quickTitle: 'Admin access note',
      quickInfo: 'System Admin is login-only and should not appear in public registration. This follows the admin-style reference with a left sidebar and simple management tables.',
      accent: 'from-[#082f74] to-[#10b3b7]',
    },
  };

  const goToDashboard = (role = loginRole) => {
    setLoginRole(role);
    setCurrentPage(rolePageMap[role] || 'dashboard-freelancer');
    setIsServicesMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsLanguageMenuOpen(false);
    scrollToTop();
  };

  const renderUserDashboardPage = (role) => {
    const meta = roleDashboardMeta[role] || roleDashboardMeta.Freelancer;
    const isAdmin = role === 'System Admin';

    return (
      <div className="min-h-screen bg-[#f7f9fc] text-slate-800">
        <div className="flex min-h-screen">
          <aside className="hidden w-[215px] shrink-0 bg-gradient-to-b from-[#053b91] via-[#0753a8] to-[#02aab5] text-white shadow-xl lg:flex lg:flex-col">
            <div className="px-5 py-7">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg font-bold">N</div>
                <div>
                  <div className="text-lg font-bold leading-5">Nafadh</div>
                  <div className="text-[11px] text-white/70">{role}</div>
                </div>
              </div>

              <nav className="space-y-1.5 text-[13px]">
                {meta.sidebar.map((item, index) => {
                  const targetPage = dashboardNavigation[role]?.[item] || rolePageMap[role];
                  const active = currentPage === targetPage || (index === 0 && currentPage === rolePageMap[role]);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => goToDashboardItem(role, item)}
                      className={`flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left transition ${
                        active ? 'bg-white/16 text-white shadow-sm' : 'text-white/82 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="w-5 text-center text-sm">{index === 0 ? '⌂' : '▹'}</span>
                      <span>{item}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="mt-auto px-5 py-7">
              <div className="mb-2 text-xs font-semibold text-white">Telecommunications Regulatory Authority</div>
              <div className="text-[11px] leading-5 text-white/70">Prototype dashboard theme based on the shared Job Seeker/Admin reference.</div>
            </div>
          </aside>

          <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-8">
            <div className="mb-5 flex items-center justify-between rounded-sm bg-white px-5 py-3 shadow-sm">
              <div>
                <div className="text-xs text-slate-500">Home / Dashboard</div>
                <h1 className="mt-1 text-xl font-semibold text-slate-900">Welcome back, {isAdmin ? 'Administrator' : role}</h1>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 shadow-sm">🔔</button>
                <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 shadow-sm">⚙</button>
                <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 shadow-sm">👤</button>
              </div>
            </div>

            <section className="mb-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {meta.cards.map(([label, value, icon]) => (
                <div key={label} className="rounded-sm border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef7fb] text-lg">{icon}</div>
                    <div>
                      <div className="text-xs text-slate-500">{label}</div>
                      <div className="text-2xl font-semibold text-[#123b8b]">{value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <h2 className="text-base font-semibold text-slate-900">{meta.mainTitle}</h2>
                    <p className="mt-1 text-xs text-slate-500">This table is a visual prototype only. Actions do not submit data.</p>
                  </div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => goToPage('home')} className="rounded bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">Back</button>
                    <button type="button" className="rounded bg-[#02aab5] px-3 py-2 text-xs font-medium text-white">+ Add</button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[650px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50 text-xs text-slate-500">
                        <th className="px-3 py-3 font-semibold">#</th>
                        <th className="px-3 py-3 font-semibold">Title</th>
                        <th className="px-3 py-3 font-semibold">Details</th>
                        <th className="px-3 py-3 font-semibold">Status</th>
                        <th className="px-3 py-3 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {meta.mainItems.map(([title, desc, action], index) => (
                        <tr key={title} className="border-b border-slate-100 text-slate-700">
                          <td className="px-3 py-3">{index + 1}</td>
                          <td className="px-3 py-3 font-medium text-slate-900">{title}</td>
                          <td className="px-3 py-3 text-slate-500">{desc}</td>
                          <td className="px-3 py-3"><span className="rounded bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">Active</span></td>
                          <td className="px-3 py-3"><button type="button" className="rounded border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700">{action}</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm">
                  <h2 className="text-base font-semibold text-slate-900">{meta.quickTitle}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{meta.quickInfo}</p>
                </div>

                <div className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Quick actions</h3>
                  <div className="mt-4 grid gap-2">
                    <button type="button" onClick={() => goToPage('work')} className="rounded border border-slate-200 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">Explore opportunities</button>
                    <button type="button" onClick={() => goToPage('hire')} className="rounded border border-slate-200 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">Browse talent</button>
                    <button type="button" onClick={() => goToPage('training')} className="rounded border border-slate-200 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">View training</button>
                    <button type="button" onClick={() => goToPage('login')} className="rounded border border-slate-200 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">Switch user type</button>
                  </div>
                </div>

                <div className="rounded-sm border border-slate-100 bg-white p-5 text-xs text-slate-500 shadow-sm">
                  © 2026. All rights reserved.
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  };

  function ModuleStat({ label, value, icon = '●' }) {
    return (
      <div className="rounded-sm border border-slate-100 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef7fb] text-lg">{icon}</div>
          <div><div className="text-xs text-slate-500">{label}</div><div className="text-2xl font-semibold text-[#123b8b]">{value}</div></div>
        </div>
      </div>
    );
  }

  function MiniField({ label, placeholder = 'Enter value', type = 'text' }) {
    return <label className="block"><div className="mb-1.5 text-xs font-semibold text-slate-600">{label}</div><input type={type} placeholder={placeholder} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" /></label>;
  }

  function MiniSelect({ label, options }) {
    return <label className="block"><div className="mb-1.5 text-xs font-semibold text-slate-600">{label}</div><select className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]">{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
  }

  function ProgressBar({ value }) {
    return <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-[#02aab5] to-[#123b8b]" style={{ width: `${value}%` }} /></div>;
  }

  function SimpleTable({ headers, rows }) {
    return (
      <section className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3"><h2 className="text-base font-semibold text-slate-900">Records</h2><button className="rounded bg-[#02aab5] px-3 py-2 text-xs font-medium text-white">+ Add</button></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[700px] border-collapse text-left text-sm"><thead><tr className="border-b border-slate-100 bg-slate-50 text-xs text-slate-500">{headers.map(h => <th key={h} className="px-3 py-3 font-semibold">{h}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i} className="border-b border-slate-100 text-slate-700">{row.map((cell, j) => <td key={`${i}-${j}`} className="px-3 py-3"><span className={j === row.length - 1 ? 'rounded border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700' : j === 0 ? 'font-medium text-slate-900' : ''}>{cell}</span></td>)}</tr>)}</tbody></table></div>
      </section>
    );
  }

  function DashboardShell({ role, title, subtitle, children }) {
    const meta = roleDashboardMeta[role] || roleDashboardMeta.Freelancer;
    return (
      <div className="min-h-screen bg-[#f7f9fc] text-slate-800">
        <div className="flex min-h-screen">
          <aside className="hidden w-[215px] shrink-0 bg-gradient-to-b from-[#053b91] via-[#0753a8] to-[#02aab5] text-white shadow-xl lg:flex lg:flex-col">
            <div className="px-5 py-7">
              <div className="mb-8 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg font-bold">N</div><div><div className="text-lg font-bold leading-5">Nafadh</div><div className="text-[11px] text-white/70">{role}</div></div></div>
              <nav className="space-y-1.5 text-[13px]">
                {meta.sidebar.map((item, index) => {
                  const targetPage = dashboardNavigation[role]?.[item] || rolePageMap[role];
                  const active = currentPage === targetPage || (index === 0 && currentPage === rolePageMap[role]);
                  return <button key={item} type="button" onClick={() => goToDashboardItem(role, item)} className={`flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left transition ${active ? 'bg-white/16 text-white shadow-sm' : 'text-white/82 hover:bg-white/10 hover:text-white'}`}><span className="w-5 text-center text-sm">{index === 0 ? '⌂' : '▹'}</span><span>{item}</span></button>;
                })}
              </nav>
            </div>
            <div className="mt-auto px-5 py-7"><div className="mb-2 text-xs font-semibold text-white">Telecommunications Regulatory Authority</div><div className="text-[11px] leading-5 text-white/70">Simple dashboard theme based on the shared Job Seeker/Admin reference.</div></div>
          </aside>
          <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-8">
            <div className="mb-5 flex items-center justify-between rounded-sm bg-white px-5 py-3 shadow-sm"><div><div className="text-xs text-slate-500">Home / {role}</div><h1 className="mt-1 text-xl font-semibold text-slate-900">{title}</h1><p className="mt-1 text-xs text-slate-500">{subtitle}</p></div><div className="flex items-center gap-2"><button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 shadow-sm">🔔</button><button type="button" onClick={() => goToPage('login')} className="rounded bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">Switch user</button></div></div>
            {children}
            <div className="mt-8 rounded-sm border border-slate-100 bg-white p-4 text-center text-xs text-slate-500 shadow-sm">© 2026. All rights reserved.</div>
          </main>
        </div>
      </div>
    );
  }

  const sampleApplications = [['Junior IT Support Specialist', 'Pending Review', 'Applied', '86%'], ['Data Analyst Graduate Opportunity', 'Shortlisted', 'Employer-Invited', '91%'], ['Technical Operations Coordinator', 'Under Review', 'Organic', '74%']];
  const sampleCandidates = [['Maha Al Kharusi', 'Data', '92%', 'Pending Review'], ['Fatma Al Riyami', 'Operations', '84%', 'Shortlisted'], ['Ahmed Al Abri', 'IT Support', '79%', 'Nominated']];

  const freelancerServices = [
    ['UX Audit Package', 'Design', 'OMR 120', 'Active'],
    ['Frontend Landing Page', 'Development', 'OMR 250', 'Active'],
    ['CCTV Site Visit', 'Networks', 'OMR 35', 'Draft'],
  ];

  const freelancerProposals = [
    ['Website redesign for SME', 'Submitted', 'OMR 650', '82% match', 'View'],
    ['Dashboard frontend support', 'Under Review', 'OMR 900', '91% match', 'Follow up'],
    ['Network and CCTV setup', 'Invited', 'OMR 280', '76% match', 'Respond'],
  ];

  const freelancerProjects = [
    ['Nafadh UI polish', 'In Progress', '2 weeks left', 'OMR 450', 'Update'],
    ['Business website setup', 'Waiting client review', '4 days left', 'OMR 320', 'Open'],
    ['CCTV installation request', 'Completed', 'Closed', 'OMR 190', 'Invoice'],
  ];

  const renderFreelancerProfilePage = () => (
    <DashboardShell role="Freelancer" title="Freelancer Profile" subtitle="A public profile that shows services, skills, experience, portfolio, and availability.">
      <section className="mb-5 grid gap-4 md:grid-cols-4">
        <ModuleStat label="Profile Strength" value="84%" icon="⭐" />
        <ModuleStat label="Published Services" value="3" icon="💼" />
        <ModuleStat label="Portfolio Items" value="6" icon="🖼️" />
        <ModuleStat label="Client Rating" value="4.8" icon="🏅" />
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#eef7fb] text-3xl">👩‍💻</div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Freelancer Name</h2>
              <p className="text-sm text-slate-500">Full Stack Developer · UI/UX Designer · QA Tester</p>
            </div>
          </div>
          <div className="grid gap-3">
            <MiniField label="Professional Title" placeholder="e.g. Full Stack Developer" />
            <MiniSelect label="Primary Category" options={['Design', 'Development', 'Testing', 'Networks', 'Marketing']} />
            <MiniSelect label="Availability" options={['Available now', 'Available part-time', 'Busy', 'Open for invitations']} />
            <MiniField label="Hourly Rate" placeholder="OMR / hour" />
          </div>
        </div>

        <div className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-base font-semibold text-slate-900">Profile Overview</h2>
          <textarea rows={6} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Write a short professional overview for clients." />
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <MiniSelect label="Skill 1" options={['Figma', 'React', 'ASP.NET', 'Laravel', 'Testing']} />
            <MiniSelect label="Skill 2" options={['Figma', 'React', 'ASP.NET', 'Laravel', 'Testing']} />
            <MiniSelect label="Skill 3" options={['Figma', 'React', 'ASP.NET', 'Laravel', 'Testing']} />
          </div>
          <div className="mt-4 flex justify-end"><button className="rounded bg-[#02aab5] px-4 py-2 text-sm text-white">Save Profile</button></div>
        </div>
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-2">
        <SimpleTable headers={['Service', 'Category', 'Price', 'Status', 'Actions']} rows={freelancerServices.map(r => [...r, 'Edit'])} />
        <div className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Visibility Checklist</h2>
          <div className="mt-4 space-y-4 text-sm">
            {[[ 'Complete basic profile', 100 ], [ 'Add at least 3 services', 85 ], [ 'Add portfolio samples', 70 ], [ 'Verify contact information', 90 ]].map(([label, value]) => <div key={label}><div className="mb-1 flex justify-between"><span>{label}</span><span className="font-semibold text-[#123b8b]">{value}%</span></div><ProgressBar value={value} /></div>)}
          </div>
        </div>
      </section>
    </DashboardShell>
  );

  const renderFreelancerProposalsPage = () => (
    <DashboardShell role="Freelancer" title="My Proposals" subtitle="Track submitted proposals, invitations, client responses, and proposal status.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Submitted" value="8" icon="📨" /><ModuleStat label="Under Review" value="3" icon="⏳" /><ModuleStat label="Invitations" value="2" icon="⭐" /><ModuleStat label="Accepted" value="1" icon="✅" /></section>
      <section className="mb-5 rounded-sm border border-slate-100 bg-white p-5 shadow-sm"><div className="grid gap-3 md:grid-cols-4"><MiniField label="Keyword" placeholder="Search proposals" /><MiniSelect label="Status" options={['All', 'Submitted', 'Under Review', 'Invited', 'Accepted', 'Rejected']} /><MiniSelect label="Category" options={['All', 'Design', 'Development', 'Networks', 'Writing']} /><MiniSelect label="Sort" options={['Newest', 'Highest Budget', 'Closest Deadline']} /></div></section>
      <SimpleTable headers={['Opportunity', 'Status', 'Proposed Amount', 'Match', 'Actions']} rows={freelancerProposals} />
    </DashboardShell>
  );

  const renderFreelancerProjectsPage = () => (
    <DashboardShell role="Freelancer" title="Active Projects" subtitle="Manage ongoing work, milestones, delivery status, and client review.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Active Projects" value="3" icon="💼" /><ModuleStat label="Pending Review" value="1" icon="👁️" /><ModuleStat label="Completed" value="21" icon="✅" /><ModuleStat label="Disputes" value="0" icon="🛡️" /></section>
      <SimpleTable headers={['Project', 'Status', 'Timeline', 'Value', 'Actions']} rows={freelancerProjects} />
      <section className="mt-5 grid gap-5 md:grid-cols-3">{['Requirements confirmed', 'Work in progress', 'Submit for review'].map((step, index) => <div key={step} className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-2 text-xs text-slate-500">Milestone {index + 1}</div><div className="font-semibold text-slate-900">{step}</div><p className="mt-2 text-sm text-slate-500">Prototype stage for tracking project delivery.</p></div>)}</section>
    </DashboardShell>
  );

  const renderFreelancerPortfolioPage = () => (
    <DashboardShell role="Freelancer" title="Portfolio" subtitle="Showcase completed work samples linked to skills and service categories.">
      <section className="mb-5 rounded-sm border border-slate-100 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3"><MiniField label="Project Name" /><MiniField label="Project URL" placeholder="https://" /><MiniSelect label="Category" options={['Design', 'Development', 'Data', 'Networks', 'Marketing']} /></div>
        <div className="mt-4 grid gap-4 md:grid-cols-2"><MiniSelect label="Tech Stack Used" options={['React', 'Figma', 'ASP.NET', 'Laravel', 'Power BI']} /><MiniSelect label="Skills Demonstrated" options={['UI Design', 'Frontend', 'Testing', 'Problem Solving']} /></div>
        <label className="mt-4 block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Description</div><textarea rows={4} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Describe your role and impact." /></label>
        <div className="mt-4 flex justify-end"><button className="rounded bg-[#02aab5] px-4 py-2 text-sm text-white">Add Portfolio Item</button></div>
      </section>
      <section className="grid gap-5 md:grid-cols-3">{['Nafadh homepage prototype', 'Business dashboard UI', 'Booking system frontend'].map((title, index) => <div key={title} className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-4 flex h-28 items-center justify-center rounded bg-[#eef7fb] text-4xl">{['🖥️','📊','📱'][index]}</div><h3 className="font-semibold text-[#123b8b]">{title}</h3><p className="mt-2 text-sm text-slate-500">Sample portfolio card for the freelancer public profile.</p><div className="mt-4 flex gap-2"><Tag tone="cyan">React</Tag><Tag tone="blue">UI</Tag></div></div>)}</section>
    </DashboardShell>
  );

  const renderFreelancerPaymentsPage = () => (
    <DashboardShell role="Freelancer" title="Payments" subtitle="Track earnings, invoices, pending payments, and completed transactions.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Pending Earnings" value="OMR 420" icon="💰" /><ModuleStat label="Paid This Month" value="OMR 780" icon="✅" /><ModuleStat label="Invoices" value="6" icon="🧾" /><ModuleStat label="Disputes" value="0" icon="🛡️" /></section>
      <SimpleTable headers={['Invoice', 'Client', 'Amount', 'Status', 'Actions']} rows={[[ 'INV-2026-001', 'SME Company', 'OMR 320', 'Paid', 'View'], ['INV-2026-002', 'Individual Client', 'OMR 180', 'Pending', 'Reminder'], ['INV-2026-003', 'Telecom Partner', 'OMR 420', 'Processing', 'View']]} />
    </DashboardShell>
  );


  const renderJobSeekerProfilePage = () => {
    const tabs = ['Education', 'Experience', 'Projects', 'Certificates', 'Trainings', 'Derived Skills'];
    return <DashboardShell role="Job Seeker" title="Profile Completion" subtitle="Build a structured skill-based profile used for matching and nominations.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Profile Completion" value="78%" icon="⭐" /><ModuleStat label="Derived Skills" value="14" icon="🧠" /><ModuleStat label="Experience Months" value="28" icon="📅" /><ModuleStat label="Credential Score" value="72" icon="🏅" /></section>
      <section className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-5 flex flex-wrap gap-2">{tabs.map((tab) => <button key={tab} type="button" onClick={() => setActiveProfileTab(tab)} className={`rounded px-3 py-2 text-xs font-semibold ${activeProfileTab === tab ? 'bg-[#02aab5] text-white' : 'border border-slate-200 bg-white text-slate-700'}`}>{tab}</button>)}</div>
      {activeProfileTab === 'Derived Skills' ? <div className="grid gap-4 md:grid-cols-2">{[['React', 88, 'Derived from projects and experience'], ['Power BI', 72, 'Derived from training and certificates'], ['Communication', 80, 'Derived from experience'], ['Network Support', 66, 'Derived from field work']].map(([skill, value, note]) => <div key={skill} className="rounded border border-slate-100 bg-slate-50 p-4"><div className="mb-2 flex items-center justify-between text-sm"><span className="font-semibold text-slate-900">{skill}</span><span>{value}%</span></div><ProgressBar value={value} /><p className="mt-2 text-xs text-slate-500">{note}</p></div>)}</div> : <div><div className="mb-4 grid gap-4 md:grid-cols-3"><MiniField label={`${activeProfileTab} Title / Name`} /><MiniField label="Provider / Organization" /><MiniSelect label="Related Skills" options={['React', 'Power BI', 'Communication', 'Network Support']} /></div><div className="mb-4 grid gap-4 md:grid-cols-2"><MiniField label="From Date" type="month" /><MiniField label="To Date" type="month" /></div><label className="block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Description</div><textarea rows={5} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Briefly describe this entry." /></label><div className="mt-4 flex justify-end gap-2"><button className="rounded border border-slate-200 px-3 py-2 text-xs font-medium">Cancel</button><button className="rounded bg-[#02aab5] px-3 py-2 text-xs font-medium text-white">Save / Update</button></div></div>}
      </section></DashboardShell>;
  };

  const renderJobSeekerOpportunitiesPage = () => <DashboardShell role="Job Seeker" title="Browse Opportunities" subtitle="Search opportunities, check match percentage, and start the application flow."><section className="mb-5 rounded-sm border border-slate-100 bg-white p-5 shadow-sm"><div className="grid gap-3 md:grid-cols-5"><MiniField label="Keyword" placeholder="Search title or skill" /><MiniSelect label="Opportunity Type" options={['All', 'Full-Time', 'Part-Time', 'Contract', 'Internship', 'Training']} /><MiniSelect label="Work Mode" options={['All', 'On-site', 'Remote', 'Hybrid']} /><MiniSelect label="Education" options={['All', 'Diploma', 'Bachelor', 'Master']} /><MiniSelect label="Experience" options={['All', '0-1 Years', '2-4 Years', '5+ Years']} /></div></section><section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{opportunityListings.slice(0, 5).map((item, index) => <div key={item.title} className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-3 flex items-center justify-between"><h3 className="font-semibold text-[#123b8b]">{item.title}</h3><Tag tone={index % 2 ? 'cyan' : 'green'}>{index % 2 ? '84%' : '92%'} Match</Tag></div><p className="text-sm text-slate-500">{item.company} · {item.type} · {item.location}</p><div className="mt-4 flex flex-wrap gap-2">{item.tags.map(t => <Tag key={t} tone="cyan">{t}</Tag>)}</div><div className="mt-5 flex gap-2"><button className="rounded border border-slate-200 px-3 py-2 text-xs">Details</button><button className="rounded bg-[#02aab5] px-3 py-2 text-xs text-white">Apply</button></div></div>)}</section></DashboardShell>;
  const renderJobSeekerApplicationsPage = () => <DashboardShell role="Job Seeker" title="My Applications" subtitle="Track applications, nominations, invitations, and current status updates."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Total Applications" value="5" icon="📄" /><ModuleStat label="Pending Review" value="2" icon="⏳" /><ModuleStat label="Shortlisted" value="1" icon="✅" /><ModuleStat label="Offers" value="1" icon="🏁" /></section><SimpleTable headers={['Opportunity', 'Status', 'Source', 'Match', 'Actions']} rows={sampleApplications.map(r => [...r, 'View'])} /></DashboardShell>;
  const renderJobSeekerInterviewsPage = () => <DashboardShell role="Job Seeker" title="Interviews" subtitle="View interview invitations, schedule details, links, and results."><SimpleTable headers={['Opportunity', 'Date', 'Type', 'Location / Link', 'Status']} rows={[['Data Analyst Graduate Opportunity', '2026-05-03 10:00', 'Online', 'Teams link', 'Scheduled'], ['Junior IT Support Specialist', '2026-05-08 09:30', 'On-site', 'Muscat Office', 'Pending']]} /></DashboardShell>;
  const renderJobSeekerOffersPage = () => <DashboardShell role="Job Seeker" title="Offers & Employment" subtitle="Review offers, accept, reject, request amendment, or ask for clarification."><section className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-4 flex items-center justify-between"><div><h3 className="font-semibold text-slate-900">Offer: Data Analyst Graduate Opportunity</h3><p className="text-sm text-slate-500">Status: Issued · Response deadline: 7 days</p></div><Tag tone="amber">Awaiting Response</Tag></div><div className="grid gap-4 md:grid-cols-3"><MiniField label="Start Date" type="date" /><MiniField label="Offer Type" placeholder="Permanent" /><MiniField label="Duration / End Date" type="date" /></div><div className="mt-5 flex flex-wrap gap-2"><button className="rounded bg-emerald-600 px-4 py-2 text-sm text-white">Accept</button><button className="rounded bg-red-50 px-4 py-2 text-sm text-red-700">Reject</button><button className="rounded border border-slate-200 px-4 py-2 text-sm">Request Amendment</button><button className="rounded border border-slate-200 px-4 py-2 text-sm">Ask Question</button></div></section></DashboardShell>;

  const renderCompanyCreateOpportunityPage = () => { const steps = ['Basic Information', 'Location', 'Skills & Requirements', 'Compensation', 'Screening Questions', 'Documents & Publish']; return <DashboardShell role="Company" title="Create Opportunity" subtitle="Multi-step opportunity form based on the FSD fields and lifecycle."><section className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-5 flex flex-wrap gap-2">{steps.map(step => <button key={step} onClick={() => setActiveOpportunityStep(step)} className={`rounded px-3 py-2 text-xs font-semibold ${activeOpportunityStep === step ? 'bg-[#02aab5] text-white' : 'border border-slate-200 bg-white text-slate-700'}`}>{step}</button>)}</div><div className="grid gap-4 md:grid-cols-3">{activeOpportunityStep === 'Basic Information' && <><MiniField label="Opportunity Title (EN)" /><MiniField label="Opportunity Title (AR)" /><MiniSelect label="Opportunity Type" options={['Full-Time', 'Part-Time', 'Contract', 'Internship', 'Training Program']} /><MiniSelect label="Application Method" options={['Candidate Apply', 'Employer Search', 'Admin Nomination', 'All']} /><MiniSelect label="Work Mode" options={['On-site', 'Remote', 'Hybrid']} /><MiniField label="Number of Openings" type="number" /></>}{activeOpportunityStep === 'Location' && <><MiniSelect label="Country" options={['Oman']} /><MiniSelect label="City" options={['Muscat', 'Sohar', 'Nizwa', 'Ibri', 'Salalah']} /><MiniField label="Address / Office" /></>}{activeOpportunityStep === 'Skills & Requirements' && <><MiniSelect label="Primary Skills" options={['React', 'Power BI', 'Network Support', 'Communication']} /><MiniSelect label="Tech Stack Required" options={['React', 'SQL Server', 'Power BI', 'CCTV']} /><MiniField label="Years of Experience" type="number" /><MiniSelect label="Education Level" options={['Any', 'Diploma', 'Bachelor', 'Master']} /><MiniField label="Field of Study" /><MiniSelect label="Target Applicant" options={['All', 'Job Seeker', 'Student', 'Fresh Graduate']} /></>}{activeOpportunityStep === 'Compensation' && <><MiniSelect label="Salary Display" options={['Visible', 'Hidden', 'Negotiable']} /><MiniField label="Salary Min" type="number" /><MiniField label="Salary Max" type="number" /><MiniSelect label="Currency" options={['OMR']} /><MiniSelect label="Pay Frequency" options={['Monthly', 'Hourly', 'Project-Based', 'Annual']} /></>}{activeOpportunityStep === 'Screening Questions' && <><MiniField label="Question Text" /><MiniSelect label="Answer Type" options={['Yes/No', 'Multiple Choice', 'Short Text', 'Numeric']} /><MiniSelect label="Is Required" options={['Yes', 'No']} /><MiniSelect label="Is Disqualifying" options={['No', 'Yes']} /></>}{activeOpportunityStep === 'Documents & Publish' && <><MiniField label="Document Name" /><MiniSelect label="Require Upload" options={['Not Required', 'Optional', 'Mandatory']} /><MiniField label="Publication Date" type="date" /><MiniField label="Due Date" type="date" /><MiniSelect label="Action" options={['Save as Draft', 'Preview', 'Submit for Publishing']} /></>}</div><label className="mt-4 block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Description</div><textarea rows={5} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" /></label><div className="mt-5 flex justify-end gap-2"><button className="rounded border px-3 py-2 text-xs">Preview</button><button className="rounded bg-[#02aab5] px-3 py-2 text-xs text-white">Save Draft</button><button className="rounded bg-[#123b8b] px-3 py-2 text-xs text-white">Submit for Publishing</button></div></section></DashboardShell>; };
  const renderCompanyApplicationsPage = () => <DashboardShell role="Company" title="Application & Nomination Management" subtitle="Review candidates, update status, add notes, and move shortlisted candidates to interviews."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Total Candidates" value="48" icon="👥" /><ModuleStat label="Pending Review" value="18" icon="⏳" /><ModuleStat label="Shortlisted" value="9" icon="✅" /><ModuleStat label="Rejected" value="6" icon="✕" /></section><SimpleTable headers={['Candidate', 'Source Tag', 'Match %', 'Status', 'Actions']} rows={sampleCandidates.map(r => [r[0], 'Organic', r[2], r[3], 'View / Update'])} /></DashboardShell>;
  const renderCompanyCandidateSearchPage = () => <DashboardShell role="Company" title="Candidate Search & Matching" subtitle="Search by opportunity or manual filters and nominate or invite candidates."><section className="mb-5 rounded-sm border border-slate-100 bg-white p-5 shadow-sm"><div className="grid gap-3 md:grid-cols-5"><MiniSelect label="Opportunity" options={['Frontend Developer', 'Data Analyst', 'IT Support']} /><MiniSelect label="Skills" options={['React', 'Power BI', 'Networking']} /><MiniField label="Min Years" type="number" /><MiniSelect label="Education" options={['Any', 'Bachelor', 'Diploma']} /><MiniSelect label="Specification" options={['IT', 'Data', 'Operations']} /></div></section><SimpleTable headers={['Candidate Name', 'Specification', 'Education', 'Experience', 'Matching %', 'Actions']} rows={sampleCandidates.map((r, i) => [r[0], r[1], 'Bachelor', `${i + 1} Years`, r[2], 'View / Nominate / Ask to Apply'])} /></DashboardShell>;
  const renderCompanyInterviewsPage = () => <DashboardShell role="Company" title="Interview Management" subtitle="Create interview sessions, schedule shortlisted candidates, and record assessment decisions."><section className="mb-5 rounded-sm border border-slate-100 bg-white p-5 shadow-sm"><div className="grid gap-3 md:grid-cols-4"><MiniSelect label="Interview Type" options={['Online', 'On-site', 'Phone']} /><MiniField label="Location / Link" /><MiniSelect label="Interviewer" options={['Hiring Manager', 'Technical Lead', 'HR']} /><MiniSelect label="Skills to Assess" options={['React', 'Communication', 'Problem Solving']} /></div></section><SimpleTable headers={['Candidate', 'Match %', 'Date', 'Time', 'Status']} rows={sampleCandidates.map((r, i) => [r[0], r[2], `2026-05-${10 + i}`, '10:00 AM', i === 0 ? 'Scheduled' : 'Pending'])} /></DashboardShell>;
  const renderCompanyOffersPage = () => <DashboardShell role="Company" title="Offer Management" subtitle="Prepare offers by uploading a document, entering data, or using both methods."><section className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-4 flex gap-2"><Tag tone="blue">Upload Document</Tag><Tag tone="cyan">Enter Offer Data</Tag><Tag tone="green">Both</Tag></div><div className="grid gap-4 md:grid-cols-3"><MiniSelect label="Offer Type" options={['Permanent', 'Fixed-Term', 'Internship', 'Training']} /><MiniField label="Start Date" type="date" /><MiniField label="End Date / Duration" type="date" /><MiniField label="Salary / Compensation" type="number" /><MiniSelect label="Currency" options={['OMR']} /><MiniField label="Probation Period Days" type="number" /></div><div className="mt-5 flex justify-end"><button className="rounded bg-[#123b8b] px-4 py-2 text-sm text-white">Issue Offer</button></div></section></DashboardShell>;

  const renderAdminConfigPage = () => <DashboardShell role="System Admin" title="System Configuration" subtitle="Manage system variables, dynamic dropdowns, and platform-wide behavior."><section className="grid gap-5 xl:grid-cols-2"><SimpleTable headers={['Variable Key', 'Name', 'Type', 'Value', 'Actions']} rows={[[ 'ALLOW_USER_RATING', 'Allow user skill rating', 'Boolean', 'False', 'Edit'], ['MATCH_NOTIFICATION_THRESHOLD', 'Match threshold', 'Integer', '75', 'Edit'], ['DEFAULT_LOCALE', 'Default locale', 'String', 'en', 'Edit']]} /><SimpleTable headers={['List Category', 'Item Key', 'Label EN', 'Label AR', 'Active']} rows={[[ 'Degree_Level', 'BACHELOR', 'Bachelor', 'بكالوريوس', 'Yes'], ['Eval_Status', 'ACTIVE', 'Active', 'نشط', 'Yes'], ['Opportunity_Type', 'INTERNSHIP', 'Internship', 'تدريب عملي', 'Yes']]} /></section></DashboardShell>;
  const renderAdminSkillsPage = () => <DashboardShell role="System Admin" title="Skills Management" subtitle="Centralized taxonomy for skill categories, skills, and tech stacks."><section className="grid gap-5 xl:grid-cols-2"><SimpleTable headers={['Code', 'Label EN', 'Label AR', 'Sort', 'Active']} rows={[[ 'SOFTWARE', 'Software', 'برمجيات', '1', 'Yes'], ['DATA_AI', 'Data & AI', 'البيانات والذكاء الاصطناعي', '2', 'Yes'], ['NETWORKS', 'Networks', 'الشبكات', '3', 'Yes']]} /><SimpleTable headers={['Code', 'Category', 'Type', 'Label EN', 'Actions']} rows={[[ 'REACT', 'Software', 'Tech Stack', 'React', 'Edit'], ['POWER_BI', 'Data & AI', 'Skill', 'Power BI', 'Edit'], ['CCTV', 'Networks', 'Skill', 'CCTV Installation', 'Edit']]} /></section></DashboardShell>;
  const renderAdminCredentialsPage = () => <DashboardShell role="System Admin" title="Credential Management" subtitle="Manage evaluations, exams, courses, enrollment, and credential results."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Evaluations" value="2" icon="🧪" /><ModuleStat label="Exams" value="1" icon="📝" /><ModuleStat label="Courses" value="1" icon="🎓" /><ModuleStat label="Pending Results" value="4" icon="⏳" /></section><SimpleTable headers={['Type', 'Title', 'Associated Skills', 'Weight', 'Status', 'Actions']} rows={[[ 'Evaluation', 'Frontend Assessment', 'React, Problem Solving', '8', 'Active', 'Enroll / Rate'], ['Exam', 'Angular Theory Exam', 'Angular', '5', 'Active', 'Edit'], ['Course', 'SQL for Beginners', 'SQL', '4', 'Draft', 'Edit']]} /></DashboardShell>;
  const renderCompanyProfilePage = () => <DashboardShell role="Company" title="Company Profile Completion" subtitle="Company classification is completed here after signup, not during login or registration."><section className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-5 grid gap-4 md:grid-cols-3"><MiniField label="Company Name" /><MiniField label="Commercial Registration Number" /><MiniSelect label="Company Type" options={['SME', 'Non-SME / Large Entity', 'Government / Semi-Government', 'Other']} /><MiniSelect label="Industry" options={['ICT', 'Telecom', 'Retail', 'Education', 'Construction', 'Other']} /><MiniSelect label="Verification Status" options={['Pending', 'Verified', 'Rejected']} /><MiniField label="Official Email" /></div><label className="block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Company Brief</div><textarea rows={4} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Describe the company, hiring needs, and type of opportunities it may publish." /></label><div className="mt-5 rounded bg-blue-50 p-4 text-sm text-[#123b8b]">This keeps public signup simple as Company, while profile completion captures whether it is SME, Non-SME, or another entity type.</div></section></DashboardShell>;

  const renderIndividualProfilePage = () => <DashboardShell role="Individual Client" title="Individual Client Profile" subtitle="Individual clients can be personal users, traders, or shop owners who need services."><section className="rounded-sm border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-5 grid gap-4 md:grid-cols-3"><MiniField label="Full Name" /><MiniField label="Civil ID" /><MiniSelect label="Individual Type" options={['Personal Request', 'Trader / Shop Owner', 'Home Service Request', 'Other']} /><MiniField label="Phone Number" /><MiniSelect label="Primary Service Interest" options={['Technical Support', 'CCTV / Networks', 'Website', 'Design', 'Maintenance', 'Other']} /><MiniSelect label="Preferred Contact Method" options={['Phone', 'Email', 'Platform Messages']} /></div><label className="block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Request Context</div><textarea rows={4} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Example: I own a small shop and need someone to install cameras, or I need a freelancer to build a simple website." /></label><div className="mt-5 rounded bg-cyan-50 p-4 text-sm text-[#123b8b]">This account stays under Individual Client, while the profile clarifies whether the user is a trader, shop owner, or personal requester.</div></section></DashboardShell>;

  const renderAdminOpportunitiesPage = () => <DashboardShell role="System Admin" title="Opportunity Oversight" subtitle="Monitor lifecycle, publish status, admin nomination, and featured opportunities."><SimpleTable headers={['Opportunity', 'Owner', 'Status', 'Applicants', 'Admin Controls']} rows={[[ 'Frontend Developer', 'SME Company', 'Published', '26', 'Nominate / Feature'], ['Network Maintenance', 'Operator', 'Submitted', '0', 'Review / Publish'], ['Data Analyst Graduate', 'Private Company', 'Draft', '0', 'Post on behalf']]} /></DashboardShell>;
  const renderAdminUsersPage = () => <DashboardShell role="System Admin" title="User Management" subtitle="A simple admin view for job seekers, companies, operators, and account status."><SimpleTable headers={['User', 'Role', 'Status', 'Profile Completion', 'Actions']} rows={[[ 'Maha Al Kharusi', 'Job Seeker', 'Active', '78%', 'View'], ['Oman SME LLC', 'Company', 'Verified', '100%', 'Manage'], ['Operations User', 'Operator', 'Active', '—', 'Edit']]} /></DashboardShell>;
  const renderReportsPage = (role = 'System Admin') => <DashboardShell role={role} title="Reports & Audit Logs" subtitle="High-level analytics and audit trail placeholder for the prototype."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Opportunities" value="120" icon="📌" /><ModuleStat label="Applications" value="680" icon="📄" /><ModuleStat label="Interviews" value="45" icon="📅" /><ModuleStat label="Audit Events" value="1,240" icon="🧾" /></section><SimpleTable headers={['Event', 'Actor', 'Module', 'Date', 'Details']} rows={[[ 'Opportunity published', 'Company User', 'Opportunities', '2026-04-24', 'Published immediately'], ['Candidate nominated', 'Admin', 'Nomination', '2026-04-25', 'Admin-Nominated'], ['Offer issued', 'Company User', 'Employment', '2026-04-26', 'Offer status Issued']]} /></DashboardShell>;

  const renderLoginRequiredModal = () => {
    if (!loginRequiredModal) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 px-4 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-[2rem] bg-white p-6 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex rounded-full bg-[#d9e1ea] px-4 py-2 text-sm font-semibold text-[#123b8b]">Login Required</div>
              <h2 className="mt-4 text-2xl font-bold text-[#123b8b]">Sign in to view this content</h2>
              <p className="mt-3 leading-7 text-gray-600">
                Visitors can browse the public pages, but viewing {loginRequiredModal.context} requires logging in first.
              </p>
            </div>
            <button type="button" onClick={closeLoginRequiredModal} className="rounded-full border border-gray-200 px-3 py-1 text-gray-500 hover:bg-gray-50">×</button>
          </div>

          <div className="mt-6 rounded-2xl bg-[#f7f9fc] p-4 text-sm text-gray-600">
            Choose Login to continue to the sign-in page, or Later to stay on the current page.
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton className="flex-1" onClick={continueToLoginFromModal}>Login</PrimaryButton>
            <OutlineButton className="flex-1" onClick={closeLoginRequiredModal}>Later</OutlineButton>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return renderAboutPage();
      case 'hire':
        return renderHireTalentPage();
      case 'work':
        return renderFindWorkPage();
      case 'training':
        return renderTrainingPage();
      case 'contact':
        return renderContactPage();
      case 'login':
        return renderLoginPage();
      case 'join':
        return renderJoinPage();
      case 'dashboard-freelancer':
        return renderUserDashboardPage('Freelancer');
      case 'freelancer-profile':
        return renderFreelancerProfilePage();
      case 'freelancer-proposals':
        return renderFreelancerProposalsPage();
      case 'freelancer-projects':
        return renderFreelancerProjectsPage();
      case 'freelancer-portfolio':
        return renderFreelancerPortfolioPage();
      case 'freelancer-payments':
        return renderFreelancerPaymentsPage();
      case 'dashboard-jobseeker':
        return renderUserDashboardPage('Job Seeker');
      case 'dashboard-company':
        return renderUserDashboardPage('Company');
      case 'dashboard-individual':
        return renderUserDashboardPage('Individual Client');
      case 'dashboard-operator':
        return renderUserDashboardPage('Operator');
      case 'dashboard-admin':
        return renderUserDashboardPage('System Admin');
      case 'jobseeker-profile':
        return renderJobSeekerProfilePage();
      case 'jobseeker-opportunities':
        return renderJobSeekerOpportunitiesPage();
      case 'jobseeker-applications':
        return renderJobSeekerApplicationsPage();
      case 'jobseeker-interviews':
        return renderJobSeekerInterviewsPage();
      case 'jobseeker-training':
        return renderTrainingPage();
      case 'jobseeker-offers':
        return renderJobSeekerOffersPage();
      case 'company-profile':
        return renderCompanyProfilePage();
      case 'individual-profile':
        return renderIndividualProfilePage();
      case 'company-create-opportunity':
        return renderCompanyCreateOpportunityPage();
      case 'company-applications':
        return renderCompanyApplicationsPage();
      case 'company-candidate-search':
        return renderCompanyCandidateSearchPage();
      case 'company-interviews':
        return renderCompanyInterviewsPage();
      case 'company-offers':
        return renderCompanyOffersPage();
      case 'company-reports':
        return renderReportsPage('Company');
      case 'admin-config':
        return renderAdminConfigPage();
      case 'admin-skills':
        return renderAdminSkillsPage();
      case 'admin-credentials':
        return renderAdminCredentialsPage();
      case 'admin-opportunities':
        return renderAdminOpportunitiesPage();
      case 'admin-users':
        return renderAdminUsersPage();
      case 'admin-reports':
        return renderReportsPage('System Admin');
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f4f7] text-[#1f2937]">
      <header className="sticky top-0 z-30 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button type="button" onClick={() => goToPage('home')} className="flex items-center gap-3 text-left">
            <div>
              <img   src={nafadhLogo}   alt="Nafadh"   className="h-12 w-auto object-contain"/>            </div>
          </button>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <NavLink label="Home" isActive={currentPage === 'home'} onClick={() => goToPage('home')} />

            <div className="relative">
              <button
                type="button"
                className={['hire', 'work', 'training'].includes(currentPage) ? 'border-b-2 border-[#123b8b] pb-1 font-semibold text-[#123b8b]' : 'cursor-pointer text-[#1f2937] transition hover:text-[#123b8b]'}
                onClick={() => setIsServicesMenuOpen((prev) => !prev)}
              >
                Services ▾
              </button>
              {isServicesMenuOpen && (
                <div className="absolute left-0 top-full z-40 mt-3 min-w-[260px] rounded-2xl border border-gray-100 bg-white p-3 shadow-xl">
                  <button type="button" onClick={() => goToPage('work')} className="block w-full rounded-xl px-4 py-3 text-left hover:bg-gray-50">
                    <div className="font-semibold text-[#123b8b]">Find Work</div>
                    <div className="text-xs text-gray-500">Freelancer and job seeker opportunities</div>
                  </button>
                  <button type="button" onClick={() => goToPage('hire')} className="block w-full rounded-xl px-4 py-3 text-left hover:bg-gray-50">
                    <div className="font-semibold text-[#123b8b]">Hire Talent</div>
                    <div className="text-xs text-gray-500">Freelancers and future job seeker profiles</div>
                  </button>
                  <button type="button" onClick={() => goToPage('training')} className="block w-full rounded-xl px-4 py-3 text-left hover:bg-gray-50">
                    <div className="font-semibold text-[#123b8b]">Training Opportunities</div>
                    <div className="text-xs text-gray-500">Nafadh workshops and TRA opportunities</div>
                  </button>
                </div>
              )}
            </div>

            <NavLink label="About Nafadh" isActive={currentPage === 'about'} onClick={() => goToPage('about')} />
            <NavLink label="Contact" isActive={currentPage === 'contact'} onClick={() => goToPage('contact')} />
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLanguageMenuOpen((prev) => !prev)}
                className="rounded-xl border px-3 py-2"
              >
                🌐 {language === 'ar' ? 'AR' : 'EN'}
              </button>
              {isLanguageMenuOpen ? (
                <div className="absolute right-0 mt-2 min-w-[140px] rounded-xl bg-white p-2 shadow-xl">
                  <button type="button" onClick={() => { setLanguage('en'); setIsLanguageMenuOpen(false); }} className={`block w-full rounded-lg px-3 py-2 text-left hover:bg-gray-50 ${language === 'en' ? 'font-semibold text-[#123b8b]' : 'text-gray-700'}`}>English</button>
                  <button type="button" onClick={() => { setLanguage('ar'); setIsLanguageMenuOpen(false); }} className={`block w-full rounded-lg px-3 py-2 text-left hover:bg-gray-50 ${language === 'ar' ? 'font-semibold text-[#123b8b]' : 'text-gray-700'}`}>العربية</button>
                </div>
              ) : null}
            </div>
            <button type="button" onClick={() => goToPage('login')} className="rounded-xl border px-4 py-2">Log in</button>
            <button type="button" onClick={() => goToPage('join')} className="rounded-xl bg-[#123b8b] px-4 py-2 text-white">Join</button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-[#123b8b] md:hidden"
          >
            ☰
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {[
                ['Home', 'home'],
                ['Find Work', 'work'],
                ['Hire Talent', 'hire'],
                ['Training Opportunities', 'training'],
                ['About Nafadh', 'about'],
                ['Contact', 'contact'],
                ['Log in', 'login'],
                ['Join', 'join'],
              ].map(([label, page]) => (
                <button key={page} type="button" onClick={() => goToPage(page)} className="rounded-xl px-4 py-3 text-left font-semibold text-[#123b8b] hover:bg-[#f2f4f7]">
                  {label}
                </button>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
                <button type="button" onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }} className="rounded-xl border px-4 py-3 text-sm font-semibold text-[#123b8b]">English</button>
                <button type="button" onClick={() => { setLanguage('ar'); setIsMobileMenuOpen(false); }} className="rounded-xl border px-4 py-3 text-sm font-semibold text-[#123b8b]">العربية</button>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {renderCurrentPage()}
      {renderLoginRequiredModal()}

      {showBackToTop ? (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#123b8b] text-xl font-bold text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#0f4f9e]"
        >
          ↑
        </button>
      ) : null}

      <footer className="bg-[#0f172a] text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div>
                <img   src={nafadhLogoWhite}   alt="Nafadh"  className="h-14 w-auto object-contain" />              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              A service-focused digital ecosystem connecting work, talent, tenders, and training through one clear experience.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-white">Pages</h4>
            <div className="mt-4 space-y-3">
              <FooterLinkButton label="Home" onClick={() => goToPage('home')} />
              <FooterLinkButton label="About Nafadh" onClick={() => goToPage('about')} />
              <FooterLinkButton label="Contact" onClick={() => goToPage('contact')} />
              <FooterLinkButton label="Login" onClick={() => goToPage('login')} />
              <FooterLinkButton label="Join" onClick={() => goToPage('join')} />
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-white">Services</h4>
            <div className="mt-4 space-y-3">
              <FooterLinkButton label="Find Work" onClick={() => goToPage('work')} />
              <FooterLinkButton label="Hire Talent" onClick={() => goToPage('hire')} />
              <FooterLinkButton label="Training Opportunities" onClick={() => goToPage('training')} />
              <FooterLinkButton label="Tenders Platform" onClick={() => {}} />
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-white">Contact</h4>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <div>info@nafadh.om</div>
              <div>22650660</div>
              <div>Telecommunications Regulatory Authority</div>
              <div className="flex gap-3 pt-3">
                {['X', 'in', 'f', '◎'].map((item) => (
                  <div key={item} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-5">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
            <div>Copyright © 2026 TRA Sultanate Of Oman. All Rights Reserved.</div>

          </div>
        </div>
      </footer>
    </div>
  );
}
