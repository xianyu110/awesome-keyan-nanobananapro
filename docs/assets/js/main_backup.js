// 图片数据
const galleryData = [
    // 机制图解
    {
        id: 1,
        title: "外泌体生物发生和分子组成",
        category: "mechanism",
        categoryName: "机制图解",
        image: "https://tycloud-eos-beijing-1.dftianyi.com/upload/20251126/3e17d909f1aada739245f12c11dc3125.png",
        prompt: `创建一个全面的细胞生物学插图，展示外泌体的生物发生和分子组成，采用现代分子生物学期刊风格。

整体布局：多面板设计，包含完整的细胞横截面（左）和详细的分子成分（右），专业细胞生物学教科书格式

细胞结构（左图）：粉色细胞 (#F8BBD0) 显示完整的外泌体生物合成途径：
- 蓝色细胞核 (#4169E1)，带有核膜和染色质
- 蓝色高尔基体，带有堆叠的池
- 绿色溶酶体 (#32CD32)，带有内部囊泡
- 早期内体向多囊泡体 (MVB) 转变
- 晚期多囊泡体 (MVB)，带有多个腔内囊泡
- 清晰的膜出芽和与质膜的融合

外泌体生物合成途径：逐步可视化过程：
- 内吞作用和早期内体形成
- 进行性膜内陷，在 MVB 内形成 ILV
- MVB 成熟及货物分选
- MVB 运输到质膜
- 膜融合���外泌体释放到细胞外

外泌体结构（右上）：详细的横截面视图，显示：
- 脂质双层膜，具有真实的磷脂排列
- 表面蛋白：CD9、CD63、CD81 四跨膜蛋白复合物
- 内部货物：蛋白质复合物、核酸、代谢物
- 粒径范围：30-150nm

分子组成图例（右侧）：颜色编码的分子标记：
- 蓝色膜蛋白：CD9、CD63、CD81 受体
- 橙色蛋白质：Alix、TSG101、HSP70
- 绿色 DNA 和 RNA 链
- 红色代谢物点
- 黄色氨基酸
- 紫色整合素复合物`
    },
    {
        id: 2,
        title: "GDF3在脓毒症中的免疫调节机制",
        category: "mechanism",
        categoryName: "机制图解",
        image: "https://tycloud-eos-beijing-1.dftianyi.com/upload/20251126/58c89c2ecd464ea1e70c9accc4f00118.png",
        prompt: `Macrophages are critical for regulation of inflammatory response during endotoxemia and septic shock. However, the mediators underlying their regulatory function remain obscure. Growth differentiation factor 3 (GDF3), a member of transforming growth factor beta (TGF-β) superfamily, has been implicated in inflammatory response. Nonetheless, the role of GDF3 in macrophage-regulated endotoxemia/sepsis is unknown. Here, we show that serum GDF3 levels in septic patients are elevated and strongly correlate with severity of sepsis and 28-day mortality. Interestingly, macrophages treated with recombinant GDF3 protein (rGDF3) exhibit greatly reduced production of pro-inflammatory cytokines, comparing to controls upon endotoxin challenge. Moreover, acute administration of rGDF3 to endotoxin-treated mice suppresses macrophage infiltration to the heart, attenuates systemic and cardiac inflammation with less pro-inflammatory macrophages (M1) and more anti-inflammatory macrophages (M2), as well as prolongs mouse survival. Mechanistically, GDF3 is able to activate Smad2/Smad3 phosphorylation, and consequently inhibits the expression of nod-like receptor protein-3 (NLRP3) in macrophages. Accordingly, blockade of Smad2/Smad3 phosphorylation with SB431542 significantly offsets rGDF3-mediated anti-inflammatory effects. Taken together, this study uncovers that GDF3, as a novel sepsis-associated factor, may have a dual role in the pathophysiology of sepsis. Acute administration of rGDF3 into endotoxic shock mice could increase survival outcome and improve cardiac function through anti-inflammatory response by suppression of M1 macrophage phenotype. However, constitutive high levels of GDF3 in human sepsis patients are associated with lethality, suggesting that GDF3 may promote macrophage polarization toward M2 phenotype which could lead to immunosuppression.`
    },
    {
        id: 3,
        title: "Smad3在脓毒性休克中的作用",
        category: "mechanism",
        categoryName: "机制图解",
        image: "https://tycloud-eos-beijing-1.dftianyi.com/upload/20251126/9acd5ad400439246e51aa621071bd50b.png",
        prompt: `Background: Smad3 is a principal intracellular mediator of signaling for transforming growth factor β, a cytokine involved in pleiotropic pathophysiological processes including inflammation and immunity. The function of Smad3 in regulating inducible nitric oxide synthase (iNOS) expression and septic shock has not been characterized. Methods: Smad3(-/-) (referred hereafter as KO) and wild-type (WT) mice were injected intraperitoneally with lipopolysaccharide (LPS) to induce the septic hypotension. Mortality, blood pressure, and plasma levels of nitrite were measured. The iNOS messenger RNA and protein levels in lung, kidney, and spleen were also analyzed. Results: Mice lacking functional Smad3 respond to LPS with greater mortality than their WT littermates. The high mortality of KO mice is accompanied by enhanced hypotension after intraperitoneal injection of LPS. Both KO and WT mice displayed an increase in plasma nitrite during the experimental period; however, LPS administration caused more dramatic changes in KO mice than WT mice. Likewise, the iNOS messenger RNA and protein levels in lung, kidney, and spleen were more strongly increased in KO mice than in WT mice after LPS administration. Conclusions: Defects in the Smad3 gene may increase susceptibility to the development of septic hypotension because of enhanced iNOS production.`
    },
    // 炎症与脓毒症
    {
        id: 4,
        title: "年龄相关性脓毒症易感性的机制",
        category: "inflammation",
        categoryName: "炎症与脓毒症",
        image: "https://tycloud-eos-beijing-1.dftianyi.com/upload/20251126/8ef4cd59457f17586a21429a1649eb48.png",
        prompt: `Age-related susceptibility to sepsis and endotoxemia is poorly defined, although hyperactivation of the immune system and the expansion of the visceral adipose as an immunological reservoir are underlying features. Macrophages from older organisms exhibit substantial changes, including chronic NLRP3 inflammasome activation, genomic remodeling and a dysfunctional, amplified inflammatory response upon new exposure to pathogen. However, the mechanisms by which old macrophages maintain their inflammatory phenotype during endotoxemia remains elusive. We previously identified Gdf3 , a TGFβ superfamily cytokine, as a top-regulated gene by age and the NLRP3 inflammasome in adipose tissue macrophages (ATMs). Here, we demonstrate that endotoxemia increases inflammatory (CD11c + ) ATMs in a Gdf3- dependent manner in old mice. Lifelong systemic or myeloid-specific deletion of Gdf3 leads to reduced endotoxemia- induced inflammation, with decreased CD11c + ATMs and inflammatory cytokines, and protection from hypothermia. Moreover, acute blockade of Gdf3 using JQ1, a BRD4 inhibitor, phenocopies old mice with lifelong Gdf3- deficiency. We show that GDF3 promotes the inflammatory phenotype in ATMs by phosphorylating SMAD2/3. Mechanistically, the differential chromatin landscape of ATMs from old mice with or without myeloid-driven Gdf3 indicates that GDF3- SMAD2/3 signaling axis shifts the chromatin accessibility of ATMs towards an inflammatory state during aging. Furthermore, pharmaceutical inhibition of SMAD3 with a specific inhibitor of SMAD3 (SIS3) mimics Gdf3 deletion. SIS3 reduces endotoxemia-mediated inflammation with fewer CD11c + ATMs and less severe hypothermia in old, but not young mice, as well as reduced mortality. In human adipose tissue, age positively correlates with GDF3 level, while inflammation correlates with pSMAD2/3 level. Overall, these results highlight the importance of GDF3-SMAD2/3 axis in driving inflammation in older organisms and identify this signaling axis as a promising therapeutic target for mitigating endotoxemia-related inflammation in the aged.`
    },
    {
        id: 5,
        title: "脓毒性心肌病的关键基因",
        category: "inflammation",
        categoryName: "炎症与脓毒症",
        image: "https://tycloud-eos-beijing-1.dftianyi.com/upload/20251126/97c2dedae55fe4f5e1a54dcbdc537bfb.png",
        prompt: `Septic cardiomyopathy is a life-threatening heart dysfunction caused by severe infection. Considering the complexity of pathogenesis and high mortality, the identification of efficient biomarkers are needed to guide clinical practice. Based on multimicroarray analysis, this study aimed to explore the pathogenesis of septic cardiomyopathy and the related immune landscape. The results showed that septic cardiomyopathy resulted in organ dysfunction due to extreme pro- and anti-inflammatory effects. In this process, KLRG1, PRF1, BCL6, GAB2, MMP9, IL1R1, JAK3, IL6ST, and SERPINE1 were identified as the hub genes regulating the immune landscape of septic cardiomyopathy. Nine transcription factors regulated the expression of these genes: SRF, STAT1, SP1, RELA, PPARG, NFKB1, PPARA, SMAD3, and STAT3. The hub genes activated the Th17 cell differentiation pathway, JAK-STAT signaling pathway, and cytokine‒cytokine receptor interaction pathway. These pathways were mainly involved in regulating the inflammatory response, adaptive immune response, leukocyte-mediated immunity, cytokine-mediated immunity, immune effector processes, myeloid cell differentiation, and T-helper cell differentiation. These nine hub genes could be considered biomarkers for the early prediction of septic cardiomyopathy.`
    },
    {
        id: 6,
        title: "DLK1在脓毒症中的心脏保护作用",
        category: "inflammation",
        categoryName: "炎症与脓毒症",
        image: "https://tycloud-eos-beijing-1.dftianyi.com/upload/20251126/52637ce771d296920db7b197f1404b06.png",
        prompt: `Sepsis is a serious inflammatory disease caused by bacterial infection. Cardiovascular dysfunction and remodeling are serious complications of sepsis, which can significantly affect sepsis patients' mortality. Delta-like homologue 1 (DLK1) has been reported could inhibit cardiac myofibroblast differentiation. However, the function of DLK1 in sepsis is unknown. In the present study, the DLK1 expression was first identified based on the online dataset GSE79962 analysis and cecal ligation and puncture (CLP)-induced sepsis mouse model. DLK1 expression was significantly reduced in septic heart tissues. In septic mouse heart, CLP operation decreased the fractional shortening (EF) (%) and ejection fraction (FS) (%) and caused significant edema, disordered myofilament arrangement, and degradation and necrosis in myocardial cells; CLP operation also increased collagen deposition and elevated the protein levels of fibrotic markers (α-SMA and F-actin). DLK1 overexpression in septic mice could effectively increase EF (%) and FS (%), attenuate CLP-caused ECM degradation and deposition and partially inhibit the CLP-induced TGF-β1/Smad signaling activation. In conclusion, DLK1 expression was poorly expressed in the CLP-induced septic mouse heart. DLK1 overexpression partially alleviated sepsis-induced cardiac dysfunction and fibrosis, with the involvement of the TGF-β1/Smad3 signaling pathway and MMPs.`
    },
    {
        id: 7,
        title: "ACSL4和Parishin在脓毒症肠损伤中的作用",
        category: "inflammation",
        categoryName: "炎症与脓毒症",
        image: "https://tycloud-eos-beijing-1.dftianyi.com/upload/20251126/9cff62b916303a8640420a23e9056368.png",
        prompt: `Background: Sepsis is a major clinical challenge, with in-hospital mortality of 25%-40% in intensive care unit patients. The gastrointestinal tract is recognized as both the "initiating organ" of multiple organ dysfunction syndrome and the "central organ" in orchestrating the host stress response during critical illness. ACSL4, a regulator of lipid metabolism and ferroptosis, is a potential target for sepsis-induced intestinal injury, but its inhibitor parishin has not been evaluated in this context. Methods: Key genes implicated in sepsis pathogenesis were identified through bioinformatic analysis of publicly available datasets from the GEO. Network pharmacology approaches were used to screen for small-molecule compounds with high binding affinity to the identified hub genes. Molecular docking, followed by in vivo and in vitro validation, was employed to evaluate the therapeutic efficacy and mechanistic impact of the top candidate compound in a murine sepsis model. Results: Weighted Gene Co-expression Network Analysis identified five genes most significantly associated with sepsis diagnosis. Protein-protein interaction network analysis revealed 157 hub genes, among which ACSL4 was the sole gene shared across diagnostic and functional modules. Molecular docking analysis indicated that Parishin exhibited the strongest binding affinity to ACSL4 (docking score: -17.701). In septic animal models, ACSL4 expression was markedly upregulated in both plasma monocytes and intestinal tissues (P < 0.05), accompanied by increased levels of inflammatory cytokines, lipid peroxidation (LPO), MDA, and Fe2+ (P < 0.05). Expression of ferroptosis-associated proteins was also evidently elevated (P < 0.05). Treatment with Parishin notably attenuated these pathological changes, reduced ferroptosis-related markers, and improved 72-hour survival rates in septic mice (P < 0.05). Conclusion: Parishin ameliorates sepsis-induced intestinal injury by downregulating ACSL4 expression, thereby inhibiting Smad3 phosphorylation and suppressing ferroptosis. These findings suggest that ACSL4 is a promising therapeutic target for mitigating intestinal damage in sepsis.`
    },
    {
        id: 8,
        title: "USP11在脓毒症相关急性肾损伤中的作用",
        category: "inflammation",
        categoryName: "炎症与脓毒症",
        image: "https://tycloud-eos-beijing-1.dftianyi.com/upload/20251126/7d96a2ed0811a12fd0062175c61cc167.png",
        prompt: `Introduction: Sepsis-associated acute kidney injury (AKI) is a common complication of sepsis, which is a severe inflammatory disease with high mortality. The TGF-β/Smad signaling pathway plays an important role in the progression of sepsis, and targeting the TGF-β receptor II (TGFBR2) has been shown to ameliorate its effects. Ubiquitin-specific peptidase 11 (USP11) stabilizes TGFBR2 and enhances the TGF-β/Smad signaling pathway. In this study, we evaluated the effects of USP11 inhibition on sepsis-associated AKI. Methods: A septic mouse model was established and treated with the USP11 inhibitor mitoxantrone. The expression of TGFBR2, phosphorylation of Smad3, as well as the levels of kidney injury markers, inflammatory cytokines, and oxidative stress markers, were measured in kidney tissues. Results: Elevated expressions of TGFBR2 and phosphorylated Smad3 were detected in the kidneys of septic mice, and mitoxantrone treatment was found to reduce the expression of TGFBR2 while suppressing the activation of Smad3. The drug also attenuated kidney injury while reducing inflammation and oxidative stress in the kidneys of septic mice. Conclusion: USP11 inhibition by mitoxantrone ameliorated sepsis-associated AKI by downregulating TGFBR2/Smad3 signaling.`
    },
    {
        id: 9,
        title: "PRMT1在脓毒症诱导急性肾损伤中的双重机制",
        category: "inflammation",
        categoryName: "炎症与脓毒症",
        image: "https://tycloud-eos-beijing-1.dftianyi.com/upload/20251126/45948da2a09f2f948e480b1b4a61b338.png",
        prompt: `Sepsis-induced acute kidney injury (SI-AKI) causes renal dysfunction and has a high mortality rate. Protein arginine methyltransferase-1 (PRMT1) is a key regulator of renal insufficiency. In the present study, we explored the potential involvement of PRMT1 in SI-AKI. A murine model of SI-AKI was induced by cecal ligation and perforation. The expression and localization of PRMT1 and molecules involved in the transforming growth factor (TGF)-β1/Smad3 and interleukin (IL)-6/signal transducer and activator of transcription 3 (STAT3) signaling pathways were detected in mouse kidney tissues by western blot analysis, immunofluorescence, and immunohistochemistry. The association of PRMT1 with downstream molecules of the TGF-β1/Smad3 and IL-6/STAT3 signaling pathways was further verified in vitro in mouse renal tubular epithelial cells. Cecal ligation and perforation caused epithelial-mesenchymal transition, apoptosis, and inflammation in renal tissues, and this was alleviated by inhibition of PRMT1. Inhibition of PRMT1 in SI-AKI mice decreased the expression of TGF-β1 and phosphorylation of Smad3 in the renal cortex, and downregulated the expression of soluble IL-6R and phosphorylation of STAT3 in the medulla. Knockdown of PRMT1 in mouse renal tubular epithelial cells restricted the expression of Cox-2, E-cadherin, Pro-caspase3, and phosphorylated Smad3 (involved in the TGF-β1-mediated signaling pathway), and also blocked IL-6/soluble IL-6R, inducing the expression of Cox-2 and phosphorylated-STAT3. In conclusion, our findings suggest that inhibition of PRMT1 mitigates SI-AKI by inactivating the TGF-β1/Smad3 pathway in the cortex and the IL-6/STAT3 pathway in the medulla. Our findings may aid in the identification of potential therapeutic target molecules for SI-AKI.`
    },
    {
        id: 10,
        title: "iPS-MSCs联合环丙沙星治疗AKI合并脓毒症综合征",
        category: "inflammation",
        categoryName: "炎症与脓毒症",
        image: "https://tycloud-eos-beijing-1.dftianyi.com/upload/20251126/78010130b76b809166dfaf6021a3e18c.png",
        prompt: `Background: This study tested whether human induced-pluripotent stem-cell-derived mesenchymal-stem-cells (iPS-MSCs) would offer an additional benefit to the rodent with acute kidney injury (AKI) (ischemia for 1 h followed by reperfusion for 120 h) associated sepsis syndrome (SS) (by cecal-ligation-puncture immediately after AKI-induction) undergoing ciprofloxacin therapy. Results: Male-adult SD rats (n = 80) were categorized into group 1 (sham-operated-control, n = 10), group 2 (AKI + SS, n = 24), group 3 (AKI + SS + ciprofloxacin/3 mg/kg, orally for 120 h, n = 12), group 4 (AKI + SS + iPS-MSCs/1.2 × 106/intravenously administered by 3 h after AKI, n = 12), group 5 (AKI + SS + iPS-MSCs/1.2 × 106/intravenously administered by 18 h after AKI, n = 12), group 6 (AKI + SS + iPS-MSCs/1.2 × 106/intravenously administered by 3 h after AKI induction + ciprofloxacin, n = 10] and euthanized by 120 h. The result showed that the mortality was significantly higher in group 2 than in other groups (all p < 0.01). The creatinine level was highest in group 2, lowest in group 1, significantly lower in group 6 than in groups 3, 4 and 5, (all p < 0.0001), but it showed no difference among the latter 3 groups. Flow cytometric analysis showed that the circulatory inflammatory cells (Ly6G/CD11b/c), early (AN-V+/PI-)/late (AN-V+/PI+) apoptosis, and circulatory/splenic immune cells (CD3+/CD4+, CD3+/CD8a+) were highest in group 2, lowest in group 1, significantly lower in group 6 than in groups 3/4/5 and significantly lower in group 4 than in groups 3/5 (all p < 0.0001), but they showed no difference between groups 3/5. Protein expressions of oxidative-stress (NOX-1/NOX2/oxidized protein), apoptotic (cleaved-caspase3/cleaved-PARP/mitochondrial-Bax), fibrotic (TGF-ß/Smad3), inflammatory (MMP-9/IL-6/TNF-α) and autophagic (Atg5/Beclin) biomarkers in kidney exhibited an identical pattern of circulatory inflammatory cells (all p < 0.0001). Conclusion: Combined iPS-MSCs-ciprofloxacin therapy was superior to either one alone for protecting AKI complicated by SS.`
    },
    // 肝脏研究
    {
        id: 11,
        title: "大承气汤对脓毒症诱导急性肝损伤的保护作用",
        category: "liver",
        categoryName: "肝脏研究",
        image: "https://tycloud-eos-beijing-1.dftianyi.com/upload/20251126/302a416c7b3918b74c1eef88659de563.png",
        prompt: `Background: Sepsis-induced acute liver injury (ALI) is a major contributor to mortality in septic patients. Exploring the pathogenesis and developing effective treatment strategies for sepsis-induced ALI is critical for improving patient outcomes. Dachengqi decoction (DCQD), which is a classic Chinese herbal medicine, has been shown to possess potent anti-inflammatory properties. However, the protective effects and underlying mechanisms of DCQD against sepsis-induced ALI remain unclear. This study aimed to investigate the protective effect of DCQD on sepsis-induced ALI and elucidate the involvement of the TGF-1β/Smad3 pathways. Methods: A septic mouse model was established using caecal ligation and puncture (CLP) to evaluate the protective effect of DCQD on sepsis-induced ALI in vivo. An in vitro cellular inflammation model was established using LPS-stimulated LO2 cells to further investigate the underlying mechanism. Results: DCQD (2.5, 5.0, and 10.0 g/kg body weight) was administered twice daily for 2 days and exerted a dose-dependent protective effect against sepsis-induced ALI. DCQD treatment significantly inhibited inappropriate inflammatory responses and oxidative stress in liver tissue. Moreover, DCQD maintained liver homeostasis by inhibiting hepatocyte apoptosis and improving sepsis-induced liver damage. In vivo and in vitro studies indicated that the TGF-β1/Smad3 signalling pathway played an important role in sepsis-induced ALI, and DCQD treatment significantly inhibited the activation of this pathway. Conclusions: DCQD can effectively suppress excessive inflammatory responses and oxidative stress, leading to a substantial reduction in hepatocyte apoptosis in sepsis-induced ALI.`
    }
];

// 全局变量
let currentFilter = 'all';
let filteredData = [...galleryData];

// DOM元素
const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('searchInput');
const loading = document.getElementById('loading');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalPrompt = document.getElementById('modalPrompt');
const closeModal = document.querySelector('.close');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    setupEventListeners();
});

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    searchInput.addEventListener('input', handleSearch);

    // 过滤按钮
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });

    // 导航链接
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // 模态框
    closeModal.addEventListener('click', closeModalHandler);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalHandler();
        }
    });
}

// 渲染画廊
function renderGallery() {
    loading.classList.remove('hidden');
    gallery.innerHTML = '';

    // 模拟异步加载
    setTimeout(() => {
        filteredData.forEach(item => {
            const galleryItem = createGalleryItem(item);
            gallery.appendChild(galleryItem);
        });
        loading.classList.add('hidden');
    }, 500);
}

// 创建画廊项目
function createGalleryItem(item) {
    const div = document.createElement('div');
    div.className = 'gallery-item fade-in';
    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="gallery-image" loading="lazy">
        <div class="gallery-content">
            <h3 class="gallery-title">${item.title}</h3>
            <span class="gallery-category">${item.categoryName}</span>
            <p class="gallery-prompt">${item.prompt.substring(0, 150)}...</p>
        </div>
    `;

    div.addEventListener('click', () => openModal(item));
    return div;
}

// 搜索功能
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === '') {
        filteredData = currentFilter === 'all'
            ? [...galleryData]
            : galleryData.filter(item => item.category === currentFilter);
    } else {
        filteredData = galleryData.filter(item =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.prompt.toLowerCase().includes(searchTerm) ||
            item.categoryName.toLowerCase().includes(searchTerm)
        );
    }

    renderGallery();
}

// 过滤功能
function handleFilter(e) {
    const filter = e.currentTarget.dataset.filter;
    currentFilter = filter;

    // 更新按钮状态
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

    // 过滤数据
    if (filter === 'all') {
        filteredData = [...galleryData];
    } else {
        filteredData = galleryData.filter(item => item.category === filter);
    }

    renderGallery();
}

// 导航点击
function handleNavClick(e) {
    e.preventDefault();
    const categoryMap = {
        'mechanism': 'mechanism',
        'inflammation': 'inflammation',
        'liver': 'liver',
        'heart': 'heart',
        'others': 'others'
    };

    const category = categoryMap[e.target.getAttribute('href').substring(1)];
    if (category) {
        // 找到对应的过滤按钮并点击
        const btn = document.querySelector(`[data-filter="${category}"]`);
        if (btn) {
            btn.click();
        }
    }
}

// 打开模态框
function openModal(item) {
    modalImage.src = item.image;
    modalTitle.textContent = item.title;
    modalCategory.textContent = item.categoryName;
    modalPrompt.textContent = item.prompt;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModalHandler() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 复制提示词
function copyPrompt() {
    const promptText = modalPrompt.textContent;

    navigator.clipboard.writeText(promptText).then(() => {
        showToast('提示词已复制到剪贴板！');
    }).catch(() => {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = promptText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('提示词已复制到剪贴板！');
    });
}

// 显示提示消息
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// 显示关于信息
function showAbout() {
    alert(`科研AI绘图图库

本网站展示了基于AI生成的高质量科研图像示例。

功能特点：
• 77张精选科研图像
• 详细的提示词参考
• 分类浏览和搜索功能
• 响应式设计

所有图片来源于科研AI绘图平台。

© 2025 科研AI绘图图库`);
}

// 图片懒加载优化
function lazyLoad() {
    const images = document.querySelectorAll('.gallery-image[loading="lazy"]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// 监听DOM变化以应用懒加载
const observer = new MutationObserver(() => {
    lazyLoad();
});

observer.observe(gallery, {
    childList: true
});