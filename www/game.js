let money = 0;

let clickValue = 1;
let incomePerSecond = 0;

let level = 1;
let xp = 0;
let xpNeeded = 100;

let companies = 1;
let employees = 0;

let officeLevel = 1;

let clickUpgradeCost = 50;
let incomeUpgradeCost = 100;
let officeUpgradeCost = 1000;

let secretaryName = "";

let selectedCompany = "";
let currentContract = null;

let selectedField = "";

let mapZoom = 1;

let ownedProperties = [];

let resources = {
    sheep: 0,
    meat: 0,
    milk: 0,
    leather: 0,
    crops: 0,
    products: 0,
    factories: 0
};


/* =========================
   المجالات
========================= */

const fields = {

    ranching: {
        name: "الرعي",
        icon: "🐑",

        employees: [
            "راعي",
            "طبيب بيطري",
            "عامل مزارع"
        ],

        resources: [
            ["🐑", "الأغنام", "sheep"],
            ["🥩", "اللحوم", "meat"],
            ["🥛", "الألبان", "milk"],
            ["👜", "الجلود", "leather"]
        ]
    },

    agriculture: {
        name: "الزراعة",
        icon: "🌾",

        employees: [
            "مزارع",
            "مهندس زراعي",
            "عامل ري"
        ],

        resources: [
            ["🌾", "المحاصيل", "crops"],
            ["🥬", "الخضروات", "products"],
            ["🍎", "الفواكه", "products"]
        ]
    },

    industry: {
        name: "الصناعة",
        icon: "🏭",

        employees: [
            "مهندس إنتاج",
            "فني",
            "عامل مصنع"
        ],

        resources: [
            ["🏭", "المصانع", "factories"],
            ["📦", "المنتجات", "products"]
        ]
    },

    technology: {
        name: "التكنولوجيا",
        icon: "💻",

        employees: [
            "مبرمج",
            "مهندس برمجيات",
            "مسؤول تسويق"
        ],

        resources: [
            ["💻", "المنتجات الرقمية", "products"],
            ["📱", "التطبيقات", "products"]
        ]
    }

};


/* =========================
   المنتجات
========================= */

const products = {

    realestate: [

        {
            name: "شقة",
            price: 50000,
            icon: "🏠",
            effect: "تزيد دخلك"
        },

        {
            name: "مكتب",
            price: 120000,
            icon: "🏢",
            effect: "يزيد مستوى الإدارة"
        },

        {
            name: "مصنع",
            price: 500000,
            icon: "🏭",
            effect: "يزيد الإنتاج"
        },

        {
            name: "مقر فاخر",
            price: 1000000,
            icon: "🏙️",
            effect: "يزيد النفوذ"
        }

    ],

    employees: [

        {
            name: "موظف",
            price: 2000,
            icon: "👨‍💼",
            effect: "يزيد الدخل التلقائي"
        },

        {
            name: "مدير",
            price: 10000,
            icon: "🧑‍💼",
            effect: "يزيد كفاءة الموظفين"
        },

        {
            name: "حارس",
            price: 5000,
            icon: "🛡️",
            effect: "يقلل الخطر"
        },

        {
            name: "مبرمج",
            price: 15000,
            icon: "💻",
            effect: "متخصص في مجال التكنولوجيا"
        },

        {
            name: "مسوق",
            price: 12000,
            icon: "📢",
            effect: "يزيد المبيعات"
        },

        {
            name: "مهندس",
            price: 20000,
            icon: "👷",
            effect: "متخصص في الصناعة"
        },

        {
            name: "مزارع",
            price: 5000,
            icon: "👨‍🌾",
            effect: "متخصص في الزراعة"
        },

        {
            name: "راعي",
            price: 4500,
            icon: "🐑",
            effect: "متخصص في الرعي"
        }

    ],

    companies: [

        {
            name: "شركة ناشئة",
            price: 1000000,
            icon: "🏢",
            effect: "تضيف شركة جديدة"
        },

        {
            name: "شركة متوسطة",
            price: 10000000,
            icon: "🏙️",
            effect: "تضيف شركة ودخلًا"
        },

        {
            name: "شركة ضخمة",
            price: 100000000,
            icon: "🌐",
            effect: "نفوذ اقتصادي ضخم"
        }

    ]

};


/* =========================
   الشركات
========================= */

const nearbyCompanies = [

    {
        name: "شركة النيل للتجارة",
        wealth: "15M $",
        risk: "منخفضة",
        type: "تجارة"
    },

    {
        name: "المتحدة للصناعة",
        wealth: "42M $",
        risk: "متوسطة",
        type: "صناعة"
    },

    {
        name: "أفق للاستثمار",
        wealth: "80M $",
        risk: "مرتفعة",
        type: "استثمار"
    }

];


const worldCompanies = [

    {
        name: "Global Industries",
        wealth: "2.4B $",
        risk: "مرتفعة",
        type: "صناعة"
    },

    {
        name: "World Finance",
        wealth: "7.8B $",
        risk: "مرتفعة جدًا",
        type: "تمويل"
    },

    {
        name: "Nova Technologies",
        wealth: "12B $",
        risk: "حرجة",
        type: "تكنولوجيا"
    }

];


/* =========================
   عناصر HTML
========================= */

const moneyElement =
    document.getElementById("money");

const levelElement =
    document.getElementById("level");

const xpElement =
    document.getElementById("xp");

const xpNeededElement =
    document.getElementById("xpNeeded");

const clickValueElement =
    document.getElementById("clickValue");

const incomeElement =
    document.getElementById("income");

const companiesElement =
    document.getElementById("companies");

const employeesElement =
    document.getElementById("employees");

const tapButton =
    document.getElementById("tapButton");

const upgradeClickButton =
    document.getElementById("upgradeClick");

const upgradeIncomeButton =
    document.getElementById("upgradeIncome");


/* =========================
   تحديث الواجهة
========================= */

function updateUI() {

    moneyElement.textContent =
        Math.floor(money).toLocaleString();

    levelElement.textContent =
        `المستوى ${level}`;

    xpElement.textContent =
        Math.floor(xp);

    xpNeededElement.textContent =
        xpNeeded;

    clickValueElement.textContent =
        clickValue.toLocaleString();

    incomeElement.textContent =
        Math.floor(incomePerSecond).toLocaleString();

    companiesElement.textContent =
        companies;

    employeesElement.textContent =
        employees;


    upgradeClickButton.textContent =
        `تطوير $${clickUpgradeCost.toLocaleString()}`;


    upgradeIncomeButton.textContent =
        `تطوير $${incomeUpgradeCost.toLocaleString()}`;


    document.getElementById(
        "officeLevel"
    ).textContent =
        officeLevel;


    document.getElementById(
        "secretaryName"
    ).textContent =
        secretaryName || "غير محدد";


    document.getElementById(
        "fieldName"
    ).textContent =
        selectedField
            ? fields[selectedField].name
            : "غير محدد";


    document.getElementById(
        "currentField"
    ).textContent =
        selectedField
            ? `${fields[selectedField].icon} ${fields[selectedField].name}`
            : "لم يتم اختيار مجال.";


    document.getElementById(
        "profitIncome"
    ).textContent =
        Math.floor(incomePerSecond).toLocaleString();


    document.getElementById(
        "profitLoss"
    ).textContent =
        "0";


    document.getElementById(
        "netProfit"
    ).textContent =
        `+$${Math.floor(incomePerSecond).toLocaleString()}/ث`;


    renderResources();

    renderOwnedBuildings();

}


/* =========================
   XP
========================= */

function addXP(amount) {

    xp += amount;

    while (xp >= xpNeeded) {

        xp -= xpNeeded;

        level++;

        xpNeeded =
            Math.floor(
                xpNeeded * 1.35
            );

        money +=
            level * 10;

        secretaryMessage(
            `وصلت إلى المستوى ${level} وحصلت على مكافأة.`
        );

    }

}


/* =========================
   الضغط
========================= */

tapButton.addEventListener(
    "click",
    function () {

        money += clickValue;

        addXP(2);

        gameSound("click");

        updateUI();

        saveGame();

    }
);


/* =========================
   تطوير قيمة الضغطة
========================= */

upgradeClickButton.addEventListener(
    "click",
    function () {

        if (money < clickUpgradeCost) {

            gameSound("error");

            alert(
                "فلوسك مش مكفية."
            );

            return;
        }


        money -= clickUpgradeCost;


        if (clickValue === 1) {

            clickValue = 5;

        } else {

            clickValue += 5;

        }


        clickUpgradeCost =
            Math.floor(
                clickUpgradeCost * 1.6
            );


        gameSound("upgrade");

        updateUI();

        saveGame();

    }
);


/* =========================
   تطوير الموظفين
========================= */

upgradeIncomeButton.addEventListener(
    "click",
    function () {

        if (money < incomeUpgradeCost) {

            gameSound("error");

            alert(
                "فلوسك مش مكفية."
            );

            return;
        }


        money -= incomeUpgradeCost;

        incomePerSecond += 2;

        employees++;


        if (selectedField) {

            produceResources(1);

        }


        incomeUpgradeCost =
            Math.floor(
                incomeUpgradeCost * 1.7
            );


        gameSound("upgrade");

        updateUI();

        saveGame();

    }
);


/* =========================
   الإنتاج
========================= */

function produceResources(amount) {

    if (!selectedField) {
        return;
    }


    if (selectedField === "ranching") {

        resources.sheep +=
            amount * 2;

        resources.meat +=
            amount;

        resources.milk +=
            amount;

        resources.leather +=
            Math.floor(amount / 2);

    }


    if (selectedField === "agriculture") {

        resources.crops +=
            amount * 3;

        resources.products +=
            amount;

    }


    if (selectedField === "industry") {

        resources.factories +=
            amount;

        resources.products +=
            amount * 2;

    }


    if (selectedField === "technology") {

        resources.products +=
            amount * 3;

    }

}


/* =========================
   الدخل التلقائي
========================= */

setInterval(
    function () {

        if (incomePerSecond > 0) {

            money +=
                incomePerSecond;


            produceResources(
                Math.max(
                    1,
                    Math.floor(
                        incomePerSecond / 10
                    )
                )
            );


            addXP(
                Math.max(
                    1,
                    Math.floor(
                        incomePerSecond / 10
                    )
                )
            );


            updateUI();

        }

    },
    1000
);


/* =========================
   الصفحات
========================= */

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(
            p =>
                p.classList.remove("active")
        );


    const element =
        document.getElementById(page);


    if (element) {

        element.classList.add("active");

    }


    if (page === "store") {

        storeCategory("realestate");

    }


    if (page === "companiesPage") {

        companyType("near");

    }


    if (page === "profits") {

        renderResources();

    }

}


/* =========================
   المتجر
========================= */

function storeCategory(category) {

    const container =
        document.getElementById(
            "products"
        );


    container.innerHTML = "";


    products[category].forEach(
        (item, index) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "card";


            card.innerHTML = `

                <div class="image">
                    ${item.icon}
                </div>

                <h3>
                    ${item.name}
                </h3>

                <div class="price">
                    ${item.price.toLocaleString()} $
                </div>

                <p>
                    ${item.effect}
                </p>

                <br>

                <button
                    class="buy"
                    onclick="buyProduct('${category}', ${index})">

                    شراء

                </button>
            `;


            container.appendChild(card);

        }
    );

}


/* =========================
   شراء
========================= */

function buyProduct(category, index) {

    const item =
        products[category][index];


    if (money < item.price) {

        gameSound("error");

        alert(
            "فلوسك مش مكفية."
        );

        return;
    }


    money -= item.price;


    if (category === "employees") {

        if (
            item.name === "مبرمج" &&
            selectedField !== "technology"
        ) {

            alert(
                "المبرمج متخصص في مجال التكنولوجيا."
            );

            money += item.price;

            return;
        }


        if (
            item.name === "مزارع" &&
            selectedField !== "agriculture"
        ) {

            alert(
                "المزارع متخصص في مجال الزراعة."
            );

            money += item.price;

            return;
        }


        if (
            item.name === "راعي" &&
            selectedField !== "ranching"
        ) {

            alert(
                "الراعي متخصص في مجال الرعي."
            );

            money += item.price;

            return;
        }


        if (
            item.name === "مهندس" &&
            selectedField !== "industry"
        ) {

            alert(
                "المهندس متخصص في مجال الصناعة."
            );

            money += item.price;

            return;
        }


        employees++;


        incomePerSecond +=
            item.name === "مدير"
                ? 5
                : item.name === "مبرمج"
                    ? 8
                    : item.name === "مسوق"
                        ? 6
                        : 2;

    }


    if (category === "companies") {

        companies++;

        incomePerSecond += 10;

    }


    if (category === "realestate") {

        ownedProperties.push({
            name: item.name,
            icon: item.icon
        });


        if (item.name === "شقة") {

            incomePerSecond += 1;

        }


        if (item.name === "مصنع") {

            incomePerSecond += 10;

            resources.factories++;

        }


        if (item.name === "مكتب") {

            officeLevel++;

        }

    }


    addNews(
        `تم شراء ${item.name}.`
    );


    gameSound("buy");

    updateUI();

    saveGame();

}


/* =========================
   الشركات
========================= */

function companyType(type) {

    const list =
        type === "near"
            ? nearbyCompanies
            : worldCompanies;


    const container =
        document.getElementById(
            "companyList"
        );


    container.innerHTML = "";


    list.forEach(company => {

        const div =
            document.createElement(
                "div"
            );


        div.className =
            "company";


        const action =
            level >= 10

                ? `<button
                    class="buy"
                    onclick="requestAlliance('${company.name}')">

                    طلب تحالف

                   </button>`

                : `<p>
                    ستتاح التحالفات من المستوى 10.
                   </p>`;


        div.innerHTML = `

            <h3>
                🏢 ${company.name}
            </h3>

            <p>
                المجال:
                ${company.type}
            </p>

            <p class="wealth">
                الثروة:
                ${company.wealth}
            </p>

            <p class="risk">
                مستوى الخطورة عليك:
                ${company.risk}
            </p>

            <br>

            ${action}

        `;


        container.appendChild(div);

    });

}


/* =========================
   التحالف
========================= */

function requestAlliance(companyName) {

    selectedCompany =
        companyName;


    addNews(
        `تم إرسال طلب تحالف إلى ${companyName}.`
    );


    secretaryMessage(
        `تم إرسال طلب التحالف إلى ${companyName}. هنستنى رد الشركة.`
    );


    setTimeout(
        function () {

            generateContract(
                companyName
            );

        },
        2500
    );


    saveGame();

}


/* =========================
   العقد
========================= */

function generateContract(companyName) {

    let contract;


    if (
        companyName === "شركة النيل للتجارة"
        &&
        selectedField === "ranching"
    ) {

        contract = {

            company: companyName,

            title:
                "عقد توريد اللحوم",

            text: `

                <strong>
                    الشركة:
                </strong>
                شركة النيل للتجارة

                <br><br>

                <strong>
                    الشروط:
                </strong>

                <br>

                تلتزم إمبراطوريتك بتوريد
                <strong>
                    10,000 كجم من اللحوم
                </strong>.

                <br><br>

                تدفع شركة النيل مبلغ
                <strong>
                    100,000$
                </strong>
                مقابل الكمية كاملة.

                <br><br>

                يتم تنفيذ العقد عند قبولك.

            `,

            reward: 100000,

            resource: "meat",

            amount: 10000

        };

    } else {

        contract = {

            company: companyName,

            title:
                "عقد تجاري",

            text: `

                <strong>
                    الشركة:
                </strong>
                ${companyName}

                <br><br>

                ترغب الشركة في التعاون مع إمبراطوريتك
                وشراء منتجات من مجال

                <strong>

                    ${
                        selectedField
                            ? fields[selectedField].name
                            : "مجالك الحالي"
                    }

                </strong>.

                <br><br>

                قيمة الصفقة:
                <strong>
                    100,000$
                </strong>.

                <br><br>

                يتم تنفيذ الصفقة بعد توقيع العقد.

            `,

            reward: 100000,

            resource: "products",

            amount: 100

        };

    }


    currentContract =
        contract;


    document.getElementById(
        "contractTitle"
    ).textContent =
        contract.title;


    document.getElementById(
        "contractText"
    ).innerHTML =
        `<div class="contract-text">
            ${contract.text}
         </div>`;


    showPage(
        "contractPage"
    );


    secretaryMessage(
        `وصل رد من ${companyName}. بعتولنا عقد للمراجعة والتوقيع.`
    );


    gameSound("notification");

    saveGame();

}


/* =========================
   قبول العقد
========================= */

function acceptContract() {

    if (!currentContract) {
        return;
    }


    const contract =
        currentContract;


    if (
        resources[contract.resource]
        <
        contract.amount
    ) {

        gameSound("error");

        alert(
            `الإنتاج غير كافي لتنفيذ العقد. مطلوب ${contract.amount.toLocaleString()} من المورد المطلوب.`
        );

        return;
    }


    resources[contract.resource] -=
        contract.amount;


    money +=
        contract.reward;


    companies++;


    addNews(
        `تم تنفيذ عقد ${contract.company} وحصلت على $${contract.reward.toLocaleString()}.`
    );


    secretaryMessage(
        `العقد مع ${contract.company} اتنفذ بنجاح. دخل الإمبراطورية زاد.`
    );


    currentContract =
        null;


    gameSound("notification");


    showPage(
        "profits"
    );


    updateUI();

    saveGame();

}


/* =========================
   رفض العقد
========================= */

function rejectContract() {

    if (!currentContract) {
        return;
    }


    addNews(
        `تم رفض عقد ${currentContract.company}.`
    );


    secretaryMessage(
        `رفضنا عقد ${currentContract.company}.`
    );


    currentContract =
        null;


    gameSound("notification");


    showPage(
        "companiesPage"
    );


    saveGame();

}


/* =========================
   السكرتير
========================= */

function setSecretary() {

    const input =
        document.getElementById(
            "secretaryInput"
        );


    const name =
        input.value.trim();


    if (!name) {
        return;
    }


    secretaryName =
        name;


    addNews(
        `تم تعيين ${secretaryName} كسكرتير.`
    );


    secretaryMessage(
        `تم تعييني رسميًا. أنا ${secretaryName}.`
    );


    updateUI();

    saveGame();

}


/* =========================
   كلام السكرتير
========================= */

function talkToSecretary() {

    const input =
        document.getElementById(
            "secretaryChatInput"
        );


    const message =
        input.value
            .trim()
            .toLowerCase();


    if (!message) {
        return;
    }


    secretaryMessage(
        `أنت: ${input.value}`
    );


    let reply = "";


    if (
        message.includes("خبر")
        ||
        message.includes("اخبار")
        ||
        message.includes("أخبار")
    ) {

        reply =
            news.length
                ? `آخر الأخبار: ${news[0]}`
                : "مفيش أخبار جديدة حاليًا.";

    }


    else if (
        message.includes("فلوس")
        ||
        message.includes("مال")
    ) {

        reply =
            `الخزينة فيها ${Math.floor(money).toLocaleString()}$.`;

    }


    else if (
        message.includes("شركة")
        ||
        message.includes("شركات")
    ) {

        reply =
            `عندنا حاليًا ${companies} شركة.`;

    }


    else if (
        message.includes("موظف")
        ||
        message.includes("موظفين")
    ) {

        reply =
            `عندنا ${employees} موظف، والدخل ${incomePerSecond}$ في الثانية.`;

    }


    else if (
        message.includes("مجال")
    ) {

        reply =
            selectedField
                ? `مجالنا الحالي هو ${fields[selectedField].name}.`
                : "لسه مفيش مجال متحدد.";

    }


    else if (
        message.includes("انتاج")
        ||
        message.includes("إنتاج")
        ||
        message.includes("منتج")
    ) {

        reply =
            "هعرضلك الإنتاج الحالي في زرار الأرباح.";

    }


    else if (
        message.includes("تحالف")
    ) {

        reply =
            "من قسم الشركات تقدر تبعت طلب تحالف، والشركة هترد بعقد.";

    }


    else {

        reply =
            "أقدر أساعدك في الأخبار، الفلوس، الشركات، الموظفين، الإنتاج، المجال والتحالفات.";

    }


    setTimeout(
        function () {

            secretaryMessage(
                `${secretaryName || "السكرتير"}: ${reply}`
            );

        },
        400
    );


    input.value = "";

}


/* =========================
   الأخبار
========================= */

let news = [];


function addNews(text) {

    const time =
        new Date().toLocaleTimeString(
            "ar-EG",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    news.unshift(
        `${time} - ${text}`
    );


    news =
        news.slice(0, 30);

}


/* =========================
   اختيار المجال
========================= */

function openFieldSelector() {

    showPage(
        "fieldPage"
    );


    const container =
        document.getElementById(
            "fieldList"
        );


    container.innerHTML = "";


    Object.keys(fields).forEach(
        key => {

            const field =
                fields[key];


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "field-option";


            const price =
                selectedField
                    ? "2,000,000$"
                    : "مجاني عند البداية";


            div.innerHTML = `

                <h3>
                    ${field.icon}
                    ${field.name}
                </h3>

                <p>
                    الموظفون الأساسيون:
                    ${field.employees.join("، ")}
                </p>

                <button
                    class="upgrade-button"
                    onclick="selectField('${key}')">

                    اختيار -
                    ${price}

                </button>

            `;


            container.appendChild(div);

        }
    );

}


function selectField(fieldKey) {

    if (selectedField === fieldKey) {

        alert(
            "أنت بالفعل تعمل في هذا المجال."
        );

        return;
    }


    if (selectedField) {

        if (money < 2000000) {

            alert(
                "تغيير المجال مقابل 2,000,000$."
            );

            return;
        }


        money -=
            2000000;

    }


    selectedField =
        fieldKey;


    secretaryMessage(
        `تم اختيار مجال ${fields[fieldKey].name}.`
    );


    addNews(
        `تم اختيار مجال ${fields[fieldKey].name}.`
    );


    updateUI();

    saveGame();


    showPage(
        "home"
    );

}


/* =========================
   الموارد
========================= */

function renderResources() {

    const container =
        document.getElementById(
            "resourceList"
        );


    container.innerHTML = "";


    if (!selectedField) {

        container.innerHTML =
            `<div class="notice">
                اختر مجالك أولًا لعرض منتجاته.
             </div>`;

        return;
    }


    fields[selectedField].resources
        .forEach(item => {

            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "resource-row";


            row.innerHTML = `

                <span>
                    ${item[0]}
                    ${item[1]}
                </span>

                <strong>
                    ${(resources[item[2]] || 0).toLocaleString()}
                </strong>

            `;


            container.appendChild(row);

        });

}


/* =========================
   المباني
========================= */

function renderOwnedBuildings() {

    const container =
        document.getElementById(
            "ownedBuildings"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    const positions = [

        [35, 250],
        [120, 310],
        [250, 280],
        [180, 100],
        [330, 160],
        [70, 150]

    ];


    ownedProperties.forEach(
        (property, index) => {

            const building =
                document.createElement(
                    "div"
                );


            building.className =
                "owned-building";


            building.textContent =
                property.icon;


            const pos =
                positions[
                    index %
                    positions.length
                ];


            building.style.left =
                pos[0] + "px";


            building.style.top =
                pos[1] + "px";


            container.appendChild(
                building
            );

        }
    );

}


/* =========================
   زوم
========================= */

function zoomMap(amount) {

    mapZoom +=
        amount * 0.1;


    if (mapZoom < 0.8) {
        mapZoom = 0.8;
    }


    if (mapZoom > 1.6) {
        mapZoom = 1.6;
    }


    document.querySelector(
        ".map"
    ).style.transform =
        `scale(${mapZoom})`;

}


/* =========================
   المكتب
========================= */

document
    .getElementById("upgradeOffice")
    .addEventListener(
        "click",
        function () {

            if (money < officeUpgradeCost) {

                gameSound("error");

                alert(
                    "فلوسك مش مكفية."
                );

                return;
            }


            money -=
                officeUpgradeCost;


            officeLevel++;


            officeUpgradeCost =
                Math.floor(
                    officeUpgradeCost * 2
                );


            incomePerSecond += 5;


            addNews(
                `تم تطوير المكتب إلى المستوى ${officeLevel}.`
            );


            gameSound("upgrade");


            updateUI();

            saveGame();

        }
    );


/* =========================
   الحفظ
========================= */

function saveGame() {

    const data = {

        money,

        clickValue,

        incomePerSecond,

        level,

        xp,

        xpNeeded,

        companies,

        employees,

        officeLevel,

        clickUpgradeCost,

        incomeUpgradeCost,

        officeUpgradeCost,

        secretaryName,

        news,

        selectedField,

        resources,

        ownedProperties

    };


    localStorage.setItem(
        "tapEmpireSave",
        JSON.stringify(data)
    );

}


/* =========================
   التحميل
========================= */

function loadGame() {

    const saved =
        localStorage.getItem(
            "tapEmpireSave"
        );


    if (!saved) {
        return;
    }


    try {

        const data =
            JSON.parse(saved);


        money =
            data.money ?? money;


        clickValue =
            data.clickValue ?? clickValue;


        incomePerSecond =
            data.incomePerSecond ??
            incomePerSecond;


        level =
            data.level ?? level;


        xp =
            data.xp ?? xp;


        xpNeeded =
            data.xpNeeded ?? xpNeeded;


        companies =
            data.companies ?? companies;


        employees =
            data.employees ?? employees;


        officeLevel =
            data.officeLevel ??
            officeLevel;


        clickUpgradeCost =
            data.clickUpgradeCost ??
            clickUpgradeCost;


        incomeUpgradeCost =
            data.incomeUpgradeCost ??
            incomeUpgradeCost;


        officeUpgradeCost =
            data.officeUpgradeCost ??
            officeUpgradeCost;


        secretaryName =
            data.secretaryName ??
            secretaryName;


        news =
            data.news ?? news;


        selectedField =
            data.selectedField ??
            selectedField;


        resources =
            data.resources ??
            resources;


        ownedProperties =
            data.ownedProperties ??
            ownedProperties;


    } catch (error) {

        console.log(
            "تعذر تحميل الحفظ",
            error
        );

    }

}


/* =========================
   نظام الصوت
========================= */

let audioEnabled = true;

let audioContext = null;

let musicTimer = null;


function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }


    if (
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();

    }


    return audioContext;

}


function gameSound(type) {

    if (!audioEnabled) {
        return;
    }


    const ctx =
        getAudioContext();


    const oscillator =
        ctx.createOscillator();


    const gain =
        ctx.createGain();


    oscillator.connect(gain);

    gain.connect(
        ctx.destination
    );


    let frequency = 500;

    let duration = 0.08;


    if (type === "click") {

        frequency = 650;
        duration = 0.05;

    }


    if (type === "buy") {

        frequency = 800;
        duration = 0.12;

    }


    if (type === "upgrade") {

        frequency = 1000;
        duration = 0.18;

    }


    if (type === "error") {

        frequency = 180;
        duration = 0.18;

    }


    if (type === "notification") {

        frequency = 700;
        duration = 0.15;

    }


    oscillator.frequency.value =
        frequency;


    oscillator.type =
        "sine";


    gain.gain.setValueAtTime(
        0.08,
        ctx.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + duration
    );


    oscillator.start();


    oscillator.stop(
        ctx.currentTime + duration
    );

}


/* =========================
   الموسيقى
========================= */

function startBackgroundMusic() {

    if (
        !audioEnabled ||
        musicTimer
    ) {
        return;
    }


    const ctx =
        getAudioContext();


    const notes = [

        261.63,
        329.63,
        392.00,
        329.63,
        293.66,
        349.23,
        440.00,
        349.23

    ];


    let index = 0;


    function playNote() {

        if (!audioEnabled) {
            return;
        }


        const oscillator =
            ctx.createOscillator();


        const gain =
            ctx.createGain();


        oscillator.connect(gain);

        gain.connect(
            ctx.destination
        );


        oscillator.frequency.value =
            notes[index];


        oscillator.type =
            "sine";


        gain.gain.setValueAtTime(
            0.018,
            ctx.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            0.001,
            ctx.currentTime + 0.45
        );


        oscillator.start();


        oscillator.stop(
            ctx.currentTime + 0.45
        );


        index++;


        if (
            index >= notes.length
        ) {

            index = 0;

        }

    }


    playNote();


    musicTimer =
        setInterval(
            playNote,
            550
        );

}


function stopBackgroundMusic() {

    if (musicTimer) {

        clearInterval(
            musicTimer
        );

        musicTimer = null;

    }

}


function toggleGameAudio() {

    audioEnabled =
        !audioEnabled;


    if (audioEnabled) {

        startBackgroundMusic();

        gameSound(
            "notification"
        );

    } else {

        stopBackgroundMusic();

    }

}


/* =========================
   صوت السكرتير
========================= */

const originalSecretaryMessage =
    secretaryMessage;


secretaryMessage = function(text) {

    originalSecretaryMessage(text);


    if (
        audioEnabled &&
        "speechSynthesis" in window
    ) {

        const cleanText =
            String(text)
                .replace("أنت:", "")
                .replace(
                    /<[^>]*>/g,
                    ""
                );


        const speech =
            new SpeechSynthesisUtterance(
                cleanText
            );


        speech.lang =
            "ar-EG";


        speech.rate =
            0.95;


        speech.pitch =
            1;


        speech.volume =
            0.8;


        window.speechSynthesis.cancel();


        window.speechSynthesis.speak(
            speech
        );

    }

};


/* =========================
   تشغيل اللعبة
========================= */

loadGame();

updateUI();

storeCategory(
    "realestate"
);

companyType(
    "near"
);


/* =========================
   شاشة البداية
========================= */

const introScreen =
    document.getElementById(
        "introScreen"
    );


const startGameButton =
    document.getElementById(
        "startGameButton"
    );


if (startGameButton) {

    startGameButton.addEventListener(
        "click",
        function () {

            introScreen.classList.add(
                "hidden"
            );


            gameSound(
                "notification"
            );


            startBackgroundMusic();

        }
    );

}


/* =========================
   أول تشغيل
========================= */

if (!selectedField) {

    setTimeout(
        function () {

            openFieldSelector();

        },
        300
    );

}


/* =========================
   حفظ تلقائي
========================= */

setInterval(
    saveGame,
    5000
);


window.addEventListener(
    "beforeunload",
    saveGame
);
