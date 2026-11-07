# 🚀 مشروع تطبيق مدير المهام | Task Manager App

هذا الملف يحتوي على التوثيق الشامل والشرح التفصيلي لجميع التقنيات، المفاهيم، والأنماط البرمجية التي تم تطبيقها في **المختبر الأول (Lab 01)**. تم تنظيم التوثيق باللغتين الإنجليزية والعربية لسهولة المراجعة والفهم.

---

## 📌 الفهرس / Table of Contents
* [English Version — Topics & Techniques Covered](#-english-version--topics--techniques-covered)
* [النسخة العربية — الموضوعات والتقنيات المستخدمة](#-النسخة-العربية--الموضوعات-والتقنيات-المستخدمة)

---

## 🇬🇧 English Version — Topics & Techniques Covered

### 📂 Lab 01 — Task Manager App

#### 1. Tooling & Setup
* **CLI (Vite) project scaffolding:** Fast development environment setup using Vite.
* **Command:** `npm create vite@latest`
* **npm scripts:** Understanding and using execution scripts:
  * `dev`: Starts the local development server.
  * `build`: Prepares production-ready assets.
  * `preview`: Previews the locally built production app.

#### 2. Components & JSX
* **Functional Components:** Writing modern, reusable UI pieces using standard JavaScript functions.
* **JSX Syntax:** 
  * Using `className` instead of `class`.
  * Embedding Dynamic JavaScript values using `{}` expressions.
  * Enforcing a **single root element** (or Fragment `<>...</>`).
* **Component file organization:** Strictly adhering to the "one component per file" architecture.
* **Modules:** Correctly exporting and importing modules using `export default` and `import`.

#### 3. Props & State
* **Props:** Unidirectional data flow where props are read-only and flow from **Parent → Child**.
* **useState:** Managing internal, mutable state built directly into the component.
* **Lazy Initialization:** Optimizing performance by passing a function to state: `useState(() => ...)` (ideal for heavy computations like reading from storage).
* **Functional Updates:** Preventing state-stale issues by updating based on previous state: `setTasks(prev => ...)`.

#### 4. Conditional Rendering
* **Ternary Operator:** Executing dual-outcome conditions: `condition ? A : B`.
* **Logical AND (&&):** Evaluating short-circuit inline statements when only one outcome is expected.
* **Conditional CSS:** Dynamically injecting style classes based on component states.
* **Conditional Attributes:** Managing UI accessibility, e.g., dynamically activating the `disabled` attribute.

#### 5. Composition
* **`children` Prop:** Designing layout and wrapper components that dynamically wrap custom structural content.
* **Modular Assembly:** Composing small, atomic components into larger, complex views.

#### 6. Rendering & Lists
* **Array Mapping:** Iterating and rendering lists smoothly using the `.map()` method.
* **Unique Keys:** Utilizing secure identifiers like `crypto.randomUUID()` instead of using the array `index` (which is highly discouraged as an anti-pattern).

#### 7. Lifecycle with Hooks
* **useEffect Hook:** Orchestrating side effects inside functional components.
* **Dependency Array:** Distinguishing execution flows using `[tasks]` (runs on change) vs `[]` (runs once on mount).
* **Cleanup Pattern:** Conceptual knowledge of cleaning up subscriptions or intervals to prevent memory leaks.
* **Data Persistence:** Syncing and saving active states inside `localStorage`.
* **DOM Metadata:** Programmatically updating the web page title via `document.title`.

#### 8. Refs
* **useRef Hook:** Capturing direct reference instances of physical DOM nodes.
* **Focus Control:** Automatically focusing input fields on command via `inputRef.current.focus()`.

#### 9. Events
* **Core Listeners:** Attaching DOM standard listeners like `onSubmit`, `onChange`, and `onClick`.
* **Default Prevention:** Halting native browser reload cycles during form submissions using `e.preventDefault()`.
* **Naming Conventions:** Writing event attributes strictly in `camelCase`.
* **Argument Passing:** Forwarding dynamic parameters safely inside event listeners using inline arrow functions.

#### 10. Advanced Patterns (Bonus)
* **Higher-Order Components (HOC):** Extracting common behaviors using functions that wrap components: `withLoading(Component)`.
* **Render Props:** Sharing flexible UI logic using a render function: `Toggle with render({ on, toggle })`.
* **Architectural Boundaries:** Clearly distinguishing between HOC wrappers and explicit Composition layouts.

#### 11. Data Flow
* **Lifting State Up:** Moving shared state up to the closest common ancestor (`App`) and distributing control via downwards callbacks.
* **Single Source of Truth:** Ensuring data integrity by maintaining state in one primary location.
* **Immutable Updates:** Performing non-destructive state adjustments safely utilizing `.map()`, `.filter()`, and the `...` spread operator.

---

## 🇸🇦 النسخة العربية — الموضوعات والتقنيات المستخدمة

### 📂 المختبر الأول — تطبيق مدير المهام

#### 1. الأدوات والإعداد
* **أداة CLI (Vite):** بناء واستدعاء الهيكل الأساسي للمشروع بشكل سريع.
* **الأمر المباشر:** `npm create vite@latest`
* **أوامر البرمجة لـ npm:** استخدام وإدارة خطوط الإنتاج:
  * `dev`: تشغيل خادم التطوير المحلي.
  * `build`: تجهيز حزم المشروع النهائية للرفع والإنتاج.
  * `preview`: استعراض النسخة الجاهزة للإنتاج محلياً قبل رفعها.

#### 2. المكونات و JSX
* **المكونات الوظيفية (Functional Components):** كتابة واجهات مستخدم معاصرة وقابلة لإعادة الاستخدام عبر الديدان البرمجية القياسية.
* **صيغة JSX وعناصرها:**
  * استخدام الخاصية `className` بدلاً من `class`.
  * تضمين التعابير البرمجية المتغيرة باستخدام الأقواس المجعدة `{}`.
  * الالتزام بوجود **عنصر أب واحد مستند** (أو مجرد Fragment `<>...</>`).
* **تنظيم ملفات المكونات:** عزل الأكواد بمرونة تامة عبر تخصيص "مكون فريد لكل ملف".
* **الوحدات البرمجية:** استيراد وتصدير المكونات بشكل صحيح باستخدام `export default` و `import`.

#### 3. الـ Props والـ State
* **الـ Props:** تمرير البيانات في اتجاه واحد من الأعلى إلى الأسفل، حيث تكون **للقراءة فقط** من (الأب ⬅️ الابن).
* **دالة useState:** تهيئة وإدارة حالة داخلية ديناميكية وقابلة للتعديل بداخل المكون نفسه.
* **التهيئة الكسولة (Lazy Initialization):** تحسين الأداء بتمرير دالة لـ useState لتنفذ لمرة واحدة فقط عند التشغيل الأول: `useState(() => ...)` (مثالية للقراءة من التخزين المحلي).
* **التحديث عبر الدالة (Functional Updates):** تفادي مشاكل البيانات القديمة بتحديث الحالة اعتماداً على النسخة السابقة مباشرة: `setTasks(prev => ...)`.

#### 4. العرض الشرطي (Conditional Rendering)
* **المعامل الثلاثي (Ternary Operator):** معالجة الشروط ثنائية الاحتمال مباشرة في الواجهة: `condition ? A : B`.
* **العامل المنطقي (&&):** عرض العناصر بشكل مختصر عندما يكون هناك احتمال واحد صحيح مطلوب التحقق منه.
* **الفئات الشرطية (Conditional CSS):** تمرير وتغيير أصناف التنسيق (CSS Classes) ديناميكياً بناءً على حالة المكون.
* **الخصائص الشرطية:** التحكم بخصائص العناصر مثل تفعيل أو تعطيل زر الإرسال عبر ميزة الخصائص الشرطية كـ `disabled`.

#### 5. التركيب (Composition)
* **خاصية `children`:** توفير مرونة عالية عبر إنشاء مكونات حاوية (مثل الـ Layout) تلف وتحتضن بداخلها مكونات أخرى.
* **تجميع الواجهات:** بناء شاشات وأنظمة متكاملة ومعقدة عن طريق تركيب قطع صغيرة مستقلة من المكونات معاً.

#### 6. العرض والقوائم
* **عرض المصفوفات:** معالجة وتوليد عناصر القوائم البرمجية المتكررة بانسيابية عبر استخدام دالة `.map()`.
* **المفاتيح الفريدة (Unique Keys):** تخصيص معرّف فريد وآمن لكل عنصر مثل استخدام `crypto.randomUUID()`، والابتعاد التام عن استخدام ترتيب المصفوفة `index` (والذي يعتبر نمطاً برمجياً سيئاً).

#### 7. دورة الحياة عبر الـ Hooks
* **دالة useEffect:** إدارة ومعالجة الآثار الجانبية (Side Effects) خارج نطاق رسم الواجهات المباشر.
* **مصفوفة الاعتماديات (Dependency Array):** التحكم بوقت تنفيذ التأثيرات بتمرير مصفوفة متغيرات مثل `[tasks]` (تنفذ عند التغيير) مقابل مصفوفة فارغة `[]` (تنفذ مرة واحدة عند تحميل المكون).
* **نمط التنظيف (Cleanup Pattern):** الفهم النظري لتنظيف المؤقتات أو إلغاء الاشتراكات لتفادي تسريب الذاكرة (Memory Leaks).
* **حفظ البيانات:** مسبار ومزامنة حالة المهام بشكل مستمر داخل التخزين المحلي للمتصفح `localStorage`.
* **عناوين المتصفح:** تحديث وتغيير عنوان الصفحة البرمجي علوياً عبر `document.title`.

#### 8. الـ Refs
* **دالة useRef:** إنشاء مرجع مباشر للوصول والتحكم في عناصر الـ DOM الحقيقية دون الحاجة لإعادة رسم المكون.
* **التركيز التلقائي:** توجيه مؤشر الكتابة مباشرة إلى حقول الإدخال عبر استخدام `inputRef.current.focus()`.

#### 9. الأحداث (Events)
* **مستمعات الأحداث الأساسية:** ربط واجهات المستخدم بالأوامر التفاعلية مثل `onSubmit` و `onChange` و `onClick`.
* **إلغاء السلوك الافتراضي:** منع المتصفح من إعادة تحميل الصفحة عند إرسال النماذج باستخدام `e.preventDefault()`.
* **صيغة الكتابة:** تسمية كافة الأحداث البرمجية في ريأكت بأسلوب التسمية السنامي `camelCase`.
* **تمرير المعاملات:** إرسال بيانات مخصصة وديناميكية داخل الدوال عند الضغط باستعمال دوال السهم (Arrow Functions).

#### 10. أنماط متقدمة (Bonus)
* **المكونات ذات الرتبة الأعلى (HOC):** تغليف المكونات داخل دوال برمجية خاصة لإضافة ميزات برمجية مشتركة وموحدة: `withLoading(Component)`.
* **خصائص العرض (Render Props):** مشاركة منطق التحكم البرمجي بين المكونات عن طريق تمرير دالة مسؤولة عن العرض: `Toggle with render({ on, toggle })`.
* **الفصل الهيكلي:** التمييز الدقيق بين التغليف البرمجي عبر الـ HOC والتغليف الهيكلي عبر الـ Composition.

#### 11. تدفق البيانات
* **رفع الحالة للأعلى (Lifting State Up):** نقل الحالة المشتركة إلى المكون الأب المشترك الأصيل (`App`) وتوزيعها عبر دوال الاستدعاء الخلفي (Callbacks) للابناء.
* **المصدر الواحد للحقيقة:** توحيد مرجعية البيانات في مكان رئيسي واحد لمنع تضارب الحالة داخل التطبيق.
* **التحديثات غير المتغيرة (Immutable Updates):** تعديل البيانات بأمان دون تغيير المصفوفة الأصلية مباشرة، وذلك عبر استخدام طرق التوليد النظيفة كـ `.map()` و `.filter()` وعامل النشر التفكيكي `...`.
