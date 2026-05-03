import nafadhLogo from './assets/logos/logo-nafadh.png';
import nafadhLogoWhite from './assets/logos/nafadhLogoWhite.png';
import globcomLogo from './assets/logos/globcom.png';
import riyadaLogo from './assets/logos/ryiada.png';
import awasrLogo from './assets/logos/awasr.png';
import omanBroadbandLogo from './assets/logos/omanbroadband.png';
import omantelLogo from './assets/logos/omantel.png';
import ooredooLogo from './assets/logos/ooredoo.png';
import omrIconBlue from './assets/Icons/OmaniRial_Blue.png';
import omrIconBlack from './assets/Icons/OmaniRial_Black.png';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const BRAND = {
  primary: '#123b8b',
  dark: '#0f172a',
  cyan: '#10b3b7',
  light: '#f2f4f7',
  soft: '#d9e1ea',
};

// Omani Rial Symbol Component — uses official CBO icon from assets
// Per CBO guidelines: symbol precedes value with a space
function OmrIcon({ size = 16, variant = 'blue' }: { size?: number; variant?: 'blue' | 'black' }) {
  const src = variant === 'black' ? omrIconBlack : omrIconBlue;
  return (
    <img
      src={src}
      alt="OMR"
      className="inline-block"
      style={{ width: size, height: 'auto', verticalAlign: 'middle', marginRight: 2 }}
    />
  );
}

// Renders text like "OMR 600 - 1,200" as [icon] 600 - 1,200
// Handles "OMR" prefix replacement while leaving "Coming Soon" etc. untouched
function OmrText({ text, size = 14, variant = 'blue' }: { text: string; size?: number; variant?: 'blue' | 'black' }) {
  if (!text || !text.includes('OMR')) return <>{text}</>;
  const parts = text.replace('OMR ', '').replace('OMR', '');
  return (
    <span style={{ whiteSpace: 'nowrap' }}>
      <OmrIcon size={size} variant={variant} />
      {parts}
    </span>
  );
}


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
  'Built For Every User': 'مصممة لكل مستخدم',
  'Choose Your Journey': 'اختر رحلتك',
  'Start from the card that best matches your role or goal in Nafadh.': 'ابدأ من البطاقة التي تناسب دورك أو هدفك داخل نفاذ.',
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
  'A mixed preview of freelance projects and future job seeker opportunities.': 'عرض مختصر يجمع بين مشاريع العمل المستقل وفرص الباحثين عن عمل المستقبلية.',
  'Recently joined job seekers who are ready to be discovered by companies and future hiring opportunities.': 'باحثون عن عمل انضموا مؤخرًا وأصبحوا جاهزين للظهور أمام الشركات وفرص التوظيف المستقبلية.',
  'Browse early job seeker profiles prepared for future hiring opportunities.': 'استعرض ملفات أولية لباحثين عن عمل استعدادًا لفرص التوظيف المستقبلية.',
  'Highlight experienced freelancers with strong service records, ratings, and client reviews.': 'إبراز المستقلين ذوي الخبرة والسجل القوي في تقديم الخدمات والتقييمات وآراء العملاء.',
  'The platform can support companies, traders, shop owners, and individuals who need a technical service such as cameras, networks, websites, or design.': 'يمكن للمنصة دعم الشركات والتجار وأصحاب المحلات والأفراد ممن يحتاجون إلى خدمات تقنية مثل الكاميرات أو الشبكات أو المواقع أو التصميم.',
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
  'Log out': 'تسجيل الخروج',
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
  'Log in to Nafadh': 'تسجيل الدخول إلى نفاذ',
  'Enter your email and password. Nafadh will detect your account type and take you to the right dashboard.': 'أدخل بريدك الإلكتروني وكلمة المرور، وسيحدد نفاذ نوع حسابك وينقلك إلى لوحة التحكم المناسبة.',
  'Log in with PKI': 'الدخول باستخدام PKI',
  'Prototype demo access': 'وصول تجريبي للنموذج الأولي',
  'Preview protected dashboards for testing. Admin remains login-only.': 'استعرض لوحات التحكم المحمية لأغراض الاختبار. تبقى إدارة النظام متاحة عبر تسجيل الدخول فقط.',
  'Choose demo dashboard': 'اختر لوحة تحكم تجريبية',
  'Hide': 'إخفاء',
  'Open Tickets': 'التذاكر المفتوحة',
  'Submit Ticket': 'إرسال التذكرة',
  'Create Account': 'إنشاء حساب',
  'Choose how you want to use Nafadh': 'اختر كيف تريد استخدام نفاذ',
  'Offer services, build a profile, and apply to projects.': 'قدّم خدماتك، وابنِ ملفك، وتقدّم للمشاريع.',
  'Create a career profile and prepare for future job matching.': 'أنشئ ملفًا مهنيًا واستعد للمطابقة الوظيفية المستقبلية.',
  'Post opportunities, request skilled people, and manage hiring.': 'انشر الفرص، واطلب أصحاب المهارات، وأدر التوظيف.',
  'Request services as a person, trader, or shop owner.': 'اطلب الخدمات كفرد أو تاجر أو صاحب محل.',
  'Choose your account type first. The registration form updates to show only the relevant information.': 'اختر نوع الحساب أولًا، وسيتحدث نموذج التسجيل لعرض المعلومات المناسبة فقط.',
  'Create Freelancer Account': 'إنشاء حساب مستقل',
  'Create Job Seeker Account': 'إنشاء حساب باحث عن عمل',
  'Create Company Account': 'إنشاء حساب شركة',
  'Create Individual Client Account': 'إنشاء حساب فرد / عميل',
  'Activity Summary': 'ملخص النشاط',
  'Recent Activity': 'آخر النشاطات',
  'A quick overview of work volume across the last months.': 'نظرة مختصرة على حجم العمل خلال الأشهر الأخيرة.',
  'Prototype chart': 'مخطط تجريبي',
  'Today’s freelancer actions': 'إجراءات المستقل اليوم',
  'Freelancer workspace': 'مساحة عمل المستقل',
  'Career profile status': 'حالة الملف المهني',
  'Hiring guidance': 'إرشادات التوظيف',
  'Simple service request': 'طلب خدمة مبسط',
  'Operator role boundary': 'حدود دور المشغّل',
  'Admin access note': 'ملاحظة صلاحيات المدير',
  'Profile Readiness': 'جاهزية الملف',
  'Matched Projects': 'المشاريع المطابقة',
  'Active Contracts': 'العقود النشطة',
  'Pending Payments': 'المدفوعات المعلقة',
  'CV Strength': 'قوة السيرة الذاتية',
  'Posted Opportunities': 'الفرص المنشورة',
  'Open Tenders': 'المناقصات المفتوحة',
  'Open Requests': 'الطلبات المفتوحة',
  'Offers Received': 'العروض المستلمة',
  'Completed Requests': 'الطلبات المكتملة',
  'Submitted Reviews': 'المراجعات المقدمة',
  'Active Programs': 'البرامج النشطة',
  'Applicant Queues': 'قوائم المتقدمين',
  'Open Cases': 'الحالات المفتوحة',
  'Total Users': 'إجمالي المستخدمين',
  'Pending Reviews': 'المراجعات المعلقة',
  'Active Opportunities': 'الفرص النشطة',
  'Open Disputes': 'النزاعات المفتوحة',
  'Export': 'تصدير',
  'Export Excel': 'تصدير Excel',
  'Export PDF': 'تصدير PDF',
  'Support Center': 'مركز الدعم',
  'Create Support Ticket': 'إنشاء تذكرة دعم',
  'Support Topic': 'موضوع الدعم',
  'Priority': 'الأولوية',
  'Related Project / Offer': 'المشروع / العرض المرتبط',
  'Avg. Response': 'متوسط الاستجابة',
  'Guides': 'الأدلة',
  'Courses & Training': 'الدورات والتدريب',
  'Recommended Courses': 'الدورات المقترحة',
  'Skill Gaps': 'فجوات المهارات',
  'Course / Program': 'الدورة / البرنامج',
  'Related Skills': 'المهارات المرتبطة',
  'Provider': 'المزود',
  'Upload Certificate': 'رفع شهادة',
  'Certificate Name': 'اسم الشهادة',
  'Related Skill': 'المهارة المرتبطة',
  'Verification Status': 'حالة التحقق',
  'Credential Score': 'درجة الاعتماد',
  'Career Preferences': 'التفضيلات المهنية',
  'Profile Visibility': 'ظهور الملف',
  'Relocation': 'الانتقال',
  'Opportunity Alerts': 'تنبيهات الفرص',
  'Interview Reminders': 'تذكيرات المقابلات',
  'Save Settings': 'حفظ الإعدادات',
  'Draft Submissions': 'المسودات',
  'Closing Soon': 'تغلق قريبًا',
  'Tender': 'المناقصة',
  'Closing Date': 'تاريخ الإغلاق',
  'Training Requests': 'طلبات التدريب',
  'Submitted Requests': 'الطلبات المقدمة',
  'Participants': 'المشاركون',
  'New Training Request': 'طلب تدريب جديد',
  'Training Topic': 'موضوع التدريب',
  'Expected Participants': 'عدد المشاركين المتوقع',
  'Preferred Delivery': 'طريقة التنفيذ المفضلة',
  'Submit Request': 'إرسال الطلب',
  'Need Assessment': 'تحتاج تقييمًا',
  'Reschedule Requests': 'طلبات إعادة الجدولة',
  'Admin Action': 'إجراء المدير',
  'Personal website setup': 'إعداد موقع شخصي',
  'Router configuration support': 'دعم إعداد الراوتر',
  'Install CCTV cameras for home': 'تركيب كاميرات مراقبة للمنزل',
  'Compare': 'مقارنة',
  'Offers / Update': 'العروض / التحديث',
  'Post Service Request': 'نشر طلب خدمة',
  'Request Details': 'تفاصيل الطلب',
  'Request Title': 'عنوان الطلب',
  'Service Category': 'تصنيف الخدمة',
  'Budget Range': 'نطاق الميزانية',
  'Request Description': 'وصف الطلب',
  'Publish Request': 'نشر الطلب',
  'Saved Talent Directory': 'دليل الكفاءات المحفوظة',
  'Saved Date': 'تاريخ الحفظ',
  'Invoice Number': 'رقم الفاتورة',
  'Amount': 'المبلغ',
  'Due': 'الاستحقاق',
  'Create Support Request': 'إنشاء طلب دعم',
  'Issue Type': 'نوع المشكلة',
  'Related Request': 'الطلب المرتبط',
  'Needs Fix': 'يحتاج تعديلًا',
  'Ready to Publish': 'جاهز للنشر',
  'Escalated': 'تم التصعيد',
  'Operator Action': 'إجراء المشغّل',
  'Applicant Monitoring': 'متابعة المتقدمين',
  'Blocked': 'محظور',
  'Current Step': 'الخطوة الحالية',
  'Operator Note': 'ملاحظة المشغّل',
  'Interview Coordination': 'تنسيق المقابلات',
  'Training Operations': 'عمليات التدريب',
  'Registrations': 'التسجيلات',
  'Certificates Pending': 'الشهادات المعلقة',
  'Support Requests': 'طلبات الدعم',
  'Operator Settings': 'إعدادات المشغّل',
  'Default Queue': 'القائمة الافتراضية',
  'Notification Preference': 'تفضيل الإشعارات',
  'System Configuration': 'إعدادات النظام',
  'Website Content Management': 'إدارة محتوى الموقع',
  'Verification Center': 'مركز التحقق',
  'Workflow Monitor': 'مراقبة سير العمل',
  'Disputes & Escalations': 'النزاعات والتصعيدات',
  'Reports & Audit Logs': 'التقارير وسجلات التدقيق',
  'Audit Events': 'أحداث التدقيق',
  'Actor': 'المنفذ',
  'Module': 'الوحدة',
  'Date': 'التاريخ',
  'Event': 'الحدث',
  'Project Search & Filters': 'بحث وتصفية المشاريع',
  'Recommended Matches': 'المطابقات المقترحة',
  'Saved Projects': 'المشاريع المحفوظة',
  'Offer Readiness': 'جاهزية العرض',
  'Project Value': 'قيمة المشروع',
  'Match Score': 'درجة المطابقة',
  'Submission readiness': 'جاهزية التقديم',
  'Before You Apply': 'قبل التقديم',
  'Profile Completion Checklist': 'قائمة استكمال الملف',
  'Profile Completion': 'اكتمال الملف',
  'Average Rating': 'متوسط التقييم',
  'General Details': 'التفاصيل العامة',
  'Professional Overview': 'نبذة مهنية',
  'Main Service': 'الخدمة الرئيسية',
  'Top Skill': 'المهارة الأعلى',
  'Save and Continue': 'حفظ ومتابعة',
  'Offer Builder': 'منشئ العرض',
  'Evaluation Signals': 'مؤشرات التقييم',
  'Proposed Timeline': 'المدة المقترحة',
  'Proposed Value': 'القيمة المقترحة',
  'Delivery Method': 'طريقة التسليم',
  'Cover Letter': 'خطاب العرض',
  'Save Draft Offer': 'حفظ مسودة العرض',
  'Contracts': 'العقود',
  'Milestone Timeline': 'الجدول المرحلي',
  'Payments & Tasks': 'المدفوعات والمهام',
  'Withdraw Funds': 'سحب الأموال',
  'Available Amount': 'المبلغ المتاح',
  'Bank Account': 'الحساب البنكي',
  'Withdrawal Type': 'نوع السحب',
  'Request Withdrawal': 'طلب السحب',
  'Task Delivery Checklist': 'قائمة تسليم المهمة',
  'Disputes': 'النزاعات',
  'Create Dispute / Clarification': 'إنشاء نزاع / توضيح',
  'Dispute Type': 'نوع النزاع',
  'Evidence': 'الدليل',
  'Explanation': 'التوضيح',
  'Submit for Review': 'إرسال للمراجعة',
  'Direct messages between freelancer, client, and support with project context.': 'رسائل مباشرة بين المستقل والعميل والدعم مع ربطها بسياق المشروع.',
  'Write a message': 'اكتب رسالة',
  'Send': 'إرسال',
  'Account & Visibility': 'الحساب والظهور',
  'Work Preferences': 'تفضيلات العمل',
  'Security': 'الأمان',
  'Notifications': 'الإشعارات',
  'Monitor': 'مراقبة',
  'Remind': 'تذكير',
  'Coordinate': 'تنسيق',
  'Continue': 'متابعة',
  'Schedule': 'جدولة',
  'Register': 'تسجيل',
  'Upload': 'رفع',
  'Open tender': 'فتح المناقصة',
  'No results found': 'لا توجد نتائج',
  'Try adjusting your filters or search term': 'حاول تعديل الفلاتر أو كلمة البحث',
  'No opportunities match your current filters.': 'لا توجد فرص تطابق الفلاتر الحالية.',
  'No talent profiles match your current filters.': 'لا توجد ملفات كفاءات تطابق الفلاتر الحالية.',
  'No training opportunities match your current filters.': 'لا توجد فرص تدريبية تطابق الفلاتر الحالية.',
  'Clear Filters': 'مسح الفلاتر',
  'Copyright © 2026 TRA Sultanate Of Oman. All Rights Reserved.': 'حقوق الطبع والنشر © 2026 هيئة تنظيم الاتصالات - سلطنة عُمان. جميع الحقوق محفوظة.',
  'Notification Center': 'مركز الإشعارات',
  'Mark all as read': 'تحديد الكل كمقروء',
  'New application received for your opportunity': 'تم استلام طلب جديد لفرصتك',
  'Your proposal was viewed by the client': 'تم عرض عرضك من قبل العميل',
  'New training workshop available': 'ورشة تدريبية جديدة متاحة',
  'Profile strength increased to 85%': 'ارتفعت قوة الملف إلى 85%',
  'just now': 'الآن',
  'ago': 'منذ',
  '2 hours ago': 'منذ ساعتين',
  '1 day ago': 'منذ يوم واحد',
  '3 days ago': 'منذ 3 أيام',
  'View All Notifications': 'عرض جميع الإشعارات',
  'This field is required': 'هذا الحقل مطلوب',
  'Menu': 'القائمة',
  'Close menu': 'إغلاق القائمة',
  'Message Center': 'مركز الرسائل',

  // ─── Home page: Service card titles ───
  'UI/UX Design': 'تصميم واجهات المستخدم',
  'Web Development': 'تطوير المواقع',
  'Mobile Apps': 'تطبيقات الهواتف',
  'Content Writing': 'كتابة المحتوى',
  'Network & CCTV': 'الشبكات والكاميرات',
  'Digital Marketing': 'التسويق الرقمي',
  'Data Analysis': 'تحليل البيانات',
  'Business Support': 'دعم الأعمال',

  // ─── Home page: Opportunity card content ───
  'Website Redesign For Telecom Services': 'إعادة تصميم موقع لخدمات الاتصالات',
  'Junior IT Support Specialist': 'أخصائي دعم تقني مبتدئ',
  'Build Internal Dashboard For Service Operations': 'بناء لوحة تحكم داخلية لعمليات الخدمة',
  'Network And CCTV Setup For New House': 'إعداد الشبكة والكاميرات لمنزل جديد',
  'Arabic Content For Public Awareness Campaign': 'محتوى عربي لحملة توعية عامة',
  'Data Analyst Graduate Opportunity': 'فرصة خريج محلل بيانات',
  'Digital Experience Team': 'فريق التجربة الرقمية',
  'HR Team': 'فريق الموارد البشرية',
  'Technology Department': 'إدارة التكنولوجيا',
  'Home Owner': 'صاحب المنزل',
  'Communications Team': 'فريق الاتصالات',
  'Recruitment Team': 'فريق التوظيف',
  'Government Partner': 'شريك حكومي',
  'TRA Partner Program': 'برنامج شراكة هيئة تنظيم الاتصالات',
  'Private Sector Company': 'شركة قطاع خاص',
  '5 Days Left': 'متبقي 5 أيام',
  '7 Days Left': 'متبقي 7 أيام',
  '3 Days Left': 'متبقي 3 أيام',
  '2 Days Left': 'متبقي يومان',
  '3 Weeks': '3 أسابيع',
  '1 Month': 'شهر واحد',
  '2 Weeks': 'أسبوعان',
  '2 Days': 'يومان',

  // ─── Home page: Talent card content ───
  'Aisha Al Harthi': 'عائشة الحارثية',
  'Mohammed Al Hinai': 'محمد الهنائي',
  'Fatma Al Riyami': 'فاطمة الريامية',
  'Salim Al Balushi': 'سالم البلوشي',
  'Maha Al Kharusi': 'مها الخروصية',
  'Hamed Al Maamari': 'حامد المعمري',
  'Noura Al Busaidi': 'نورة البوسعيدية',
  'Senior UI/UX Designer': 'مصممة واجهات مستخدم أولى',
  'Full Stack Developer': 'مطور ويب متكامل',
  'Fresh Graduate in Information Systems': 'خريجة جديدة في نظم المعلومات',
  'Network and CCTV Specialist': 'أخصائي شبكات وكاميرات مراقبة',
  'Junior Data Analyst': 'محللة بيانات مبتدئة',
  'Digital Marketing Specialist': 'أخصائي تسويق رقمي',
  'Junior Frontend Developer': 'مطورة واجهات أمامية مبتدئة',

  // ─── Home page: Location names ───
  'Muscat': 'مسقط',
  'Barka': 'بركاء',
  'Sohar': 'صحار',
  'Muscat, Oman': 'مسقط، عُمان',
  'Sohar, Oman': 'صحار، عُمان',
  'Nizwa, Oman': 'نزوى، عُمان',
  'Ibri, Oman': 'عبري، عُمان',
  'Salalah, Oman': 'صلالة، عُمان',

  // ─── Home page: Experience and rate labels ───
  '6 Years': '6 سنوات',
  '5 Years': '5 سنوات',
  '7 Years': '7 سنوات',
  '3 Years': '3 سنوات',
  'Entry Level': 'مستوى مبتدئ',

  // ─── Home page: Service categories ───
  'Design': 'تصميم',
  'Development': 'تطوير',
  'Writing': 'كتابة',
  'Networks': 'شبكات',
  'Marketing': 'تسويق',
  'Data': 'بيانات',
  'Operations': 'عمليات',
  'IT Support': 'دعم تقني',

  // ─── Contact page: Bottom info cards ───
  'Questions': 'الاستفسارات',
  'Suggestions': 'المقترحات',
  'Bug Reports': 'بلاغات الأخطاء',
  'Development Notes': 'ملاحظات تطويرية',
  'Ask about registration, services, opportunities, or how to use Nafadh.': 'استفسر عن التسجيل أو الخدمات أو الفرص أو طريقة استخدام نفاذ.',
  'Share ideas that can improve the platform experience or future features.': 'شارك أفكارك لتحسين تجربة المنصة أو الميزات المستقبلية.',
  'Report errors, broken flows, unclear pages, or technical issues.': 'بلّغ عن الأخطاء أو المسارات المعطلة أو الصفحات غير الواضحة أو المشاكل التقنية.',
  'Send feedback related to UI, UX, system behavior, or service workflow.': 'أرسل ملاحظاتك حول واجهة المستخدم أو تجربة الاستخدام أو سلوك النظام أو سير الخدمات.',

  // ─── Footer ───
  'A service-focused digital ecosystem connecting work, talent, tenders, and training through one clear experience.': 'منظومة رقمية خدمية تربط بين العمل والكفاءات والمناقصات والتدريب ضمن تجربة واحدة واضحة.',

  // ─── Login Required Modal ───
  'You will be redirected back': 'سيتم إعادة توجيهك',
  'After signing in, you will return to this page to continue where you left off.': 'بعد تسجيل الدخول ستعود إلى هذه الصفحة لمتابعة ما بدأته.',
  'Visitors can browse the public pages, but viewing': 'يمكن للزوار تصفح الصفحات العامة، لكن عرض',
  'requires logging in first.': 'يتطلب تسجيل الدخول أولًا.',
  'opportunity details': 'تفاصيل الفرصة',
  'apply to this opportunity': 'التقديم لهذه الفرصة',
  'talent profile': 'ملف الكفاءة',
  'contact talent': 'التواصل مع الكفاءة',
  'training opportunity': 'الفرصة التدريبية',

  // ─── Additional data translations ───
  'Full Time': 'دوام كامل',
  'Oman': 'عُمان',
  'Nafadh Digital Freelancing Workshop': 'ورشة العمل الحر الرقمي من نفاذ',
  'TRA Cybersecurity Awareness Training': 'تدريب هيئة تنظيم الاتصالات للتوعية بالأمن السيبراني',
  'Data Analysis and Reporting Skills': 'مهارات تحليل البيانات وإعداد التقارير',
  'TRA Cloud and Remote Work Tools Session': 'جلسة هيئة تنظيم الاتصالات لأدوات السحابة والعمل عن بُعد',
  'A practical workshop to help independent professionals build profiles, present services, and apply to opportunities.': 'ورشة عملية لمساعدة المهنيين المستقلين في بناء ملفاتهم وعرض خدماتهم والتقدم للفرص.',
  'Foundational awareness opportunity for digital safety and secure online practices.': 'فرصة توعوية أساسية حول الأمان الرقمي وممارسات الإنترنت الآمنة.',
  'Hands-on learning focused on dashboards, reports, and work-ready analysis skills.': 'تعلم عملي يركز على لوحات المعلومات والتقارير ومهارات التحليل الجاهزة للعمل.',
  'An introductory session on cloud collaboration and modern remote work practices.': 'جلسة تعريفية حول التعاون السحابي وممارسات العمل عن بُعد الحديثة.',
  'TRA': 'هيئة تنظيم الاتصالات',
  'Omantel': 'عمانتل',
  'Oman Broadband': 'عُمان للنطاق العريض',

  // ─── New hero section text ───
  'Telecommunications Regulatory Authority': 'هيئة تنظيم الاتصالات',
  'Your gateway to opportunity, talent, tenders, and training': 'بوابتك إلى الفرص والكفاءات والمناقصات والتدريب',
  'One platform connecting all across Oman': 'منصة واحدة تربط الجميع في سلطنة عُمان',

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

function SectionHeader({ badge, title, description = '', centered = false }) {
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

function EmptyState({ icon = '📭', title = 'No results found', message = 'Try adjusting your filters or search term', actionLabel, onAction }: { icon?: string; title?: string; message?: string; actionLabel?: string; onAction?: () => void }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center rounded-[2rem] bg-white px-8 py-16 text-center shadow-lg">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#f2f4f7] text-4xl">{icon}</div>
      <h3 className="mt-5 text-xl font-bold text-[#123b8b]">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">{message}</p>
      {actionLabel && onAction ? (
        <button
          type="button"
          onClick={onAction}
          className="mt-5 rounded-xl bg-[#123b8b] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}

function NotificationDropdown({ isOpen, onClose }) {
  const notifications = [
    { text: 'New application received for your opportunity', time: '2 hours ago', icon: '📩', unread: true },
    { text: 'Your proposal was viewed by the client', time: '1 day ago', icon: '👁️', unread: true },
    { text: 'New training workshop available', time: '3 days ago', icon: '🎓', unread: false },
    { text: 'Profile strength increased to 85%', time: '3 days ago', icon: '📈', unread: false },
  ];
  if (!isOpen) return null;
  return (
    <div className="absolute right-0 top-full z-50 mt-2 w-[340px] rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-sm font-bold text-[#123b8b]">Notification Center</span>
        <button type="button" onClick={onClose} className="text-xs font-medium text-[#10b3b7] hover:underline">Mark all as read</button>
      </div>
      <div className="max-h-[280px] space-y-1 overflow-y-auto">
        {notifications.map((n, i) => (
          <div key={i} className={`flex items-start gap-3 rounded-xl px-3 py-3 transition hover:bg-gray-50 ${n.unread ? 'bg-[#f0f7ff]' : ''}`}>
            <span className="mt-0.5 text-lg">{n.icon}</span>
            <div className="flex-1">
              <p className="text-sm leading-5 text-gray-800">{n.text}</p>
              <span className="mt-1 text-xs text-gray-400">{n.time}</span>
            </div>
            {n.unread ? <span className="mt-1.5 h-2 w-2 rounded-full bg-[#10b3b7]" /> : null}
          </div>
        ))}
      </div>
      <div className="mt-1 border-t border-gray-100 px-3 py-2">
        <button type="button" className="w-full rounded-lg py-2 text-center text-xs font-semibold text-[#123b8b] transition hover:bg-[#f0f7ff]">View All Notifications</button>
      </div>
    </div>
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
  const [isDemoAccessOpen, setIsDemoAccessOpen] = useState(false);
  const [registerRole, setRegisterRole] = useState('Freelancer');
  const [loginRequiredModal, setLoginRequiredModal] = useState<{ context: string } | null>(null);
  const [activeProfileTab, setActiveProfileTab] = useState('Education');
  const [activeOpportunityStep, setActiveOpportunityStep] = useState('Basic Information');
  const [isExportMenuOpen, setIsExportMenuOpen] = useState(false);

  // New state: notifications, redirect intent, mobile dashboard sidebar
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [redirectAfterLogin, setRedirectAfterLogin] = useState<string | null>(null);
  const [isMobileDashSidebarOpen, setIsMobileDashSidebarOpen] = useState(false);

  // Click-outside handler: close all dropdowns when clicking outside
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const exportMenuRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(target)) {
        setIsServicesMenuOpen(false);
      }
      if (languageMenuRef.current && !languageMenuRef.current.contains(target)) {
        setIsLanguageMenuOpen(false);
      }
      if (exportMenuRef.current && !exportMenuRef.current.contains(target)) {
        setIsExportMenuOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(target)) {
        setIsNotificationOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        font-family: 'Cairo', Tahoma, Arial, sans-serif;
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
  }, [language, currentPage]);

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
    setIsExportMenuOpen(false);
    scrollToTop();
  };

  const openLoginRequiredModal = (context = 'details') => {
    setLoginRequiredModal({ context });
    setRedirectAfterLogin(currentPage);
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
      page: 'join',
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

  const trustedEntities = [
    { name: 'Omantel', logo: omantelLogo, link: 'https://www.omantel.om/' },
    { name: 'Ooredoo', logo: ooredooLogo, link: 'https://www.ooredoo.om/' },
    { name: 'Riyada', logo: riyadaLogo, link: 'https://www.sme.gov.om/' },
    { name: 'Oman Broadband', logo: omanBroadbandLogo, link: 'https://omanbroadband.om/' },
    { name: 'AWASR', logo: awasrLogo, link: 'https://www.awasr.om/ar/package/journey/ZVANH?promotionTerm=24' },
    { name: 'GLOBCOM', logo: globcomLogo, link: 'https://www.globcom.om/' },
  ];

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

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
            Telecommunications Regulatory Authority | Oman
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            <span className="text-cyan-200">Nafadh</span>{' '}
            Your gateway to opportunity, talent, tenders, and training
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/80">
            One platform connecting all across Oman
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button type="button" onClick={() => goToPage('work')} className="rounded-xl bg-white px-6 py-3 font-semibold text-[#123b8b] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">Find Work</button>
            <button type="button" onClick={() => goToPage('hire')} className="rounded-xl border border-white/35 bg-white/10 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20">Hire Talent</button>
            <button type="button" onClick={() => goToPage('training')} className="rounded-xl border border-white/35 bg-white/10 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20">Training Opportunities</button>
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/15 bg-white/8 px-5 py-4 backdrop-blur-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Built for</div>
            <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-white/85">
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200" /> Freelancers</span>
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200" /> Job Seekers</span>
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200" /> Companies</span>
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200" /> Individuals</span>
              <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200" /> Tenders</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex rounded-full bg-[#e8f7fb] px-5 py-2 text-sm font-semibold text-[#123b8b] ring-1 ring-[#10b3b7]/20">
              Built For Every User
            </div>
            <h2 className="text-3xl font-bold text-[#123b8b] md:text-4xl">Choose Your Journey</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">Start from the card that best matches your role or goal in Nafadh.</p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {userPaths.map((path, index) => (
              <button
                key={path.title}
                type="button"
                onClick={() => path.comingSoon ? undefined : goToPage(path.page)}
                disabled={path.comingSoon}
                className={`group relative min-h-[255px] overflow-hidden rounded-[2rem] border p-7 text-left shadow-sm transition ${
                  path.comingSoon
                    ? 'cursor-not-allowed border-amber-200 bg-gradient-to-br from-amber-50 via-white to-white opacity-95'
                    : 'border-[#dce8f7] bg-white hover:-translate-y-1 hover:border-[#10b3b7]/40 hover:shadow-xl'
                }`}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#10b3b7]/10 transition group-hover:scale-125" />
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#123b8b] via-[#10b3b7] to-[#123b8b]" />
                <div className="relative mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e8f7fb] to-white text-3xl shadow-sm ring-1 ring-[#dce8f7]">{path.icon}</div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-full bg-[#f2f7fc] px-3 py-1 text-xs font-bold text-[#123b8b]">0{index + 1}</span>
                    {path.comingSoon ? <Tag tone="amber">Coming Soon</Tag> : null}
                  </div>
                </div>
                <h3 className="relative text-xl font-bold text-[#123b8b]">{path.title}</h3>
                <p className="relative mt-3 min-h-[72px] text-sm leading-6 text-gray-600">{path.description}</p>
                <div className={`relative mt-5 inline-flex items-center rounded-full px-4 py-2 text-sm font-bold ${path.comingSoon ? 'bg-amber-100 text-amber-700' : 'bg-[#e8f7fb] text-[#123b8b] group-hover:bg-[#123b8b] group-hover:text-white'}`}>
                  {path.comingSoon ? 'Stay Tuned' : `${path.action} →`}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#e5e9f0] py-14 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-3 text-3xl font-bold text-[#123b8b]">
            Trusted By Leading Companies And Institutions
          </h2>
          <p className="mb-8 text-gray-600">
            Organizations that can post opportunities, support training, and participate in the Nafadh ecosystem.
          </p>

          <div className="relative overflow-hidden" dir="ltr">
            <div className="trusted-logo-track flex w-max items-center gap-8">
                {[...trustedEntities, ...trustedEntities, ...trustedEntities].map((item, index) => (
                  <a
                    key={`${item.name}-${index}`}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-28 w-56 shrink-0 items-center justify-center rounded-2xl bg-white px-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-16 max-w-[170px] object-contain opacity-85 transition hover:opacity-100"
                    />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
        <SectionHeader centered badge="Services" title="Explore Popular Services" />
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
          {opportunityListings.slice(0, 3).map((job) => {
            const isComingSoon = Boolean(job.comingSoon);
            return (
              <button
                type="button"
                key={job.title}
                onClick={() => {
                  if (!isComingSoon) goToPage('work');
                }}
                disabled={isComingSoon}
                className={
                  isComingSoon
                    ? 'cursor-not-allowed rounded-2xl border border-amber-200 bg-amber-50/70 p-6 text-left opacity-90 shadow-sm'
                    : 'rounded-2xl bg-white p-6 text-left shadow transition hover:-translate-y-1 hover:shadow-md'
                }
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-3xl">{job.icon}</span>
                  <div className="flex flex-wrap justify-end gap-2">
                    <Tag tone="blue">{job.audience}</Tag>
                    {isComingSoon ? <Tag tone="amber">Coming Soon</Tag> : null}
                  </div>
                </div>
                <div className="font-bold text-[#123b8b]">{job.title}</div>
                <div className="mt-1 text-sm text-gray-500">{job.company}</div>
                <div className={`mt-4 font-medium ${isComingSoon ? 'text-amber-700' : 'text-[#123b8b]'}`}>
                  {job.budget}
                </div>
              </button>
            );
          })}
        </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#123b8b]">Discover Job Seekers</h2>
              <p className="mt-2 max-w-3xl text-gray-600">
                Browse early job seeker profiles prepared for future hiring opportunities.
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
                className="relative overflow-hidden rounded-2xl border border-[#dce8f7] bg-gradient-to-br from-white to-[#eef7ff] p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#b8d1f0] hover:shadow-lg"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">{talent.image}</div>
                  <Tag tone="blue">Job Seeker</Tag>
                </div>
                <div className="font-bold text-[#123b8b]">{talent.name}</div>
                <div className="text-sm text-gray-600">{talent.role}</div>
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
          {filteredOpportunities.length === 0 ? (
            <EmptyState
              icon="🔍"
              title="No results found"
              message="No opportunities match your current filters."
              actionLabel="Clear Filters"
              onAction={() => { setWorkSearch(''); setWorkAudience('All'); setWorkType('All Types'); setWorkCategory('All Categories'); }}
            />
          ) : filteredOpportunities.map((opportunity) => (
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
                  <div className="mt-1 font-semibold text-[#123b8b]"><OmrText text={opportunity.budget} /></div>
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
          {filteredTalent.length === 0 ? (
            <EmptyState
              icon="👥"
              title="No results found"
              message="No talent profiles match your current filters."
              actionLabel="Clear Filters"
              onAction={() => { setHireSearch(''); setHireTalentType('All Talent'); setHireCategory('All Categories'); setHireLevel('All Levels'); }}
            />
          ) : filteredTalent.map((talent) => (
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
                  <div className="mt-1 font-semibold text-[#123b8b]"><OmrText text={talent.rate} /></div>
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
          {filteredTrainings.length === 0 ? (
            <EmptyState
              icon="🎓"
              title="No results found"
              message="No training opportunities match your current filters."
              actionLabel="Clear Filters"
              onAction={() => { setTrainingSearch(''); setTrainingSource('All Sources'); setTrainingFormat('All Formats'); }}
            />
          ) : filteredTrainings.map((training) => (
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
            <div key={String(label)} className="flex min-h-[132px] items-center justify-between gap-5 rounded-[1.5rem] border border-blue-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
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
                  <div key={String(label)} className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-4">
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

          <div className="mt-6 rounded-2xl border border-[#d9e1ea] bg-[#f7f9fc] p-4">
            <button
              type="button"
              onClick={() => setIsDemoAccessOpen((open) => !open)}
              className="flex w-full items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              aria-expanded={isDemoAccessOpen}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf4ff] text-lg">🧭</span>
                <div>
                  <div className="text-sm font-bold text-[#123b8b]">Prototype demo access</div>
                  <p className="mt-1 text-xs leading-5 text-gray-600">Preview protected dashboards for testing. Admin remains login-only.</p>
                </div>
              </div>
              <span className="rounded-full bg-[#123b8b] px-3 py-1 text-xs font-semibold text-white">
                {isDemoAccessOpen ? 'Hide' : 'Open'}
              </span>
            </button>

            {isDemoAccessOpen ? (
              <div className="mt-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-inner">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">Choose demo dashboard</div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {['Freelancer', 'Job Seeker', 'Company', 'Individual Client', 'Operator', 'System Admin'].map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => goToDashboard(role)}
                      className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${
                        role === 'System Admin'
                          ? 'border-[#123b8b] bg-[#123b8b] text-white shadow-md hover:bg-[#0d2f70]'
                          : 'border-gray-200 bg-white text-[#123b8b] hover:border-[#10b3b7] hover:bg-[#eefcff]'
                      }`}
                    >
                      {role === 'System Admin' ? '🔐 ' : '👤 '}{role}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
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
    Freelancer: { Dashboard: 'dashboard-freelancer', 'Find Projects': 'freelancer-find-projects', 'My Profile': 'freelancer-profile', 'Submitted Offers': 'freelancer-proposals', Contracts: 'freelancer-contracts', 'Payments & Tasks': 'freelancer-payments-tasks', Disputes: 'freelancer-disputes', Messages: 'freelancer-messages', Settings: 'freelancer-settings', Support: 'freelancer-support' },
    'Job Seeker': { Dashboard: 'dashboard-jobseeker', 'My CV': 'jobseeker-profile', 'Job Matches': 'jobseeker-opportunities', Applications: 'jobseeker-applications', Interviews: 'jobseeker-interviews', Offers: 'jobseeker-offers', Courses: 'jobseeker-training', Certificates: 'jobseeker-certificates', Settings: 'jobseeker-settings' },
    'Company': { Dashboard: 'dashboard-company', 'Company Profile': 'company-profile', 'Post Opportunity': 'company-create-opportunity', Applicants: 'company-applications', 'Hire Talent': 'company-candidate-search', Interviews: 'company-interviews', Offers: 'company-offers', Tenders: 'company-tenders', 'Training Requests': 'company-training-requests', Reports: 'company-reports' },
    'Individual Client': { Dashboard: 'dashboard-individual', 'Individual Profile': 'individual-profile', 'Post Request': 'individual-post-request', 'My Requests': 'individual-requests', Messages: 'individual-messages', 'Saved Talent': 'individual-saved-talent', Invoices: 'individual-invoices', Support: 'individual-support' },
    Operator: { Dashboard: 'dashboard-operator', 'Opportunity Review': 'operator-opportunities', Applicants: 'operator-applicants', Interviews: 'operator-interviews', Training: 'operator-training', 'Support Cases': 'operator-support', Reports: 'operator-reports', Settings: 'operator-settings' },
    'System Admin': { Dashboard: 'dashboard-admin', 'Website Content': 'admin-content', 'User Management': 'admin-users', 'Verification Center': 'admin-verification', Opportunities: 'admin-opportunities', 'Skills Management': 'admin-skills', 'Credential Management': 'admin-credentials', 'Interview Management': 'admin-interviews', 'Workflow Monitor': 'admin-workflows', Disputes: 'admin-disputes', Reports: 'admin-reports', 'System Settings': 'admin-config' },
  };

  const goToDashboardItem = (role, item) => {
    const target = dashboardNavigation[role]?.[item] || rolePageMap[role] || 'home';
    goToPage(target);
  };

  const roleDashboardMeta = {
    Freelancer: {
      title: 'Freelancer Dashboard',
      subtitle: 'Manage project discovery, submitted offers, contracts, payments, disputes, messages, and profile visibility.',
      sidebar: ['Dashboard', 'Find Projects', 'My Profile', 'Submitted Offers', 'Contracts', 'Payments & Tasks', 'Disputes', 'Messages', 'Settings', 'Support'],
      cards: [['Profile Readiness', '82%', '⭐'], ['Matched Projects', '10', '📋'], ['Active Contracts', '2', '📄'], ['Pending Payments', 'OMR 223', '💰']],
      mainTitle: 'Today’s freelancer actions',
      mainItems: [['Complete portfolio and certificates', 'Improves visibility and matching score', 'Update'], ['Submit offer for dashboard project', 'Deadline: 2026-07-10 · High match', 'Submit'], ['Review pending task payment', 'OMR 123 · Awaiting client review', 'Open']],
      quickTitle: 'Freelancer workspace',
      quickInfo: 'A clearer freelancer journey: complete profile, discover matched projects, submit professional offers, sign contracts, deliver tasks, track payments, resolve disputes, and message clients.',
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
      quickInfo: 'Job seekers should feel guided from profile completion to matching, applications, interviews, offers, and training recommendations without leaving the career journey.',
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
      sidebar: ['Dashboard', 'Opportunity Review', 'Applicants', 'Interviews', 'Training', 'Support Cases', 'Reports', 'Settings'],
      cards: [['Submitted Reviews', '18', '📣'], ['Active Programs', '4', '🎓'], ['Applicant Queues', '320', '👥'], ['Open Cases', '7', '⚠️']],
      mainTitle: 'Daily operation queue',
      mainItems: [['Submitted opportunity needs review', 'Company post · Waiting operator check', 'Review'], ['Shortlisted candidates need interview slot', 'Data Analyst opportunity · 4 candidates', 'Schedule'], ['Training registration support case', 'User needs help with certificate upload', 'Open']],
      quickTitle: 'Operator role boundary',
      quickInfo: 'Operators manage daily platform workflows and support queues. They can review, monitor, and assist, but they should not control global system settings like a System Admin.',
      accent: 'from-[#082f74] to-[#10b3b7]',
    },
    'System Admin': {
      title: 'System Admin Dashboard',
      subtitle: 'Internal Nafadh/TRA administration area for managing system configuration, users, approvals, and reports.',
      sidebar: ['Dashboard', 'Website Content', 'User Management', 'Verification Center', 'Opportunities', 'Skills Management', 'Credential Management', 'Interview Management', 'Workflow Monitor', 'Disputes', 'Reports', 'System Settings'],
      cards: [['Total Users', '184', '👥'], ['Pending Reviews', '12', '⏳'], ['Active Opportunities', '31', '📌'], ['Open Disputes', '3', '⚠️']],
      mainTitle: 'Administration control center',
      mainItems: [['User and company approvals', '12 accounts waiting verification or profile review', 'Review'], ['Opportunity publishing queue', '5 submitted opportunities need admin action', 'Open'], ['System configuration', 'Skills, dropdowns, matching thresholds, and modules', 'Manage']],
      quickTitle: 'Admin access note',
      quickInfo: 'System Admin is login-only. It manages users, website content, configurations, approvals, opportunities, workflows, disputes, reports, and platform-wide settings.',
      accent: 'from-[#082f74] to-[#10b3b7]',
    },
  };

  const goToDashboard = (role = loginRole) => {
    setLoginRole(role);
    // If user was redirected from a login-required modal, go back to that page
    if (redirectAfterLogin && redirectAfterLogin !== 'login') {
      setCurrentPage(redirectAfterLogin);
      setRedirectAfterLogin(null);
    } else {
      setCurrentPage(rolePageMap[role] || 'dashboard-freelancer');
      setRedirectAfterLogin(null);
    }
    setIsServicesMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsLanguageMenuOpen(false);
    scrollToTop();
  };

  const ExportMenu = () => (
    <div className="relative" ref={exportMenuRef}>
      <button
        type="button"
        onClick={() => setIsExportMenuOpen((open) => !open)}
        className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-[#123b8b] shadow-sm transition hover:bg-[#eef7ff]"
        aria-expanded={isExportMenuOpen}
      >
        <span className="text-base leading-none">⬇️</span>
        <span>Export</span>
        <span className={`text-[10px] transition ${isExportMenuOpen ? 'rotate-180' : ''}`}>⌄</span>
      </button>

      {isExportMenuOpen ? (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
          <button
            type="button"
            onClick={() => setIsExportMenuOpen(false)}
            className="flex w-full items-center gap-2 px-4 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-[#eef7ff] hover:text-[#123b8b]"
          >
            <span>📊</span>
            <span>Export Excel</span>
          </button>
          <button
            type="button"
            onClick={() => setIsExportMenuOpen(false)}
            className="flex w-full items-center gap-2 px-4 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-[#eef7ff] hover:text-[#123b8b]"
          >
            <span>📄</span>
            <span>Export PDF</span>
          </button>
        </div>
      ) : null}
    </div>
  );

  const renderUserDashboardPage = (role) => {
    const meta = roleDashboardMeta[role] || roleDashboardMeta.Freelancer;
    const isAdmin = role === 'System Admin';

    return (
      <div className="min-h-screen bg-[#f7f9fc] text-slate-800">
        <div className="flex min-h-screen">
          <aside className="hidden w-[215px] shrink-0 bg-gradient-to-b from-[#053b91] via-[#0753a8] to-[#02aab5] text-white shadow-xl lg:flex lg:flex-col">
            <div className="px-5 py-7">
              <div className="mb-8 flex items-center gap-3">
                <div>
                  <img
                    src={nafadhLogoWhite}
                    alt="Nafadh"
                    className="h-14 w-auto object-contain"
                  />
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
                      <span className="w-5 text-center text-sm">{index === 0 ? '⌂' : '•'}</span>
                      <span className="flex-1">{item}</span>
                      {index !== 0 ? <span className="text-[10px] text-white/60">›</span> : null}
                    </button>
                  );
                })}
              </nav>
            </div>

          </aside>

          {isMobileDashSidebarOpen ? (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setIsMobileDashSidebarOpen(false)} />
              <aside className="absolute left-0 top-0 h-full w-[260px] bg-gradient-to-b from-[#053b91] via-[#0753a8] to-[#02aab5] text-white shadow-xl">
                <div className="px-5 py-7">
                  <div className="mb-4 flex items-center justify-between">
                    <img src={nafadhLogoWhite} alt="Nafadh" className="h-12 w-auto object-contain" />
                    <button type="button" onClick={() => setIsMobileDashSidebarOpen(false)} className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">✕</button>
                  </div>
                  <nav className="space-y-1.5 text-[13px]">
                    {meta.sidebar.map((item, index) => {
                      const targetPage = dashboardNavigation[role]?.[item] || rolePageMap[role];
                      const active = currentPage === targetPage || (index === 0 && currentPage === rolePageMap[role]);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => { goToDashboardItem(role, item); setIsMobileDashSidebarOpen(false); }}
                          className={`flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left transition ${
                            active ? 'bg-white/16 text-white shadow-sm' : 'text-white/82 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <span className="w-5 text-center text-sm">{index === 0 ? '⌂' : '•'}</span>
                          <span className="flex-1">{item}</span>
                        </button>
                      );
                    })}
                  </nav>
                  <div className="mt-6 border-t border-white/15 pt-4">
                    <button type="button" onClick={() => { goToPage('home'); setIsMobileDashSidebarOpen(false); }} className="flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-[13px] text-white/70 hover:bg-white/10 hover:text-white">
                      <span className="w-5 text-center text-sm">←</span>
                      <span>Back to Home</span>
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          ) : null}

          <main className="min-w-0 flex-1 bg-[#eef2f7] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="mb-5 flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsMobileDashSidebarOpen((prev) => !prev)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#123b8b] lg:hidden"
                >
                  ☰
                </button>
                <div>
                  <div className="text-xs text-slate-500">Home / Dashboard</div>
                  <h1 className="mt-1 text-xl font-semibold text-slate-900">Welcome back, {isAdmin ? 'Administrator' : role}</h1>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-end gap-2">
                <ExportMenu />
                <div className="relative" ref={notificationRef}>
                  <button type="button" onClick={() => setIsNotificationOpen((prev) => !prev)} className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 shadow-sm">
                    🔔
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#ef4444] text-[9px] font-bold text-white">2</span>
                  </button>
                  <NotificationDropdown isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
                </div>
                <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 shadow-sm">⚙</button>
                <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 shadow-sm">👤</button>
              </div>
            </div>

            <section className="mb-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {meta.cards.map(([label, value, icon]) => (
                <div key={String(label)} className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef7fb] text-lg">{icon}</div>
                    <div>
                      <div className="text-xs text-slate-500">{label}</div>
                      <div className="text-2xl font-semibold text-[#123b8b]">{typeof value === 'string' && value.includes('OMR') ? <OmrText text={value} size={20} /> : value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section className="mb-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-base font-semibold text-slate-900">Activity Summary</h2>
                    <p className="mt-1 text-xs text-slate-500">A quick overview of work volume across the last months.</p>
                  </div>
                  <span className="rounded-full bg-[#eefcff] px-3 py-1 text-xs font-semibold text-[#123b8b]">Prototype chart</span>
                </div>
                <div className="flex h-44 items-end gap-3 rounded-xl bg-slate-50 px-4 py-4">
                  {[46, 72, 58, 88, 64, 96, 76, 68].map((height, index) => (
                    <div key={index} className="flex flex-1 flex-col items-center gap-2">
                      <div className="w-full rounded-t-lg bg-gradient-to-t from-[#123b8b] to-[#10b3b7]" style={{ height: `${height}%` }} />
                      <span className="text-[10px] text-slate-400">M{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                <h2 className="text-base font-semibold text-slate-900">Recent Activity</h2>
                <div className="mt-4 space-y-3 text-sm">
                  {meta.mainItems.map(([title, desc, action], index) => (
                    <div key={title} className="flex items-start justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3">
                      <div>
                        <div className="font-semibold text-slate-900">{title}</div>
                        <div className="mt-1 text-xs text-slate-500">{typeof desc === 'string' && desc.includes('OMR') ? <OmrText text={desc} size={11} /> : desc}</div>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#123b8b] shadow-sm">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
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
                          <td className="px-3 py-3 text-slate-500">{typeof desc === 'string' && desc.includes('OMR') ? <OmrText text={desc} size={12} /> : desc}</td>
                          <td className="px-3 py-3"><span className="rounded bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">Active</span></td>
                          <td className="px-3 py-3"><button type="button" className="rounded border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700">{action}</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                  <h2 className="text-base font-semibold text-slate-900">{meta.quickTitle}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{meta.quickInfo}</p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Quick actions</h3>
                  <div className="mt-4 grid gap-2">
                    <button type="button" onClick={() => goToPage('work')} className="rounded border border-slate-200 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">Explore opportunities</button>
                    <button type="button" onClick={() => goToPage('hire')} className="rounded border border-slate-200 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">Browse talent</button>
                    <button type="button" onClick={() => goToPage('training')} className="rounded border border-slate-200 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">View training</button>
                    <button type="button" onClick={() => goToPage('login')} className="rounded border border-slate-200 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50">Log out</button>
                  </div>
                </div>

              </div>
            </section>
            </div>
          </main>
        </div>
      </div>
    );
  };

  function ModuleStat({ label, value, icon = '●' }) {
    const displayValue = typeof value === 'string' && value.includes('OMR') ? <OmrText text={value} size={20} /> : value;
    return (
      <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eef7fb] text-lg">{icon}</div>
          <div><div className="text-xs text-slate-500">{label}</div><div className="text-2xl font-semibold text-[#123b8b]">{displayValue}</div></div>
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
    const renderCell = (cell) => {
      if (typeof cell === 'string' && cell.includes('OMR')) return <OmrText text={cell} size={12} />;
      return cell;
    };
    return (
      <section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3"><h2 className="text-base font-semibold text-slate-900">Records</h2><button className="rounded bg-[#02aab5] px-3 py-2 text-xs font-medium text-white">+ Add</button></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[700px] border-collapse text-left text-sm"><thead><tr className="border-b border-slate-100 bg-slate-50 text-xs text-slate-500">{headers.map(h => <th key={h} className="px-3 py-3 font-semibold">{h}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i} className="border-b border-slate-100 text-slate-700">{row.map((cell, j) => <td key={`${i}-${j}`} className="px-3 py-3"><span className={j === row.length - 1 ? 'rounded border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700' : j === 0 ? 'font-medium text-slate-900' : ''}>{renderCell(cell)}</span></td>)}</tr>)}</tbody></table></div>
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
              <div className="mb-8 flex items-center gap-3">
                  <img
                    src={nafadhLogoWhite}
                    alt="Nafadh"
                    className="h-14 w-auto object-contain"
                  />
                </div>
              <nav className="space-y-1.5 text-[13px]">
                {meta.sidebar.map((item, index) => {
                  const targetPage = dashboardNavigation[role]?.[item] || rolePageMap[role];
                  const active = currentPage === targetPage || (index === 0 && currentPage === rolePageMap[role]);
                  return <button key={item} type="button" onClick={() => goToDashboardItem(role, item)} className={`flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left transition ${active ? 'bg-white/16 text-white shadow-sm' : 'text-white/82 hover:bg-white/10 hover:text-white'}`}><span className="w-5 text-center text-sm">{index === 0 ? '⌂' : '•'}</span><span className="flex-1">{item}</span>{index !== 0 ? <span className="text-[10px] text-white/60">›</span> : null}</button>;
                })}
              </nav>
            </div>
          </aside>
          <main className="min-w-0 flex-1 bg-[#eef2f7] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <div className="mx-auto w-full max-w-7xl">
              <div className="mb-5 flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm"><div className="flex items-center gap-3"><button type="button" onClick={() => setIsMobileDashSidebarOpen((p) => !p)} className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#123b8b] lg:hidden">☰</button><div><div className="text-xs text-slate-500">Home / {role}</div><h1 className="mt-1 text-xl font-semibold text-slate-900">{title}</h1><p className="mt-1 text-xs text-slate-500">{subtitle}</p></div></div><div className="flex flex-wrap items-center justify-end gap-2"><ExportMenu /><div className="relative" ref={notificationRef}><button type="button" onClick={() => setIsNotificationOpen((p) => !p)} className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 shadow-sm">🔔<span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#ef4444] text-[9px] font-bold text-white">2</span></button><NotificationDropdown isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} /></div><button type="button" onClick={() => goToPage('login')} className="rounded bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">Log out</button></div></div>
            {children}
            </div>
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

  const freelancerProjectsDirectory = [
    ['Centralized Reporting & Analytics Dashboard for Nafadh', 'Global Company', 'Skills-based selection', 'OMR 569,214', '2026-07-10', 'Saved'],
    ['New company account project', 'Global Company', 'Open project', 'OMR 800', '2025-09-20', 'Submitted'],
    ['Website content update and UI polish', 'Omani SME', 'Remote', 'OMR 450', '2026-05-16', 'Open'],
  ];

  const freelancerProposals = [
    ['New company account project', 'Global Company', '2025-09-14', 'Submitted', 'View'],
    ['Test 14 Sep', 'Global Company', '2025-09-14', 'Approved', 'View'],
    ['Centralized Reporting & Analytics Dashboard for Nafadh', 'Global Company', '2025-09-22', 'Under Evaluation', 'View'],
    ['Website content update and UI polish', 'Omani SME', '2026-04-27', 'Pending Review', 'Follow up'],
  ];

  const freelancerContracts = [
    ['Centralized Reporting & Analytics Dashboard for Nafadh', 'Global Company', 'Skills-based selection', '2025-09-22', '2026-12-22', 'Signed'],
    ['New company account project', 'Global Company', 'Skills-based selection', '2025-09-15', '2025-09-20', 'Signed'],
  ];

  const freelancerPaymentsTasks = [
    ['m1', 'Freelancer Name', '2025-09-20', 'OMR 123', 'Awaiting Review', 'View'],
    ['Centralized reporting module integrated with Nafadh - 1', 'Freelancer Name', '2025-11-22', 'OMR 100', 'Approved', 'View'],
    ['Interactive dashboards for freelancers, clients, and admins - 2', 'Freelancer Name', '2025-12-22', 'OMR 70', 'Approved', 'View'],
    ['Interactive dashboards for freelancers, clients, and admins - 3', 'Freelancer Name', '2026-01-22', 'OMR 200', 'Approved', 'View'],
  ];

  const freelancerDisputes = [
    ['Freelancer Name', 'Centralized Reporting & Analytics Dashboard for Nafadh', 'Task 1', 'Reason 2', '2025-11-30', 'Awaiting Response'],
  ];

  const renderFreelancerFindProjectsPage = () => (
    <DashboardShell role="Freelancer" title="Find Projects" subtitle="Discover suitable projects, check readiness, save opportunities, and submit offers with confidence.">
      <section className="mb-5 grid gap-4 md:grid-cols-4">
        <ModuleStat label="Recommended Matches" value="10" icon="🎯" />
        <ModuleStat label="Saved Projects" value="3" icon="🔖" />
        <ModuleStat label="Closing Soon" value="2" icon="⏰" />
        <ModuleStat label="Offer Readiness" value="82%" icon="⭐" />
      </section>

      <section className="mb-5 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="mb-4 rounded bg-gradient-to-r from-[#123b8b] to-[#02aab5] px-4 py-3 text-sm font-semibold text-white">Project Search & Filters</div>
        <div className="grid gap-3 md:grid-cols-6">
          <MiniSelect label="Project Type" options={['All', 'Open project', 'Skills-based selection', 'Invitation']} />
          <MiniSelect label="Service Area" options={['All', 'Development', 'Design', 'Data', 'Networks']} />
          <MiniField label="Project Value" placeholder="0 - 9,999,999" />
          <MiniSelect label="Experience Level" options={['All', 'Junior', 'Intermediate', 'Senior']} />
          <MiniSelect label="Submission Type" options={['All', 'Direct', 'Skills Test', 'By Invitation']} />
          <MiniField label="Last Submission Date" type="date" />
        </div>
      </section>

      <section className="mb-5 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-500">Global Company · High Match</p>
              <h2 className="mt-2 text-lg font-semibold text-slate-900">Centralized Reporting & Analytics Dashboard for Nafadh</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Build a reporting dashboard with role-based access, analytics, downloadable reports, and consolidated data from projects, users, tasks, and payments.</p>
            </div>
            <Tag tone="blue">Saved</Tag>
          </div>
          <div className="grid gap-4 border-t border-slate-100 pt-4 text-sm md:grid-cols-4">
            <div><div className="text-xs text-slate-500">Project Value</div><div className="font-semibold text-[#123b8b]">OMR 569,214</div></div>
            <div><div className="text-xs text-slate-500">Work Mode</div><div className="font-semibold text-slate-800">Remote</div></div>
            <div><div className="text-xs text-slate-500">Deadline</div><div className="font-semibold text-slate-800">2026-07-10</div></div>
            <div><div className="text-xs text-slate-500">Match Score</div><div className="font-semibold text-emerald-600">91%</div></div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2"><Tag tone="cyan">Dashboard</Tag><Tag tone="blue">React</Tag><Tag tone="green">Analytics</Tag><Tag tone="amber">Role-Based Access</Tag></div>
          <div className="mt-5 rounded bg-slate-50 p-4">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-600"><span>Submission readiness</span><span className="text-[#123b8b]">82%</span></div>
            <ProgressBar value={82} />
            <p className="mt-2 text-xs text-slate-500">Add one related portfolio sample and verify certificates to increase your offer strength.</p>
          </div>
          <div className="mt-5 flex flex-wrap justify-end gap-2"><button className="rounded border border-slate-200 px-4 py-2 text-sm">View Details</button><button className="rounded border border-[#02aab5] px-4 py-2 text-sm text-[#02aab5]">Save</button><button className="rounded bg-[#02aab5] px-4 py-2 text-sm text-white">Start Offer</button></div>
        </div>

        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Before You Apply</h2>
          <div className="mt-4 space-y-3 text-sm">
            {[['Profile is complete enough', true], ['Relevant service package exists', true], ['Portfolio sample attached', false], ['Bank account ready', true], ['No unresolved disputes', true]].map(([label, done]) => <div key={String(label)} className="flex items-center justify-between rounded bg-slate-50 px-3 py-2"><span>{label}</span><span className={done ? 'text-emerald-600' : 'text-amber-600'}>{done ? '✓ Ready' : 'Needs update'}</span></div>)}
          </div>
        </div>
      </section>

      <SimpleTable headers={['Project', 'Company', 'Type', 'Value', 'Deadline', 'Status']} rows={freelancerProjectsDirectory} />
    </DashboardShell>
  );

  const renderFreelancerProfilePage = () => (
    <DashboardShell role="Freelancer" title="Personal Profile" subtitle="Manage public freelancer information, services, skills, certificates, portfolio, reviews, and profile readiness.">
      <section className="mb-5 grid gap-4 md:grid-cols-4">
        <ModuleStat label="Profile Completion" value="82%" icon="⭐" />
        <ModuleStat label="Active Services" value="2" icon="🧰" />
        <ModuleStat label="Portfolio Samples" value="4" icon="🖼️" />
        <ModuleStat label="Average Rating" value="4.8" icon="💬" />
      </section>

      <section className="mb-5 grid gap-5 xl:grid-cols-[0.72fr_1.28fr]">
        <div className="rounded-sm border border-slate-100 bg-white p-5 text-center shadow-sm">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#eef7fb] text-5xl">👨‍💻</div>
          <button className="mt-4 rounded bg-[#02aab5] px-4 py-2 text-xs font-semibold text-white">Upload Photo</button>
          <div className="mt-5 grid gap-3 text-left"><MiniField label="Full Name" placeholder="Freelancer Name" /><MiniField label="Phone" placeholder="95110510" /><MiniSelect label="Governorate" options={['Muscat', 'Al Batinah North', 'Al Dhahirah', 'Al Dakhiliyah']} /><MiniSelect label="Availability" options={['Available for projects', 'Searching', 'Busy', 'Not visible']} /></div>
          <div className="mt-5 rounded bg-blue-50 p-4 text-left text-xs text-[#123b8b]"><strong>Visibility tip:</strong> clients should see your strongest service, response time, verified skills, and recent work samples first.</div>
        </div>

        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="mb-5 flex flex-wrap gap-2">{['General Details', 'Services', 'Skills', 'Portfolio', 'Certificates', 'Reviews & Ratings'].map((tab, index) => <button key={tab} className={index === 0 ? 'rounded border px-3 py-2 text-xs font-semibold border-[#123b8b] bg-blue-50 text-[#123b8b]' : 'rounded border px-3 py-2 text-xs font-semibold border-slate-200 text-slate-600'}>{tab}</button>)}</div>
          <div className="grid gap-4 md:grid-cols-2"><MiniField label="Civil ID" placeholder="114623176" /><MiniField label="Email" placeholder="freelancer@email.com" /><MiniField label="Website / Portfolio URL" placeholder="Enter URL" /><MiniSelect label="District / Wilayat" options={['Suhar', 'Muscat', 'Ibri', 'Nizwa']} /></div>
          <label className="mt-4 block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Professional Overview</div><textarea rows={6} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Briefly explain what you do, your strongest services, expected deliverables, tools, and work style." /></label>
          <div className="mt-4 grid gap-4 md:grid-cols-3"><MiniSelect label="Main Service" options={['Development', 'Design', 'Testing', 'Data Analysis']} /><MiniSelect label="Top Skill" options={['React', 'Figma', 'ASP.NET', 'Power BI']} /><MiniSelect label="Experience" options={['0-1 years', '2-4 years', '5+ years']} /></div>
          <div className="mt-5 flex justify-end"><button className="rounded bg-[#123b8b] px-4 py-2 text-sm text-white">Save and Continue</button></div>
        </div>
      </section>

      <section className="mb-5 grid gap-5 xl:grid-cols-2">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Profile Completion Checklist</h2>
          <div className="mt-4 space-y-3 text-sm">{[['Basic information completed', true], ['At least 2 services added', true], ['Portfolio samples added', true], ['Certificates uploaded', false], ['Bank account verified', true], ['Response preferences selected', false]].map(([label, done]) => <div key={String(label)} className="flex items-center justify-between rounded bg-slate-50 px-3 py-2"><span>{label}</span><span className={done ? 'text-emerald-600' : 'text-amber-600'}>{done ? '✓ Done' : 'Pending'}</span></div>)}</div>
        </div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">Profile Strength</h2>
          <div className="mt-4 space-y-4 text-sm">{[['Basic information',100],['Services added',85],['Portfolio samples',75],['Certificates verified',55]].map(([label,value]) => <div key={String(label)}><div className="mb-1 flex justify-between"><span>{label}</span><span className="font-semibold text-[#123b8b]">{value}%</span></div><ProgressBar value={value} /></div>)}</div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        <SimpleTable headers={['Service', 'Category', 'Price', 'Status', 'Actions']} rows={freelancerServices.map(r => [...r, 'Edit'])} />
        <SimpleTable headers={['Portfolio Item', 'Type', 'Related Skill', 'Visibility', 'Actions']} rows={[[ 'Nafadh UI Prototype', 'Web App', 'React / UX', 'Public', 'Edit'], ['Power BI Student Dashboard', 'Data', 'Power BI', 'Public', 'Edit'], ['Website QA Report', 'Testing', 'QA', 'Private', 'Edit']]} />
      </section>
    </DashboardShell>
  );

  const renderFreelancerProposalsPage = () => (
    <DashboardShell role="Freelancer" title="Submitted Offers" subtitle="Track submitted offers, draft new proposals, and improve evaluation readiness.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="All Offers" value="5" icon="📨" /><ModuleStat label="Under Evaluation" value="1" icon="⏳" /><ModuleStat label="Approved" value="1" icon="✅" /><ModuleStat label="Draft Offers" value="2" icon="✍️" /></section>
      <section className="mb-5 grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">Offer Builder</h2><div className="grid gap-4"><MiniField label="Proposed Timeline" placeholder="Example: 6 weeks" /><MiniField label="Proposed Value" placeholder="OMR" /><MiniSelect label="Delivery Method" options={['Milestones', 'One final delivery', 'Monthly tasks']} /><MiniSelect label="Attachments" options={['CV', 'Portfolio', 'Technical Proposal', 'No attachment']} /></div><label className="mt-4 block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Cover Letter</div><textarea rows={5} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Explain why you are suitable, similar work, and delivery plan." /></label><button className="mt-4 rounded bg-[#02aab5] px-4 py-2 text-sm text-white">Save Draft Offer</button></div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">Evaluation Signals</h2><div className="grid gap-3 md:grid-cols-2">{[['Skills match', 91], ['Portfolio relevance', 76], ['Delivery clarity', 84], ['Certificates', 55]].map(([label, value]) => <div key={String(label)} className="rounded bg-slate-50 p-4"><div className="mb-2 flex justify-between text-sm"><span>{label}</span><span className="font-semibold text-[#123b8b]">{value}%</span></div><ProgressBar value={value} /></div>)}</div></div>
      </section>
      <section className="mb-5 rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="grid gap-3 md:grid-cols-4"><MiniField label="Search" placeholder="Search offer title" /><MiniSelect label="Status" options={['All', 'Draft', 'Submitted', 'Under Evaluation', 'Approved', 'Pending Review']} /><MiniSelect label="Project Type" options={['All', 'Open', 'Skills-based selection']} /><MiniSelect label="Sort" options={['Newest', 'Oldest', 'Status']} /></div></section>
      <SimpleTable headers={['Project Title', 'Client', 'Submission Date', 'Status', 'Action']} rows={freelancerProposals} />
    </DashboardShell>
  );

  const renderFreelancerContractsPage = () => (
    <DashboardShell role="Freelancer" title="Contracts" subtitle="View signed contracts, milestones, obligations, documents, and project agreement details.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Signed Contracts" value="2" icon="📄" /><ModuleStat label="Active" value="1" icon="⏳" /><ModuleStat label="Completed" value="1" icon="✅" /><ModuleStat label="Next Milestone" value="7 days" icon="🔔" /></section>
      <section className="mb-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]"><SimpleTable headers={['Project Title', 'Client', 'Submission Type', 'Project Date', 'End Date', 'Status']} rows={freelancerContracts} /><div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="font-semibold text-slate-900">Milestone Timeline</h2><div className="mt-4 space-y-3 text-sm">{[['Contract signed', 'Completed'], ['Initial requirements confirmed', 'Completed'], ['Dashboard prototype delivery', 'In progress'], ['Client review and payment release', 'Upcoming']].map(([item, status]) => <div key={item} className="flex items-center justify-between rounded bg-slate-50 px-3 py-2"><span>{item}</span><Tag tone={status === 'Completed' ? 'green' : status === 'In progress' ? 'cyan' : 'amber'}>{status}</Tag></div>)}</div></div></section>
    </DashboardShell>
  );

  const renderFreelancerPaymentsTasksPage = () => (
    <DashboardShell role="Freelancer" title="Payments & Tasks" subtitle="Track tasks, delivery dates, values, payment approvals, withdrawal readiness, and bank settings.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Total Balance" value="OMR 493" icon="💰" /><ModuleStat label="Awaiting Review" value="OMR 123" icon="⏳" /><ModuleStat label="Approved Tasks" value="3" icon="✅" /><ModuleStat label="Bank Account" value="Ready" icon="🏦" /></section>
      <section className="mb-5 grid gap-5 xl:grid-cols-[0.8fr_1.2fr]"><div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">Withdraw Funds</h2><div className="grid gap-4"><MiniField label="Available Amount" placeholder="OMR 370" /><MiniSelect label="Bank Account" options={['Bank Muscat **** 2140', 'Add new bank account']} /><MiniSelect label="Withdrawal Type" options={['Normal transfer', 'Urgent review']} /></div><button className="mt-4 rounded bg-[#123b8b] px-4 py-2 text-sm text-white">Request Withdrawal</button></div><div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">Task Delivery Checklist</h2><div className="grid gap-3 md:grid-cols-2">{[['Upload deliverables', true], ['Add delivery notes', true], ['Client review pending', false], ['Payment release pending', false]].map(([label, done]) => <div key={String(label)} className="rounded bg-slate-50 p-3 text-sm"><span className={done ? 'text-emerald-600' : 'text-amber-600'}>{done ? '✓' : '•'}</span> {label}</div>)}</div></div></section>
      <section className="mb-5 rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="flex flex-wrap gap-2"><Tag tone="blue">Payments</Tag><Tag tone="cyan">Tasks</Tag><Tag tone="green">Bank Account Settings</Tag><Tag tone="amber">Withdrawal Requests</Tag></div></section>
      <SimpleTable headers={['Task Name', 'Freelancer', 'Last Submission', 'Value', 'Status', 'Action']} rows={freelancerPaymentsTasks} />
    </DashboardShell>
  );

  const renderFreelancerDisputesPage = () => (
    <DashboardShell role="Freelancer" title="Disputes" subtitle="Follow payment or task disputes, add evidence, and track response status.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Open Disputes" value="1" icon="⚠️" /><ModuleStat label="Awaiting Response" value="1" icon="⏳" /><ModuleStat label="Resolved" value="0" icon="✅" /><ModuleStat label="Avg. Response" value="2 days" icon="🕒" /></section>
      <section className="mb-5 rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">Create Dispute / Clarification</h2><div className="grid gap-4 md:grid-cols-4"><MiniSelect label="Related Project" options={['Centralized Reporting Dashboard', 'New company account project']} /><MiniSelect label="Dispute Type" options={['Payment delay', 'Scope change', 'Task rejection', 'Other']} /><MiniSelect label="Priority" options={['Normal', 'High', 'Urgent']} /><MiniSelect label="Evidence" options={['Deliverable file', 'Chat message', 'Contract clause']} /></div><label className="mt-4 block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Explanation</div><textarea rows={4} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Write a clear explanation and attach evidence before submission." /></label><button className="mt-4 rounded bg-[#02aab5] px-4 py-2 text-sm text-white">Submit for Review</button></section>
      <SimpleTable headers={['Freelancer', 'Project', 'Task', 'Reason', 'Submission Date', 'Status']} rows={freelancerDisputes} />
    </DashboardShell>
  );

  const renderFreelancerMessagesPage = () => (
    <DashboardShell role="Freelancer" title="Messages" subtitle="Direct messages between freelancer, client, and support with project context.">
      <section className="grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-sm border border-slate-100 bg-white shadow-sm"><div className="flex items-center justify-between border-b border-slate-100 p-5"><div><h2 className="font-semibold text-slate-900">Global Company</h2><p className="text-xs text-slate-500">Related project: Centralized Reporting Dashboard · Last message 12:48 PM</p></div><Tag tone="green">Client</Tag></div><div className="min-h-[360px] space-y-5 p-5 text-sm"><div className="mx-auto w-fit rounded bg-slate-50 px-3 py-1 text-xs text-slate-500">Sep 14, 2025</div><div className="max-w-sm rounded-2xl bg-blue-50 p-3 text-slate-700">Hello, we reviewed your offer and need one clarification about milestones.</div><div className="ml-auto max-w-sm rounded-2xl bg-[#123b8b] p-3 text-white">Welcome, please share the required clarification and I will update the proposal.</div><div className="max-w-sm rounded-2xl bg-blue-50 p-3 text-slate-700">Can you split the dashboard into prototype, reports, and admin review milestones?</div></div><div className="flex items-center gap-2 border-t border-slate-100 p-4"><button className="rounded bg-slate-100 px-3 py-2">📎</button><input className="flex-1 rounded border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Write a message" /><button className="rounded bg-[#02aab5] px-4 py-2 text-white">➤</button></div></div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><MiniField label="Search" placeholder="Search messages" /><div className="mt-4 space-y-3"><div className="rounded bg-slate-50 p-4"><div className="font-semibold text-[#123b8b]">Global Company</div><div className="text-xs text-slate-500">9/14/2025 · 12:48 PM</div><p className="mt-2 text-sm text-slate-600">1 new project clarification</p></div><div className="rounded bg-slate-50 p-4"><div className="font-semibold text-[#123b8b]">Nafadh Support</div><div className="text-xs text-slate-500">Yesterday</div><p className="mt-2 text-sm text-slate-600">Payment review update</p></div></div></div>
      </section>
    </DashboardShell>
  );

  const renderFreelancerSettingsPage = () => (
    <DashboardShell role="Freelancer" title="Settings" subtitle="Manage notification preferences, visibility, account security, and work preferences.">
      <section className="grid gap-5 xl:grid-cols-2">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">Account & Visibility</h2><div className="grid gap-4"><MiniSelect label="Profile Visibility" options={['Public', 'Visible to logged-in clients', 'Private']} /><MiniSelect label="Language" options={['Arabic', 'English']} /><MiniSelect label="Notification Channel" options={['Email', 'SMS', 'Platform only']} /><MiniSelect label="Project Invitations" options={['Allow all verified clients', 'Only matched projects', 'Pause invitations']} /></div></div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">Work Preferences</h2><div className="grid gap-4"><MiniSelect label="Preferred Work Mode" options={['Remote', 'Hybrid', 'On-site']} /><MiniSelect label="Minimum Project Value" options={['Any', 'OMR 50+', 'OMR 200+', 'OMR 500+']} /><MiniSelect label="Weekly Availability" options={['Less than 10 hours', '10-20 hours', '20-40 hours', 'Full-time freelance']} /><MiniSelect label="Auto-save matching projects" options={['Enabled', 'Disabled']} /></div></div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">Security</h2><div className="grid gap-4"><MiniField label="Current Password" type="password" /><MiniField label="New Password" type="password" /><MiniField label="Confirm New Password" type="password" /></div><button className="mt-5 rounded bg-[#123b8b] px-4 py-2 text-sm text-white">Save Security Settings</button></div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">Notifications</h2><div className="space-y-3 text-sm">{['New project matches', 'Client messages', 'Offer status updates', 'Payment release updates', 'Dispute responses'].map((item) => <div key={item} className="flex items-center justify-between rounded bg-slate-50 px-3 py-2"><span>{item}</span><Tag tone="green">On</Tag></div>)}</div></div>
      </section>
    </DashboardShell>
  );

  const renderJobSeekerProfilePage = () => {
    const tabs = ['Overview', 'Education', 'Experience', 'Projects', 'Certificates', 'Trainings', 'Derived Skills'];
    const completionItems = [
      ['Basic information completed', true],
      ['CV uploaded', true],
      ['At least one education record', true],
      ['Experience or training added', true],
      ['Certificates attached', false],
      ['Job preferences selected', false],
    ];
    const skillRows = [
      ['Power BI', 86, '28 months', 'Derived from training, projects, and certificates'],
      ['Excel Reporting', 82, '30 months', 'Derived from courses and practical projects'],
      ['React', 68, '14 months', 'Derived from portfolio projects'],
      ['Communication', 78, '24 months', 'Derived from experience and evaluations'],
      ['SQL', 64, '12 months', 'Derived from coursework and projects'],
      ['Technical Support', 72, '18 months', 'Derived from experience entries'],
    ];

    return (
      <DashboardShell role="Job Seeker" title="My CV & Skill Profile" subtitle="Complete a skill-based career profile used for matching, nominations, interviews, and offers.">
        <section className="mb-5 grid gap-4 md:grid-cols-4">
          <ModuleStat label="Profile Completion" value="78%" icon="⭐" />
          <ModuleStat label="Derived Skills" value="14" icon="🧠" />
          <ModuleStat label="Experience Months" value="28" icon="📅" />
          <ModuleStat label="Credential Score" value="72" icon="🏅" />
        </section>

        <section className="mb-5 grid gap-5 xl:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-sm border border-slate-100 bg-white p-5 text-center shadow-sm">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#eef7fb] text-5xl">👩‍💼</div>
            <button className="mt-4 rounded bg-[#02aab5] px-4 py-2 text-xs font-semibold text-white">Upload Photo</button>
            <h2 className="mt-4 text-lg font-semibold text-slate-900">Job Seeker Name</h2>
            <p className="text-sm text-slate-500">Junior Data Analyst · Sohar, Oman</p>
            <div className="mt-5 rounded bg-blue-50 p-4 text-left">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold text-[#123b8b]"><span>CV Strength</span><span>78%</span></div>
              <ProgressBar value={78} />
              <p className="mt-2 text-xs leading-5 text-[#123b8b]">Add certificates and job preferences to increase visibility in employer search and TRA nominations.</p>
            </div>
            <div className="mt-5 grid gap-3 text-left">
              <MiniField label="Civil ID" placeholder="114623176" />
              <MiniField label="Email" placeholder="jobseeker@email.com" />
              <MiniField label="Phone" placeholder="95110510" />
              <MiniSelect label="Current Status" options={['Active Job Seeker', 'Student', 'Fresh Graduate', 'Trainee', 'Currently Employed']} />
              <MiniSelect label="Visibility" options={['Visible to verified companies', 'Visible for TRA nominations', 'Private']} />
            </div>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="mb-5 flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveProfileTab(tab)}
                  className={`rounded px-3 py-2 text-xs font-semibold transition ${activeProfileTab === tab ? 'bg-[#02aab5] text-white shadow-sm' : 'border border-slate-200 bg-white text-slate-700 hover:border-[#02aab5] hover:text-[#02aab5]'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeProfileTab === 'Overview' && (
              <div>
                <div className="grid gap-4 md:grid-cols-2">
                  <MiniField label="Full Name" placeholder="Job Seeker Name" />
                  <MiniSelect label="Primary Specification" options={['Information Technology', 'Data & AI', 'Business', 'Engineering', 'Design']} />
                  <MiniSelect label="Sub-Specification" options={['Data Analysis', 'Software Development', 'IT Support', 'UX/UI Design', 'Operations']} />
                  <MiniSelect label="Preferred Work Mode" options={['On-site', 'Remote', 'Hybrid', 'Flexible']} />
                  <MiniSelect label="Preferred Opportunity Type" options={['Full-Time', 'Part-Time', 'Internship', 'Training Program', 'Contract']} />
                  <MiniField label="Portfolio / LinkedIn URL" placeholder="https://..." />
                </div>
                <label className="mt-4 block">
                  <div className="mb-1.5 text-xs font-semibold text-slate-600">Career Summary</div>
                  <textarea rows={5} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Write a short professional summary, career interest, strongest skills, and type of opportunities you are seeking." />
                </label>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded bg-slate-50 p-4">
                    <h3 className="text-sm font-semibold text-slate-900">Profile Completion Checklist</h3>
                    <div className="mt-3 space-y-2 text-sm">
                      {completionItems.map(([label, done]) => (
                        <div key={String(label)} className="flex items-center justify-between rounded bg-white px-3 py-2">
                          <span>{label}</span>
                          <span className={done ? 'text-emerald-600' : 'text-amber-600'}>{done ? '✓ Done' : 'Pending'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded bg-slate-50 p-4">
                    <h3 className="text-sm font-semibold text-slate-900">CV Upload Area</h3>
                    <div className="mt-3 rounded border border-dashed border-[#02aab5] bg-white p-5 text-center text-sm">
                      <div className="text-3xl">📄</div>
                      <div className="mt-2 font-semibold text-[#123b8b]">Latest CV uploaded</div>
                      <p className="mt-1 text-xs text-slate-500">PDF · Updated 2026-04-29 · Used as profile snapshot during application.</p>
                      <div className="mt-4 flex justify-center gap-2"><button className="rounded border border-slate-200 px-3 py-2 text-xs">Preview</button><button className="rounded bg-[#02aab5] px-3 py-2 text-xs text-white">Replace CV</button></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeProfileTab !== 'Overview' && activeProfileTab !== 'Derived Skills' && (
              <div>
                <div className="mb-4 rounded bg-blue-50 p-4 text-xs leading-5 text-[#123b8b]">
                  Entries in {activeProfileTab} support the derived skill profile and matching percentage. Updating or deleting entries should recalculate related skills later in the real backend.
                </div>
                <div className="mb-4 grid gap-4 md:grid-cols-3">
                  <MiniField label={`${activeProfileTab} Title / Name`} />
                  <MiniField label="Provider / Organization" />
                  <MiniSelect label="Related Skills" options={['Power BI', 'React', 'SQL', 'Communication', 'Technical Support']} />
                </div>
                <div className="mb-4 grid gap-4 md:grid-cols-3">
                  <MiniField label="From Date" type="month" />
                  <MiniField label="To Date" type="month" />
                  <MiniSelect label="Tech Stack" options={['Power BI', 'React', 'SQL Server', 'Excel', 'Figma']} />
                </div>
                <label className="block">
                  <div className="mb-1.5 text-xs font-semibold text-slate-600">Description</div>
                  <textarea rows={5} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Briefly describe this entry, responsibilities, achievements, or learning outcomes." />
                </label>
                <div className="mt-5 flex justify-end gap-2"><button className="rounded border border-slate-200 px-3 py-2 text-xs font-medium">Cancel</button><button className="rounded bg-[#02aab5] px-3 py-2 text-xs font-medium text-white">Save / Update</button></div>
              </div>
            )}

            {activeProfileTab === 'Derived Skills' && (
              <div>
                <div className="mb-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded bg-slate-50 p-4"><div className="text-xs text-slate-500">Top Skill</div><div className="mt-1 text-lg font-semibold text-[#123b8b]">Power BI</div></div>
                  <div className="rounded bg-slate-50 p-4"><div className="text-xs text-slate-500">Verified Credentials</div><div className="mt-1 text-lg font-semibold text-[#123b8b]">4</div></div>
                  <div className="rounded bg-slate-50 p-4"><div className="text-xs text-slate-500">Average Readiness</div><div className="mt-1 text-lg font-semibold text-[#123b8b]">75%</div></div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {skillRows.map(([skill, value, months, note]) => (
                    <div key={skill} className="rounded border border-slate-100 bg-slate-50 p-4">
                      <div className="mb-2 flex items-center justify-between text-sm"><span className="font-semibold text-slate-900">{skill}</span><span className="font-semibold text-[#123b8b]">{value}%</span></div>
                      <ProgressBar value={value} />
                      <div className="mt-2 flex items-center justify-between text-xs text-slate-500"><span>{months}</span><span>{note}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-3">
          <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm xl:col-span-2">
            <h2 className="text-base font-semibold text-slate-900">Recent Profile Records</h2>
            <div className="mt-4 overflow-hidden rounded border border-slate-100">
              <SimpleTable headers={['Section', 'Title', 'Skills', 'Status', 'Action']} rows={[
                ['Education', 'BSc Computer Science', 'Programming, Data', 'Completed', 'Edit'],
                ['Training', 'Power BI Practical Course', 'Power BI, Reporting', 'Completed', 'Edit'],
                ['Project', 'Student Performance Dashboard', 'Excel, Power BI', 'Visible', 'Edit'],
                ['Certificate', 'Data Analysis Fundamentals', 'Data, Visualization', 'Needs verification', 'Upload'],
              ]} />
            </div>
          </div>
          <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">Matching Readiness</h2>
            <div className="mt-4 space-y-4 text-sm">
              {[['Primary skills selected', 100], ['Experience evidence', 75], ['Credentials verified', 55], ['Preferences completed', 60]].map(([label, value]) => (
                <div key={String(label)}><div className="mb-1 flex justify-between"><span>{label}</span><span className="font-semibold text-[#123b8b]">{value}%</span></div><ProgressBar value={value} /></div>
              ))}
            </div>
            <button className="mt-5 w-full rounded bg-[#123b8b] px-4 py-2 text-sm text-white">Save Profile Changes</button>
          </div>
        </section>
      </DashboardShell>
    );
  };

  const renderJobSeekerOpportunitiesPage = () => <DashboardShell role="Job Seeker" title="Browse Opportunities" subtitle="Search opportunities, check match percentage, and start the application flow."><section className="mb-5 rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="grid gap-3 md:grid-cols-5"><MiniField label="Keyword" placeholder="Search title or skill" /><MiniSelect label="Opportunity Type" options={['All', 'Full-Time', 'Part-Time', 'Contract', 'Internship', 'Training']} /><MiniSelect label="Work Mode" options={['All', 'On-site', 'Remote', 'Hybrid']} /><MiniSelect label="Education" options={['All', 'Diploma', 'Bachelor', 'Master']} /><MiniSelect label="Experience" options={['All', '0-1 Years', '2-4 Years', '5+ Years']} /></div></section><section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{opportunityListings.slice(0, 5).map((item, index) => <div key={item.title} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-3 flex items-center justify-between"><h3 className="font-semibold text-[#123b8b]">{item.title}</h3><Tag tone={index % 2 ? 'cyan' : 'green'}>{index % 2 ? '84%' : '92%'} Match</Tag></div><p className="text-sm text-slate-500">{item.company} · {item.type} · {item.location}</p><div className="mt-4 flex flex-wrap gap-2">{item.tags.map(t => <Tag key={t} tone="cyan">{t}</Tag>)}</div><div className="mt-5 flex gap-2"><button className="rounded border border-slate-200 px-3 py-2 text-xs">Details</button><button className="rounded bg-[#02aab5] px-3 py-2 text-xs text-white">Apply</button></div></div>)}</section></DashboardShell>;
  const renderJobSeekerApplicationsPage = () => <DashboardShell role="Job Seeker" title="My Applications" subtitle="Track applications, nominations, invitations, and current status updates."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Total Applications" value="5" icon="📄" /><ModuleStat label="Pending Review" value="2" icon="⏳" /><ModuleStat label="Shortlisted" value="1" icon="✅" /><ModuleStat label="Offers" value="1" icon="🏁" /></section><SimpleTable headers={['Opportunity', 'Status', 'Source', 'Match', 'Actions']} rows={sampleApplications.map(r => [...r, 'View'])} /></DashboardShell>;
  const renderJobSeekerInterviewsPage = () => <DashboardShell role="Job Seeker" title="Interviews" subtitle="View interview invitations, schedule details, links, and results."><SimpleTable headers={['Opportunity', 'Date', 'Type', 'Location / Link', 'Status']} rows={[['Data Analyst Graduate Opportunity', '2026-05-03 10:00', 'Online', 'Teams link', 'Scheduled'], ['Junior IT Support Specialist', '2026-05-08 09:30', 'On-site', 'Muscat Office', 'Pending']]} /></DashboardShell>;
  const renderJobSeekerOffersPage = () => <DashboardShell role="Job Seeker" title="Offers & Employment" subtitle="Review offers, accept, reject, request amendment, or ask for clarification."><section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-4 flex items-center justify-between"><div><h3 className="font-semibold text-slate-900">Offer: Data Analyst Graduate Opportunity</h3><p className="text-sm text-slate-500">Status: Issued · Response deadline: 7 days</p></div><Tag tone="amber">Awaiting Response</Tag></div><div className="grid gap-4 md:grid-cols-3"><MiniField label="Start Date" type="date" /><MiniField label="Offer Type" placeholder="Permanent" /><MiniField label="Duration / End Date" type="date" /></div><div className="mt-5 flex flex-wrap gap-2"><button className="rounded bg-emerald-600 px-4 py-2 text-sm text-white">Accept</button><button className="rounded bg-red-50 px-4 py-2 text-sm text-red-700">Reject</button><button className="rounded border border-slate-200 px-4 py-2 text-sm">Request Amendment</button><button className="rounded border border-slate-200 px-4 py-2 text-sm">Ask Question</button></div></section></DashboardShell>;

  const renderCompanyCreateOpportunityPage = () => { const steps = ['Basic Information', 'Location', 'Skills & Requirements', 'Compensation', 'Screening Questions', 'Documents & Publish']; return <DashboardShell role="Company" title="Create Opportunity" subtitle="Multi-step opportunity form based on the FSD fields and lifecycle."><section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-5 flex flex-wrap gap-2">{steps.map(step => <button key={step} onClick={() => setActiveOpportunityStep(step)} className={`rounded px-3 py-2 text-xs font-semibold ${activeOpportunityStep === step ? 'bg-[#02aab5] text-white' : 'border border-slate-200 bg-white text-slate-700'}`}>{step}</button>)}</div><div className="grid gap-4 md:grid-cols-3">{activeOpportunityStep === 'Basic Information' && <><MiniField label="Opportunity Title (EN)" /><MiniField label="Opportunity Title (AR)" /><MiniSelect label="Opportunity Type" options={['Full-Time', 'Part-Time', 'Contract', 'Internship', 'Training Program']} /><MiniSelect label="Application Method" options={['Candidate Apply', 'Employer Search', 'Admin Nomination', 'All']} /><MiniSelect label="Work Mode" options={['On-site', 'Remote', 'Hybrid']} /><MiniField label="Number of Openings" type="number" /></>}{activeOpportunityStep === 'Location' && <><MiniSelect label="Country" options={['Oman']} /><MiniSelect label="City" options={['Muscat', 'Sohar', 'Nizwa', 'Ibri', 'Salalah']} /><MiniField label="Address / Office" /></>}{activeOpportunityStep === 'Skills & Requirements' && <><MiniSelect label="Primary Skills" options={['React', 'Power BI', 'Network Support', 'Communication']} /><MiniSelect label="Tech Stack Required" options={['React', 'SQL Server', 'Power BI', 'CCTV']} /><MiniField label="Years of Experience" type="number" /><MiniSelect label="Education Level" options={['Any', 'Diploma', 'Bachelor', 'Master']} /><MiniField label="Field of Study" /><MiniSelect label="Target Applicant" options={['All', 'Job Seeker', 'Student', 'Fresh Graduate']} /></>}{activeOpportunityStep === 'Compensation' && <><MiniSelect label="Salary Display" options={['Visible', 'Hidden', 'Negotiable']} /><MiniField label="Salary Min" type="number" /><MiniField label="Salary Max" type="number" /><MiniSelect label="Currency" options={['OMR']} /><MiniSelect label="Pay Frequency" options={['Monthly', 'Hourly', 'Project-Based', 'Annual']} /></>}{activeOpportunityStep === 'Screening Questions' && <><MiniField label="Question Text" /><MiniSelect label="Answer Type" options={['Yes/No', 'Multiple Choice', 'Short Text', 'Numeric']} /><MiniSelect label="Is Required" options={['Yes', 'No']} /><MiniSelect label="Is Disqualifying" options={['No', 'Yes']} /></>}{activeOpportunityStep === 'Documents & Publish' && <><MiniField label="Document Name" /><MiniSelect label="Require Upload" options={['Not Required', 'Optional', 'Mandatory']} /><MiniField label="Publication Date" type="date" /><MiniField label="Due Date" type="date" /><MiniSelect label="Action" options={['Save as Draft', 'Preview', 'Submit for Publishing']} /></>}</div><label className="mt-4 block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Description</div><textarea rows={5} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" /></label><div className="mt-5 flex justify-end gap-2"><button className="rounded border px-3 py-2 text-xs">Preview</button><button className="rounded bg-[#02aab5] px-3 py-2 text-xs text-white">Save Draft</button><button className="rounded bg-[#123b8b] px-3 py-2 text-xs text-white">Submit for Publishing</button></div></section></DashboardShell>; };
  const renderCompanyApplicationsPage = () => <DashboardShell role="Company" title="Application & Nomination Management" subtitle="Review candidates, update status, add notes, and move shortlisted candidates to interviews."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Total Candidates" value="48" icon="👥" /><ModuleStat label="Pending Review" value="18" icon="⏳" /><ModuleStat label="Shortlisted" value="9" icon="✅" /><ModuleStat label="Rejected" value="6" icon="✕" /></section><SimpleTable headers={['Candidate', 'Source Tag', 'Match %', 'Status', 'Actions']} rows={sampleCandidates.map(r => [r[0], 'Organic', r[2], r[3], 'View / Update'])} /></DashboardShell>;
  const renderCompanyCandidateSearchPage = () => <DashboardShell role="Company" title="Candidate Search & Matching" subtitle="Search by opportunity or manual filters and nominate or invite candidates."><section className="mb-5 rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="grid gap-3 md:grid-cols-5"><MiniSelect label="Opportunity" options={['Frontend Developer', 'Data Analyst', 'IT Support']} /><MiniSelect label="Skills" options={['React', 'Power BI', 'Networking']} /><MiniField label="Min Years" type="number" /><MiniSelect label="Education" options={['Any', 'Bachelor', 'Diploma']} /><MiniSelect label="Specification" options={['IT', 'Data', 'Operations']} /></div></section><SimpleTable headers={['Candidate Name', 'Specification', 'Education', 'Experience', 'Matching %', 'Actions']} rows={sampleCandidates.map((r, i) => [r[0], r[1], 'Bachelor', `${i + 1} Years`, r[2], 'View / Nominate / Ask to Apply'])} /></DashboardShell>;
  const renderCompanyInterviewsPage = () => <DashboardShell role="Company" title="Interview Management" subtitle="Create interview sessions, schedule shortlisted candidates, and record assessment decisions."><section className="mb-5 rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="grid gap-3 md:grid-cols-4"><MiniSelect label="Interview Type" options={['Online', 'On-site', 'Phone']} /><MiniField label="Location / Link" /><MiniSelect label="Interviewer" options={['Hiring Manager', 'Technical Lead', 'HR']} /><MiniSelect label="Skills to Assess" options={['React', 'Communication', 'Problem Solving']} /></div></section><SimpleTable headers={['Candidate', 'Match %', 'Date', 'Time', 'Status']} rows={sampleCandidates.map((r, i) => [r[0], r[2], `2026-05-${10 + i}`, '10:00 AM', i === 0 ? 'Scheduled' : 'Pending'])} /></DashboardShell>;
  const renderCompanyOffersPage = () => <DashboardShell role="Company" title="Offer Management" subtitle="Prepare offers by uploading a document, entering data, or using both methods."><section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-4 flex gap-2"><Tag tone="blue">Upload Document</Tag><Tag tone="cyan">Enter Offer Data</Tag><Tag tone="green">Both</Tag></div><div className="grid gap-4 md:grid-cols-3"><MiniSelect label="Offer Type" options={['Permanent', 'Fixed-Term', 'Internship', 'Training']} /><MiniField label="Start Date" type="date" /><MiniField label="End Date / Duration" type="date" /><MiniField label="Salary / Compensation" type="number" /><MiniSelect label="Currency" options={['OMR']} /><MiniField label="Probation Period Days" type="number" /></div><div className="mt-5 flex justify-end"><button className="rounded bg-[#123b8b] px-4 py-2 text-sm text-white">Issue Offer</button></div></section></DashboardShell>;


  const renderFreelancerSupportPage = () => (
    <DashboardShell role="Freelancer" title="Support Center" subtitle="Get help with projects, offers, contracts, payments, disputes, and profile visibility without leaving the freelancer workspace.">
      <section className="mb-5 grid gap-4 md:grid-cols-4">
        <ModuleStat label="Open Tickets" value="2" icon="💬" />
        <ModuleStat label="Resolved" value="14" icon="✅" />
        <ModuleStat label="Avg. Response" value="1.5d" icon="⏱️" />
        <ModuleStat label="Guides" value="8" icon="📘" />
      </section>
      <section className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="mb-4 font-semibold text-slate-900">Create Support Ticket</h2>
          <div className="grid gap-4">
            <MiniSelect label="Support Topic" options={['Project application', 'Contract', 'Payment', 'Dispute', 'Profile visibility', 'Other']} />
            <MiniSelect label="Priority" options={['Normal', 'High', 'Urgent']} />
            <MiniField label="Related Project / Offer" placeholder="Optional" />
          </div>
          <label className="mt-4 block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Message</div><textarea rows={5} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Describe the issue clearly so the Nafadh team can help you faster." /></label>
          <button className="mt-4 rounded bg-[#02aab5] px-4 py-2 text-sm text-white">Submit Ticket</button>
        </div>
        <SimpleTable headers={['Ticket', 'Topic', 'Date', 'Status', 'Action']} rows={[[ 'Payment review question', 'Payment', '2026-04-27', 'Under Review', 'Open'], ['Profile visibility request', 'Profile', '2026-04-25', 'Resolved', 'View']]} />
      </section>
    </DashboardShell>
  );

  const renderJobSeekerTrainingPage = () => (
    <DashboardShell role="Job Seeker" title="Courses & Training" subtitle="Track recommended courses, TRA programs, workshops, and learning activities linked to your career readiness.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Recommended Courses" value="6" icon="🎓" /><ModuleStat label="In Progress" value="2" icon="⏳" /><ModuleStat label="Completed" value="4" icon="✅" /><ModuleStat label="Skill Gaps" value="3" icon="🎯" /></section>
      <SimpleTable headers={['Course / Program', 'Provider', 'Related Skills', 'Status', 'Action']} rows={[[ 'Data Analysis and Reporting Skills', 'Nafadh', 'Power BI, Excel', 'Recommended', 'View'], ['TRA Cloud Tools Session', 'TRA', 'Cloud, Remote Work', 'Upcoming', 'Register'], ['SQL for Beginners', 'Nafadh', 'SQL', 'In Progress', 'Continue']]} />
    </DashboardShell>
  );

  const renderJobSeekerCertificatesPage = () => (
    <DashboardShell role="Job Seeker" title="Certificates" subtitle="Upload, verify, and manage certificates that strengthen your matching score and employer visibility.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Uploaded" value="5" icon="🏅" /><ModuleStat label="Verified" value="3" icon="✅" /><ModuleStat label="Pending" value="2" icon="⏳" /><ModuleStat label="Credential Score" value="72" icon="⭐" /></section>
      <section className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">Upload Certificate</h2><div className="grid gap-4"><MiniField label="Certificate Name" /><MiniField label="Provider" /><MiniSelect label="Related Skill" options={['Power BI', 'Excel', 'SQL', 'React', 'Communication']} /><MiniSelect label="Verification Status" options={['Pending', 'Verified', 'Needs review']} /></div><button className="mt-4 rounded bg-[#02aab5] px-4 py-2 text-sm text-white">Upload</button></div>
        <SimpleTable headers={['Certificate', 'Provider', 'Related Skill', 'Status', 'Action']} rows={[[ 'Data Analysis Fundamentals', 'Training Provider', 'Data', 'Pending', 'Review'], ['Power BI Practical Course', 'Nafadh', 'Power BI', 'Verified', 'View'], ['SQL Basics', 'Online Course', 'SQL', 'Verified', 'View']]} />
      </section>
    </DashboardShell>
  );

  const renderJobSeekerSettingsPage = () => (
    <DashboardShell role="Job Seeker" title="Settings" subtitle="Manage job preferences, visibility, notifications, and account security for your career profile.">
      <section className="grid gap-5 xl:grid-cols-2">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">Career Preferences</h2><div className="grid gap-4"><MiniSelect label="Profile Visibility" options={['Visible to verified companies', 'Visible for TRA nominations', 'Private']} /><MiniSelect label="Preferred Opportunity Type" options={['Full-Time', 'Part-Time', 'Internship', 'Training Program', 'Contract']} /><MiniSelect label="Preferred Work Mode" options={['On-site', 'Remote', 'Hybrid']} /><MiniSelect label="Relocation" options={['Open within Oman', 'Same governorate only', 'Remote only']} /></div></div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">Notifications & Security</h2><div className="grid gap-4"><MiniSelect label="Opportunity Alerts" options={['Enabled', 'Disabled']} /><MiniSelect label="Interview Reminders" options={['Email + Platform', 'Platform only']} /><MiniField label="New Password" type="password" /><MiniField label="Confirm New Password" type="password" /></div><button className="mt-5 rounded bg-[#123b8b] px-4 py-2 text-sm text-white">Save Settings</button></div>
      </section>
    </DashboardShell>
  );

  const renderCompanyTendersPage = () => (
    <DashboardShell role="Company" title="Tenders" subtitle="A company workspace entry for tender-related journeys, linked to the existing Nafadh tender platform when backend integration is ready.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Open Tenders" value="3" icon="📑" /><ModuleStat label="Draft Submissions" value="1" icon="📝" /><ModuleStat label="Submitted" value="2" icon="✅" /><ModuleStat label="Closing Soon" value="1" icon="⏰" /></section>
      <SimpleTable headers={['Tender', 'Source', 'Closing Date', 'Status', 'Action']} rows={[[ 'Network maintenance tender', 'Nafadh Tenders', '2026-05-10', 'Open', 'Open tender'], ['Digital services tender', 'TRA', '2026-05-22', 'Draft', 'Continue'], ['Dashboard analytics tender', 'Nafadh Tenders', '2026-06-01', 'Submitted', 'View']]} />
    </DashboardShell>
  );

  const renderCompanyTrainingRequestsPage = () => (
    <DashboardShell role="Company" title="Training Requests" subtitle="Request training, workshops, or development programs for company teams and track review status.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Submitted Requests" value="4" icon="🎓" /><ModuleStat label="Under Review" value="2" icon="⏳" /><ModuleStat label="Approved" value="1" icon="✅" /><ModuleStat label="Participants" value="38" icon="👥" /></section>
      <section className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">New Training Request</h2><div className="grid gap-4"><MiniField label="Training Topic" placeholder="Example: Power BI for operations team" /><MiniSelect label="Format" options={['Workshop', 'Training', 'Session']} /><MiniField label="Expected Participants" type="number" /><MiniSelect label="Preferred Delivery" options={['On-site', 'Online', 'Hybrid']} /></div><button className="mt-4 rounded bg-[#02aab5] px-4 py-2 text-sm text-white">Submit Request</button></div>
        <SimpleTable headers={['Request', 'Format', 'Participants', 'Status', 'Action']} rows={[[ 'Data dashboard training', 'Workshop', '20', 'Under Review', 'View'], ['Cybersecurity awareness', 'Session', '18', 'Approved', 'Schedule'], ['Cloud collaboration tools', 'Training', '12', 'Draft', 'Edit']]} />
      </section>
    </DashboardShell>
  );

  const renderAdminInterviewsPage = () => (
    <DashboardShell role="System Admin" title="Interview Management" subtitle="System-level view of interview workflows, configuration, and scheduling health across the platform.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Scheduled" value="45" icon="📅" /><ModuleStat label="Need Assessment" value="6" icon="📝" /><ModuleStat label="Reschedule Requests" value="4" icon="🔁" /><ModuleStat label="Completed" value="33" icon="✅" /></section>
      <SimpleTable headers={['Interview', 'Owner', 'Candidate', 'Status', 'Admin Action']} rows={[[ 'Data Analyst interview', 'Private Company', 'Maha Al Kharusi', 'Scheduled', 'Monitor'], ['Frontend technical review', 'SME Company', 'Ahmed Al Abri', 'Needs Assessment', 'Remind'], ['IT Support interview', 'Government Partner', 'Fatma Al Riyami', 'Reschedule Requested', 'Coordinate']]} />
    </DashboardShell>
  );

  const renderAdminConfigPage = () => <DashboardShell role="System Admin" title="System Configuration" subtitle="Manage system variables, dynamic dropdowns, and platform-wide behavior."><section className="grid gap-5 xl:grid-cols-2"><SimpleTable headers={['Variable Key', 'Name', 'Type', 'Value', 'Actions']} rows={[[ 'ALLOW_USER_RATING', 'Allow user skill rating', 'Boolean', 'False', 'Edit'], ['MATCH_NOTIFICATION_THRESHOLD', 'Match threshold', 'Integer', '75', 'Edit'], ['DEFAULT_LOCALE', 'Default locale', 'String', 'en', 'Edit']]} /><SimpleTable headers={['List Category', 'Item Key', 'Label EN', 'Label AR', 'Active']} rows={[[ 'Degree_Level', 'BACHELOR', 'Bachelor', 'بكالوريوس', 'Yes'], ['Eval_Status', 'ACTIVE', 'Active', 'نشط', 'Yes'], ['Opportunity_Type', 'INTERNSHIP', 'Internship', 'تدريب عملي', 'Yes']]} /></section></DashboardShell>;
  const renderAdminSkillsPage = () => <DashboardShell role="System Admin" title="Skills Management" subtitle="Centralized taxonomy for skill categories, skills, and tech stacks."><section className="grid gap-5 xl:grid-cols-2"><SimpleTable headers={['Code', 'Label EN', 'Label AR', 'Sort', 'Active']} rows={[[ 'SOFTWARE', 'Software', 'برمجيات', '1', 'Yes'], ['DATA_AI', 'Data & AI', 'البيانات والذكاء الاصطناعي', '2', 'Yes'], ['NETWORKS', 'Networks', 'الشبكات', '3', 'Yes']]} /><SimpleTable headers={['Code', 'Category', 'Type', 'Label EN', 'Actions']} rows={[[ 'REACT', 'Software', 'Tech Stack', 'React', 'Edit'], ['POWER_BI', 'Data & AI', 'Skill', 'Power BI', 'Edit'], ['CCTV', 'Networks', 'Skill', 'CCTV Installation', 'Edit']]} /></section></DashboardShell>;
  const renderAdminCredentialsPage = () => <DashboardShell role="System Admin" title="Credential Management" subtitle="Manage evaluations, exams, courses, enrollment, and credential results."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Evaluations" value="2" icon="🧪" /><ModuleStat label="Exams" value="1" icon="📝" /><ModuleStat label="Courses" value="1" icon="🎓" /><ModuleStat label="Pending Results" value="4" icon="⏳" /></section><SimpleTable headers={['Type', 'Title', 'Associated Skills', 'Weight', 'Status', 'Actions']} rows={[[ 'Evaluation', 'Frontend Assessment', 'React, Problem Solving', '8', 'Active', 'Enroll / Rate'], ['Exam', 'Angular Theory Exam', 'Angular', '5', 'Active', 'Edit'], ['Course', 'SQL for Beginners', 'SQL', '4', 'Draft', 'Edit']]} /></DashboardShell>;
  const renderCompanyProfilePage = () => <DashboardShell role="Company" title="Company Profile Completion" subtitle="Company classification is completed here after signup, not during login or registration."><section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-5 grid gap-4 md:grid-cols-3"><MiniField label="Company Name" /><MiniField label="Commercial Registration Number" /><MiniSelect label="Company Type" options={['SME', 'Non-SME / Large Entity', 'Government / Semi-Government', 'Other']} /><MiniSelect label="Industry" options={['ICT', 'Telecom', 'Retail', 'Education', 'Construction', 'Other']} /><MiniSelect label="Verification Status" options={['Pending', 'Verified', 'Rejected']} /><MiniField label="Official Email" /></div><label className="block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Company Brief</div><textarea rows={4} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Describe the company, hiring needs, and type of opportunities it may publish." /></label><div className="mt-5 rounded bg-blue-50 p-4 text-sm text-[#123b8b]">This keeps public signup simple as Company, while profile completion captures whether it is SME, Non-SME, or another entity type.</div></section></DashboardShell>;

  const renderIndividualProfilePage = () => <DashboardShell role="Individual Client" title="Individual Client Profile" subtitle="Individual clients can be personal users, traders, or shop owners who need services."><section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-5 grid gap-4 md:grid-cols-3"><MiniField label="Full Name" /><MiniField label="Civil ID" /><MiniSelect label="Individual Type" options={['Personal Request', 'Trader / Shop Owner', 'Home Service Request', 'Other']} /><MiniField label="Phone Number" /><MiniSelect label="Primary Service Interest" options={['Technical Support', 'CCTV / Networks', 'Website', 'Design', 'Maintenance', 'Other']} /><MiniSelect label="Preferred Contact Method" options={['Phone', 'Email', 'Platform Messages']} /></div><label className="block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Request Context</div><textarea rows={4} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Example: I own a small shop and need someone to install cameras, or I need a freelancer to build a simple website." /></label><div className="mt-5 rounded bg-cyan-50 p-4 text-sm text-[#123b8b]">This account stays under Individual Client, while the profile clarifies whether the user is a trader, shop owner, or personal requester.</div></section></DashboardShell>;


  const individualRequests = [
    ['Install CCTV cameras for home', 'Barka', '8 offers received', 'Open', 'Compare'],
    ['Personal website setup', 'Remote', '4 offers received', 'Under Review', 'View'],
    ['Router configuration support', 'Sohar', 'Completed last week', 'Completed', 'Details'],
  ];

  const renderIndividualPostRequestPage = () => (
    <DashboardShell role="Individual Client" title="Post Service Request" subtitle="Create a clear request for freelancers, technical providers, or skilled talent without using the company posting form.">
      <section className="mb-5 grid gap-4 md:grid-cols-4">
        <ModuleStat label="Draft Request" value="1" icon="📝" />
        <ModuleStat label="Suggested Services" value="6" icon="🛠️" />
        <ModuleStat label="Expected Offers" value="8" icon="📨" />
        <ModuleStat label="Profile Ready" value="74%" icon="⭐" />
      </section>
      <section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="mb-5 rounded bg-gradient-to-r from-[#123b8b] to-[#02aab5] px-4 py-3 text-sm font-semibold text-white">Request Details</div>
        <div className="grid gap-4 md:grid-cols-3">
          <MiniField label="Request Title" placeholder="Example: Install CCTV cameras for home" />
          <MiniSelect label="Service Category" options={['CCTV / Networks', 'Website', 'Design', 'Maintenance', 'Data / Reports', 'Other']} />
          <MiniSelect label="Request Type" options={['Personal Request', 'Trader / Shop Owner', 'Home Service Request', 'Urgent Technical Support']} />
          <MiniSelect label="Preferred Work Mode" options={['On-site', 'Remote', 'Hybrid']} />
          <MiniField label="Location / Wilayat" placeholder="Example: Barka" />
          <MiniSelect label="Budget Range" options={['Not sure', 'OMR 50 - 100', 'OMR 100 - 250', 'OMR 250+']} />
        </div>
        <label className="mt-4 block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Request Description</div><textarea rows={5} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Describe what you need, expected outcome, location, preferred timing, and any photos or documents required." /></label>
        <div className="mt-5 flex flex-wrap justify-end gap-2"><button className="rounded border border-slate-200 px-4 py-2 text-sm">Save Draft</button><button className="rounded bg-[#02aab5] px-4 py-2 text-sm text-white">Publish Request</button></div>
      </section>
    </DashboardShell>
  );

  const renderIndividualRequestsPage = () => (
    <DashboardShell role="Individual Client" title="My Requests" subtitle="Track all service requests, received offers, selected providers, and completion status.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Open Requests" value="2" icon="📝" /><ModuleStat label="Offers Received" value="14" icon="📨" /><ModuleStat label="In Progress" value="1" icon="⏳" /><ModuleStat label="Completed" value="3" icon="✅" /></section>
      <SimpleTable headers={['Request', 'Location', 'Offers / Update', 'Status', 'Action']} rows={individualRequests} />
    </DashboardShell>
  );

  const renderIndividualMessagesPage = () => (
    <DashboardShell role="Individual Client" title="Messages" subtitle="Communicate with freelancers, compare offers, and keep conversations connected to each request.">
      <section className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-xl border border-slate-100 bg-white shadow-sm"><div className="flex items-center justify-between border-b border-slate-100 p-5"><div><h2 className="font-semibold text-slate-900">Network Specialist</h2><p className="text-xs text-slate-500">Related request: Install CCTV cameras for home</p></div><Tag tone="green">Offer Received</Tag></div><div className="min-h-[340px] space-y-4 p-5 text-sm"><div className="max-w-sm rounded-2xl bg-blue-50 p-3 text-slate-700">Hello, I can visit the location and provide camera installation with warranty.</div><div className="ml-auto max-w-sm rounded-2xl bg-[#123b8b] p-3 text-white">Thank you. Please share the estimated price and available timing.</div><div className="max-w-sm rounded-2xl bg-blue-50 p-3 text-slate-700">Estimated range is OMR 180 - 240 depending on number of cameras.</div></div><div className="flex items-center gap-2 border-t border-slate-100 p-4"><input className="flex-1 rounded border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#02aab5]" placeholder="Write a message" /><button className="rounded bg-[#02aab5] px-4 py-2 text-white">Send</button></div></div>
        <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><MiniField label="Search" placeholder="Search conversations" /><div className="mt-4 space-y-3"><div className="rounded bg-slate-50 p-4"><div className="font-semibold text-[#123b8b]">Network Specialist</div><p className="mt-1 text-xs text-slate-500">CCTV request · New offer</p></div><div className="rounded bg-slate-50 p-4"><div className="font-semibold text-[#123b8b]">Website Designer</div><p className="mt-1 text-xs text-slate-500">Personal website setup</p></div></div></div>
      </section>
    </DashboardShell>
  );

  const renderIndividualSavedTalentPage = () => (
    <DashboardShell role="Individual Client" title="Saved Talent" subtitle="Review freelancers and skilled profiles you saved for current or future service requests.">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{talentProfiles.filter((talent) => talent.talentType === 'Freelancer').slice(0, 6).map((talent) => <div key={talent.name} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="mb-3 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef7fb] text-2xl">{talent.image}</div><div><h3 className="font-semibold text-[#123b8b]">{talent.name}</h3><p className="text-xs text-slate-500">{talent.role}</p></div></div><div className="mt-3 flex flex-wrap gap-2">{talent.skills.slice(0, 3).map((skill) => <Tag key={skill} tone="cyan">{skill}</Tag>)}</div><div className="mt-4 flex justify-between text-sm text-slate-500"><span>⭐ {talent.rating}</span><span><OmrText text={talent.rate} size={12} /></span></div><button className="mt-4 w-full rounded bg-[#02aab5] px-3 py-2 text-sm text-white">Invite to Request</button></div>)}</section>
    </DashboardShell>
  );

  const renderIndividualInvoicesPage = () => (
    <DashboardShell role="Individual Client" title="Invoices" subtitle="Track payments, invoices, service receipts, and completed request costs.">
      <section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Total Paid" value="OMR 420" icon="💰" /><ModuleStat label="Pending" value="OMR 120" icon="⏳" /><ModuleStat label="Invoices" value="5" icon="🧾" /><ModuleStat label="Refund Requests" value="0" icon="↩️" /></section>
      <SimpleTable headers={['Invoice', 'Related Request', 'Amount', 'Status', 'Action']} rows={[[ 'INV-1001', 'Router configuration support', 'OMR 70', 'Paid', 'View'], ['INV-1002', 'Personal website setup', 'OMR 200', 'Pending', 'Pay'], ['INV-1003', 'CCTV site visit', 'OMR 150', 'Draft', 'Review']]} />
    </DashboardShell>
  );

  const renderIndividualSupportPage = () => (
    <DashboardShell role="Individual Client" title="Support" subtitle="Get help with requests, offers, payments, invoices, or account settings.">
      <section className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]"><div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><h2 className="mb-4 font-semibold text-slate-900">Create Support Case</h2><div className="grid gap-4"><MiniSelect label="Case Type" options={['Request issue', 'Payment / invoice', 'Freelancer communication', 'Account support', 'Other']} /><MiniSelect label="Priority" options={['Normal', 'High', 'Urgent']} /><MiniField label="Related Request / Invoice" placeholder="Optional reference" /></div><label className="mt-4 block"><div className="mb-1.5 text-xs font-semibold text-slate-600">Details</div><textarea rows={5} className="w-full rounded border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#02aab5]" /></label><button className="mt-4 rounded bg-[#02aab5] px-4 py-2 text-sm text-white">Submit Case</button></div><SimpleTable headers={['Case', 'Type', 'Priority', 'Status', 'Action']} rows={[[ 'Cannot compare offers', 'Request issue', 'Normal', 'Open', 'View'], ['Invoice clarification', 'Payment / invoice', 'Normal', 'Resolved', 'View']]} /></section>
    </DashboardShell>
  );

  const renderAdminOpportunitiesPage = () => <DashboardShell role="System Admin" title="Opportunity Oversight" subtitle="Monitor lifecycle, publish status, admin nomination, and featured opportunities."><SimpleTable headers={['Opportunity', 'Owner', 'Status', 'Applicants', 'Admin Controls']} rows={[[ 'Frontend Developer', 'SME Company', 'Published', '26', 'Nominate / Feature'], ['Network Maintenance', 'Operator', 'Submitted', '0', 'Review / Publish'], ['Data Analyst Graduate', 'Private Company', 'Draft', '0', 'Post on behalf']]} /></DashboardShell>;
  const renderAdminUsersPage = () => <DashboardShell role="System Admin" title="User Management" subtitle="Manage job seekers, freelancers, companies, individual clients, operators, and account status."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Job Seekers" value="64" icon="🎓" /><ModuleStat label="Freelancers" value="58" icon="💼" /><ModuleStat label="Companies" value="34" icon="🏢" /><ModuleStat label="Operators/Admins" value="8" icon="🛡️" /></section><SimpleTable headers={['User', 'Role', 'Status', 'Profile Completion', 'Actions']} rows={[[ 'Maha Al Kharusi', 'Job Seeker', 'Active', '78%', 'View / Suspend'], ['Asail Studio', 'Freelancer', 'Active', '92%', 'View / Feature'], ['Oman SME LLC', 'Company', 'Verified', '100%', 'Manage'], ['Operations User', 'Operator', 'Active', '—', 'Edit Role']]} /></DashboardShell>;

  const renderAdminContentPage = () => <DashboardShell role="System Admin" title="Website Content Management" subtitle="Control public homepage sections, service cards, trusted logos, FAQs, and announcements."><section className="grid gap-5 xl:grid-cols-2"><SimpleTable headers={['Section', 'Status', 'Last Update', 'Action']} rows={[[ 'Hero Section', 'Published', '2026-04-29', 'Edit'], ['Explore Popular Services', 'Published', '2026-04-28', 'Manage Cards'], ['Trusted Companies Logos', 'Published', '2026-04-27', 'Update Logos'], ['Public Announcements', 'Draft', '2026-04-26', 'Publish']]} /><div className="rounded-xl bg-white p-5 shadow-sm"><h3 className="text-base font-bold text-[#123b8b]">Content rules</h3><div className="mt-4 space-y-3 text-sm text-slate-600"><p>• Public content should support Arabic and English before publishing.</p><p>• Homepage changes should be previewed before going live.</p><p>• Trusted logos should include official website links.</p></div></div></section></DashboardShell>;

  const renderAdminVerificationPage = () => <DashboardShell role="System Admin" title="Verification Center" subtitle="Review account verification, company eligibility, profile completeness, and admin approval queues."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Company Reviews" value="5" icon="🏢" /><ModuleStat label="Freelancer Profiles" value="4" icon="💼" /><ModuleStat label="Job Seeker Profiles" value="3" icon="🎓" /><ModuleStat label="Rejected" value="1" icon="🚫" /></section><SimpleTable headers={['Request', 'Account Type', 'Submitted', 'Priority', 'Action']} rows={[[ 'Oman Smart Solutions', 'Company Verification', '2026-04-29', 'High', 'Approve / Return'], ['Ali Al Balushi', 'Freelancer Profile Review', '2026-04-28', 'Medium', 'Review'], ['Maha Al Kharusi', 'Job Seeker CV Review', '2026-04-27', 'Low', 'View Profile']]} /></DashboardShell>;

  const renderAdminWorkflowsPage = () => <DashboardShell role="System Admin" title="Workflow Monitor" subtitle="Track platform processes from opportunity publishing to application, interview, offer, contract, and closure."><section className="grid gap-5 xl:grid-cols-2"><SimpleTable headers={['Workflow', 'Current Step', 'Owner', 'Status', 'Action']} rows={[[ 'Data Analyst Graduate Opportunity', 'Applications Review', 'Private Sector Company', 'On Track', 'Open'], ['Frontend Developer Hiring', 'Interview Scheduling', 'SME Company', 'Needs Attention', 'Follow Up'], ['Network Maintenance Project', 'Offer / Contract', 'Oman Broadband', 'On Track', 'View'], ['Training Program Cohort', 'Post-Engagement Evaluation', 'TRA Program Team', 'Pending', 'Remind']]} /><div className="rounded-xl bg-white p-5 shadow-sm"><h3 className="text-base font-bold text-[#123b8b]">Workflow stages</h3><div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">{['Draft','Published','Applied','Shortlisted','Interview','Offered','Contract','Evaluation','Closed'].map((item) => <span key={item} className="rounded-full bg-[#eefcff] px-3 py-2 text-[#123b8b]">{item}</span>)}</div></div></section></DashboardShell>;

  const renderAdminDisputesPage = () => <DashboardShell role="System Admin" title="Disputes & Escalations" subtitle="Manage payment disputes, task delivery issues, applicant complaints, and support escalations."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Open" value="3" icon="⚠️" /><ModuleStat label="Under Review" value="2" icon="🔎" /><ModuleStat label="Resolved" value="14" icon="✅" /><ModuleStat label="Avg. Response" value="1.8d" icon="⏱️" /></section><SimpleTable headers={['Case', 'Related User', 'Type', 'Status', 'Action']} rows={[[ 'Payment not released', 'Freelancer Name', 'Payment', 'Under Review', 'Open Case'], ['Offer amendment concern', 'Maha Al Kharusi', 'Employment Offer', 'New', 'Assign'], ['Project delivery disagreement', 'Global Company', 'Contract', 'Waiting Evidence', 'Review Evidence']]} /></DashboardShell>;
  const renderReportsPage = (role = 'System Admin') => <DashboardShell role={role} title="Reports & Audit Logs" subtitle="High-level analytics and audit trail placeholder for the prototype."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Opportunities" value="120" icon="📌" /><ModuleStat label="Applications" value="680" icon="📄" /><ModuleStat label="Interviews" value="45" icon="📅" /><ModuleStat label="Audit Events" value="1,240" icon="🧾" /></section><SimpleTable headers={['Event', 'Actor', 'Module', 'Date', 'Details']} rows={[[ 'Opportunity published', 'Company User', 'Opportunities', '2026-04-24', 'Published immediately'], ['Candidate nominated', 'Admin', 'Nomination', '2026-04-25', 'Admin-Nominated'], ['Offer issued', 'Company User', 'Employment', '2026-04-26', 'Offer status Issued']]} /></DashboardShell>;


  const renderOperatorOpportunitiesPage = () => <DashboardShell role="Operator" title="Opportunity Review Queue" subtitle="Review submitted opportunities, check completeness, and route them to publish, return, or admin escalation."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Submitted" value="8" icon="📣" /><ModuleStat label="Needs Fix" value="3" icon="🛠️" /><ModuleStat label="Ready to Publish" value="5" icon="✅" /><ModuleStat label="Escalated" value="1" icon="🚩" /></section><SimpleTable headers={['Opportunity', 'Owner', 'Type', 'Status', 'Operator Action']} rows={[[ 'Data Analyst Graduate Opportunity', 'Private Company', 'Full-Time', 'Submitted', 'Review completeness'], ['Website UI polish project', 'SME Company', 'Freelance Project', 'Needs Fix', 'Return with notes'], ['Cybersecurity Awareness Workshop', 'TRA Program', 'Training', 'Ready', 'Publish']]}/></DashboardShell>;

  const renderOperatorApplicantsPage = () => <DashboardShell role="Operator" title="Applicant Monitoring" subtitle="Monitor application queues and help keep the hiring workflow moving without taking admin-only actions."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Pending Review" value="18" icon="⏳" /><ModuleStat label="Under Review" value="11" icon="🔎" /><ModuleStat label="Shortlisted" value="9" icon="✅" /><ModuleStat label="Blocked" value="2" icon="⚠️" /></section><SimpleTable headers={['Candidate', 'Opportunity', 'Match', 'Current Step', 'Operator Note']} rows={[[ 'Maha Al Kharusi', 'Data Analyst Graduate', '92%', 'Pending Review', 'Company reminder'], ['Fatma Al Riyami', 'Operations Coordinator', '84%', 'Shortlisted', 'Needs interview slot'], ['Ahmed Al Abri', 'IT Support Specialist', '79%', 'Under Review', 'No action needed']]}/></DashboardShell>;

  const renderOperatorInterviewsPage = () => <DashboardShell role="Operator" title="Interview Coordination" subtitle="Track interview schedules, reminders, rescheduling requests, and missing assessment submissions."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Scheduled" value="12" icon="📅" /><ModuleStat label="Today" value="3" icon="⏰" /><ModuleStat label="Need Assessment" value="4" icon="📝" /><ModuleStat label="Reschedule Requests" value="2" icon="🔁" /></section><SimpleTable headers={['Candidate', 'Opportunity', 'Date', 'Status', 'Action']} rows={[[ 'Maha Al Kharusi', 'Data Analyst Graduate', '2026-05-03 10:00', 'Scheduled', 'Send reminder'], ['Fatma Al Riyami', 'Operations Coordinator', '2026-05-05 11:30', 'Needs Assessment', 'Follow up'], ['Ahmed Al Abri', 'IT Support Specialist', '2026-05-08 09:30', 'Reschedule Requested', 'Coordinate']]}/></DashboardShell>;

  const renderOperatorTrainingPage = () => <DashboardShell role="Operator" title="Training Operations" subtitle="Manage training listings, registrations, certificates, and participant support."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="Active Programs" value="4" icon="🎓" /><ModuleStat label="Registrations" value="146" icon="👥" /><ModuleStat label="Certificates Pending" value="22" icon="🏅" /><ModuleStat label="Support Requests" value="5" icon="💬" /></section><SimpleTable headers={['Program', 'Audience', 'Status', 'Registrations', 'Action']} rows={[[ 'Digital Freelancing Workshop', 'Freelancers', 'Upcoming', '48', 'Manage'], ['Data Analysis and Reporting Skills', 'Job Seekers', 'Open', '63', 'View'], ['TRA Cloud Tools Session', 'Public', 'Open', '35', 'Update']]}/></DashboardShell>;

  const renderOperatorSupportPage = () => <DashboardShell role="Operator" title="Support Cases" subtitle="Handle daily user issues such as profile completion, applications, uploads, payments, and general guidance."><section className="mb-5 grid gap-4 md:grid-cols-4"><ModuleStat label="New" value="7" icon="🆕" /><ModuleStat label="Under Review" value="5" icon="🔎" /><ModuleStat label="Waiting User" value="3" icon="⏳" /><ModuleStat label="Resolved" value="34" icon="✅" /></section><SimpleTable headers={['Case', 'User Type', 'Priority', 'Status', 'Action']} rows={[[ 'Cannot upload CV', 'Job Seeker', 'High', 'New', 'Assist'], ['Payment release question', 'Freelancer', 'Medium', 'Under Review', 'Open'], ['Company profile verification', 'Company', 'High', 'Waiting Documents', 'Follow up']]}/></DashboardShell>;

  const renderOperatorSettingsPage = () => <DashboardShell role="Operator" title="Operator Settings" subtitle="Personal workspace settings only. System-wide configuration remains under System Admin."><section className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"><div className="grid gap-4 md:grid-cols-3"><MiniSelect label="Default Queue" options={['Opportunity Review', 'Applicant Monitoring', 'Support Cases']} /><MiniSelect label="Notification Preference" options={['In-platform + Email', 'In-platform only', 'Email only']} /><MiniSelect label="Language" options={['English', 'Arabic']} /></div><div className="mt-5 rounded bg-blue-50 p-4 text-sm text-[#123b8b]">This page intentionally avoids admin-only settings such as skill taxonomy, matching weights, role permissions, or platform configuration.</div></section></DashboardShell>;

  const renderLoginRequiredModal = () => {
    if (!loginRequiredModal) return null;

    const isArabic = language === 'ar';

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 px-4 backdrop-blur-sm">
        <div className="w-full max-w-sm rounded-[2rem] bg-white p-6 text-center shadow-2xl">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeLoginRequiredModal}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-50"
              aria-label={isArabic ? 'إغلاق' : 'Close'}
            >
              ×
            </button>
          </div>

          <div className="mx-auto mt-1 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf4ff] text-2xl">
            🔒
          </div>

          <div className="mt-4 inline-flex rounded-full bg-[#d9e1ea] px-4 py-2 text-sm font-semibold text-[#123b8b]">
            {isArabic ? 'تسجيل الدخول مطلوب' : 'Login Required'}
          </div>

          <h2 className="mt-4 text-2xl font-bold text-[#123b8b]">
            {isArabic ? 'سجّل الدخول للمتابعة' : 'Sign in to continue'}
          </h2>

          <p className="mx-auto mt-3 max-w-xs leading-7 text-gray-600">
            {isArabic
              ? 'يرجى تسجيل الدخول لعرض التفاصيل أو متابعة الإجراء المطلوب.'
              : 'Please log in to view details or continue this action.'}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={closeLoginRequiredModal}
              className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              {isArabic ? 'لاحقًا' : 'Later'}
            </button>
            <PrimaryButton className="w-full" onClick={continueToLoginFromModal}>
              {isArabic ? 'تسجيل الدخول' : 'Log in'}
            </PrimaryButton>
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
      case 'freelancer-find-projects':
        return renderFreelancerFindProjectsPage();
      case 'freelancer-profile':
        return renderFreelancerProfilePage();
      case 'freelancer-proposals':
        return renderFreelancerProposalsPage();
      case 'freelancer-contracts':
        return renderFreelancerContractsPage();
      case 'freelancer-projects':
        return renderFreelancerFindProjectsPage();
      case 'freelancer-portfolio':
        return renderFreelancerProfilePage();
      case 'freelancer-payments':
        return renderFreelancerPaymentsTasksPage();
      case 'freelancer-payments-tasks':
        return renderFreelancerPaymentsTasksPage();
      case 'freelancer-disputes':
        return renderFreelancerDisputesPage();
      case 'freelancer-messages':
        return renderFreelancerMessagesPage();
      case 'freelancer-settings':
        return renderFreelancerSettingsPage();
      case 'freelancer-support':
        return renderFreelancerSupportPage();
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
        return renderJobSeekerTrainingPage();
      case 'jobseeker-certificates':
        return renderJobSeekerCertificatesPage();
      case 'jobseeker-settings':
        return renderJobSeekerSettingsPage();
      case 'jobseeker-offers':
        return renderJobSeekerOffersPage();
      case 'company-profile':
        return renderCompanyProfilePage();
      case 'individual-profile':
        return renderIndividualProfilePage();
      case 'individual-post-request':
        return renderIndividualPostRequestPage();
      case 'individual-requests':
        return renderIndividualRequestsPage();
      case 'individual-messages':
        return renderIndividualMessagesPage();
      case 'individual-saved-talent':
        return renderIndividualSavedTalentPage();
      case 'individual-invoices':
        return renderIndividualInvoicesPage();
      case 'individual-support':
        return renderIndividualSupportPage();
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
      case 'company-tenders':
        return renderCompanyTendersPage();
      case 'company-training-requests':
        return renderCompanyTrainingRequestsPage();
      case 'company-reports':
        return renderReportsPage('Company');
      case 'operator-opportunities':
        return renderOperatorOpportunitiesPage();
      case 'operator-applicants':
        return renderOperatorApplicantsPage();
      case 'operator-interviews':
        return renderOperatorInterviewsPage();
      case 'operator-training':
        return renderOperatorTrainingPage();
      case 'operator-support':
        return renderOperatorSupportPage();
      case 'operator-reports':
        return renderReportsPage('Operator');
      case 'operator-settings':
        return renderOperatorSettingsPage();
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
      case 'admin-content':
        return renderAdminContentPage();
      case 'admin-verification':
        return renderAdminVerificationPage();
      case 'admin-interviews':
        return renderAdminInterviewsPage();
      case 'admin-workflows':
        return renderAdminWorkflowsPage();
      case 'admin-disputes':
        return renderAdminDisputesPage();
      case 'admin-reports':
        return renderReportsPage('System Admin');
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f4f7] text-[#1f2937]">
      <header className="sticky top-0 z-30 bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button type="button" onClick={() => goToPage('home')} className="flex items-center gap-3 text-left">
            <div>
              <img   src={nafadhLogo}   alt="Nafadh"   className="h-12 w-auto object-contain"/>            </div>
          </button>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <NavLink label="Home" isActive={currentPage === 'home'} onClick={() => goToPage('home')} />

            <div className="relative" ref={servicesMenuRef}>
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
            <div className="relative" ref={languageMenuRef}>
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
            <button type="button" onClick={() => goToPage('join')} className="rounded-xl bg-[#123b8b] px-4 py-2 text-white">Create Account</button>
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
              <FooterLinkButton label="Log in" onClick={() => goToPage('login')} />
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
